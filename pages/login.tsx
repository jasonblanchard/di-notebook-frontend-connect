import { useEffect } from 'react';
import Script from 'next/script'
import { useRouter } from 'next/router'


declare global {
    interface Window { google: any; }
}

export async function getServerSideProps() {
    return {
        props: {}
    }
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
        <div>
            <Script strategy="beforeInteractive" src="https://accounts.google.com/gsi/client"></Script>
            <div id="buttonDiv"></div>
        </div>
    )
}