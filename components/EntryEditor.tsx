import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";
import {
  ExclamationTriangleIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { button } from "styles/classnames";
import useWriteToEntry from "queries/useWriteToEntry";
import Modal, { ModalTitle } from "./Modal";
import useDeleteEntry from "queries/useDeleteEntry";
import useUndeleteEntry from "queries/useUndeleteEntry";

interface EntryEditorProps {
  id: number;
  initialText: string;
  createdAt: Date;
  updatedAt?: Date;
}

export default function EntryEditor({
  initialText,
  id,
  createdAt,
  updatedAt,
}: EntryEditorProps) {
  const writeToEntry = useWriteToEntry();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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
    return debounce(
      (text) => {
        writeToEntry.mutate({ id, text });
      },
      1000,
      { maxWait: 10000 }
    );
  }, [id]);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
    debouncedChangeHandler(event.target.value);
  }

  if (deleteEntry.isSuccess && !undeleteEntry.isSuccess) {
    return (
      <div className="mx-auto flex h-full flex-col items-center py-12 lg:max-w-3xl">
        <div className="mb-4 sm:flex sm:items-center">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-neutral-200 sm:mx-0 sm:h-10 sm:w-10">
            <TrashIcon
              className="h-6 w-6 text-neutral-600"
              aria-hidden="true"
            />
          </div>
          <div className="mt-3 text-center text-neutral-700 sm:mt-0 sm:ml-4 sm:text-left">
            The entry has been deleted
          </div>
        </div>
        <div>
          <button
            onClick={() => undeleteEntry.mutate()}
            className={button.secondary}
          >
            Undo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full justify-around py-12">
      <div className="w-full sm:w-1/2 sm:first-letter:mx-6">
        <div className="mb-2 flex justify-between text-sm text-neutral-400">
          <div>
            {!writeToEntry.isError &&
              (writeToEntry.isLoading ? (
                <div className="flex items-center">
                  <div className="mr-1 h-3 w-3 rounded-full bg-yellow-400" />
                  Saving...
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="mr-1 h-3 w-3 rounded-full bg-green-400" />
                  Saved
                </div>
              ))}
            {writeToEntry.isError && (
              <div className="flex items-center">
                <div className="mr-1 h-3 w-3 rounded-full bg-red-400" />
                Error
              </div>
            )}
          </div>
          <div>
            {`${createdAt.toLocaleString()}${
              updatedAt ? ` • ${updatedAt.toLocaleString()}` : ""
            }`}
          </div>
        </div>
        <div className="relative h-full w-full flex-1">
          <textarea
            autoFocus
            className="rounded-0 absolute top-0 bottom-0 w-full resize-none border border-none border-neutral-200 bg-neutral-100 p-4 text-lg leading-relaxed text-neutral-700 shadow placeholder:text-neutral-300 focus:ring-2 focus:ring-primary-400"
            value={text}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end py-2">
          <button
            className={button.tertiary}
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete
          </button>
        </div>
        <Modal
          isOpen={isDeleteModalOpen}
          onRequestClose={() => setIsDeleteModalOpen(false)}
        >
          <div className="sm:flex sm:items-start">
            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-danger-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <ExclamationTriangleIcon
                className="h-6 w-6 text-danger-red-600"
                aria-hidden="true"
              />
            </div>
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <ModalTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Delete Entry
              </ModalTitle>
              <div className="mt-2">
                <p className="py-4 text-sm text-gray-500">Are you sure?</p>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className={`${button.danger} mb-2 w-full sm:mb-0 sm:ml-4`}
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
      <div className="prose mx-6 mt-5 hidden h-full w-1/2 overflow-scroll sm:block">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
      </div>
    </div>
  );
}
