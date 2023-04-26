import NavLinkAdmin from '@/components/admin/NavLink'
import Text from '@/components/atoms/Text'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsTiktok } from 'react-icons/bs'
import { MdOutlineSpaceDashboard, MdProductionQuantityLimits } from 'react-icons/md'
import { RiAccountCircleLine } from 'react-icons/ri'

const PageAdmin = ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <main className='w-full flex min-h-screen justify-between text-white bg-[#752107]'>
      <aside className='w-2/12 border-r border-white min-h-screen flex flex-col items-center p-6 space-y-4'>
        <div className='w-full border-b border-white flex justify-center items-center py-6 flex-col'>
        <Image src={"/images/Logo.png"} alt='Logo' height={100} width={100} className='rounded-full mb-3' />
        <Text value={"Cimoring Terserah"} style={"font-semibold"} size={"text-lg"} />
        <div className='flex space-x-3 items-center mt-3'>
          <AiOutlineInstagram className='text-2xl cursor-pointer'/>
          <BsTiktok className='text-xl cursor-pointer'/>
        </div>
        </div>
        <NavLinkAdmin 
          value={"Dashboard"}
          icon={<MdOutlineSpaceDashboard className='mr-3' />}
          href={"/admin"}
        />
        <NavLinkAdmin 
          value={"Users"}
          icon={<RiAccountCircleLine className='mr-3' />}
          href={"/admin/users"}
        />
        <NavLinkAdmin 
          value={"Products"}
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
