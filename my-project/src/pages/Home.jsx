import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from "../Requests";


const Home = () => {
  return (
    <>
    <Main/>
    <Row rowID='1' title='Up Coming' fetchURL={Requests.requestUpcoming}/>
    <Row rowID='2' title='Trending' fetchURL={Requests.requestTrending}/>
    <Row rowID='3' title='TV shows & series' fetchURL={Requests.requestTv}/>
    <Row rowID='4' title='Top Rated' fetchURL={Requests.requestToprated}/>
    <Row rowID='5' title='Popular' fetchURL={Requests.requestPopular}/>

    </>
  )
}

export default Home
