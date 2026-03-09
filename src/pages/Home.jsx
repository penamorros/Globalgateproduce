/**
 * Home Page
 * 
 * Main landing page with all sections.
 */

import { Box } from '@chakra-ui/react'

// Import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import ExportScale from '../components/ExportScale'
import Capabilities from '../components/Capabilities'
import ProductFocus from '../components/ProductFocus'
import Quality from '../components/Quality'
import ContactForm from '../components/ContactForm'
import Footer, { Tagline } from '../components/Footer'

function Home() {
  return (
    <Box>
      <Header />
      
      <Box as="main">
        <Hero />
        <ExportScale />
        <Capabilities />
        <ProductFocus />
        <Quality />
        <ContactForm />
      </Box>
      
      <Tagline />
      <Footer />
    </Box>
  )
}

export default Home
