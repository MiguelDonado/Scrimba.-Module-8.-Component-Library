import React from 'react'
// import Badge from './components/Badge/Badge'
// import Banner from './components/Banner/index'
import Card from './components/Card/index'
import { FaAirbnb } from "react-icons/fa6"

export default function App () {
  return (
    //<Badge>Badge</Badge>
    //  <Banner status="error">
    //    <Banner.title></Banner.title>
    //    <Banner.text></Banner.text>
    //  </Banner>
    <Card bgIcon="red" width="400px" onClick={() => console.log("Opened/closed")}>
      <Card.Title>Easy Deployment</Card.Title>
      <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
    </Card>  
  )
}




