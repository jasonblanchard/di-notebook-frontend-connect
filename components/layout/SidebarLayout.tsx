import { useState, useEffect } from 'react';
import useHotkeys from '@reecelucas/react-use-hotkeys';
import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

interface SidebarLayoutProps {
    children: React.ReactNode
    nav: React.ReactNode
}

export default function SidebarLayout({ children, nav }: SidebarLayoutProps) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    function toggleCollapsed() {
        setIsCollapsed(isCollapsed => {
            const result = !isCollapsed
            localStorage.setItem('di-SidebarLayour-isCollapsed', JSON.stringify(result))
            return result
        })
    }

    useEffect(() => {
        const cachedIsCollapsed = localStorage.getItem('di-SidebarLayour-isCollapsed');
        if (cachedIsCollapsed) {
            setIsCollapsed(JSON.parse(cachedIsCollapsed));
        }
    }, []);

    useHotkeys('Meta+\\', toggleCollapsed);

    return (
        <div className="h-screen overflow-hidden bg-neutral-50">
            <div className="h-2 bg-gradient-to-r to-primary-600 from-primary-300" />
            <div className="flex h-full">
                <div className={`${isCollapsed ? 'w-0' : 'w-40'} transition-all duration-100 border-r bg-neutral-600 relative`}>
                    <button onClick={toggleCollapsed} className="absolute py-1 w-6 bg-neutral-600 -right-6 top-3 text-neutral-300 rounded-r-sm">
                        <ChevronLeftIcon className={`${isCollapsed ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    {!isCollapsed && (
                        <nav className="text-sm text-neutral-300">
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