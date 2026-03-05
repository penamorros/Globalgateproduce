/**
 * Hero Section
 * 
 * Main landing section with Global Gate Produce branding.
 * Forest green background with lime/leaf green accents (matches screenshots).
 */

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Image,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import heroImage from '../assets/images/hero-avocado-large.png'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

const leafPatternSvg = `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10c0 0 15 15 15 30s-15 20-30 10c0 0 5-15 15-30z' fill='%23ffffff'/%3E%3C/svg%3E")`

function Hero() {
  const { t } = useLanguage()
  const textRef = useReveal()
  const imageRef = useReveal({ variant: 'image', delay: 100 })

  return (
    <Box
      as="section"
      pt={{ base: '72px', md: '72px' }}
      bg="brand.forest"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.03"
        bgImage={leafPatternSvg}
        bgRepeat="repeat"
      />

      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="center"
          gap={{ base: 8, lg: 12 }}
          py={{ base: 12, md: 16, lg: 20 }}
        >
          {/* Text Content */}
          <VStack
            ref={textRef}
            className="reveal"
            align={{ base: 'center', lg: 'flex-start' }}
            spacing={6}
            flex="1"
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <HStack spacing={3}>
              <Box w="40px" h="1px" bg="accent.leaf" display={{ base: 'none', lg: 'block' }} />
              <Text
                fontSize="sm"
                fontWeight="600"
                color="accent.leaf"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                {t('hero.tagline')}
              </Text>
            </HStack>

            <Heading
              as="h1"
              fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
              fontFamily="'Bebas Neue', 'Oswald', sans-serif"
              fontWeight="400"
              lineHeight="1.05"
              maxW="600px"
              color="white"
              letterSpacing="0.02em"
            >
              {t('hero.headline')}
              <Text as="span" color="accent.leaf">
                {t('hero.headlineAccent')}
              </Text>
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="whiteAlpha.800"
              maxW="500px"
              lineHeight="1.8"
            >
              {t('hero.description')}
            </Text>

            <Flex wrap="wrap" gap={4} pt={4} justify={{ base: 'center', lg: 'flex-start' }}>
              <Button
                bg="white"
                color="brand.forest"
                _hover={{ bg: 'neutral.cream' }}
                size="lg"
                px={{ base: 6, md: 8 }}
                as={RouterLink}
                to="/#contact"
              >
                {t('hero.cta')}
              </Button>
              <Button
                variant="ghost"
                size="lg"
                px={{ base: 6, md: 8 }}
                color="white"
                border="2px solid"
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'whiteAlpha.100', borderColor: 'accent.leaf' }}
                as={RouterLink}
                to="/products"
              >
                {t('hero.ctaSecondary')}
              </Button>
            </Flex>

            {/* Credibility note */}
            <Text pt={4} color="whiteAlpha.600" fontSize="sm" letterSpacing="0.02em">
              {t('hero.credibility')}
            </Text>
          </VStack>

          {/* Hero Image */}
          <Box
            ref={imageRef}
            className="reveal"
            flex="1"
            w={{ base: '100%', lg: 'auto' }}
            maxW={{ base: '400px', lg: '500px' }}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src={heroImage}
              alt="Premium Hass avocado cut in half with seed and leaves"
              objectFit="contain"
              w="100%"
              maxH={{ base: '300px', md: '400px', lg: '460px' }}
              filter="drop-shadow(0 20px 40px rgba(0,0,0,0.3))"
              position="relative"
              zIndex="1"
            />
          </Box>
        </Flex>
      </Container>

      <Box h="4px" bg="accent.leaf" />
    </Box>
  )
}

export default Hero
