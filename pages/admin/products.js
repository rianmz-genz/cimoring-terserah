import React, { useEffect, useState } from 'react'
import { PageAdmin, Text } from '@/components'
import { getAllProducts, getProductCategories } from '@/api/api'
import Image from 'next/image'
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
    <PageAdmin title={"Admin - Products"}>
      <Text value={"Semua Pengguna"} style={"text-xl font-bold"} />
      <div className='w-full grid grid-cols-2 mt-6'>
      {
        products.map((product,i)=> (
            <div key={i} className='w-11/12 flex  items-center bg-white/10  rounded-xl'>
              <Image className='w-4/12 rounded-xl ' src={product.image} width={100} height={100} alt={`Produk ${product.name}`} />
              <div className='w-8/12 px-4 py-2'>
                <p className='text-xs'>Nama Produk</p>
                <h1 className='font-bold text-sm'>{product.name}</h1>
                <p className='text-xs mt-1'>Harga Produk</p>
                <p className='font-bold text-sm'>Rp. {product.price.toLocaleString("id-ID")}</p>
                <p className='text-xs mt-1'>Deskripsi Produk</p>
                <p className='font-semibold text-sm'>{product.description}</p>
              </div>
            </div>
        ))
      }
      </div>
      
    </PageAdmin>
  )
}

export default ProductsAdmin
