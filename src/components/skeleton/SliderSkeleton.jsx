'use client'
import Lottie from 'lottie-react'
import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import bannerLottie from '../../assets/lottie/bannerlottie.json'

const SliderSkeleton = () => {
    return (
        <div className='max-w-screen-xl mx-auto grid grid-cols-2 gap-5 justify-center items-center min-h-96'>
            <div className="">
                <SkeletonTheme baseColor="#00BBA6" highlightColor="#242C36">
                    <p className=''>
                        <Skeleton count={4} />
                    </p>
                </SkeletonTheme>
            </div>
            <div className="">
                <Lottie className='w-64 m-auto' animationData={bannerLottie} loop={true} />
            </div>
        </div>
    )
}

export default SliderSkeleton