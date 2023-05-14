import NavLinkAdmin from '@/components/admin/NavLink'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { MdOutlineSpaceDashboard, MdProductionQuantityLimits } from 'react-icons/md'
import { RiAccountCircleLine } from 'react-icons/ri'

const PageAdmin = ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/images/Logo.jpg" />
    </Head>
    <main className='w-full flex min-h-screen justify-between text-black font-poppins'>
      <aside className='w-full max-w-[300px] border-r border-black/10 min-h-screen flex flex-col px-16 py-12 space-y-4'>
        <div className='w-full border-b border-black/10 flex justify-center items-center pt-6 pb-3 flex-col'>
        <Image src={"/images/Logo.jpg"} alt='Logo' height={1080} width={1080} className='rounded-full mb-3 w-8/12' />
        </div>  
        <NavLinkAdmin 
          value={"Dashboard"}
          icon={<MdOutlineSpaceDashboard className='mr-3' />}
          href={"/admin"}
        />
        <NavLinkAdmin 
          value={"User"}
          icon={<RiAccountCircleLine className='mr-3' />}
          href={"/admin/users"}
        />
        <NavLinkAdmin 
          value={"Produk"}
          icon={<MdProductionQuantityLimits className='mr-3' />}
          href={"/admin/products"}
        />
      </aside>
      <div className='w-10/12 min-h-screen p-8'>
        {children}
      </div>
    </main>
    </>
  )
}

export default PageAdmin
