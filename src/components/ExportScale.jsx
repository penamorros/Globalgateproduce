/**
 * Export Scale Packaging Section
 * 
 * Showcases container-scale exporting.
 * Uses forest green theme with leaf/teal accents.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

import boxesOnFloorImage from '../assets/images/ZavayaHassAvocados.png'

function ExportScale() {
  const { t } = useLanguage()
  const headerRef = useReveal()
  const containerRef = useReveal({ variant: 'image', delay: 100 })

  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="neutral.offwhite" position="relative">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Section Header */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }} maxW="600px">
          <HStack spacing={3} mb={3}>
            <Box w="40px" h="3px" bg="brand.forest" />
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.forest"
              textTransform="uppercase"
              letterSpacing="0.15em"
            >
              {t('exportScale.label')}
            </Text>
          </HStack>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            mb={4}
            letterSpacing="0.02em"
            color="neutral.charcoal"
          >
            {t('exportScale.title')}
          </Heading>
          <Text fontSize="md" color="neutral.stone" lineHeight="1.7">
            {t('exportScale.description')}
          </Text>
        </Box>

        {/* Container Backdrop Image */}
        <Box
          ref={containerRef}
          className="reveal"
          mb={8}
          position="relative"
          overflow="hidden"
          h={{ base: '193px', md: '420px' }}
          w="105%"
          mx="-2.5%"
        >
          <Box
            as="img"
            src={boxesOnFloorImage}
            alt="Zavaya export-ready packaging"
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition={{ base: 'center 60%', md: 'center 15%' }}
          />
        </Box>

        {/* CTA */}
        <VStack spacing={4} align="center">
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
        </VStack>
      </Container>
    </Box>
  )
}

export default ExportScale
