import { MAIN_FEATURES } from '@/lib/constants/EN';
import Image from 'next/image';
import React from 'react'
import FeaturesImage1 from "../../assets/images/edge-network-XOAgynsg (1).png";
import FeaturesImage2 from "../../assets/images/helix-card-asset.png";

const Features = () => {

  return (
    <div className='w-full bg-black min-h-screen px-[6%] sm:px-[8%] md:px-[12%] py-20 space-y-12'>
      <div className='mb-16'>
        <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Security and speed,<br />automatically configured</h2>
        <p className='text-neutral-400 text-lg max-w-2xl'>Cloud provides enterprise-grade security and performance out of the box. No need to configure firewalls, load balancers, or caching layers — it's all done for you.</p>
      </div>

      <div className="grid grid-cols-2 gap-12">
        <Image src={FeaturesImage1} alt='Features Image 1' className='w-4/5 col-span-1 h-full' width={720} height={720}/>
        <Image src={FeaturesImage2} alt='Features Image 2' className='w-4/5 col-span-1 h-full' width={720} height={720}/>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-8'>
        {MAIN_FEATURES.map((feature, idx) => {
          const Icon = feature.icon
          return (
            <div key={idx} className='p-6 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/70 transition' >
              <div className='flex items-center gap-3 mb-4'>
                <Icon className='w-5 h-5 text-blue-400' />
                <h4 className='font-semibold text-white'>{feature.title}</h4>
              </div>
              <p className='text-neutral-400 text-sm leading-relaxed'>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Features