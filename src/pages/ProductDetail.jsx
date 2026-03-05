/**
 * ProductDetail Page
 * 
 * Shared template component for individual product pages.
 * Uses Zavaya brand colors (magenta/teal) since it's part of the Products section.
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
  Flex,
  List,
  ListItem,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import Header from '../components/Header'
import Footer, { Tagline } from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { useReveal } from '../hooks/useReveal'

import hassAvocadoImage from '../assets/images/Hassavocado.jpeg'
import redDragonFruitImage from '../assets/images/Reddraginfruit.jpg'
import yellowDragonFruitImage from '../assets/images/Yellowdragonfruit.jpg'
import lemonImage from '../assets/images/Lemon.jpeg'
import blueberriesImage from '../assets/images/Blueberries.jpg'
import fruitPulpImage from '../assets/images/Fruitpulp.jpeg'
import mangoPulpImage from '../assets/images/Mangopulp.jpg'
import passionfruitPulpImage from '../assets/images/Passionfruitpulp.jpg'
import guavaPulpImage from '../assets/images/Guavapulp.jpg'
import pineapplePulpImage from '../assets/images/Pineapplepulp.jpg'
import frozenFruitBowlImage from '../assets/images/Frozenfruitbowl.jpg'
import frozenMangoImage from '../assets/images/frozenmango.jpg'
import frozenPineappleImage from '../assets/images/Frozenpineapple.jpg'
import frozenPapayaImage from '../assets/images/Frozenpapaya.jpg'
import frozenFruitsImage from '../assets/images/Frozenfruits.jpg'
import avocadoPulpImage from '../assets/images/Avocadopulpbags.jpeg'
import avocadoHalvesImage from '../assets/images/Avocadohalves.jpeg'
import dicedAvocadosImage from '../assets/images/Dicedavocados.jpeg'

// Check icon
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
  </svg>
)

// Product data by slug
const PRODUCTS_DATA = {
  'avocados-hass': {
    name: { en: 'Zavaya Hass Avocados', es: 'Aguacates Hass Zavaya' },
    image: hassAvocadoImage,
    description: {
      en: 'Premium Hass avocados year-round from certified orchards. We can match most size and pack specifications for export-scale distribution.',
      es: 'Aguacates Hass premium todo el año desde huertos certificados. Podemos cumplir la mayoría de especificaciones de tamaño y empaque para distribución a escala de exportación.',
    },
    origin: ['Michoacán', 'Jalisco'],
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    packaging: [
      { en: '10kg / 25lb boxes', es: 'Cajas de 10kg / 25lb' },
      { en: 'Sizes: 32, 36, 40, 48, 60, 70, 84 ct', es: 'Tamaños: 32, 36, 40, 48, 60, 70, 84 ct' },
      { en: 'Custom pack configurations available', es: 'Configuraciones de empaque personalizadas disponibles' },
    ],
    certifications: ['USDA', 'GlobalGAP', 'SENASICA', 'HACCP'],
    type: 'fresh',
  },
  'dragon-fruit-red': {
    name: { en: 'Zavaya Dragon Fruit (Red)', es: 'Pitahaya Roja Zavaya' },
    image: redDragonFruitImage,
    description: {
      en: 'Vibrant magenta flesh, export-ready packaging. Organic options available for qualifying orders.',
      es: 'Pulpa magenta vibrante, empaque listo para exportar. Opciones orgánicas disponibles para pedidos que califiquen.',
    },
    origin: ['Yucatán Peninsula'],
    seasonality: { en: 'May – November (peak)', es: 'Mayo – Noviembre (temporada alta)' },
    packaging: [
      { en: '5kg clamshells', es: 'Clamshells de 5kg' },
      { en: '10lb boxes', es: 'Cajas de 10lb' },
      { en: 'Export palletization available', es: 'Paletización para exportación disponible' },
    ],
    certifications: ['USDA', 'GlobalGAP', 'Organic (available)'],
    type: 'fresh',
  },
  'dragon-fruit-yellow': {
    name: { en: 'Zavaya Dragon Fruit (Yellow)', es: 'Pitahaya Amarilla Zavaya' },
    image: yellowDragonFruitImage,
    description: {
      en: 'Sweet white flesh with distinctive yellow exterior. Limited seasonal supply—inquire about availability.',
      es: 'Pulpa blanca dulce con exterior amarillo distintivo. Suministro de temporada limitado—consulta disponibilidad.',
    },
    origin: ['Yucatán Peninsula'],
    seasonality: { en: 'Limited seasonal availability', es: 'Disponibilidad de temporada limitada' },
    packaging: [
      { en: '5kg clamshells', es: 'Clamshells de 5kg' },
      { en: 'Custom packaging on request', es: 'Empaque personalizado bajo pedido' },
    ],
    certifications: ['USDA', 'GlobalGAP'],
    type: 'fresh',
  },
  'lemons': {
    name: { en: 'Zavaya Lemons', es: 'Limones Zavaya' },
    image: lemonImage,
    description: {
      en: 'Premium quality lemons packed to your exact specifications. Consistent sizing and quality for retail and foodservice.',
      es: 'Limones de calidad premium empacados a tus especificaciones exactas. Tamaño y calidad consistentes para retail y foodservice.',
    },
    origin: ['Mexico'],
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    packaging: [
      { en: 'Standard cartons', es: 'Cajas estándar' },
      { en: 'Custom sizing available', es: 'Tamaños personalizados disponibles' },
      { en: 'Bulk and retail pack options', es: 'Opciones de empaque bulk y retail' },
    ],
    certifications: ['USDA', 'GlobalGAP', 'FSMA'],
    type: 'fresh',
  },
  'blueberries': {
    name: { en: 'Zavaya Blueberries', es: 'Arándanos Zavaya' },
    image: blueberriesImage,
    description: {
      en: 'Fresh and frozen blueberry options. Premium quality with full cold chain management.',
      es: 'Opciones de arándanos frescos y congelados. Calidad premium con manejo completo de cadena de frío.',
    },
    origin: ['Mexico'],
    seasonality: { en: 'Seasonal (fresh) / Year-round (frozen)', es: 'Temporada (frescos) / Todo el año (congelados)' },
    packaging: [
      { en: 'Fresh: clamshells, pints', es: 'Frescos: clamshells, pints' },
      { en: 'Frozen: IQF bags, bulk', es: 'Congelados: bolsas IQF, bulk' },
    ],
    certifications: ['USDA', 'GlobalGAP', 'HACCP'],
    type: 'fresh',
  },
  'frozen': {
    name: { en: 'Zavaya Frozen Program', es: 'Programa Congelado Zavaya' },
    image: frozenFruitBowlImage,
    cubeImages: {
      Avocado: dicedAvocadosImage,
      Mango: frozenMangoImage,
      Papaya: frozenPapayaImage,
      Pineapple: frozenPineappleImage,
      Mixed: frozenFruitsImage,
    },
    halvesImages: {
      Avocado: avocadoHalvesImage,
    },
    description: {
      en: 'Comprehensive frozen fruit program including avocado cubes, avocado halves, IQF products, and more. Ideal for foodservice and manufacturing.',
      es: 'Programa integral de frutas congeladas incluyendo cubos de aguacate, mitades de aguacate, productos IQF y más. Ideal para foodservice y manufactura.',
    },
    origin: ['Mexico'],
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    packaging: [
      { en: 'IQF bags (various sizes)', es: 'Bolsas IQF (varios tamaños)' },
      { en: 'Bulk containers', es: 'Contenedores bulk' },
      { en: 'Retail-ready packs', es: 'Empaques listos para retail' },
    ],
    certifications: ['USDA', 'HACCP', 'FSMA'],
    type: 'frozen',
    hasCubes: true,
  },
  'pulp': {
    name: { en: 'Zavaya Pulp', es: 'Pulpa Zavaya' },
    image: fruitPulpImage,
    imagePosition: '70% 85%',
    imageMaxW: '85%',
    description: {
      en: 'Fruit pulps including avocado, mango, and tropical flavors for foodservice, retail, and manufacturing. Multiple SKUs and flavor profiles available.',
      es: 'Pulpas de frutas incluyendo aguacate, mango y sabores tropicales para foodservice, retail y manufactura. Múltiples SKUs y perfiles de sabor disponibles.',
    },
    origin: ['Mexico'],
    seasonality: { en: 'Year-round', es: 'Todo el año' },
    packaging: [
      { en: 'Individual pouches', es: 'Bolsas individuales' },
      { en: 'Foodservice containers', es: 'Contenedores foodservice' },
      { en: 'Bulk drums', es: 'Tambores bulk' },
    ],
    certifications: ['USDA', 'HACCP', 'FSMA'],
    type: 'pulp',
    hasPulpFlavors: true,
    pulpFlavors: [
      { name: { en: 'Avocado', es: 'Aguacate' }, image: avocadoPulpImage },
      { name: { en: 'Mango', es: 'Mango' }, image: mangoPulpImage },
      { name: { en: 'Passion Fruit', es: 'Maracuyá' }, image: passionfruitPulpImage },
      { name: { en: 'Guava', es: 'Guayaba' }, image: guavaPulpImage },
      { name: { en: 'Pineapple', es: 'Piña' }, image: pineapplePulpImage },
    ],
  },
}

// Placeholder for boxes/pallets
function BoxesPalletsPlaceholder() {
  return (
    <Box
      h={{ base: '250px', md: '350px' }}
      bg="neutral.cream"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      border="1px solid"
      borderColor="neutral.border"
    >
      {/* Grid pattern */}
      <Box
        position="absolute"
        inset="0"
        opacity="0.08"
        bgGradient="repeating-linear-gradient(90deg, transparent, transparent 30px, var(--chakra-colors-brand-primary) 30px, var(--chakra-colors-brand-primary) 31px)"
      />
      <Box
        position="absolute"
        inset="0"
        opacity="0.08"
        bgGradient="repeating-linear-gradient(0deg, transparent, transparent 30px, var(--chakra-colors-brand-primary) 30px, var(--chakra-colors-brand-primary) 31px)"
      />
      
      {/* Stack of boxes */}
      <VStack spacing={3}>
        <HStack spacing={2}>
          {[0, 1, 2].map((i) => (
            <Box key={i} w="50px" h="40px" border="3px solid" borderColor="brand.teal" opacity="0.5" bg="white" />
          ))}
        </HStack>
        <HStack spacing={2}>
          {[0, 1, 2].map((i) => (
            <Box key={i} w="50px" h="40px" border="3px solid" borderColor="brand.teal" opacity="0.7" bg="white" />
          ))}
        </HStack>
        <Text fontSize="xs" color="neutral.stone" fontWeight="600" letterSpacing="0.1em" textTransform="uppercase" pt={2}>
          Full Boxes + Pallets (Photo Coming)
        </Text>
      </VStack>
    </Box>
  )
}

// Pulp flavors grid
function PulpFlavorsGrid({ flavors, language }) {
  const title = language === 'en' ? 'Available Pulp' : 'Pulpas Disponibles'
  return (
    <Box>
      <HStack spacing={3} mb={6}>
        <Box w="24px" h="3px" bg="brand.teal" />
        <Text fontSize="sm" fontWeight="600" color="brand.primary" textTransform="uppercase" letterSpacing="0.1em">
          {title}
        </Text>
      </HStack>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={5} justifyItems="center">
        {flavors.map((flavor) => (
          <Box
            key={flavor.name.en}
            w="100%"
            maxW="200px"
            overflow="hidden"
            border="1px solid"
            borderColor="neutral.border"
            bg="white"
            transition="transform 0.2s, box-shadow 0.2s"
            _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
          >
            <Box
              position="relative"
              pt="100%"
              overflow="hidden"
            >
              <Box
                as="img"
                src={flavor.image}
                alt={flavor.name[language]}
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <Box
              bg="brand.primary"
              color="white"
              py={2}
              px={3}
              textAlign="center"
            >
              <Text
                fontSize="xs"
                fontWeight="600"
                letterSpacing="0.1em"
                textTransform="uppercase"
              >
                {flavor.name[language]}
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

// Frozen Cubes section
function CubesSection({ language, cubeImages }) {
  const cubes = ['Avocado', 'Mango', 'Papaya', 'Pineapple', 'Mixed']
  return (
    <Box mt={8} p={6} bg="neutral.cream" border="1px solid" borderColor="neutral.border">
      <Heading
        as="h3"
        fontSize="lg"
        fontFamily="'Bebas Neue', 'Oswald', sans-serif"
        fontWeight="400"
        letterSpacing="0.05em"
        color="brand.primary"
        mb={4}
      >
        {language === 'en' ? 'FROZEN CUBES' : 'CUBOS CONGELADOS'}
      </Heading>
      <Text fontSize="sm" color="neutral.stone" mb={4}>
        {language === 'en'
          ? 'Pre-cut fruit cubes for foodservice and manufacturing. Consistent sizing for easy portioning.'
          : 'Cubos de fruta pre-cortados para foodservice y manufactura. Tamaño consistente para porcionado fácil.'}
      </Text>
      <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={4}>
        {cubes.map((fruit) => {
          const img = cubeImages?.[fruit]
          return (
            <Box
              key={fruit}
              h={{ base: '100px', md: '140px' }}
              bg="white"
              border="1px solid"
              borderColor="neutral.border"
              overflow="hidden"
              position="relative"
            >
              {img ? (
                <Box
                  as="img"
                  src={img}
                  alt={`${fruit} cubes`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              ) : (
                <Box
                  h="100%"
                  border="2px dashed"
                  borderColor="brand.orange"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  opacity="0.7"
                >
                  <Text fontSize="xs" color="neutral.stone" fontWeight="600">{fruit} Cubes</Text>
                </Box>
              )}
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="blackAlpha.700"
                color="white"
                fontSize="xs"
                fontWeight="600"
                py={1}
                px={2}
                textAlign="center"
              >
                {fruit} Cubes
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

function HalvesSection({ language, halvesImages }) {
  const items = Object.keys(halvesImages || {})
  if (!items.length) return null

  return (
    <Box mt={8} p={6} bg="neutral.cream" border="1px solid" borderColor="neutral.border">
      <Heading
        as="h3"
        fontSize="lg"
        fontFamily="'Bebas Neue', 'Oswald', sans-serif"
        fontWeight="400"
        letterSpacing="0.05em"
        color="brand.primary"
        mb={4}
      >
        {language === 'en' ? 'FROZEN HALVES' : 'MITADES CONGELADAS'}
      </Heading>
      <Text fontSize="sm" color="neutral.stone" mb={4}>
        {language === 'en'
          ? 'Vacuum-sealed avocado halves, individually quick frozen for maximum freshness and shelf life.'
          : 'Mitades de aguacate selladas al vacío, congeladas individualmente para máxima frescura y vida útil.'}
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {items.map((fruit) => {
          const img = halvesImages[fruit]
          return (
            <Box
              key={fruit}
              h={{ base: '180px', md: '220px' }}
              bg="white"
              border="1px solid"
              borderColor="neutral.border"
              overflow="hidden"
              position="relative"
            >
              <Box
                as="img"
                src={img}
                alt={`${fruit} halves`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                bg="blackAlpha.700"
                color="white"
                fontSize="xs"
                fontWeight="600"
                py={1}
                px={2}
                textAlign="center"
              >
                {fruit} {language === 'en' ? 'Halves' : 'Mitades'}
              </Box>
            </Box>
          )
        })}
      </SimpleGrid>
    </Box>
  )
}

function ProductDetail({ slug }) {
  const { t, language } = useLanguage()
  const headerRef = useReveal()
  const contentRef = useReveal({ delay: 100 })
  
  const product = PRODUCTS_DATA[slug]
  
  if (!product) {
    return (
      <Box>
        <Header />
        <Container maxW="1200px" py={32} textAlign="center">
          <Heading>Product not found</Heading>
        </Container>
        <Footer />
      </Box>
    )
  }

  return (
    <Box>
      <Header />
      
      <Box as="main" pt="72px">
        {/* Hero Section - Zavaya magenta */}
        <Box py={{ base: 12, md: 16 }} bg="brand.primary" color="white" className="texture-green">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <Button
              as={RouterLink}
              to="/products"
              variant="ghost"
              size="sm"
              color="whiteAlpha.800"
              _hover={{ color: 'white', bg: 'whiteAlpha.200' }}
              mb={6}
              pl={0}
            >
              {t('productDetail.backToProducts')}
            </Button>
            
            <Box ref={headerRef} className="reveal">
              <HStack spacing={3} mb={3}>
                <Box w="40px" h="3px" bg="brand.teal" />
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="brand.teal"
                  textTransform="uppercase"
                  letterSpacing="0.15em"
                >
                  {product.origin.join(' • ')}
                </Text>
              </HStack>
              <Heading
                as="h1"
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                fontWeight="400"
                mb={4}
                letterSpacing="0.02em"
                color="white"
              >
                {product.name[language].toUpperCase()}
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.900" lineHeight="1.7" maxW="600px">
                {product.description[language]}
              </Text>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <Box py={{ base: 12, md: 16 }} bg="neutral.offwhite" className="texture-light">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <Box ref={contentRef} className="reveal">
              <Flex direction={{ base: 'column', lg: 'row' }} gap={{ base: 8, lg: 12 }}>
                {/* Left: Product Image or Boxes & Pallets Placeholder */}
                <Box flex="1.2">
                  <Text fontSize="sm" fontWeight="600" color="brand.primary" textTransform="uppercase" letterSpacing="0.1em" mb={4}>
                    {product.image ? t('productDetail.productImage') : t('productDetail.boxesPalletsTitle')}
                  </Text>
                  {product.image ? (
                    <Box
                      h={{ base: '280px', md: '400px' }}
                      maxW={product.imageMaxW || '100%'}
                      bg="neutral.cream"
                      overflow="hidden"
                      border="1px solid"
                      borderColor="neutral.border"
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
                    <>
                      <BoxesPalletsPlaceholder />
                      <Text fontSize="sm" color="neutral.stone" mt={3}>
                        {t('productDetail.boxesPalletsDescription')}
                      </Text>
                    </>
                  )}
                </Box>
                
                {/* Right: Product Details */}
                <Box flex="1">
                  <VStack align="stretch" spacing={6}>
                    {/* Seasonality */}
                    <Box>
                      <Text fontSize="xs" fontWeight="600" color="brand.teal" textTransform="uppercase" letterSpacing="0.1em" mb={2}>
                        {t('productDetail.seasonality')}
                      </Text>
                      <Text fontSize="md" color="neutral.charcoal" fontWeight="500">
                        {product.seasonality[language]}
                      </Text>
                    </Box>
                    
                    {/* Origin Regions */}
                    <Box>
                      <Text fontSize="xs" fontWeight="600" color="brand.teal" textTransform="uppercase" letterSpacing="0.1em" mb={2}>
                        {t('productDetail.origin')}
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {product.origin.map((region) => (
                          <Box key={region} px={3} py={1} bg="neutral.cream" fontSize="sm" color="neutral.charcoal" border="1px solid" borderColor="neutral.border">
                            {region}
                          </Box>
                        ))}
                      </HStack>
                    </Box>
                    
                    {/* Packaging Options */}
                    <Box>
                      <Text fontSize="xs" fontWeight="600" color="brand.teal" textTransform="uppercase" letterSpacing="0.1em" mb={2}>
                        {t('productDetail.packagingOptions')}
                      </Text>
                      <List spacing={2}>
                        {product.packaging.map((pkg, i) => (
                          <ListItem key={i} display="flex" alignItems="center" fontSize="sm" color="neutral.stone">
                            <Box as="span" color="brand.green" mr={2}><CheckIcon /></Box>
                            {pkg[language]}
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    
                    {/* Certifications */}
                    <Box>
                      <Text fontSize="xs" fontWeight="600" color="brand.teal" textTransform="uppercase" letterSpacing="0.1em" mb={2}>
                        {t('productDetail.certifications')}
                      </Text>
                      <HStack spacing={2} flexWrap="wrap">
                        {product.certifications.map((cert) => (
                          <Box key={cert} px={3} py={1} border="2px solid" borderColor="brand.primary" fontSize="xs" fontWeight="600" color="brand.primary">
                            {cert}
                          </Box>
                        ))}
                      </HStack>
                    </Box>
                    
                    {/* CTA */}
                    <Button
                      as={RouterLink}
                      to="/#contact"
                      variant="primary"
                      size="lg"
                      mt={4}
                      fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                      fontSize="lg"
                      letterSpacing="0.1em"
                    >
                      {t('productDetail.contactForPricing')}
                    </Button>
                  </VStack>
                </Box>
              </Flex>
              
              {/* Pulp-specific: Flavors grid */}
              {product.hasPulpFlavors && product.pulpFlavors && (
                <Box mt={12}>
                  <PulpFlavorsGrid flavors={product.pulpFlavors} language={language} />
                </Box>
              )}
              
              {/* Frozen-specific: Cubes section */}
              {product.hasCubes && <CubesSection language={language} cubeImages={product.cubeImages} />}
              
              {/* Frozen-specific: Halves section */}
              {product.halvesImages && <HalvesSection language={language} halvesImages={product.halvesImages} />}
            </Box>
          </Container>
        </Box>
        
        {/* Placeholder note */}
        <Box py={4} bg="neutral.cream" className="texture-light">
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

export default ProductDetail
