import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const ArticleList = () => {
  return (
    <div>
        <article className='shadow my-4'>
            <Link href="#" className='hover:opacity-75'>
                <Image src="https://picsum.photos/1000/300" alt='' width={1000} height={300}/>
            </Link>
            <div className='bg-white flex flex-col justify-satrt p-6'>
                <Link href='#' className='text-blue-700 pb-4 font-boid'>Technology</Link>
                <Link href='#' className='text-slate-900 text-3xl font-boid hover:text-gray-700 pb-4'>Next.jsの勉強中</Link>
                <p className="text-sm text-slate-900">Published om 202410/03</p>
                <Link href='#' className='text-slate-900 pb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente libero quia alias, odio dicta eaque culpa quo eligendi quibusdam perspiciatis placeat officiis fugit blanditiis harum assumenda ut temporibus, tempore nulla.</Link>
                <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
            </div>
        </article>
    </div>
  )
}

export default ArticleList