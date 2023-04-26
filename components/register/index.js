import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { registerApi } from '@/api/api';
import { useRouter } from 'next/router';
const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [token, setToken] = useState("");
    const [tokenGenerated, setTokenGenerated] = useState(0);
    const router = useRouter()
    useEffect(()=>{
        generateToken();
    },[])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(token != tokenGenerated)return;
        if(password != confirmPassword)return;
        registerApi(email, password, name, phone).then(res => console.log(res)).catch(err => console.log(err))
        router.push("/login")
    }
    const generateToken = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        setTokenGenerated(randomNumber)
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#752107] transition-all duration-500">
        <form onSubmit={handleSubmit} className='bg-transparent border relative border-white  my-4 p-16 rounded-xl text-white space-x-4 shadow-slate-300 shadow min-w-[480px] flex justify-center items-center'>
            <div className='w-6/12 flex flex-col justify-center items-center h-full'>
                <p>Ayo mendaftar menjadi bagian kami!</p>
            </div>
            <div className='w-6/12'>
            <input placeholder='E-mail' autoComplete='off' value={email} onChange={(e)=> setEmail(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='email' />
            <input placeholder='Nama' autoComplete='off' value={name} onChange={(e)=> setName(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='text' />
            <input placeholder='No.Telp' autoComplete='off' value={phone} onChange={(e)=> setPhone(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='text' />
            <input placeholder='Password' autoComplete='off' value={password} onChange={(e)=> setPassword(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='password' />
            <input placeholder='Konfirmasi Password' autoComplete='off' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='password' />
            <p className='mt-3'>Token: {tokenGenerated}</p>
            <input placeholder='Token' autoComplete='off' value={token} onChange={(e)=> setToken(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='text' />
            <button type='submit' className='my-3 bg-transparent border border-white w-full py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-500'>Login</button>
            </div>
        </form>
        <p className='text-white'>Sudah memiliki akun? <Link href={"/login"} className='text-blue-300'>Login.</Link></p>
    </main>
  )
}

export default RegisterPage
