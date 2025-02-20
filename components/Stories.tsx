"use client"

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

  const formattedStories = React.useMemo(() => {
    return stories.map((story) => ({
      ...story,
      imgSrc: `/assets/stories/${currSize}/${story.imgName}.jpg`,
    }));
  }, [stories, currSize]);

  return (
    <div className='w-full flex flex-col md:flex-row md:flex-wrap'>
      {formattedStories.map((story, index) => (
        <Story
          isHomePage={isHomePage}
          imgSrc={story.imgSrc}
          imgAlt={story.imgAlt}
          name={story.name}
          author={story.author}
          date={story.date}
          key={story.imgSrc}
        />
      ))}
    </div>
  )
}
