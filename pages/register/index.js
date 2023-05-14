import Head from 'next/head'
import React from 'react'
import { useState, useEffect, } from 'react'
import { registerApi } from '@/api/api'
import { useRouter } from 'next/router'
import Image from 'next/image'
import contentData from '@/utils/contentData'
import Link from 'next/link'
import {RxEyeClosed, RxEyeOpen} from "react-icons/rx"
import { Alert, Input, InputPassword, Loader } from '@/components'
import { FiX } from 'react-icons/fi'
const Register = () => {
  const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [token, setToken] = useState("");
    const [tokenGenerated, setTokenGenerated] = useState(0);
    const [isMatch, setIsMatch] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isExists, setIsExists] = useState(false);
    const [pwValid, setPwValid] = useState("terlalu lemah")
    const router = useRouter()
    const [color1, setColor1] = useState("bg-red-400")
    const [textColor, setTextColor] = useState("text-red-400")
    const [color2, setColor2] = useState("bg-black/10")
    const [color3, setColor3] = useState("bg-black/10")
    useEffect(()=>{
        generateToken();
    },[])
    useEffect(()=>{
      var b = 0;
      var i = 0;
      var c = 0;
      var d = 0;
      for(i=0;i<password.length;i++){
        if(password[i] == password[i].toUpperCase() && isNaN(password[i])){
          b++
          if(b > 0){
            if(d == 1){
              d++
            }
            if(d == 0){
              d++
            }
          }else{
            d--
          }
        }
        if(!isNaN(password[i])){
          c++
          if(c > 0){
            if(d == 1){
              d++
            }
            if(d == 0){
              d++
            }
          }else{
            d--
          }
        }
        if(d == 0){
          setColor1("bg-red-400")
          setColor2("bg-black/10")
          setColor3("bg-black/10")
          setTextColor("text-red-400")
          setPwValid("terlalu lemah")
        }
        if(d == 1){
          setColor1("bg-yellow-400")
          setColor2("bg-yellow-400")
          setColor3("bg-black/10")
          setTextColor("text-yellow-400")
          setPwValid("terlalu mudah")
        }
        if(d == 2){
          setColor1("bg-green-400")
          setColor2("bg-green-400")
          setColor3("bg-green-400")
          setTextColor("text-green-400")
          setPwValid("aman")
        }
      }
      console.log(d)
    },[password])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        if(password != confirmPassword){
          setIsMatch(true)
          setConfirmPassword("")
          setTimeout(()=>{
            setIsMatch(false)
            setIsLoading(false)
          }, 3000)
          return;
        }
        registerApi(email, password, name, phone).then(res => {
          console.log(res)
          if(res == false){
             setIsExists(true)
             setEmail("")
             setName("")
             setPhone("")
             setPassword("")
             setConfirmPassword("")
             setToken("")
             setTimeout(() => {
              setIsExists(false)
              setIsLoading(false)
             }, 2000);
             return;
          }
          router.push("/login")
        }).catch(err => console.log(err))
    }
    const generateToken = () => {
        const randomNumber = Math.floor(Math.random() * 900000) + 100000;
        setTokenGenerated(randomNumber)
    }
  return (
    <>
    <Head>
        <title>Daftar</title>
        <link rel="shortcut icon" href="/images/Logo.jpg" />
    </Head>
    <Loader 
      indicator={isLoading}
    />
    <main className='w-full min-h-screen flex flex-col items-center py-6'>
      <Alert
        indicator={isMatch}
        onClick={()=> setIsMatch(false)}
        value={"Kata sandi tidak sama"}
      />
      <Alert
        indicator={isExists}
        onClick={()=> setIsExists(false)}
        value={"Email atau nomor telepon sudah didaftarkan"}
      />
      <header className='w-full max-w-[500px]'>
        <Image src={contentData.home.headerImageUrl} alt='Logo Cimoring Terserah dengan slogan' width={100} height={100} className='w-3/12' />
      </header>
      <section className='w-full max-w-[500px] mt-12 font-poppins'>
        <div className='flex space-x-2'>
          <Link href={"/"} className='text-xs'>Beranda</Link>
          <p className='text-xs text-black/40'>/</p>
          <p className='text-xs text-black/40'>Daftar</p>
        </div>
        <h1 className='text-4xl font-ysabeau font-bold mt-3'>Daftar</h1>
        <form onSubmit={handleSubmit} className='w-full mt-8 flex flex-col space-y-4'>
          <Input 
            id={"email"}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder={"Masukan email anda"}
            title={"Email*"}
            value={email}
          />
          <Input 
            id={"name"}
            onChange={(e)=> setName(e.target.value)}
            placeholder={"Masukan nama anda"}
            title={"Nama*"}
            value={name}
          />
          <InputPassword 
            id={"password"}
            onChange={(e)=> setPassword(e.target.value)}
            placeholder={"Masukan kata sandi anda"}
            title={"Kata Sandi*"}
            value={password}
          />
          <div className={`${password.length > 0 ? "block opacity-100" : "hidden opacity-0"} transition-all duration-200 flex space-x-1 w-full`}>
            <div className={`${color1} w-4/12 h-1 transition-all duration-200`}></div>
            <div className={`${color2} w-4/12 h-1 transition-all duration-200`}></div>
            <div className={`${color3} w-4/12 h-1 transition-all duration-200`}></div>
          </div>
          <p className={`${password.length > 0 ? "block opacity-100" : "hidden opacity-0"} transition-all duration-200 ${textColor} text-xs`}>Kata sandi anda {pwValid}</p>
          <InputPassword 
            id={"confirmpassword"}
            onChange={(e)=> setConfirmPassword(e.target.value)}
            placeholder={"Masukan konfirmasi kata sandi anda"}
            title={"Konfirmasi Kata Sandi*"}
            value={confirmPassword}
          />
          <Input 
            id={"tokenn"}
            onChange={(e)=> setToken(e.target.value)}
            placeholder={"Masukan token anda"}
            title={`Token ${tokenGenerated}`}
            value={token}
          />
          <button type='submit' disabled={ email.length == 0 || 
            name.length == 0 ||
            password.length == 0 ||
            confirmPassword.length == 0 ||
            token != tokenGenerated ? true : false
          } 
            className={`${
            email.length == 0 || 
            name.length == 0 ||
            password.length == 0 ||
            confirmPassword.length == 0 ||
            token != tokenGenerated ? "bg-green-400/60" : "bg-green-400"
          } w-full py-4 text-white transition-all duration-300 ease-in-out`}>Daftar</button>
        </form>
          <article className='bg-blue-400/10 w-full p-2 text-center font-ysabeau my-4'>
            <p className='text-xs'>Dengan menekan tombol &apos;Daftar&apos;, saya mengetahui dan menyetujui <Link href={"/"} className='text-blue-400 font-bold'>Syarat & Ketentuan</Link> serta <Link href={"/"} className='text-blue-400 font-bold'>Kebijakan Privasi</Link> dari Cimoring Terserah.</p>
          </article>
          <footer className='flex w-full justify-center text-sm space-x-1 font-ysabeau'>
            <p>Sudah memiliki akun?</p>
            <Link href={"/login"} className='font-bold text-blue-400'>Masuk.</Link>
          </footer>
      </section>
    </main>
    </>
  )
}

export default Register