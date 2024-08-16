'use client'

import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const LegalSkeleton = () => {
    return (
        <div className='max-w-screen-xl mx-auto justify-center items-center'> 
            <SkeletonTheme baseColor="#00BBA6" highlightColor="#242C36">
                <p className=''>
                    <Skeleton count={12} />
                </p>
            </SkeletonTheme>
        </div>
    )
}

export default LegalSkeleton