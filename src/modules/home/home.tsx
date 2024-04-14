import Header from '@/app/shared/widgets/header/Header'
import React from 'react'
import Banner from './features/Banner'
import Branding from './features/Branding'
import Benefits from './features/Benifits'
import FeatureHighlight from './features/FeatureHighlight'
import Pricing from './features/Pricing'
import Footer from '@/app/shared/widgets/footer/Footer';

function home() {
  return (
    <div>
      <Header />
      <Banner />
      <Branding />
      <Benefits />
      <FeatureHighlight />
      <Pricing />
      <Footer />
    </div>
  )
}

export default home