import { createContext } from 'react'
import { useState } from 'react'
import Badge from './components/Badge'
import Banner from './components/banner/index'
import Card from './components/card/index'
import TestimonialWithPic from './components/testimonial/index'
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

      <TestimonialWithPic img="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D">
        <TestimonialWithPic.Text name="Alex Mayer" company="Workcation, OTO">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est 
        integer dolor auctor adipiscing nunc urna, sit. 
        </TestimonialWithPic.Text>
      </TestimonialWithPic>     
      <TestimonialWithPic.NoPic>
        <TestimonialWithPic.Text name="Alex Mayer" company="Workcation, OTO">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est 
        integer dolor auctor adipiscing nunc urna, sit. 
        </TestimonialWithPic.Text>
      </TestimonialWithPic.NoPic>
    </>
  )
}

export {BannerContext}
