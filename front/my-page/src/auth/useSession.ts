import { useEffect, useState } from "react";
import { fetchMe } from "@/api/client";

export function useSession() {
    const [me, setMe] = useState<any | null>(null);
    const [loading, setLoading] = useState(true);

    const refresh = async () => {
        setLoading(true);
        try {
            const data = await fetchMe();
            setMe(data);
        } catch {
            setMe(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refresh();
    }, []);

    return {
        me,
        isLoggedIn: !!me,
        loading,
        refresh,
    };
}