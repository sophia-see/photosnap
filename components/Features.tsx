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
    <div 
      className={`
        w-full 
        ${isHomePage ? "px-[33px] py-[80px]" : "px-[32px] py-[64px] md:px-[38px] md:py-[112px] lg:px-[48px] lg:py-[112px] 2xl:px-[165px] xl:py-[160px]"}
        flex flex-col gap-[56px] items-center justify-center 
        ${isHomePage ? "lg:flex-row lg:gap-[30px]" : "md:flex-row md:gap-x-[12px] md:gap-y-[72px]  lg:gap-[30px] md:flex-wrap md:items-end"} 
      `}
    >
      {features.map((feature, index) => (
        <Feature
          imgSrc={`/assets/features/desktop/${feature.imgName}.svg`}
          imgAlt={feature.imgAlt}
          name={feature.name}
          description={feature.description}
          key={`${index}`}
          isHomePage={isHomePage}
        />
      ))}
    </div>
  )
}
