import React, { useEffect, useState } from 'react'
import { PageAdmin, Text } from '@/components'
import { getAllProducts, getProductCategories } from '@/api/api'
import Image from 'next/image'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import Link from 'next/link'
import { FiEye } from 'react-icons/fi'
import { useRouter } from 'next/router'
import SkeletonProductAdmin from '@/components/admin/SkeletonProductAdmin'
const ProductsAdmin = () => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const router = useRouter()
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
      <div className='w-full grid grid-cols-4 space-x-6 space-y-6 place-content-center place-items-center mt-6'>
      {products.length != 0 ?
        products.map((product,i)=> (
            <Link href={`/admin/products/${product.path}`} key={i} className='w-11/12 relative items-center rounded-xl group'>
              <div className='bg-[#222222] absolute left-0 top-8 px-2 py-1 rounded-tr-full rounded-br-full'>
                <p className='text-xs text-white'>{product.stock} Pcs</p>
              </div>
              <Image className={`w-full`}  src={product.images[1]} width={100} height={100} alt={`Produk ${product.name}`} />
              <div className='w-full py-2'>
                <h1 className='text-lg font-semibold'>{product.name}</h1>
                <p className='text-sm'>IDR {product.price.toLocaleString("id-ID")}</p>
              </div>
            </Link>
        )) :
          <>
            <SkeletonProductAdmin />
            <SkeletonProductAdmin />
            <SkeletonProductAdmin />
            <SkeletonProductAdmin />
          </>
      }

      </div>
    </PageAdmin>
    </>
  )
}

export default ProductsAdmin
