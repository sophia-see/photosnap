import React from 'react'
import Feature from './Feature';

export type FeatureType = {
  imgName: string;
  imgAlt: string;
  name: string;
  description: string;
}

interface StoriesProps {
  features: FeatureType[];
  isHomePage?: boolean;
}

export default function Features({ features, isHomePage = false }: StoriesProps) {

  return (
    <div className='w-full px-[33px] py-[80px] flex flex-col gap-[56px] items-center justify-center lg:flex-row lg:gap-[30px]'>
      {features.map((feature, index) => (
        <Feature
          imgSrc={`/assets/features/desktop/${feature.imgName}.svg`}
          imgAlt={feature.imgAlt}
          name={feature.name}
          description={feature.description}
          key={`${index}`}
        />
      ))}
    </div>
  )
}
