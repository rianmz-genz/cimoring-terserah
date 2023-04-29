import React, { useState } from 'react'
import Text from '@/components/atoms/Text'
import Link from 'next/link'
import { loginApi } from '@/api/api'
import {FiAlertCircle} from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import Loader from '../global/Loader'
import Image from 'next/image'
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isWrong, setIsWrong] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        await loginApi(email, password).then((res)=> {
          if(res == false){
            setIsWrong(true)
            setIsLoading(false)
            setTimeout(()=>{
              setIsWrong(false)
            },4000)
          }
          if(res.role == "admin"){
            router.replace("/admin")
            setIsLoading(false)
          }
        }).catch(err => console.log(err))
    }
  return (
    <main className="flex min-h-screen font-poppins flex-col items-center justify-center p-24 bg-[#752107] transition-all duration-500">
        {isLoading && <Loader />}
        <div className={`${isWrong ? "top-8" : "-top-full"} transition-all duration-700 absolute space-x-2 text-white flex items-center left-1/2 -translate-x-1/2 border border-white rounded-full px-8 py-4`}>
          <FiAlertCircle className='text-xl'/>
          <p>Email atau password salah!</p>
        </div>
        <div className='flex justify-center items-center space-x-3'>
          <Image src={"/images/Logo.jpg"} alt='Logo' width={80} height={80} className='rounded-full' />
          <div>
            <Text value={"Selamat Datang"} size={"text-3xl text-white font-bold"} />
             <Text value={"Di Cimoring Terserah"} size={"text-3xl text-white font-bold"} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className='bg-transparent border border-white  my-4 p-16 rounded-lg shadow-slate-300 shadow min-w-[480px]'>
            <input placeholder='E-mail' autoComplete='off' onChange={(e)=> setEmail(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='email' />
            <input placeholder='password' autoComplete='off' onChange={(e)=> setPassword(e.target.value)} required className='bg-transparent text-white w-full focus:outline-none border-b my-3 py-2 placeholder:text-white/90' type='password' />
            <button type='submit' className='my-3 bg-transparent border border-white w-full py-4 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-500'>Login</button>
        </form>
        <p className='text-white'>Belum memiliki akun? <Link href={"/register"} className='text-blue-300'>Daftar disini.</Link></p>
    </main>
  )
}

export default LoginPage
