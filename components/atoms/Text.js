import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const Text = ({value, size, style}) => {
  return (
    <p className={`${inter.className} ${size} ${style}`}>{value}</p>
  )
}

export default Text
