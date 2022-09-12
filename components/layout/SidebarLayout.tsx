import React, { useState, useEffect } from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import { ChevronLeftIcon, PlusCircleIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';

import useBeginNewEntry from 'queries/useBeginNewEntry';
import Modal, { ModalTitle } from 'components/Modal';
import { button } from 'styles/classnames';

interface SidebarLayoutProps {
    children: React.ReactNode
    nav: React.ReactNode
}

export default function SidebarLayout({ children, nav }: SidebarLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const beginNewEntry = useBeginNewEntry();
    const router = useRouter();
    const [isKeyboardShortcutsModalOpen, setIsKeyboardShortcutsModalOpen] = useState(false);

    function toggleCollapsed() {
        setIsCollapsed(isCollapsed => {
            const result = !isCollapsed
            localStorage.setItem('di-SidebarLayour-isCollapsed', JSON.stringify(result))
            return result
        })
    }

    useEffect(() => {
        if (beginNewEntry.isSuccess) {
            router.push(`/workspace/${beginNewEntry.data.entry.id}`)
        }
    }, [beginNewEntry.isSuccess, beginNewEntry.data]);

    useEffect(() => {
        const cachedIsCollapsed = localStorage.getItem('di-SidebarLayour-isCollapsed');
        if (cachedIsCollapsed) {
            setIsCollapsed(JSON.parse(cachedIsCollapsed));
        }
    }, []);

    useHotkeys('Meta+\\', toggleCollapsed);

    useHotkeys('Meta+/', () => setIsKeyboardShortcutsModalOpen(value => !value));
    useHotkeys('Meta+Escape', () => router.push('/workspace'));
    
    return (
        <div className="h-screen overflow-hidden bg-neutral-50">
            <div className="h-2 bg-gradient-to-r to-primary-600 from-primary-300 absolute w-full top-0 z-10 transition-all" />
            <div className="flex h-full">
                <div className={`${isCollapsed ? 'w-0' : 'w-52'} transition-all border-r bg-neutral-600 relative`}>
                    <div className="flex flex-col justify-center align-middle absolute py-2 w-8 bg-neutral-600 -right-8 top-6 text-neutral-300 rounded-r-sm">
                        <button onClick={toggleCollapsed} className="flex align-middle justify-center py-2 hover:bg-neutral-700">
                            <span className="sr-only">collapse sidebar</span>
                            <ChevronLeftIcon className={`h-6 w-6 ${isCollapsed ? 'rotate-180' : ''} transition-transform duration-500`} />
                        </button>
                        <button className="flex align-middle justify-center py-2 hover:bg-neutral-700" onClick={() => beginNewEntry.mutate({ text: '' })}>
                            <span className="sr-only">new entry</span>
                            <PlusCircleIcon className="h-6 w-6" />
                        </button>
                        <button className="flex align-middle justify-center py-2 hover:bg-neutral-700" onClick={() => setIsKeyboardShortcutsModalOpen(true)}>
                            <span className="sr-only">keyboard shortcuts</span>
                            ⌘   
                        </button>
                        <Link href="/workspace">
                            <a className="flex align-middle justify-center py-2 hover:bg-neutral-700">
                                <span className="sr-only">workspace home</span>
                                <HomeIcon className="h-6 w-6" />
                            </a>
                        </Link>
                    </div>
                    {!isCollapsed && (
                        <nav className="text-neutral-300 overflow-scroll h-full">
                            {nav}
                        </nav>
                    )}
                </div>
                <div className="flex-1 overflow-scroll px-12">
                    {children}
                </div>
            </div>
            <Modal isOpen={isKeyboardShortcutsModalOpen} onRequestClose={() => setIsKeyboardShortcutsModalOpen(false)}>
                <div className="max-w-xs mx-auto">
                    <ModalTitle as="h2" className="text-m text-neutral-600">Keyboard Shortcuts</ModalTitle>
                    <div className="py-6">
                        <div className="flex justify-between items-center mb-4">
                            <code className="text-sm bg-neutral-200 p-1">command + \</code> toggle sidebar
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <code className="text-sm bg-neutral-200 p-1">command + /</code> open this dialog
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <code className="text-sm bg-neutral-200 p-1">command + Esc</code> return to home page
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}