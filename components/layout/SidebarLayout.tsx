import { useState, useEffect } from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import React from 'react';
import { ChevronLeftIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import useBeginNewEntry from 'queries/useBeginNewEntry';
import { useRouter } from 'next/router';

interface SidebarLayoutProps {
    children: React.ReactNode
    nav: React.ReactNode
}

export default function SidebarLayout({ children, nav }: SidebarLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const beginNewEntry = useBeginNewEntry();
    const router = useRouter();

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

    return (
        <div className="h-screen overflow-hidden bg-neutral-50">
            <div className="h-2 bg-gradient-to-r to-primary-600 from-primary-300 absolute w-full top-0 z-10" />
            <div className="flex h-full">
                <div className={`${isCollapsed ? 'w-0' : 'w-40'} transition-all duration-100 border-r bg-neutral-600 relative`}>
                    <div className="flex flex-col justify-center align-middle absolute py-2 w-8 bg-neutral-600 -right-8 top-3 text-neutral-300 rounded-r-sm">
                        <button onClick={toggleCollapsed} className="flex align-middle justify-center py-2 hover:bg-neutral-700">
                            <span className="sr-only">collapse sidebar</span>
                            <ChevronLeftIcon className={`h-6 w-6 ${isCollapsed ? 'rotate-180' : ''} transition-transform`} />
                        </button>
                        <button className="flex align-middle justify-center py-2 hover:bg-neutral-700" onClick={() => beginNewEntry.mutate({ text: '' })}>
                            <span className="sr-only">new entry</span>
                            <PlusCircleIcon className="h-6 w-6" />
                        </button>
                        <button className="flex align-middle justify-center py-2 hover:bg-neutral-700">
                            <span className="sr-only">keyboard shortcuts</span>
                            ⌘   
                        </button>
                    </div>
                    {!isCollapsed && (
                        <nav className="text-sm text-neutral-300 overflow-scroll h-full">
                            {nav}
                        </nav>
                    )}
                </div>
                <div className="flex-1 overflow-scroll">
                    {children}
                </div>
            </div>
        </div>
    )
}