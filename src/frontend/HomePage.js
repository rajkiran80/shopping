import React from "react"
import HomeCategory from "./HomeCategory"
import TopProducts from "./TopProducts"
import HomePagecss from './css/HomePage.css'
import Navbar from "./Navbar"

const HomePage=()=>{
    return(
        <div className="homePageContainer">
             <Navbar/>
             <HomeCategory/>
             <TopProducts title="Deals Of The Day"/>
             <TopProducts title="Trending Products"/>
        </div>
    )
}
export default HomePage