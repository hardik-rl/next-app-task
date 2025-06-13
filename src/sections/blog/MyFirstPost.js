import React from 'react'
import HeadingLg from '@/components/HeadingLg'
import bannerImg from "../../../public/images/banner.png"
import Image from 'next/image'

const MyFirstPost = () => {
    return (
        <section className="bg-white">
            <nav className="breadcrumb pt-64">
                <a href="/" >Home</a>
                <span>/</span>
                <a href="/blog" className='breadcrumb__active'>Articles</a>
                <span>/</span>
            </nav>
            <HeadingLg>The Ultimate Guide to Full-Body Workouts</HeadingLg>
            <div className='hero-banner'>
                <Image src={bannerImg} alt="banner" />
            </div>
            <div className="container py-60">
                container
            </div>
        </section>
    )
}

export default MyFirstPost