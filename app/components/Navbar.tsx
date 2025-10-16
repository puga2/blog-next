import { auth, signIn, signOut } from '@/auth';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function Navbar() {
  const session = await auth();
  // const user = session?.user;
  return (
    <header className='px-5 py-3 bg-white shadow-md font-work-sans'>
      <nav className='flex items-center justify-between text-black'>
        <Link href="/">
          <Image src='/logo.png' alt="logo" width={144} height={30} />
        </Link>
      </nav>
      <div className='flex item-center gap-5'>
        {session && session ?.user ? (
          <>
            <Link href="/startup/create">
            <span>
                  Create
            </span>
          </Link>
        <button  onClick={async ()=>await signOut()}>
          <span>
            Logout
          </span>
        </button>
        <Link href={`/user/${session?.user?.id}`}>
          <span>
            {session?.user?.name}
          </span>
        </Link>
      </>
        ):(
          <form action={async ()=>{
            'use server';
            await signIn('github');
          }}>
            <button type='submit'>Login</button>
          </form>
        )}
    </div>
    </header >
  )
}

export default Navbar