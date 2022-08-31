import { button, toast } from 'styles/classnames';

export default function DesignSystemPage() {
    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-400" />
            <div className="container mx-auto max-w-4xl p-2">
                <h1 className="text-3xl font-bold text-neutral-600">Design System</h1>
                <div>
                    <h2 className="text-2xl mt-4 mb-2 text-neutral-600">Color Pallette</h2>
                    <span>Primary</span>
                    <div className="flex flex-wrap">
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-50 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-100 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-200 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-300 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-400 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-500 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-600 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-700 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-800 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-primary-900 rounded" />
                    </div>
                    <span>Neutrals</span>
                    <div className="flex flex-wrap">
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-50 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-100 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-200 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-300 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-400 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-500 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-600 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-700 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-800 rounded" />
                        <div className="h-20 w-40 mr-2 mb-2 bg-neutral-900 rounded" />
                    </div>
                    <span>Supporting</span>
                    <div className="flex flex-wrap">
                        <div className="mr-8">
                            <span>green</span>
                            <div className="flex">
                                <div className="h-10 w-10 mr-2 bg-success-green-50 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-100 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-200 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-300 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-400 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-500 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-600 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-700 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-800 rounded" />
                                <div className="h-10 w-10 mr-2 bg-success-green-900 rounded" />
                            </div>
                        </div>
                        <div className="mr-8">
                            <span>red</span>
                            <div className="flex">
                                <div className="h-10 w-10 mr-2 bg-danger-red-50 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-100 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-200 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-300 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-400 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-500 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-600 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-700 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-800 rounded" />
                                <div className="h-10 w-10 mr-2 bg-danger-red-900 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl mt-16 mb-2 text-neutral-600">Buttons</h2>
                    <div className="mb-2">
                        <button className={button.primary}>Primary</button>
                    </div>
                    <div className="mb-2">
                        <button className={button.secondary}>Secondary</button>
                    </div>
                    <div className="mb-2">
                        <button className={button.teriary}>Tertiary</button>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl mt-16 mb-2 text-neutral-600" >Toasts</h2>
                    <div className={`${toast.success} max-w-sm mb-2`}>
                        This is a success message
                    </div>
                    <div className={`${toast.danger} max-w-sm mb-2`}>
                        This is a danger message
                    </div>
                </div>
            </div>
        </div>
    )
}