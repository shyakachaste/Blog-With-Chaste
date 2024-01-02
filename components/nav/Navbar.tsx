"use client"
import React from "react";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { useUser } from "@/lib/store/user";
import Profile from "./Profile";

export default function Navbar() {

  const user = useUser((state) => state.user)

 return <nav className="justify-between items-center flex">
           <div className="group">
             <Link href="/" className="font-bold text-2xl">ChasteBlog</Link>
              <div className="h-1 w-0 group-hover:w-full"></div>
            </div>
           {user?.id ? <Profile /> : <LoginForm />}
        </nav>

}
