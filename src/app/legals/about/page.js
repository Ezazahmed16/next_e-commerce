import About from '@/components/legals/About'
import Master from '@/components/master/Master'
import LegalSkeleton from '@/components/skeleton/LegalSkeleton'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      <Master>
        <Suspense fallback={<LegalSkeleton />}>
          <About />
        </Suspense>
      </Master>
    </div>
  )
}

export default page