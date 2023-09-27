'use client'
import Image from 'next/image'
import Navbar from '@/components/own/navbar'
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from "@/components/ui/button"
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

enum scroll {
    'hidden',
    'absolute'
}

type Product = {
    id: number,
    name: string,
    price: number
}

const suggetedProduct: Product[] = [
    {
        id: 0,
        name: 'Air force 1',
        price: 100000
    },
    {
        id: 1,
        name: 'Jordan',
        price: 23423234
    },
    {
        id: 2,
        name: 'Air max',
        price: 74387975345
    },
    {
        id: 3,
        name: 'Blazer',
        price: 4550000
    }
]

let prevscr: number = 0;

export default function () {
    const [show, setShow] = useState<scroll>(1);

    const { theme } = useTheme();

    const alchorRef = useRef<HTMLDivElement>(null);
    const productScroll = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (alchorRef.current) {
            alchorRef.current.addEventListener('scroll', () => { handleScroll() })
            return (
                alchorRef.current.removeEventListener('scroll', () => { handleScroll() })
            )
        }
    }, []);

    const handleScroll = async () => {
        let scr = alchorRef.current!.scrollTop;
        if (prevscr > scr || scr == 0) {
            setShow(1)
        } else {
            setShow(0)
        }
        prevscr = scr;
        return;
    };

    return (
        <div className='w-full flex flex-col overflow-y-scroll gap-4' ref={alchorRef}>
            <div className={`${scroll[show]} flex justify-between w-full px-10 max-lg:px-4 z-10 ${theme === 'light' ? 'bg-white' : ''} ${theme === 'dark' ? 'bg-black' : ''}`}>
                <Navbar></Navbar>
            </div>
            <div className='w-full px-16 pt-24 flex flex-col gap-4'>
                <div className='w-full flex justify-center max-h-[900px] relative'>
                    <img className='w-full h-auto' alt='' src={'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1768,c_limit/b0c441b1-0d5a-43dc-96cd-3699688fb1a3/nike-just-do-it.jpg'} />
                </div>
                <div className='flex flex-col items-center w-full mt-4 gap-3'>
                    <p className='text-8xl font-extrabold text-center'>NICE METCON 99</p>
                    <p className='text-xl'>Durability and stability for your strength training.</p>
                    <Button variant="outline" className={`${theme == 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}>Shop</Button>
                </div>
                <p>Mới nhất</p>
                <div className='flex flex-col lg:flex-row justify-between w-full'>
                    <div className='relative w-full lg:w-[49%] h-auto'>
                        <img className='w-full' alt='' src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/40d5df93-9a52-4d89-a585-fb52e9445ba6/nike-just-do-it.png' />
                        <div className='absolute bottom-7 left-7'>
                            <p>Lên kệ vào 14/9</p>
                            <p>Dunk Low Twist</p>
                            <button className={`lightitem rounded-2xl px-3 py-1`}>Mua ngay</button>
                        </div>
                    </div>
                    <div className='relative w-full lg:w-[49%] h-auto'>
                        <img className='w-full' alt='' src='https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_906,c_limit/40d5df93-9a52-4d89-a585-fb52e9445ba6/nike-just-do-it.png' />
                        <div className='absolute bottom-7 left-7'>
                            <p>Lên kệ vào 14/9</p>
                            <p>Dunk Low Twist</p>
                            <button className={`lightitem rounded-2xl px-3 py-1`}>Mua ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-16'>
                <p>Luôn sẵn có</p>
                <div className='w-full overflow-x-auto flex flex-row' ref={productScroll}>
                    {suggetedProduct.map(product => {
                        return (
                            <div className='lg:w-1/3 w-1/2 p-3 gap-2 flex flex-col flex-shrink-0' key={product.id}>
                                <img className='w-full h-auto' alt='' src='https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_423,c_limit/17433a67-230c-4a50-a6d4-268ef37272a7/sportswear-oversized-t-shirt-ptNVST.png' />
                                <div className='flex justify-between'>
                                    <p className='text-lg font-semibold'>{product.name}</p>
                                    <p className='text-lg font-semibold'>{product.price}</p>
                                </div>
                                <p>category in progress</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='h-[800px] flex justify-between px-14 py-6 bg-black text-white mt-10'>
                <div className='flex flex-col gap-8 justify-between'>
                    <div className='flex gap-8'>
                        <div className='flex flex-col'>
                            <p>
                                FIND A STORE
                            </p>
                            <p>
                                BECOME A MEMBER
                            </p>
                            <p>
                                Send us a feedback
                            </p>
                        </div>
                        <div className='flex flex-col'>
                            <p>GET HELP</p>
                            <p>Order status</p>
                            <p>Delivery</p>
                            <p>Returns</p>
                            <p>Payment Options</p>
                            <p>Contact Us</p>
                        </div>
                        <div className='flex flex-col'>
                            <p>ABOUT NIKE</p>
                            <p>News</p>
                            <p>Careers</p>
                            <p>Investors</p>
                            <p>Sustainability</p>
                        </div>
                    </div>
                    <div className='flex gap-8'>
                        <p>Viet Nam</p>
                        <p>??? 2077 Nice, Inc. All Lefts Reserved :v</p>
                    </div>
                </div>
                <div className='flex flex-col justify-between items-end'>
                    <div className='flex gap-8 text-2xl'>
                        <Link href='https://facebook.com/kitsuneremi'><BsFacebook /></Link>
                        <Link href={'https://github.com/kitsuneremi'}><BsGithub /></Link>
                    </div>
                    <div className='flex gap-8'>
                        <p>Guide</p>
                        <Separator orientation='vertical'/>
                        <p>Terms of what???</p>
                        <Separator orientation='vertical'/>
                        <p>Nice Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}