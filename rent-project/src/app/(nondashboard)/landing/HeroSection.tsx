"use client"

import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
    return (
        <div className="relative h-screen">
            <Image
                src="/landing-splash.jpg"
                alt="Hero Section"
                fill
                className='object-cover object-center'
                priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='absolute top-1/3 transform -translate-y-1/2 text-center w-full'
            >
                <div className="max-w-4xl mx-auto px-16 sm:px-12">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        Comece já a procurar o lugar perfeito para você
                    </h1>
                    <p className='text-white text-xl mb-8'>
                        Explore milhares de imóveis disponíveis para aluguel no Brasil!
                    </p>
                    <div className='flex justify-center'>
                        <Input
                            type='text'
                            value={'search query'}
                            onChange={() => { }}
                            placeholder='Procure por um endereço'
                            className='w-full max-w-lg rounded-none rounded-l-xl bg-white h-12'>
                        </Input>
                        <Button onChange={() => { }} className='rounded-none rounded-r-xl h-12 bg-secondary-600 text-white'>
                            Buscar
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default HeroSection;
