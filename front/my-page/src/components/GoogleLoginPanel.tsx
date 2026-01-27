import { useSession } from "@/auth/useSession";
import { loginWithGoogle, loginWithGooglePopup, logout } from "@/api/client";
import '@/styles/GoogleButton.css'

export function GoogleLoginPanel() {
    const { me, isLoggedIn, loading, refresh } = useSession();

    const onLogin = () => {
        // loginWithGooglePopup(() => refresh());
        loginWithGoogle();
    };

    const onLogout = async () => {
        await logout();
        await refresh();
    };

    if (loading) return <div style={{ width: "210px" }}>Loading session…</div>;

    return (
        <div style={{ width: "210px" }}>
            {isLoggedIn ? (
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div>
                        <div><b>{me?.name ?? "User"}</b></div>
                        <div style={{ opacity: 0.7 }}>{me?.email}</div>
                    </div>
                    <button onClick={onLogout}>Logout</button>
                </div>
            ) : (
                <button className="google-btn" onClick={onLogin}>
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Google"
                    />
                    <span>Sign in with Google</span>
                </button>
            )}
        </div>
    );
}