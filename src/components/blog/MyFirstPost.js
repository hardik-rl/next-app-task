"use client"
import React from 'react'
import HeadingLg from '@/shared/HeadingLg'
import bannerImg from "../../../public/images/banner.png";
import avatar from "../../../public/images/alex.jpg";
import Image from 'next/image'
import Testimonial from './Testimonial'
import Link from 'next/link'
import TourGuideList from './TourGuideList'
import Comments from './Comments'
import PostCard from './PostCard'
import ArticlesCard from '@/shared/ArticlesCard'

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
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <div className="post-header">
                            <div className="post-header__author">
                                <Image src={avatar} alt="Author avatar" width={50} height={50} />
                                <span>Alex Carter</span>
                            </div>
                            <span className="post-header__date">23 January 2025</span>
                        </div>

                        <div className="post-content">
                            <p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>

                            <p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>

                            <blockquote>
                                With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
                            </blockquote>

                            <p>
                                With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            </p>

                            <p>
                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            </p>
                        </div>
                        <Testimonial />
                    </div>
                    <div className="col-3">
                        <Link href={"#0"} className="explore-more-link">Explore more</Link>
                        <PostCard
                            image="https://picsum.photos/512/300"
                            category="Travel"
                            date="20 July 2022"
                            description="Two women in local stand are chatting during morning.."
                        />
                        <PostCard
                            image="https://picsum.photos/512/300"
                            category="Travel"
                            date="21 July 2022"
                            description="Enjoying the sunset on Padar island together"
                        />
                        <PostCard
                            image="https://picsum.photos/512/300"
                            category="Travel"
                            date="22 July 2022"
                            description="The lush green surroundings of the campgrounds create a.."
                        />
                        <TourGuideList />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyFirstPost