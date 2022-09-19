import { useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'


declare global {
    interface Window { google: any; }
}

export default function LoginPage() {
    const router = useRouter();

    useEffect(() => {
        function handleCredentialResponse(response: any) {
            localStorage.setItem("idToken", response.credential);
            router.push("/workspace");
        }

        window.google.accounts.id.initialize({
            client_id: '559697359407-jt47o7vg9idv8qh68j9ccbvij9bkudvc.apps.googleusercontent.com',
            callback: handleCredentialResponse,
            auto_select: true
        });

        window.google.accounts.id.prompt();

        window.google.accounts.id.renderButton(document.getElementById("buttonDiv"), {
            theme: 'outline',
            size: 'large',
        });
    }, []);

    return (
        <div className="bg-neutral-100">
            <Script strategy="beforeInteractive" src="https://accounts.google.com/gsi/client"></Script>
            <div className="flex flex-col items-center justify-center h-screen">
                <ShieldCheckIcon className="h-48 w-48 text-neutral-600 animate-pulse" />
                <span className="text-3xl text-neutral-600">Authenticating...</span>
                <div className="mt-12" id="buttonDiv"></div>
            </div>
        </div>
    )
}