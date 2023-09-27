'use client'
import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/own/navbar'
import { useTheme } from 'next-themes';
import Image from 'next/image';

enum scroll {
    'hidden',
    'absolute'
}

type Product = {
    id: number,
    name: string,
    price: number
}

type CartItem = {
    product: Product,
    quantity: number
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

export default function Page() {

    const alchorRef = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState<scroll>(1);
    const [listCart, setListCart] = useState<CartItem[]>([]);

    useEffect(() => {
        setListCart(suggetedProduct.map(product => {
            return { product: product, quantity: 2 }
        }))
    }, [])

    const { theme } = useTheme()

    useEffect(() => {
        alchorRef.current?.addEventListener('scroll', e => { handleScroll(e); })
        return (
            alchorRef.current?.removeEventListener('scroll', e => { handleScroll(e); })
        )
    }, []);

    const handleScroll = (e: Event) => {
        // console.log('overall scroll ' + alchorRef.current?.scrollTop)
        let scr = alchorRef.current!.scrollTop;
        if (prevscr > scr || scr == 0) {
            setShow(1)
        } else {
            setShow(0);
        }
        prevscr = scr;
        return;
    };

    const calculateTotals = () => {
        return listCart.reduce((total, item) => {
            return total += item.product.price * item.quantity
        }, 0)

    }

    return (
        <div className='w-full h-screen overflow-y-scroll flex flex-col gap-4' ref={alchorRef}>
            <div className={`${scroll[show]} flex justify-between w-full px-10 max-lg:px-4 z-10`}>
                <Navbar></Navbar>
            </div>
            <div className={`gap-8 ${show == 0 ? 'pt-8' : 'pt-24'}`}>
                <div className='flex px-32 py-10'>
                    <div className='w-3/4 px-10'>
                        <p className='text-xl font-bold'>Giỏ hàng</p>
                        <div className='flex justify-between'>
                            <p>Sản phẩm</p>
                            <p>số lượng</p>
                        </div>
                        <div>
                            {listCart.length > 0 ? listCart.map((item, index) => {
                                return <div key={index} className='flex justify-between'>
                                    <div className='flex gap-8'>
                                        <div className='relative w-24 h-24'>
                                            <Image fill={true} className='rounded-md hover:border-2 hover:border-black' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                        </div>
                                        <div className='flex flex-col gap-4 py-4'>
                                            <p className='text-xl font-semibold'>{item.product.name}</p>
                                            <p>{item.product.price}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center'>
                                        <div className='flex gap-2 h-fit'>
                                            <button className='w-8 h-8 border-2 border-black' onClick={() => { }}>-</button>
                                            <p className='h-fit pt-1'>{item.quantity}</p>
                                            <button className='w-8 h-8 border-2 border-black' onClick={() => { }}>+</button>
                                        </div>
                                    </div>
                                </div>
                            }) : <p>Không có gì trong giỏ hàng</p>}
                        </div>
                    </div>
                    <div className='flex-grow flex flex-col gap-6'>
                        <p className='text-xl font-bold'>Tổng kết</p>
                        <div className='flex flex-col'>
                            <p>Nhập mã giảm giá</p>
                            <input type='text' className='w-full h-9 px-2 border-[1px] border-black rounded-sm' />
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-semibold'>Khấu trừ</p>
                            <p>N/A</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='text-lg font-bold'>Tổng</p>
                            <p>{calculateTotals()}</p>
                        </div>
                        <div>
                            <button>Thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}