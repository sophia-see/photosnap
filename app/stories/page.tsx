"use client"

import Stories, { StoryType } from '@/components/Stories'
import StoryHero from '@/components/stories/StoryHero'
import React from 'react'

const STORIES: StoryType[] = [
  {
    imgName: "mountains",
    imgAlt: "image of a mountain",
    name: "The Mountains",
    author: "John Appleseed",
    date: "April 16th 2020"
  },
  {
    imgName: "cityscapes",
    imgAlt: "cityscape with sunset",
    name: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    date: "April 14th 2020"
  },
  {
    imgName: "18-days-voyage",
    imgAlt: "a man walking",
    name: "18 Days Voyage",
    author: "Alexei Borodin",
    date: "April 11th 2020"
  },
  {
    imgName: "architecturals",
    imgAlt: "spiral architecture",
    name: "Architecturals",
    author: "Samantha Brooke",
    date: "April 9th 2020"
  },
  {
    imgName: "world-tour",
    imgAlt: "mountain in front of sea",
    name: "World Tour 2019",
    author: "Timothy Wagner",
    date: "April 7th 2020"
  },
  {
    imgName: "unforeseen-corners",
    imgAlt: "a tree with a sunset background",
    name: "Unforeseen Corners",
    author: "William Malcolm",
    date: "April 3rd 2020"
  },
  {
    imgName: "king-on-africa",
    imgAlt: "picture of a lion",
    name: "King on Africa: Part II",
    author: "Tom Hillenburg",
    date: "March 29th 2020"
  },
  {
    imgName: "trip-to-nowhere",
    imgAlt: "tree with its own reflection",
    name: "The Trip to Nowhere",
    author: "Felicia Rourke",
    date: "March 21st 2020"
  },
  {
    imgName: "rage-of-the-sea",
    imgAlt: "waves in sea",
    name: "Rage of the Sea",
    author: "Mohammed Abdul",
    date: "March 19th 2020"
  },
  {
    imgName: "running-free",
    imgAlt: "running horses",
    name: "Running Free",
    author: "Michelle",
    date: "March 16th 2020"
  },
  {
    imgName: "behind-the-waves",
    imgAlt: "a large wave",
    name: "Behind the Waves",
    author: "Lamarr Wilson",
    date: "March 11th 2020"
  },
  {
    imgName: "calm-waters",
    imgAlt: "redish pink mountain in front of water",
    name: "Calm Waters",
    author: "Samantha Brooke",
    date: "March 9th 2020"
  },
  {
    imgName: "milky-way",
    imgAlt: "milky way galaxy",
    name: "The Milky Way",
    author: "Benjamin Cruz",
    date: "March 5th 2020"
  },
  {
    imgName: "dark-forest",
    imgAlt: "dark snowy forest",
    name: "Night at the Dark Forest",
    author: "Mohammed Abdul",
    date: "March 4th 2020"
  },
  {
    imgName: "somwarpet",
    imgAlt: "somwarpet flower",
    name: "Somwarpet's Beauty",
    author: "Michelle",
    date: "March 1st 2020"
  },
  {
    imgName: "land-of-dreams",
    imgAlt: "a house with bluish background on mountain",
    name: "Land of Dreams",
    author: "William Malcolm",
    date: "February 25th 2020"
  },
]

export default function StoriesPage() {
  return (
    <div>
      <StoryHero />
      <Stories stories={STORIES} />
      
    </div>
  )
}
