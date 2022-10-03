import React, { useState, useEffect } from "react";
import useHotkeys from "@reecelucas/react-use-hotkeys";
import {
  ChevronLeftIcon,
  PlusCircleIcon,
  HomeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Link from "next/link";

import useBeginNewEntry from "queries/useBeginNewEntry";
import Modal, { ModalTitle } from "components/Modal";
import { button } from "styles/classnames";

interface SidebarLayoutProps {
  children: React.ReactNode;
  nav: React.ReactNode;
}

export default function SidebarLayout({ children, nav }: SidebarLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const beginNewEntry = useBeginNewEntry();
  const router = useRouter();
  const [isKeyboardShortcutsModalOpen, setIsKeyboardShortcutsModalOpen] =
    useState(false);

  function toggleCollapsed() {
    setIsCollapsed((isCollapsed) => {
      const result = !isCollapsed;
      localStorage.setItem(
        "di-SidebarLayour-isCollapsed",
        JSON.stringify(result)
      );
      return result;
    });
  }

  useEffect(() => {
    if (beginNewEntry.isSuccess) {
      router.push(`/workspace/${beginNewEntry.data.entry.id}`);
    }
  }, [beginNewEntry.isSuccess, beginNewEntry.data]);

  useEffect(() => {
    const cachedIsCollapsed = localStorage.getItem(
      "di-SidebarLayour-isCollapsed"
    );
    if (cachedIsCollapsed) {
      setIsCollapsed(JSON.parse(cachedIsCollapsed));
    }
  }, []);

  useHotkeys("Meta+\\", toggleCollapsed);

  useHotkeys("Meta+/", () =>
    setIsKeyboardShortcutsModalOpen((value) => !value)
  );
  useHotkeys("Meta+Escape", () => router.push("/workspace"));

  useHotkeys("Meta+Shift+F", () => router.push("/search"));

  return (
    <div className="h-screen bg-neutral-50 sm:overflow-hidden">
      <div className="absolute top-0 z-10 h-2 w-full bg-gradient-to-r from-primary-300 to-primary-600 transition-all" />
      <div className="flex h-full flex-col-reverse sm:flex-row">
        <div
          className={`${
            isCollapsed ? "max-h-14 sm:w-0" : "max-h-60 sm:w-60"
          } relative border-r bg-neutral-600 transition-all sm:max-h-full`}
        >
          <div className="-right-8 top-6 flex justify-around bg-neutral-600 py-2 text-neutral-300 sm:absolute sm:w-8 sm:flex-col sm:rounded-r-sm">
            <button
              onClick={toggleCollapsed}
              className="flex justify-center py-2 px-2 align-middle hover:bg-neutral-700 sm:px-0"
            >
              <span className="sr-only">collapse sidebar</span>
              <ChevronLeftIcon
                className={`h-6 w-6 ${
                  isCollapsed
                    ? "rotate-90 sm:rotate-180"
                    : "-rotate-90 sm:rotate-0"
                } transition-transform duration-500`}
              />
            </button>
            <button
              className="flex justify-center py-2 px-2 align-middle hover:bg-neutral-700 sm:px-0"
              onClick={() => beginNewEntry.mutate({ text: "" })}
            >
              <span className="sr-only">new entry</span>
              <PlusCircleIcon className="h-6 w-6" />
            </button>
            <button
              className="flex justify-center py-2 px-2 align-middle hover:bg-neutral-700 sm:px-0"
              onClick={() => setIsKeyboardShortcutsModalOpen(true)}
            >
              <span className="sr-only">keyboard shortcuts</span>⌘
            </button>
            <Link href="/workspace">
              <a className="flex justify-center py-2 px-2 align-middle hover:bg-neutral-700 sm:px-0">
                <span className="sr-only">workspace home</span>
                <HomeIcon className="h-6 w-6" />
              </a>
            </Link>
            <Link href="/search">
              <a className="flex justify-center py-2 px-2 align-middle hover:bg-neutral-700 sm:px-0">
                <span className="sr-only">search</span>
                <MagnifyingGlassIcon className="h-6 w-6" />
              </a>
            </Link>
          </div>
          {!isCollapsed && (
            <nav className="h-full overflow-scroll text-neutral-300">{nav}</nav>
          )}
        </div>
        <div className="flex-1 overflow-scroll px-2 sm:px-12">{children}</div>
      </div>
      <Modal
        isOpen={isKeyboardShortcutsModalOpen}
        onRequestClose={() => setIsKeyboardShortcutsModalOpen(false)}
      >
        <div className="mx-auto max-w-xs">
          <ModalTitle as="h2" className="text-m text-neutral-600">
            Keyboard Shortcuts
          </ModalTitle>
          <div className="py-6">
            <div className="mb-4 flex items-center justify-between">
              <code className="bg-neutral-200 p-1 text-sm">command + \</code>{" "}
              toggle sidebar
            </div>
            <div className="mb-4 flex items-center justify-between">
              <code className="bg-neutral-200 p-1 text-sm">command + /</code>{" "}
              open this dialog
            </div>
            <div className="mb-4 flex items-center justify-between">
              <code className="bg-neutral-200 p-1 text-sm">command + Esc</code>{" "}
              return to home page
            </div>
            <div className="mb-4 flex items-center justify-between">
              <code className="bg-neutral-200 p-1 text-sm">
                command + Shift + F
              </code>{" "}
              search
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
