import type { Metadata } from 'next'
import HomePage from '@/indirect/home/home'

export const metadata:Metadata = {
    title: 'home page',
    description: 'home page desciption'
}

export default function Home() {
    return (
        <main className="flex h-screen flex-col items-center">
            <HomePage></HomePage>
        </main>
    )
}
