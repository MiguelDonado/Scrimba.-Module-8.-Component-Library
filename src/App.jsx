import React from 'react'
// import Badge from './components/Badge/Badge'
// import Banner from './components/Banner/index'
// import Card from './components/Card/index'
// import { FaAirbnb } from "react-icons/fa6"
import Testimonial from "./components/Testimonial/index"


export default function App () {
  return (
    //<Badge>Badge</Badge>
    //  <Banner status="error">
    //    <Banner.title></Banner.title>
    //    <Banner.text></Banner.text>
    //  </Banner>
    //<Card bgIcon="red" width="400px" onClick={() => console.log("Opened/closed")}>
    //  <Card.Title>Easy Deployment</Card.Title>
    //  <Card.Description>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</Card.Description>
    // </Card> 
    <Testimonial imgSrc={"https://shorturl.at/oqtzX"} name="May Andersons" worklocation="Workcation, CTO">
      <Testimonial.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </Testimonial.Description>
    </Testimonial>
  )
}




