import React from "react"
import Navigation from "../Components/Navigation"
import HomeCarousel from "../Components/Carousel"
import HomeCards from "../Components/HomeCards"
import Footer from "../Components/footer"

const HomePage = () => {
    return (
        <>
        <Navigation />
        
        <HomeCarousel />
        
        <HomeCards />

        <div style={{height: 200}}>
        </div>

        <Footer />
        </>
    )}

export default HomePage