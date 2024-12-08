import Dashboard from '@/components/dashboard'
import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']  })
export default function index() {
  return (
    <div className={`${inter.className}`}>
        <Dashboard/>
    </div>
  )
}
