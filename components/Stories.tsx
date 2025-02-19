import React from 'react'
import Story from './Story'
import useDeviceSize from '@/hooks/use-device-size'

export type StoryType = {
  imgName: string;
  imgAlt: string;
  name: string;
  author: string;
  date?: string;
}

interface StoriesProps {
  stories: StoryType[];
  isHomePage?: boolean;
}

export default function Stories({ stories, isHomePage = false }: StoriesProps) {
  const {currSize} = useDeviceSize();

  return (
    <div className='w-full'>
      
      {stories.map((story, index) => (
        <Story
          isHomePage={isHomePage}
          imgSrc={`/assets/stories/${currSize}/${story.imgName}.jpg`}
          imgAlt={story.imgAlt}
          name={story.name}
          author={story.author}
          key={`${index}`}
        />
      ))}
    </div>
  )
}
