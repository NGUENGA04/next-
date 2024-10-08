'use client'
import { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from 'lucide-react';

const navItems = [
    {items: 'Accueil', href:'/'},
    {items: 'Nos services', href:'/'},
    {items: 'A propos', href:'/'},
    {items: 'Conctact', href:'/'},
]


export default function NavBar(){
    const [isOpen, setisOpen] = useState(false)

    const toggleMenu = ()=>{
        setisOpen(!isOpen)
    }
    return (
        <header className="h-screen overflow-hidden">
            <nav className="w-100 bg-slate-400 flex justify-between py-4 " >
                <div className="mx-20">
                    <Link href="/">AB AGENCY</Link>
                </div>
                <div className="mx-20 max-lg:hidden ">
                    {navItems.map((item, index) => (
                        <Link key={index} href={item.href} className="mx-5">{item.items}</Link>
                    ))}
                </div>
                <div className="hidden max-lg:block mx-20">
                    <button onClick={toggleMenu}  className="bg-slate-400  rounded-md">
                        {isOpen ? <X /> : <AlignLeft />}
                    </button>
                </div>
            </nav>
            <div className="flex justify-end ">
                {isOpen && (
                    <div className="bg-stone-700 text-white w-1/3 hidden max-lg:block h-screen animate-fade-left">
                          {navItems.map((item, index) => (
                          <Link key={index} href={item.href} ><div className="pl-5 py-4 animate-fade">{item.items}</div></Link>
                    ))}
                    </div>
                )}
                    
            </div>
        </header>
        
    )
}