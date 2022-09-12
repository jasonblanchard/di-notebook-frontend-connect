import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { useRouter } from "next/router";
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'

import { button } from 'styles/classnames';
import useGetEntry from "queries/useGetEntry";
import useWriteToEntry from 'queries/useWriteToEntry';
import Modal, { ModalTitle } from './Modal';
import useDeleteEntry from 'queries/useDeleteEntry';
import useUndeleteEntry from 'queries/useUndeleteEntry';
import Loading from 'components/Loading';

export default function EntryEditor() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isSuccess, isError, isLoading } = useGetEntry({ id: parseInt(id as string, 10) });
    const writeToEntry = useWriteToEntry();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [text, setText] = useState('');
    const deleteEntry = useDeleteEntry();
    const undeleteEntry = useUndeleteEntry();

    useEffect(() => {
        if (isSuccess) {
            setText(data?.entry?.text);
        }
    }, [data, isSuccess]);

    useEffect(() => {
        if (deleteEntry.isSuccess) {
            setIsDeleteModalOpen(false);
        }
    }, [deleteEntry.isSuccess]);

    useEffect(() => {
        if (undeleteEntry.isSuccess) {
            undeleteEntry.reset();
            deleteEntry.reset();
        }
    }, [undeleteEntry.isSuccess]);

    const debouncedChangeHandler = useMemo(() => {
        return debounce((text) => {
            writeToEntry.mutate({ id: parseInt(id as string, 10), text });
        }, 1000, { maxWait: 10000 });
    }, [id]);

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setText(event.target.value);
        debouncedChangeHandler(event.target.value);
    }

    if (deleteEntry.isSuccess && !undeleteEntry.isSuccess) {
        return (
            <div className="flex py-12 h-full flex-col items-center lg:max-w-3xl mx-auto">
                <div className="sm:flex sm:items-center mb-4">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 sm:mx-0 sm:h-10 sm:w-10">
                        <TrashIcon className="h-6 w-6 text-neutral-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left text-neutral-700">
                        The entry has been deleted
                    </div>
                </div>
                <div>
                    <button onClick={() => undeleteEntry.mutate({ id: Number(id) })} className={button.secondary}>Undo</button>
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="flex py-12 h-full flex-col items-center lg:max-w-3xl mx-auto">
                No Found
            </div>
        );
    }

    if (isLoading) {
        return (
            <div className="flex justify-center mt-12">
                <Loading />
            </div>
        )
    }

    return (
        <div className="flex py-12 h-full flex-col lg:max-w-3xl mx-auto">
            <div className="flex mb-2 justify-between text-sm text-neutral-400">
                <div>
                    {!writeToEntry.isError && (
                        writeToEntry.isLoading ? 
                            <div className="flex items-center"><div className="rounded-full bg-yellow-400 h-3 w-3 mr-1" />Saving...</div>
                            : <div className="flex items-center"><div className="rounded-full bg-green-400 h-3 w-3 mr-1" />Saved</div>
                        )
                    }
                    {writeToEntry.isError && <div className="flex items-center"><div className="rounded-full bg-red-400 h-3 w-3 mr-1" />Error</div>}
                </div>
                <div>
                    {`${data?.entry?.createdAt?.toDate().toLocaleString()}${data?.entry?.updatedAt ? ` • ${data?.entry?.updatedAt.toDate().toLocaleString()}` : ""}`}
                </div>
            </div>
            <div className="w-full flex-1 relative">
                <textarea
                    autoFocus
                    className="w-full text-lg absolute top-0 bottom-0 bg-neutral-100 border resize-none border-neutral-200 rounded-0 p-4 shadow text-neutral-700 leading-relaxed border-none focus:ring-2 focus:ring-primary-400 placeholder:text-neutral-300"
                    value={text}
                    onChange={handleChange}
                />
            </div>
            <div className="flex justify-end py-2">
                <button className={button.tertiary} onClick={() => setIsDeleteModalOpen(true)}>Delete</button>
            </div>
            <Modal isOpen={isDeleteModalOpen} onRequestClose={() => setIsDeleteModalOpen(false)}>
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-danger-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon className="h-6 w-6 text-danger-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <ModalTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
                            Delete Entry
                        </ModalTitle>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500 py-4">
                                Are you sure?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => deleteEntry.mutate({ id: Number(id) })}
                    >
                        Yes, delete
                    </button>
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                        onClick={() => setIsDeleteModalOpen(false)}
                    >
                        Nevermind
                    </button>
                </div>
            </Modal>
        </div>
    )
}