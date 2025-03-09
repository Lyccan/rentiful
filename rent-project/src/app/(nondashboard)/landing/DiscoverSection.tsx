"use client";

import React from "react"
import { motion } from "framer-motion";
import Image from "next/image";



const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};


const DiscoverSection = () => {
    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                variants={containerVariants}
                className="py-12 mb-16 bg-white"
            >
                <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                    <motion.div
                        variants={itemVariants}
                        className="my-12 text-center"
                    >
                        <h2 className="font-semibold text-3xl text-gray-800 leading-tight">Explore</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Ache a melhor opção para você!
                        </p>
                        <p className="mt-2 text-gray-500 max-w-3xl mx-auto">
                            Achamos a casa dos seus sonhos para você.
                            Com a nossa ferramenta de busca avançada, você pode encontrar a casa perfeita para você
                            e sua família.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
                        {[{
                            imageSrc: "/landing-icon-wand.png",
                            title: "Reserve seu imóvel",
                            description: "Reserve seu imóvel com antecedência e garanta a melhor experiência de hospedagem.",
                        },
                        {
                            imageSrc: "/landing-icon-calendar.png",
                            title: "Aproveite sua estadia",
                            description: "Vá para seu imovél e comece a aproveitar sua estadia com a família e amigos.",
                        },
                        {
                            imageSrc: "/landing-icon-heart.png",
                            title: "Procure o imovél perfeito",
                            description: "Encontre o imovél perfeito para você e sua família com nossa ferramenta de busca avançada.",
                        },
                        ].map((card, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <DiscoverCard {...card} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const DiscoverCard = ({
    imageSrc,
    title,
    description,
}: {
    imageSrc: string;
    title: string;
    description: string;
}) => (
    <div className="px-4 py-12 shadow-lg rounded-lg bg-primary-50 md:h-72 hover:animate-pulse duration-500">
        <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
            <Image
                src={imageSrc}
                width={30}
                height={30}
                className="w-full h-full"
                alt={title}
            />
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>
        <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
);

export default DiscoverSection;
