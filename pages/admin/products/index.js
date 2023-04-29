import React, { useEffect, useState } from 'react'
import { PageAdmin, Text } from '@/components'
import { getAllProducts, getProductCategories } from '@/api/api'
import Image from 'next/image'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link'
const ProductsAdmin = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    useEffect(()=> {
        getProductCategories().then(res => {
            console.log(res)
            setCategories(res)
        }).catch(err => console.log(err))
        getAllProducts().then(res => {
            console.log(res)  
            setProducts(res)
        }).catch(err => console.log(err))
    },[])
  return (
    <>
    <PageAdmin title={"Admin - Products"}>
        <div className='flex space-x-2'>
          <Link href={"/"} className='text-xs'>Admin</Link>
          <p className='text-xs text-black/40'>/</p>
          <p className='text-xs text-black/40'>Produk</p>
        </div>
        <h1 className='text-4xl font-ysabeau font-bold mt-3'>Produk</h1>
      <div className='w-full grid grid-cols-4 mt-6'>
      {products.length != 0 ?
        products.map((product,i)=> (
            <div key={i} className='w-11/12 relative items-center   rounded-xl'>
              <div className='bg-white/10 absolute left-0 top-8 px-2 py-1 rounded-tr-full rounded-br-full'>
                <p className='text-xs text-white'>{product.stock} Pcs</p>
              </div>
              <Image className='w-full rounded-xl ' src={product.image} width={100} height={100} alt={`Produk ${product.name}`} />
              <div className='w-full py-2'>
                <h1 className='text-base'>{product.name}</h1>
                <p className='text-sm'>Rp. {product.price.toLocaleString("id-ID")}</p>
                {/* <p className='text-sm'>{product.description}</p> */}
                <div className='flex absolute top-2 right-2 space-x-1'>
                {/* {product.productCategories.map((category, i)=>(
                  <p key={i} className={`${category.name == "Pedas pisan" ?  "text-red-400 bg-red-400/10" :"text-green-400 bg-green-400/10"} text-xs px-2 py-1 rounded-full`} >{category.name}</p>
                ))} */}
                </div>
              </div>
            </div>
        )) :
        <div className='w-full flex justify-center mt-12'>
        <AiOutlineLoading3Quarters className='text-white animate-spin' />
      </div>
      }
      </div>
    </PageAdmin>
    </>
  )
}

export default ProductsAdmin
