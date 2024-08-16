import React from 'react'

const LoaderButton = () => {
    return (
        <div>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md btn-success btn-outline">
                <span className="loading loading-spinner"></span>
            </button>
        </div>
    )
}

export default LoaderButton