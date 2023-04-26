import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NavLinkAdmin = ({href, value, icon}) => {
    const router = useRouter()
    const currentPage = router.pathname
  return (
    <Link href={href} className={`${href == currentPage ? "text-white font-bold" : "text-white/90"} flex text-xl items-center `}>{icon} {value}</Link>
  )
}

export default NavLinkAdmin
