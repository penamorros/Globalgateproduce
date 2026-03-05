/**
 * Capabilities Section - "From Orchard to Your Dock"
 * 
 * Shows the sourcing, packing, and shipping process with numbered images.
 * Layout matches the reference design with Zavaya accent colors.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
} from '@chakra-ui/react'

import { useReveal, useStaggerReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

// Import capability images
import farmImage from '../assets/images/farm-harvest.jpg'
import packingImage from '../assets/images/Gemini_Generated_Image_92m1et92m1et92m1.jpg'
import warehouseImage from '../assets/images/Gemini_Generated_Image_g5ex8ug5ex8ug5ex.jpg'

// Zavaya accent colors for numbered badges
const BADGE_COLORS = ['brand.forest', 'brand.teal', 'brand.green']

function Capabilities() {
  const { t } = useLanguage()
  const headerRef = useReveal()
  const capabilityRefs = useStaggerReveal(3, { variant: 'image', staggerDelay: 100 })

  const capabilities = [
    {
      number: '01',
      image: farmImage,
      title: t('capabilities.sourcing.title'),
      description: t('capabilities.sourcing.description'),
    },
    {
      number: '02',
      image: packingImage,
      title: t('capabilities.packing.title'),
      description: t('capabilities.packing.description'),
    },
    {
      number: '03',
      image: warehouseImage,
      title: t('capabilities.shipping.title'),
      description: t('capabilities.shipping.description'),
    },
  ]

  return (
    <Box as="section" id="about" py={{ base: 16, md: 24 }} bg="neutral.cream">
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
            {t('capabilities.label')}
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
            {t('capabilities.title')}
          </Heading>
          <Text fontSize="md" color="neutral.stone" lineHeight="1.7" maxW="600px">
            {t('capabilities.description')}
          </Text>
        </Box>

        {/* Capabilities Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 6 }}>
          {capabilities.map((cap, index) => (
            <Box
              key={cap.title}
              ref={capabilityRefs(index)}
              className="reveal"
            >
              {/* Image with numbered badge */}
              <Box position="relative" mb={5}>
                <Image
                  src={cap.image}
                  alt={cap.title}
                  w="100%"
                  h={{ base: '240px', md: '280px' }}
                  objectFit="cover"
                />
                {/* Numbered badge */}
                <Box
                  position="absolute"
                  top={4}
                  left={4}
                  bg={BADGE_COLORS[index % BADGE_COLORS.length]}
                  color="white"
                  px={3}
                  py={2}
                  fontSize="sm"
                  fontWeight="700"
                  fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                  letterSpacing="0.05em"
                >
                  {cap.number}
                </Box>
              </Box>

              {/* Content */}
              <VStack align="flex-start" spacing={2}>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                  fontWeight="400"
                  letterSpacing="0.05em"
                  color="neutral.charcoal"
                >
                  {cap.title.toUpperCase()}
                </Heading>
                <Text fontSize="sm" color="neutral.stone" lineHeight="1.7">
                  {cap.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Capabilities
