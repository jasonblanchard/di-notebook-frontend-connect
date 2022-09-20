import { useState, useEffect, useMemo } from 'react';
import debounce from 'lodash.debounce';
import { ExclamationTriangleIcon, TrashIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { button } from 'styles/classnames';
import useWriteToEntry from 'queries/useWriteToEntry';
import Modal, { ModalTitle } from './Modal';
import useDeleteEntry from 'queries/useDeleteEntry';
import useUndeleteEntry from 'queries/useUndeleteEntry';

interface EntryEditorProps {
    id: number
    initialText: string
    createdAt: Date
    updatedAt?: Date
}

export default function EntryEditor({ initialText, id, createdAt, updatedAt }: EntryEditorProps) {
    const writeToEntry = useWriteToEntry();
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [text, setText] = useState(initialText);
    const deleteEntry = useDeleteEntry({ id });
    const undeleteEntry = useUndeleteEntry({ id });

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
            writeToEntry.mutate({ id, text });
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
                    <button onClick={() => undeleteEntry.mutate()} className={button.secondary}>Undo</button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex justify-around py-12 h-full mx-auto">
            <div className="w-full sm:w-1/2 sm:mx-6">
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
                        {`${createdAt.toLocaleString()}${updatedAt ? ` • ${updatedAt.toLocaleString()}` : ""}`}
                    </div>
                </div>
                <div className="w-full h-full flex-1 relative">
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
                            className={`${button.danger} w-full mb-2 sm:mb-0 sm:ml-4`}
                            onClick={() => deleteEntry.mutate()}
                        >
                            Yes, delete
                        </button>
                        <button
                            type="button"
                            className={`${button.secondary} w-full`}
                            onClick={() => setIsDeleteModalOpen(false)}
                        >
                            Nevermind
                        </button>
                    </div>
                </Modal>
            </div>
            <div className="hidden sm:block w-1/2 mx-6 mt-5 overflow-scroll h-full prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
            </div>
        </div>
    )
}