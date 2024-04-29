import { createContext } from 'react'
import { useState } from 'react'
import Badge from './components/Badge'
import Banner from './components/banner/index'
import Card from './components/card/index'
import { AiOutlineCloudUpload } from "react-icons/ai"

const BannerContext = createContext()

export default function App() {
  const bannerType = 'neutral'
  const isBannerMultiline =  true
  return (
    <>
      <Badge color='red' style='square'>Badge</Badge>
      <BannerContext.Provider value={{bannerType,isBannerMultiline}}>
        <Banner>
          <Banner.Title>Congratulations!</Banner.Title>
          <Banner.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
          </Banner.Text>
        </Banner>
        </BannerContext.Provider>
        <Card icon={<AiOutlineCloudUpload className='icon' />}>
          <Card.Title>Easy Deployment</Card.Title>
          <Card.Text>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Text>
        </Card>
    </>
  )
}

export {BannerContext}
