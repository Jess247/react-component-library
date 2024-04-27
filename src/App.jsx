import { createContext } from 'react'
import { useState } from 'react'
import Badge from './components/Badge'
import Banner from './components/banner/index'

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
    </>
  )
}

export {BannerContext}
