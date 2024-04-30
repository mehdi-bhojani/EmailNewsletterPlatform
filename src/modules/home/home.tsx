import Header from '@/app/shared/widgets/header/Header'
import React from 'react'
import Banner from './elements/Banner'
import Branding from './elements/Branding'
import Benefits from './elements/Benifits'
import FeatureHighlight from './elements/FeatureHighlight'
import Pricing from './elements/Pricing'
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