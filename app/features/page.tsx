import Features, { FeatureType } from '@/components/Features'
import Action from '@/components/features/Action'
import FeaturesHero from '@/components/features/FeaturesHero'
import React from 'react'

const FEATURES: FeatureType[] = [
  {
    imgName: "responsive",
    imgAlt: "devices icons",
    name: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    imgName: "no-limit",
    imgAlt: "infinite icon",
    name: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    imgName: "embed",
    imgAlt: "laptop with multiple social media icons",
    name: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
  },
  {
    imgName: "custom-domain",
    imgAlt: "magnifying domain address",
    name: "Custom Domain",
    description: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    imgName: "boost-exposure",
    imgAlt: "bosst exposure icon",
    name: "Boost Your Exposure",
    description: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    imgName: "drag-drop",
    imgAlt: "drag and drop images icon",
    name: "Drag & Drop Image",
    description: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
]

export default function FeaturesPage() {
  return (
    <div>
      <FeaturesHero />
      <Features features={FEATURES}/>
      <Action />
    </div>
  )
}
