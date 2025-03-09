import { NAVBAR_HEIGHT } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <div
            className="fixed top-0 w-full left-0 z-50 shadow-xl"
            style={{ height: `${NAVBAR_HEIGHT}px` }}>
            <div className="justify-between flex items-center w-full py-3 px-8 bg-primary-700">
                <div className="flex items-center gap-4 md:gap-6">
                    <Link href="/"
                        className="cursor-pointer hover:!text-primary-300">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={24}
                                height={24}
                                className="text-xl font-bold"
                            />
                            <div className="text-xl font-bold">
                                RENT
                                <span className="text-xl font-light text-secondary-600 hover:!text-primary-300">
                                    FUL
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
                <p className="text-primary-200 hidden md:block">Descubra o apartamento perfeito para você!</p>
                <div className="flex items-center gap-5">
                    <Link href={'/signin'}>
                        <Button
                            variant={'outline'}
                            className="text-white border-white bg-transparent hover:bg-white hover:text-primary-800 rounded-lg">
                            Entrar
                        </Button>
                    </Link>
                    <Link href={'/signup'}>
                        <Button variant={'outline'}
                            className="text-white bg-secondary-600 hover:bg-white hover:text-primary-800 rounded-lg">
                            Cadastre-se
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar;
