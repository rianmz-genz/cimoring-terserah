import { getOneProduct } from '@/api/api';
import { PageAdmin } from '@/components'
import SkeletonUpdate from '@/components/admin/SkeletonUpdate';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const EditProduct = () => {
    const router = useRouter();
    const [productName, setProductName] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [price, setPrice] = useState(0)
    const [notes, setNotes] = useState("")
    const [description, setDescription] = useState("")
    const [categories, setCategories] = useState([])
    const [isHitApi, setIsHitApi] = useState(true)
    const [path, setPath] = useState("")
    useEffect(()=>{
        setPath(router.query.path)
        getOneProduct(router.query.path).then((res)=>{
            setImageUrl(res.images[1])
            setProductName(res.name)
            setPrice(res.price)
            setCategories(res.productCategories)
            setDescription(res.description)
            setNotes(res.notes)
            setIsHitApi(false)
        }).catch((e)=> {
            console.log(e)
        })
    },[router.isReady])
  return (
    <PageAdmin title={productName}>
        <div className='flex space-x-2 mb-6'>
          <Link href={"/"} className='text-xs'>Admin</Link>
          <p className='text-xs text-black/40'>/</p>
          <p className='text-xs text-black/40'>Produk</p>
          <p className='text-xs text-black/40'>/</p>
          <p className='text-xs text-black/40'>{path}</p>
        </div>
        {
            isHitApi ?
                <SkeletonUpdate />
                :
                <article className='flex w-full relative'>
                    <Image  src={imageUrl} alt={productName} className='w-6/12 h-full sticky top-1' width={1080} height={1080} />
                    <div className='ml-4 w-5/12'>
                        <h1 className='text-2xl leading-2 font-semibold'>{productName}</h1>
                        <p className='text-xl mt-3'>IDR {price.toLocaleString("id-ID")}</p>
                        <p className='text-base text-gray-700 mt-3'>{description}</p>
                        <p className='text-base text-gray-700 mt-3'>{notes}</p>
                        {categories?.map((category, i) => (
                            <p key={i} className='mt-3 bg-red-400/30 text-red-400 w-fit px-4 py-2 rounded-lg border border-red-400'>{category.name}</p>
                        ))}
                    </div>
                </article>            
        }
    </PageAdmin>
  )
}

export default EditProduct
