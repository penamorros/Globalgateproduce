/**
 * Products Overview Page
 * 
 * Grid of product category cards with Zavaya branding.
 * Uses alternating Zavaya accent borders on cards.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import Header from '../components/Header'
import Footer, { Tagline } from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { useReveal, useStaggerReveal } from '../hooks/useReveal'

import hassCrateImage from '../assets/images/Hassavocadoscrate.jpeg'
import dragonFruitCrateImage from '../assets/images/Dragonfruitcratered.png'
import dragonFruitCrateYellowImage from '../assets/images/Dragonfruitcrateyellow.png'
import lemonCrateImage from '../assets/images/Lemoncrate.jpeg'
import blueberryCrateImage from '../assets/images/Blueberrycrate.png'
import frozenFruitCratesImage from '../assets/images/frozenfruitcrates.png'
import pulpBoxImage from '../assets/images/Pulpbox.jpeg'

// Zavaya accent colors for alternating borders
const ZAVAYA_ACCENTS = ['brand.teal', 'brand.green', 'brand.orange', 'brand.yellow', 'brand.secondary']

// Product categories data

const PRODUCT_CATEGORIES = [
  {
    id: 'avocados-hass',
    name: { en: 'Zavaya Hass Avocados', es: 'Aguacates Hass Zavaya' },
    description: { en: 'Year-round from certified orchards in Michoacán & Jalisco.', es: 'Todo el año desde huertos certificados en Michoacán y Jalisco.' },
    origin: 'Michoacán & Jalisco',
    category: 'fresh',
    image: hassCrateImage,
  },
  {
    id: 'dragon-fruit-red',
    name: { en: 'Zavaya Dragon Fruit (Red)', es: 'Pitahaya Roja Zavaya' },
    description: { en: 'Magenta flesh, export-ready packaging. Organic available.', es: 'Pulpa magenta, empaque listo para exportar. Orgánico disponible.' },
    origin: 'Yucatán Peninsula',
    category: 'fresh',
    image: dragonFruitCrateImage,
  },
  {
    id: 'dragon-fruit-yellow',
    name: { en: 'Zavaya Dragon Fruit (Yellow)', es: 'Pitahaya Amarilla Zavaya' },
    description: { en: 'Sweet white flesh. Limited supply—ask about availability.', es: 'Pulpa blanca dulce. Suministro limitado—consulta disponibilidad.' },
    origin: 'Yucatán Peninsula',
    category: 'fresh',
    image: dragonFruitCrateYellowImage,
  },
  {
    id: 'lemons',
    name: { en: 'Zavaya Lemons', es: 'Limones Zavaya' },
    description: { en: 'Premium quality lemons packed to your specifications.', es: 'Limones de calidad premium empacados a tus especificaciones.' },
    origin: 'Mexico',
    category: 'fresh',
    image: lemonCrateImage,
  },
  {
    id: 'blueberries',
    name: { en: 'Zavaya Blueberries', es: 'Arándanos Zavaya' },
    description: { en: 'Fresh and frozen options. Seasonal availability.', es: 'Opciones frescas y congeladas. Disponibilidad de temporada.' },
    origin: 'Mexico',
    category: 'fresh',
    image: blueberryCrateImage,
  },
  {
    id: 'frozen',
    name: { en: 'Zavaya Frozen', es: 'Zavaya Congelados' },
    description: { en: 'Avocado cubes, avocado halves, IQF fruits, and more.', es: 'Cubos de aguacate, mitades de aguacate, frutas IQF y más.' },
    origin: 'Mexico',
    category: 'processed',
    image: frozenFruitCratesImage,
    imagePosition: 'center 75%',
  },
  {
    id: 'pulp',
    name: { en: 'Zavaya Pulp', es: 'Pulpa Zavaya' },
    description: { en: 'Avocado, mango, and tropical fruit pulps for foodservice and retail.', es: 'Pulpas de aguacate, mango y frutas tropicales para foodservice y retail.' },
    origin: 'Mexico',
    category: 'processed',
    image: pulpBoxImage,
  },
]

// Placeholder component for boxes/pallets visual
function ProductPlaceholder({ accentColor, height = '180px' }) {
  return (
    <Box
      h={height}
      bg="neutral.cream"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      {/* Grid pattern */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.1"
        bgGradient="repeating-linear-gradient(90deg, transparent, transparent 20px, var(--chakra-colors-brand-primary) 20px, var(--chakra-colors-brand-primary) 21px)"
      />
      <Box
        position="absolute"
        inset="0"
        opacity="0.1"
        bgGradient="repeating-linear-gradient(0deg, transparent, transparent 20px, var(--chakra-colors-brand-primary) 20px, var(--chakra-colors-brand-primary) 21px)"
      />
      
      {/* Placeholder box icon */}
      <VStack spacing={2}>
        <Box
          w="50px"
          h="40px"
          border="3px solid"
          borderColor={accentColor}
          opacity="0.6"
        />
        <Text
          fontSize="xs"
          color="neutral.stone"
          fontWeight="600"
          letterSpacing="0.1em"
          textTransform="uppercase"
        >
          Boxes + Pallets
        </Text>
      </VStack>
    </Box>
  )
}

function Products() {
  const { t, language } = useLanguage()
  const headerRef = useReveal()
  const cardRefs = useStaggerReveal(PRODUCT_CATEGORIES.length, { variant: 'image', staggerDelay: 80 })

  const freshProducts = PRODUCT_CATEGORIES.filter(p => p.category === 'fresh')
  const processedProducts = PRODUCT_CATEGORIES.filter(p => p.category === 'processed')

  return (
    <Box>
      <Header />
      
      <Box as="main" pt="72px">
        {/* Hero Section */}
        <Box py={{ base: 16, md: 24 }} bg="brand.primary" color="white">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <Box ref={headerRef} className="reveal" maxW="700px">
              <HStack spacing={3} mb={3}>
                <Box w="40px" h="3px" bg="brand.teal" />
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.teal"
                  textTransform="uppercase"
                  letterSpacing="0.15em"
                >
                  {t('productsPage.label')}
                </Text>
              </HStack>
              <Heading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                fontWeight="400"
                mb={4}
                letterSpacing="0.02em"
                color="white"
              >
                {t('productsPage.title')}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.900" lineHeight="1.7">
                {t('productsPage.description')}
              </Text>
              
              {/* Brand callout */}
              <HStack mt={6} pt={6} borderTop="1px solid" borderColor="whiteAlpha.300" spacing={2}>
                <Text fontSize="sm" color="whiteAlpha.700">Global Gate Produce (Company)</Text>
                <Box w="6px" h="6px" bg="brand.teal" borderRadius="full" />
                <Text fontSize="sm" color="brand.teal" fontWeight="600">Zavaya (Brand)</Text>
              </HStack>
            </Box>
          </Container>
        </Box>

        {/* Fresh Produce Section */}
        <Box py={{ base: 12, md: 16 }} bg="neutral.offwhite">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <HStack spacing={3} mb={8}>
              <Box w="24px" h="3px" bg="brand.green" />
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.green"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                {t('productsPage.fresh')}
              </Text>
            </HStack>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
              {freshProducts.map((product, index) => (
                <Box
                  key={product.id}
                  ref={cardRefs(index)}
                  className="reveal"
                  as={RouterLink}
                  to={`/products/${product.id}`}
                  bg="white"
                  overflow="hidden"
                  transition="transform 0.2s, box-shadow 0.2s"
                  borderLeft="4px solid"
                  borderLeftColor={ZAVAYA_ACCENTS[index % ZAVAYA_ACCENTS.length]}
                  border="1px solid"
                  borderColor="neutral.border"
                  _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
                  sx={{
                    borderLeftWidth: '4px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: `var(--chakra-colors-${ZAVAYA_ACCENTS[index % ZAVAYA_ACCENTS.length].replace('.', '-')})`,
                  }}
                >
                  {product.image ? (
                    <Box
                      h="180px"
                      bg="neutral.cream"
                      overflow="hidden"
                      position="relative"
                    >
                      <Box
                        as="img"
                        src={product.image}
                        alt={product.name[language]}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                    </Box>
                  ) : (
                    <ProductPlaceholder accentColor={ZAVAYA_ACCENTS[index % ZAVAYA_ACCENTS.length]} />
                  )}
                  
                  <VStack align="flex-start" spacing={3} p={6}>
                    <Box>
                      <Heading
                        as="h3"
                        fontSize="lg"
                        fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                        fontWeight="400"
                        letterSpacing="0.05em"
                        color="brand.primary"
                        mb={1}
                      >
                        {product.name[language].toUpperCase()}
                      </Heading>
                      <Text fontSize="xs" color="brand.teal" fontWeight="600">
                        {product.origin}
                      </Text>
                    </Box>
                    
                    <Text fontSize="sm" color="neutral.stone" lineHeight="1.6">
                      {product.description[language]}
                    </Text>
                    
                    <Text fontSize="xs" color="brand.primary" fontWeight="600" textTransform="uppercase" letterSpacing="0.1em">
                      {t('products.learnMore')} →
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Processed Products Section */}
        <Box py={{ base: 12, md: 16 }} bg="neutral.cream">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <HStack spacing={3} mb={8}>
              <Box w="24px" h="3px" bg="brand.orange" />
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.orange"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                {t('productsPage.processed')}
              </Text>
            </HStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              {processedProducts.map((product, index) => (
                <Box
                  key={product.id}
                  ref={cardRefs(freshProducts.length + index)}
                  className="reveal"
                  as={RouterLink}
                  to={`/products/${product.id}`}
                  bg="white"
                  overflow="hidden"
                  transition="transform 0.2s, box-shadow 0.2s"
                  borderLeft="4px solid"
                  borderLeftColor={ZAVAYA_ACCENTS[(freshProducts.length + index) % ZAVAYA_ACCENTS.length]}
                  border="1px solid"
                  borderColor="neutral.border"
                  _hover={{ transform: 'translateY(-4px)', boxShadow: 'lg' }}
                  sx={{
                    borderLeftWidth: '4px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: `var(--chakra-colors-${ZAVAYA_ACCENTS[(freshProducts.length + index) % ZAVAYA_ACCENTS.length].replace('.', '-')})`,
                  }}
                >
                  {product.image ? (
                    <Box
                      h={product.id === 'frozen' || product.id === 'pulp' ? '207px' : '180px'}
                      bg="neutral.cream"
                      overflow="hidden"
                      position="relative"
                    >
                      <Box
                        as="img"
                        src={product.image}
                        alt={product.name[language]}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        objectPosition={product.imagePosition || 'center'}
                      />
                    </Box>
                  ) : (
                    <ProductPlaceholder
                      accentColor={ZAVAYA_ACCENTS[(freshProducts.length + index) % ZAVAYA_ACCENTS.length]}
                      height={product.id === 'frozen' || product.id === 'pulp' ? '207px' : '180px'}
                    />
                  )}
                  
                  <VStack align="flex-start" spacing={3} p={6}>
                    <Box>
                      <Heading
                        as="h3"
                        fontSize="lg"
                        fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                        fontWeight="400"
                        letterSpacing="0.05em"
                        color="brand.primary"
                        mb={1}
                      >
                        {product.name[language].toUpperCase()}
                      </Heading>
                      <Text fontSize="xs" color="brand.teal" fontWeight="600">
                        {product.origin}
                      </Text>
                    </Box>
                    
                    <Text fontSize="sm" color="neutral.stone" lineHeight="1.6">
                      {product.description[language]}
                    </Text>
                    
                    <Text fontSize="xs" color="brand.primary" fontWeight="600" textTransform="uppercase" letterSpacing="0.1em">
                      {t('products.learnMore')} →
                    </Text>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        
        {/* Placeholder note */}
        <Box py={4} bg="neutral.cream">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <Text fontSize="xs" color="neutral.stone" textAlign="center" fontStyle="italic">
              {t('exportScale.placeholderNote')}
            </Text>
          </Container>
        </Box>
      </Box>

      <Tagline />
      <Footer />
    </Box>
  )
}

export default Products
