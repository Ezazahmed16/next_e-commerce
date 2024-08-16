import Contact from '@/components/legals/Contact'
import Master from '@/components/master/Master'
import LegalSkeleton from '@/components/skeleton/LegalSkeleton'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      <Master>
        <Suspense fallback={<LegalSkeleton />}>
          <Contact />
        </Suspense>
      </Master>
    </div>
  )
}

export default page