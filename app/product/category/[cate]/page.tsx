'use client'
import Navbar from '@/components/own/navbar'
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Checkbox } from '@/components/ui/checkbox';
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

const testList: Product[] = [
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
export default function Page({ params }: { params: { cate: string } }) {

    const [show, setShow] = useState<scroll>(1);
    const [showFilter, setShowFilter] = useState<boolean>(true);
    const [filterCanScroll, setFilterCanScroll] = useState<boolean>(false);

    const { theme } = useTheme();

    const alchorRef = useRef<HTMLDivElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (alchorRef.current) {
            alchorRef.current.addEventListener('scroll', (e) => { handleScroll(e) })
            return (
                alchorRef.current.removeEventListener('scroll', (e) => { handleScroll(e) })
            )
        }
    }, []);

    useEffect(() => {
        if (filterRef.current) {
            filterRef.current.addEventListener('scroll', (e) => { handleFilterScroll(e) });
            return (
                filterRef.current.removeEventListener('scroll', (e) => { handleFilterScroll(e) })
            )
        }

    }, []);

    const handleFilterScroll = (e: any) => {
        if (!filterCanScroll) {
            e.preventDefault();
        }
    }



    const handleScroll = (e: Event) => {
        console.log(filterCanScroll)
        if (filterCanScroll) {
            e.preventDefault();
        } else {
            let scr = alchorRef.current!.scrollTop;
            if (prevscr > scr || scr == 0) {
                setShow(1)
            } else {
                setShow(0)
            }
            prevscr = scr;
            return;
        }

    };
    return (
        <div className='w-full max-h-screen flex flex-col gap-4 overflow-y-hidden'>
            <div className={`${scroll[show]} flex justify-between w-full px-10 max-lg:px-4 z-10`}>
                <Navbar></Navbar>
            </div>
            <div className={`w-full pl-12 ${show == 1 ? 'pt-24' : 'pt-6'} flex flex-col gap-4`}>


                <div className='w-full flex justify-between pr-12'>
                    <div className='flex flex-col gap-2'>
                        <p className={`${show == 1 ? 'text-2xl font-semibold' : 'text-4xl font-bold'}`}>Phân loại {params ? params.cate : ''}</p>
                        <p>99 sản phẩm</p>
                    </div>
                    <div className='flex gap-4'>
                        <p className='my-auto' onClick={() => { setShowFilter(prev => !prev) }}>Bộ lọc</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger>Sắp xếp theo</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Sắp có</DropdownMenuItem>
                                <DropdownMenuItem>Mới nhất</DropdownMenuItem>
                                <DropdownMenuItem>{`Giá: Cao -> Thấp`}</DropdownMenuItem>
                                <DropdownMenuItem>{`Giá: Thấp -> Cao`}</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>


                <div className='flex max-h-[calc(100vh-88px)]'>


                    <div className={`flex h-full overflow-y-scroll flex-col gap-3 ${showFilter ? 'w-1/6' : 'w-0'}`} ref={filterRef} onMouseEnter={() => { setFilterCanScroll(true) }} onMouseLeave={() => setFilterCanScroll(false)}>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Giới tính</AccordionTrigger>
                                <AccordionContent>
                                    <div className='w-full flex flex-col gap-3'>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="male" />
                                            <Label htmlFor="male">Nam</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="female" />
                                            <Label htmlFor="female">Nữ</Label>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Separator />
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Giá cả</AccordionTrigger>
                                <AccordionContent>
                                    <div className='w-full flex flex-col gap-3'>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="lowprice" />
                                            <Label htmlFor="lowprice">1,000,000 - 2,000,000 </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="middleprice" />
                                            <Label htmlFor="middleprice">2,000,000 - 4,000,000</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="upprice" />
                                            <Label htmlFor="upprice">4,000,000 trở lên</Label>
                                        </div>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Separator />
                    </div>


                    <div className={`grid lg:grid-cols-3 grid-cols-2 ${showFilter ? 'w-5/6' : 'w-full'} overflow-y-scroll`} ref={alchorRef}>
                        {testList.map((product, index) => {
                            return (
                                <div className='w-full flex flex-col gap-1 p-4' key={index}>
                                    <Link href={`/product/${product.id}`}>
                                        <img className='w-full h-auto' alt='' src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46e537d4-38f1-4ab6-86e3-9316a7450d43/metcon-9-workout-shoes-ldMsxB.png' />
                                        <p className='text-xl'>{product.name}</p>
                                        <p>category</p>
                                        <p>options</p>
                                        <p>{product.price}</p>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        // <div className='w-full flex flex-col gap-4'>
        //     <div className={`${scroll[show]} flex justify-between w-full px-10 max-lg:px-4 z-10 ${theme === 'light' ? 'bg-white' : ''} ${theme === 'dark' ? 'bg-black' : ''}`}>
        //         <Navbar></Navbar>
        //     </div>
        //     <div className='w-full px-16 pt-24 flex flex-col gap-4'>
        //         <div>

        //         </div>
        //     </div>
        // </div>

    )
} 