import React from 'react'
import Story from './Story'
import useDeviceSize from '@/hooks/use-device-size'

export default function Stories() {
  const {currSize} = useDeviceSize();

  return (
    <div className='w-full'>
      <Story
        isHomePage={true}
        imgSrc={`/assets/stories/${currSize}/mountains.jpg`}
        imgAlt='image of a mountain'
        name='The Mountains'
        author='John Appleseed'
      />
      <Story
        isHomePage={true}
        imgSrc={`/assets/stories/${currSize}/cityscapes.jpg`}
        imgAlt='image of a mountain'
        name='Sunset Cityscapes'
        author='Benjamin Cruz'
      />
      <Story
        isHomePage={true}
        imgSrc={`/assets/stories/${currSize}/18-days-voyage.jpg`}
        imgAlt='a man walking'
        name='18 Vays voyage'
        author='Alexei Borodin'
      />
      <Story
        isHomePage={true}
        imgSrc={`/assets/stories/${currSize}/architecturals.jpg`}
        imgAlt='spiral architecture'
        name='Architecturals'
        author='Samantha Brooke'
      />
    </div>
  )
}
