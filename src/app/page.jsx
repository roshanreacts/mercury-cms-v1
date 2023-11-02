"use client"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import InitialNavigation from '~/container/InitialNavigation';
import store from '~/store';

export default function Home() {
  return (
    <div>
      <InitialNavigation />
    </div>
  )
}
