'use client'
import { SiNike } from 'react-icons/si'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineHeart, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ReduceString } from '@/lib/functional'
import Link from 'next/link'
import { ScrollArea } from "@/components/ui/scroll-area"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { Separator } from '@/components/ui/separator'
import { signOut, useSession } from 'next-auth/react'
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";


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


const searchSuggestProduct: Product[] = [
    {
        id: 0,
        name: 'Air force 1',
        price: 4550000
    },
    {
        id: 1,
        name: 'Air max',
        price: 4550000
    },
    {
        id: 2,
        name: 'Air jordan',
        price: 4550000
    },
    {
        id: 3,
        name: 'Air zoom pegasus 39',
        price: 4550000
    }
    ,
    {
        id: 4,
        name: 'Air zoom pegasus 39',
        price: 4550000
    }
    ,
    {
        id: 5,
        name: 'Air zoom pegasus 39',
        price: 4550000
    }

]


export default function Page() {

    const [searchValue, setSearchValue] = useState<string>('')
    const { data: session } = useSession();
    const { setTheme, theme } = useTheme();

    return (
        <>
            <div className='p-5 max-lg:p-4'>
                <Link href={'/'}><SiNike className='text-5xl' /></Link>
            </div>

            <div className='flex gap-3 my-auto'>

                {customiseHoverCard({
                    title: 'New and Featured', child: <div className='w-max max-w-lg h-fit left-0'>
                        <div className='grid grid-cols-2 gap-5 flex-wrap w-max p-6'>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                            </div>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                            </div>
                            <div className='flex flex-col w-max'>
                                <h3 className={` text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                            </div>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                            </div>
                        </div>
                    </div>
                })}

                {customiseHoverCard({
                    title: 'Men', child: <div className='w-max max-w-lg h-fit left-0'>
                        <div className='grid grid-cols-2 gap-5 flex-wrap w-max p-6'>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                                <p>Customize Nike with you</p>
                            </div>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                            </div>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                            </div>
                            <div className='flex flex-col w-max'>
                                <h3 className={`text-xl`}>New and Featured</h3>
                                <p>Latest shoes</p>
                            </div>
                        </div>
                    </div>
                })}

                <p className='text-xl p-5 cursor-pointer relative max-lg:hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-500'>Women</p>
                <p className='text-xl p-5 cursor-pointer relative max-lg:hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-500'>Kids</p>
            </div>

            <div className='flex gap-2'>

                <Sheet>
                    <SheetTrigger>
                        <div className='flex gap-1 h-fit px-3 py-1 rounded-3xl'>
                            <FiSearch className='text-2xl my-auto' />
                            <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type='text' placeholder='Search' className={`w-48 h-10 bg-transparent outline-none border-0 hover:border-0 leading-10`} />
                        </div>
                    </SheetTrigger>
                    <SheetContent side={'top'}>
                        <SheetHeader>
                            <SheetDescription>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex justify-between px-auto'>
                                        <SiNike className='text-5xl' />
                                        <div className='flex flex-col gap-8'>
                                            <div className='flex gap-1 h-fit px-3 py-1 rounded-3xl'>
                                                <FiSearch className='text-2xl my-auto' />
                                                <input value={searchValue} onChange={e => setSearchValue(e.target.value)} type='text' placeholder='Search' className='w-96 max-lg:w-56 h-10 bg-transparent outline-none border-0 hover:border-0 leading-10 text-black' />
                                            </div>
                                            {searchValue.length == 0 ?
                                                <div>
                                                    <p className='text-lg'>Suggested search items</p>
                                                    {suggetedProduct.map((product) => {
                                                        return <p key={product.id} className='text-lg text-black'>{product.name}</p>
                                                    })}
                                                </div>
                                                :
                                                <></>
                                            }
                                        </div>
                                        <div></div>
                                    </div>
                                    {searchValue.length > 0 ?
                                        <div className='flex gap-6 w-full px-auto justify-center'>
                                            <div className='flex flex-col w-56'>
                                                <p className='text-lg'>Suggested items for {ReduceString({ string: searchValue, maxLength: 20 })}</p>
                                                {
                                                    searchSuggestProduct.map(product => {
                                                        return <p key={product.id} className='text-lg'>{product.name}</p>
                                                    })
                                                }
                                            </div>
                                            <div className='flex flex-row gap-3 overflow-auto flex-wrap max-h-[320px]'>
                                                {
                                                    searchSuggestProduct.map(product => {
                                                        return (
                                                            <div className='w-[200px] h-[320px] flex flex-col text-center' key={product.id}>
                                                                <Link href={`/product/${product.name}`}>
                                                                    <div className='relative w-full h-[260px]'>
                                                                        <Image fill={true} alt='' src='https://static.nike.com/a/images/t_default/1a7e3ec3-f556-460f-aa3e-24ec799ea8eb/air-force-1-shadow-shoes-C6jcPH.png' />
                                                                    </div>
                                                                    <div>
                                                                        <p className='text-lg'>{product.name}</p>
                                                                        <p className='text-lg'>{product.price}</p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div> : <></>}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <div className='my-auto flex gap-2'>
                    <AiOutlineHeart className='text-[40px]' />
                    <Link href='/cart'><BsBag className='text-[35px]' /></Link>
                    <Popover>
                        <PopoverTrigger>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>
                                    <AiOutlineLoading3Quarters />
                                </AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Menu cài đặt nhanh</h4>
                                </div>

                                <div className="grid gap-2">
                                    {session ? <>
                                        <div className="flex items-center gap-4 p-2 hover:bg-slate-400">
                                            <VscAccount />
                                            <p className='text-xl'>Cài đặt tài khoản</p>
                                        </div>
                                        <Separator className='m-0' />
                                        <div className="flex items-center gap-4 p-2 hover:bg-slate-400">
                                            <VscAccount />
                                            <p className='text-xl'>Chế độ đêm</p>
                                            <Switch
                                                checked={theme === 'dark'}
                                                onCheckedChange={e => setTheme(e ? 'dark' : 'light')}
                                            />
                                        </div>
                                        <Separator className='m-0' />
                                        <div className="flex items-center gap-4 p-2 hover:bg-slate-400">
                                            <VscAccount />
                                            <p className='text-xl'>Cài đặt</p>
                                        </div>
                                        <Separator className='m-0' />
                                        <div className="flex items-center gap-4 p-2 hover:bg-slate-400">
                                            <VscAccount />
                                            <p className='text-xl' onClick={() => { signOut() }}>Đăng xuất</p>
                                        </div>
                                    </> : <>
                                        <div className="flex items-center gap-4 p-2 hover:bg-slate-400">
                                            <VscAccount />
                                            <p className='text-xl'>Chế độ đêm</p>
                                            <Switch
                                                checked={theme === 'dark'}
                                                onCheckedChange={e => setTheme(e ? 'dark' : 'light')}
                                            />
                                        </div>
                                        <div className="flex items-center gap-4 p-2 hover:bg-slate-400">
                                            <VscAccount />
                                            <Link href={'/register'}><p className='text-xl'>Đăng nhập</p></Link>
                                        </div>
                                    </>}

                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </>
    )
}


const customiseHoverCard = ({ title, child }: { title: string, child: React.ReactElement }) => {
    return (
        // <HoverCard>
        //     <HoverCardTrigger>
        //         <p className='text-xl p-5 cursor-pointer relative max-lg:hidden hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-500'>{title}</p>
        //     </HoverCardTrigger>
        //     <HoverCardContent >
        //         {child}
        //     </HoverCardContent>
        // </HoverCard>
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-teal-500'>
                        <p className='text-xl p-5 cursor-pointer relative max-lg:hidden '>{title}</p>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        {child}
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}