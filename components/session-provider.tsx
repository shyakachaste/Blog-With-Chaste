"use client"
import { useUser } from "@/lib/store/user";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect, useCallback } from 'react'

export default function Sessionprovider() {

    const setUser = useUser ((state) => state.setUser);

    const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )

    const readUserSession = useCallback(async () => {
        const { data } = await supabase.auth.getSession();
        setUser(data.session?.user);
    }, [setUser, supabase]);

    useEffect(() => {
        readUserSession();
    }, [readUserSession]);

    return (
        <></>
    )
}