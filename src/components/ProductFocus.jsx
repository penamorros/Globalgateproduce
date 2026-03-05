/**
 * Product Focus Section - "What We Ship"
 * 
 * Showcases main products with images and detailed attributes.
 * Uses forest green theme with leaf green accents.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { useReveal, useStaggerReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

// Import product images
import avocadoImage from '../assets/images/ZavayaHassAvocados.jpg'
import dragonFruitRedImage from '../assets/images/homepageReddragonfruitcrate.jpg'
import dragonFruitYellowImage from '../assets/images/homepageyellowdragonfruitcrate.jpg'

// Accent colors for bottom borders (forest green theme)
const ACCENT_COLORS = ['accent.leaf', 'brand.teal', 'brand.green']

// Products data with translations and full attributes
const getProducts = (language) => [
  {
    id: 'avocados',
    name: language === 'en' ? 'Zavaya Hass Avocados' : 'Aguacates Hass Zavaya',
    origin: 'Michoacán & Jalisco',
    description: language === 'en'
      ? 'Year-round from certified orchards. We can match most size and pack specs.'
      : 'Todo el año desde huertos certificados. Podemos cumplir la mayoría de especificaciones de tamaño y empaque.',
    image: avocadoImage,
    link: '/products/avocados-hass',
    attributes: [
      { label: language === 'en' ? 'SIZES' : 'TAMAÑOS', value: '32, 36, 40, 48, 60, 70, 84 ct' },
      { label: language === 'en' ? 'PACK' : 'EMPAQUE', value: '10kg / 25lb' },
      { label: language === 'en' ? 'SEASON' : 'TEMPORADA', value: language === 'en' ? 'Year-round' : 'Todo el año' },
    ],
  },
  {
    id: 'dragon-fruit-red',
    name: language === 'en' ? 'Zavaya Dragon Fruit (Red)' : 'Pitahaya Roja Zavaya',
    origin: language === 'en' ? 'Yucatán Peninsula' : 'Península de Yucatán',
    description: language === 'en'
      ? 'Magenta flesh, export-ready packaging. Organic available.'
      : 'Pulpa magenta, empaque listo para exportar. Orgánico disponible.',
    image: dragonFruitRedImage,
    link: '/products/dragon-fruit-red',
    attributes: [
      { label: language === 'en' ? 'FLESH' : 'PULPA', value: language === 'en' ? 'Red / Magenta' : 'Roja / Magenta' },
      { label: language === 'en' ? 'PACK' : 'EMPAQUE', value: '5kg, 10lb' },
      { label: language === 'en' ? 'SEASON' : 'TEMPORADA', value: language === 'en' ? 'May–Nov peak' : 'May–Nov pico' },
    ],
  },
  {
    id: 'dragon-fruit-yellow',
    name: language === 'en' ? 'Zavaya Dragon Fruit (Yellow)' : 'Pitahaya Amarilla Zavaya',
    origin: language === 'en' ? 'Yucatán Peninsula' : 'Península de Yucatán',
    description: language === 'en'
      ? 'Sweet white flesh. Limited supply—ask about availability.'
      : 'Pulpa blanca dulce. Suministro limitado—consulta disponibilidad.',
    image: dragonFruitYellowImage,
    link: '/products/dragon-fruit-yellow',
    attributes: [
      { label: language === 'en' ? 'FLESH' : 'PULPA', value: language === 'en' ? 'White / Sweet' : 'Blanca / Dulce' },
      { label: language === 'en' ? 'PACK' : 'EMPAQUE', value: '5kg' },
      { label: language === 'en' ? 'SEASON' : 'TEMPORADA', value: language === 'en' ? 'Limited' : 'Limitada' },
    ],
  },
]

// Arrow icon for "Learn More"
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

function ProductFocus() {
  const { t, language } = useLanguage()
  const headerRef = useReveal()
  const productRefs = useStaggerReveal(3, { variant: 'image', staggerDelay: 100 })

  const products = getProducts(language)

  const alsoAvailable = language === 'en'
    ? ['Mangos', 'Papayas', 'Lemons', 'Blueberries', 'Frozen', 'Pulp']
    : ['Mangos', 'Papayas', 'Limones', 'Arándanos', 'Congelados', 'Pulpa']

  return (
    <Box as="section" id="products" py={{ base: 16, md: 24 }} bg="neutral.offwhite">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Section Header */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }}>
          <Text
            fontSize="sm"
            fontWeight="600"
            color="brand.forest"
            textTransform="uppercase"
            letterSpacing="0.15em"
            mb={3}
          >
            {t('products.label')}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            mb={4}
            letterSpacing="0.02em"
            color="neutral.charcoal"
          >
            {t('products.title')}
          </Heading>
          <Text fontSize="md" color="neutral.stone" lineHeight="1.7" maxW="550px">
            {t('products.description')}
          </Text>
        </Box>

        {/* Products Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 6 }} mb={10}>
          {products.map((product, index) => (
            <Box
              key={product.id}
              ref={productRefs(index)}
              className="reveal"
              bg="white"
              display="flex"
              flexDirection="column"
            >
              {/* Product Image */}
              <Box position="relative" overflow="hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  objectFit="cover"
                  w="100%"
                  h={{ base: '280px', md: '300px' }}
                />
                {/* Bottom accent border */}
                <Box
                  position="absolute"
                  bottom="0"
                  left="0"
                  right="0"
                  h="4px"
                  bg={ACCENT_COLORS[index % ACCENT_COLORS.length]}
                />
              </Box>

              {/* Product Info */}
              <VStack align="flex-start" spacing={2} p={5} pb={4}>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                  fontWeight="400"
                  letterSpacing="0.05em"
                  color="neutral.charcoal"
                >
                  {product.name.toUpperCase()}
                </Heading>
                <Text fontSize="sm" color="brand.forest" fontWeight="600">
                  {product.origin}
                </Text>
                <Text fontSize="sm" color="neutral.stone" lineHeight="1.6" minH="48px">
                  {product.description}
                </Text>
              </VStack>

              {/* Product Attributes */}
              <Box borderTop="1px solid" borderColor="neutral.border" mt="auto">
                {product.attributes.map((attr, attrIndex) => (
                  <Flex
                    key={attrIndex}
                    justify="space-between"
                    align="center"
                    px={5}
                    py={3}
                    borderBottom={attrIndex < product.attributes.length - 1 ? '1px solid' : 'none'}
                    borderColor="neutral.border"
                  >
                    <Text fontSize="xs" color="neutral.stone" fontWeight="600" letterSpacing="0.08em">
                      {attr.label}
                    </Text>
                    <Text fontSize="sm" color="neutral.charcoal" fontWeight="600">
                      {attr.value}
                    </Text>
                  </Flex>
                ))}
              </Box>

              {/* Learn More Link */}
              <Link
                as={RouterLink}
                to={product.link}
                display="flex"
                alignItems="center"
                gap={2}
                px={5}
                py={4}
                fontSize="sm"
                fontWeight="700"
                color="neutral.charcoal"
                textTransform="uppercase"
                letterSpacing="0.08em"
                _hover={{ color: 'brand.forest' }}
                transition="color 0.2s"
                borderTop="1px solid"
                borderColor="neutral.border"
              >
                {t('products.learnMore')} <ArrowIcon />
              </Link>
            </Box>
          ))}
        </SimpleGrid>

        {/* Also Available Section */}
        <Box textAlign="center">
          <Text fontSize="sm" color="neutral.stone" mb={4}>
            {t('products.alsoAvailable')}{' '}
            <Text as="span" fontWeight="600" color="neutral.charcoal">
              {alsoAvailable.join(', ')}
            </Text>
          </Text>
          <Button
            as={RouterLink}
            to="/products"
            bg="brand.forest"
            color="white"
            _hover={{ bg: 'brand.forestLight' }}
            size="md"
          >
            {t('products.viewAll')}
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default ProductFocus
