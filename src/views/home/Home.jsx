import React from 'react'
import HomeNavbar from '../../components/navbar/HomeNavbar'
import Hero from '../../components/hero/Hero'
import ImpressiveStats from '../../components/home/ImpressiveStats'
import ExploreProducts from '../../components/home/ExploreProducts'
import ClientsFeedback from '../../components/home/ClientsFeedback'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
      <HomeNavbar />
      <Hero />
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mt-8">
          <ImpressiveStats />
          <ExploreProducts />
          <ClientsFeedback />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Home