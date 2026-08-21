"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState("");
  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({email,password});
    if(error) alert(error.message); else window.location.href="/dashboard";
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border p-8 rounded-xl w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input className="w-full border p-2 mb-2 rounded" placeholder="email" onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border p-2 mb-4 rounded" type="password" placeholder="password" onChange={e=>setPassword(e.target.value)} />
        <button onClick={login} className="w-full bg-black text-white p-2 rounded">Entrar</button>
      </div>
    </div>
  )
}
