import { button, toast } from "styles/classnames";

export default function DesignSystemPage() {
  return (
    <div className="h-screen overflow-scroll bg-neutral-50">
      <div className="h-2 bg-gradient-to-r from-primary-600 to-primary-400" />
      <div className="container mx-auto max-w-4xl p-2">
        <h1 className="text-3xl font-bold text-neutral-600">Design System</h1>
        <div>
          <h2 className="mt-4 mb-2 text-2xl text-neutral-600">
            Color Pallette
          </h2>
          <span>Primary</span>
          <div className="flex flex-wrap">
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-50" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-100" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-200" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-300" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-400" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-500" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-600" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-700" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-800" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-primary-900" />
          </div>
          <span>Neutrals</span>
          <div className="flex flex-wrap">
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-50" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-100" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-200" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-300" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-400" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-500" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-600" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-700" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-800" />
            <div className="mr-2 mb-2 h-20 w-40 rounded bg-neutral-900" />
          </div>
          <span>Supporting</span>
          <div className="flex flex-wrap">
            <div className="mr-8">
              <span>green</span>
              <div className="flex">
                <div className="mr-2 h-10 w-10 rounded bg-success-green-50" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-100" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-200" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-300" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-400" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-500" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-600" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-700" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-800" />
                <div className="mr-2 h-10 w-10 rounded bg-success-green-900" />
              </div>
            </div>
            <div className="mr-8">
              <span>red</span>
              <div className="flex">
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-50" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-100" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-200" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-300" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-400" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-500" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-600" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-700" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-800" />
                <div className="mr-2 h-10 w-10 rounded bg-danger-red-900" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="mt-16 mb-2 text-2xl text-neutral-600">Buttons</h2>
          <div className="mb-2">
            <button className={button.primary}>Primary</button>
          </div>
          <div className="mb-2">
            <button className={button.secondary}>Secondary</button>
          </div>
          <div className="mb-2">
            <button className={button.tertiary}>Tertiary</button>
          </div>
        </div>
        <div>
          <h2 className="mt-16 mb-2 text-2xl text-neutral-600">Toasts</h2>
          <div className={`${toast.success} mb-2 max-w-sm`}>
            This is a success message
          </div>
          <div className={`${toast.danger} mb-2 max-w-sm`}>
            This is a danger message
          </div>
        </div>
      </div>
    </div>
  );
}
