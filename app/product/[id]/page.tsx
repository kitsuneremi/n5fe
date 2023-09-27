'use client'
import { signIn, useSession } from 'next-auth/react'
import { useState, useRef, useEffect } from 'react'
import Navbar from '@/components/own/navbar'
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



enum scroll {
    'hidden',
    'absolute'
}


let prevscr: number = 0;

export default function Page() {
    const alchorRef = useRef<HTMLDivElement>(null);
    const testRef = useRef<HTMLDivElement>(null);
    const belowRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState<scroll>(1);

    const { theme } = useTheme()

    const [y, setY] = useState<number>(0)

    const { data: session } = useSession();


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
        console.log(testRef.current!.getBoundingClientRect().top + ' ' + testRef.current!.clientHeight)
        testRef.current?.clientHeight! > window.innerHeight ? setY(-testRef.current!.getBoundingClientRect().top < testRef.current!.clientHeight ? .96 - testRef.current!.getBoundingClientRect().top : testRef.current!.clientHeight) : setY(0)
        prevscr = scr;
        return;
    };


    const handleAddCart = () => {

    }

    return (
        <div className='w-full h-screen overflow-y-scroll flex flex-col gap-4' ref={alchorRef}>
            <div className={`${scroll[show]} flex justify-between w-full px-10 max-lg:px-4 z-10`}>
                <Navbar></Navbar>
            </div>
            <div className='gap-8' style={{ paddingTop: show ? '32px' : '96px' }}>
                <div className='flex flex-col px-16'>
                    <div className='flex w-full min-h-screen h-fit relative pt-16'>
                        <div className='w-3/5 h-fit max-h-screen relative' ref={testRef} style={{ minHeight: childRef.current?.clientHeight }}>
                            <div className={`w-full absolute left-0 flex scroll-smooth`} style={{ top: `${y}px` }} ref={childRef}>
                                <div className='flex h-full flex-col w-1/3 items-center justify-start gap-5 pt-4'>
                                    <div className='relative w-24 h-24'>
                                        <Image fill={true} className='rounded-md hover:border-2 hover:border-black' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                    </div>
                                    <div className='relative w-24 h-24'>
                                        <Image fill={true} className='rounded-md hover:border-2 hover:border-black' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                    </div>
                                    <div className='relative w-24 h-24'>
                                        <Image fill={true} className='rounded-md hover:border-2 hover:border-black' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                    </div>
                                    <div className='relative w-24 h-24'>
                                        <Image fill={true} className='rounded-md hover:border-2 hover:border-black' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                    </div>
                                    <div className='relative w-24 h-24'>
                                        <Image fill={true} className='rounded-md hover:border-2 hover:border-black' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                    </div>
                                </div>
                                <div className='flex-grow'>
                                    <div className='relative w-full h-full max-h-[calc(70vh)]'>
                                        <Image fill={true} sizes='1' className='rounded-md bg-transparent' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5 flex flex-col h-fit gap-5 pl-8'>
                            <div>
                                <p className='text-2xl font-bold'>Tên: Nike Alphafly 2 'Eliud Kipchoge'</p>
                                <p className='text-xl font-semibold'>Loại: Giày thể thao nam</p>
                                <p className='text-xl font-semibold'>Giá: price</p>
                            </div>

                            <div>
                                <div>
                                    <p>Chọn size</p>
                                    <p>Hướng dẫn size</p>
                                </div>
                                <div className='grid grid-cols-3'>
                                    <button className='bg-transparent border-0 hover:border-blue-500 hover:border-2 rounded m-2 py-2'>40</button>
                                    <button className='bg-transparent border-0 hover:border-blue-500 hover:border-2 rounded m-2 py-2'>40</button>
                                    <button className='bg-transparent border-0 hover:border-blue-500 hover:border-2 rounded m-2 py-2'>40</button>
                                    <button className='bg-transparent border-0 hover:border-blue-500 hover:border-2 rounded m-2 py-2'>40</button>
                                    <button className='bg-transparent border-0 hover:border-blue-500 hover:border-2 rounded m-2 py-2'>40</button>
                                </div>

                                <div className='flex flex-col mt-3 gap-3 my-3'>
                                    <button className='px-5 py-3 text-lg font-semibold rounded-lg hover:border-2 hover:border-cyan-400 hover:text-xl'>{session ? 'Buy now' : 'Sign In to buy'}</button>
                                    <button onClick={() => { handleAddCart() }} className='px-5 py-3 text-lg font-semibold rounded-lg hover:border-2 hover:border-cyan-400 hover:text-xl'>Add to cart</button>
                                </div>

                                <div className='w-full flex flex-col gap-3'>
                                    <p className='w-full'>
                                        Eliud Kipchoge believes there are no limits to his potential—or yours. In a design inspired by his mindset, this version of the Alphafly 2 has personal touches from Eliud to remind you to keep reaching for more. These rocket ships help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system joins the two worlds of comfort and speed in running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests.
                                    </p>

                                    <ul>
                                        <li>Colour Shown: White/Chile Red/Coconut Milk/Black</li>
                                        <li>Style: FD6559-100</li>
                                    </ul>
                                    <Dialog>
                                        <DialogTrigger><p className='underline'>View Product Detail</p></DialogTrigger>
                                        <DialogContent className='min-w-[90vw] h-[90vh]'>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    <div className='w-full flex gap-6'>
                                                        <div className=' lg:w-64 lg:h-64 w-32 h-32 relative'>
                                                            <Image fill={true} sizes='1/2' className='rounded-md bg-transparent' alt='aa' src='https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/574d1bd1-8637-4a2f-91a2-fcc623c67d3b/alphafly-2-eliud-kipchoge-road-racing-shoes-3LZ8Nj.png' />
                                                        </div>
                                                        <div className='flex-grow'>
                                                            <p className='text-xl'>Nike Alphafly 2 'Eliud Kipchoge'</p>
                                                            <p>8,059,000₫</p>
                                                        </div>
                                                    </div>
                                                </DialogTitle>
                                                <DialogDescription>
                                                    <div className='flex flex-col w-full'>
                                                        <p>Eliud Kipchoge believes there are no limits to his potential—or yours. In a design inspired by his mindset, this version of the Alphafly 2 has personal touches from Eliud to remind you to keep reaching for more. These rocket ships help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system joins the two worlds of comfort and speed in running matrimony. Enjoy the greatest energy return of all our racing shoes while you chase your personal bests.</p>
                                                        <p className='font-semibold'>Breaking barriers</p>
                                                        <p>This unique design celebrates Eliud's record-breaking 5K performance in 2003, when he was wearing the Nike Zoom Miler athletics spikes with the white base and red stripe through the Swoosh logo. A special "Kipchoge-ism" is on the left insole, while the location and record time of his ground-breaking performance sit on the right insole.</p>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>

                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[1600px]' ref={belowRef}>
                        below content
                    </div>
                </div>
            </div>
        </div>
    )
}