import { loginApi } from '@/api/api'
import { Alert, Input, InputPassword, Loader, LoginPage } from '@/components'
import contentData from '@/utils/contentData'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    loginApi(email, password).then((res)=>{
      if(res == false){
        setIsWrong(true)
        setTimeout(()=>{
          setEmail("")
          setPassword("")
          setIsWrong(false)
          setIsLoading(false)
        }, 3000)
        return;
      }
      if(res.role == "admin"){
        const token = btoa("admin")
        localStorage.setItem("token", token)
        router.replace("/admin")
      }else if(res.role == "user"){
        const token = btoa("user")
        localStorage.setItem("token", token)
        router.replace("/")
      }
    }).catch((err)=> console.log(err))
  }
  return (
    <>
    <Head>
        <title>Masuk</title>
        <link rel="shortcut icon" href="/images/Logo.jpg" />
    </Head>
    <Loader indicator={isLoading}/>
    <main className='w-full min-h-screen flex flex-col items-center py-6'>
      <Alert 
        indicator={isWrong}
        onClick={()=> setIsWrong(false)}
        value={"Email atau kata sandi salah!"}
      />
      <header className='w-full max-w-[500px]'>
        <Image priority src={contentData.home.headerImageUrl} alt='Logo Cimoring Terserah dengan slogan' width={100} height={100} className='w-3/12' />
      </header>
      <section className='w-full max-w-[500px] mt-12 font-poppins'>
        <div className='flex space-x-2'>
          <Link href={"/"} className='text-xs'>Beranda</Link>
          <p className='text-xs text-black/40'>/</p>
          <p className='text-xs text-black/40'>Masuk</p>
        </div>
        <h1 className='text-4xl font-ysabeau font-bold mt-3'>Masuk</h1>
        <form onSubmit={handleSubmit} className='w-full mt-8 flex flex-col space-y-4'>
          <Input 
            id={"email"}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder={"Masukan email anda"}
            title={"Email*"}
            value={email}
          />
          <InputPassword 
            id={"password"}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder={"Masukan kata sandi anda"}
            title={"Kata Sandi*"}
            value={password}
          />
          <button type='submit' disabled={ email.length == 0 || 
            email.length == 0 ||
            password.length == 0 ? true : false
          } 
            className={`${
            email.length == 0 || 
            password.length == 0 ? "bg-green-400/60" : "bg-green-400"
          } w-full py-4 text-white transition-all duration-300 ease-in-out`}>Masuk</button>
        </form>
          <footer className='flex w-full justify-center text-sm space-x-1 font-ysabeau mt-2'>
            <p>Belum memiliki akun?</p>
            <Link href={"/register"} className='font-bold text-blue-400'>Daftar.</Link>
          </footer>
      </section>
    </main>
    </>
  )
}

export default Login
