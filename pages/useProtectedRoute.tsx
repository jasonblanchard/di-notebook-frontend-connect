import { useRouter } from "next/router";

export default function useProtectedRoute() {
    const router = useRouter();
    
    let token = '';
    if (global.window) {
        token = localStorage.getItem('idToken');
        if (!token) {
            const win: Window = window;
            win.location = "/login"
        }
    }
}