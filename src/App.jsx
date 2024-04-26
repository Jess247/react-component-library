import { useState } from 'react'
import Badge from './components/Badge'
import Banner from './components/banner/index'


function App() {

  return (
    <>
      <Badge color='red' style='square'>Badge</Badge>
      <Banner type="neutral" isMultiline={true}>
        <Banner.Title>Congratulations!</Banner.Title>
        <Banner.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
        </Banner.Text>
      </Banner>
    </>
  )
}

export default App
