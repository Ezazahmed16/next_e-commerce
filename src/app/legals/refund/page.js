import Refund from '@/components/legals/Refund'
import Master from '@/components/master/Master'
import LegalSkeleton from '@/components/skeleton/LegalSkeleton'
import React, { Suspense } from 'react'


const page = () => {
  return (
    <div>
      <Master>
        <Suspense fallback={<LegalSkeleton />}>
          <Refund />
        </Suspense>
      </Master>
    </div>
  )
}

export default page