import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {CiShoppingCart, CiSearch, CiUser} from "react-icons/ci"
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import contentData from "@/utils/contentData";
export default function Home() {
  return (
    <>
    <Head>
      <title>Cimoring Terserah : Jual Aneka Snack Murah Dan Berkualitas.</title>
      <link rel="shortcut icon" href="/images/Logo.jpg" />
      <link rel="cannonical" href="https://cimoringterserah.com" />
      <meta name="description" content="Cimoring Terserah menjual aneka snack murah dan berkualitas, kalo kamu bingung pake aja fitur `Terserah Kamu!` nanti bakalan dipilihin snack yang sesuai dengan seleramu!" data-react-helmet="true" />
      <meta property="og:title" content="Cimoring Terserah : Jual Aneka Snack Murah Dan Berkualitass" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:type" content="website"/>
      <meta property="og:description" content="Cimoring Terserah menjual aneka snack murah dan berkualitas, kalo kamu bingung pake aja fitur `Terserah Kamu!` nanti bakalan dipilihin snack yang sesuai dengan seleramu!" />
      <meta property="og:url" content="https://cimoringterserah.com" />
      <meta property="og:site_name" content="Cimoring Terserah" />
      <meta name="keywords" content="Cimoring Terserah, Cimoring, Snack, Pedas, Snack Pedas, Cuanki, Terserah, Makanan" />
      <meta name="robots" content="index, follow" />
    </Head>
      <main className="flex min-h-screen w-full font-poppins transition-all duration-300">
        <div className="max-w-[300px] w-full"></div>
        <header className="max-w-[300px] w-full border-r h-screen scrollbar overflow-y-scroll fixed flex justify-center  px-16 py-24">
          <nav className="w-full flex flex-col space-y-16 min-h-screen ">
            {/* Image header */}
            <Image priority src={contentData.home.headerImageUrl} width={173} className="w-11/12" height={100} alt="Logo Cimoring Terserah dengan slogan" />
            {/* nav icon */}
            <div className="flex w-10/12 space-x-8">
              <Link href={"/"} className="relative">
                <p className="absolute -top-4 -right-2 text-lg font-ysabeau text-black/70">0</p>
                <CiShoppingCart className="text-xl " />
              </Link>
               <Link href={"/login"}>
                <CiUser className="text-xl" />
               </Link> 
               <Link href={"/"}>
                <CiSearch className="text-xl " />
               </Link>
            </div>
            {/* nav text */}
            <div className="flex flex-col space-y-4">
              {contentData.home.navText.map((item,i)=>(
                <Link key={i} href={item.path} className="hover:underline hover:transition-all transition-all duration-200 hover:duration-200" >{item.text}</Link>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-xs">Social Media</p>
              <div className="flex space-x-2 transition-all duration-200">
                <FaFacebookF className="text-slate-400 hover:transition-all duration-300 hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="text-slate-400 hover:transition-all duration-300 hover:text-red-600 cursor-pointer" />
                <FaTiktok className="text-slate-400 hover:transition-all duration-300 hover:text-black cursor-pointer" />
              </div>
            </div>
          </nav>
        </header>
        <div className="w-full">
                
        </div>
      </main>
    </>
  )
}
