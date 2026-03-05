/**
 * Quality Assurance Section
 * 
 * Highlights quality control processes.
 * Uses forest green background with lime/leaf accents (matches screenshots).
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Flex,
} from '@chakra-ui/react'

import { useReveal, useStaggerReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

// Simple check icon
const CheckBadgeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4"/>
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/>
  </svg>
)

// Accent colors for alternating items
const ACCENT_COLORS = ['accent.leaf', 'brand.teal', 'brand.green']

function Quality() {
  const { t } = useLanguage()
  const headerRef = useReveal()
  const qualityRefs = useStaggerReveal(3, { staggerDelay: 80 })

  const qualityPoints = [
    {
      title: t('quality.fieldVisits.title'),
      description: t('quality.fieldVisits.description'),
    },
    {
      title: t('quality.temperatureLogs.title'),
      description: t('quality.temperatureLogs.description'),
    },
    {
      title: t('quality.traceability.title'),
      description: t('quality.traceability.description'),
    },
  ]

  return (
    <Box as="section" id="quality" className="texture-light" py={{ base: 16, md: 24 }} bg="neutral.cream">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        {/* Header */}
        <Box ref={headerRef} className="reveal" mb={{ base: 10, md: 14 }}>
          <HStack spacing={3} mb={3}>
            <Box w="40px" h="3px" bg="brand.forest" />
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.forest"
              textTransform="uppercase"
              letterSpacing="0.15em"
            >
              {t('quality.label')}
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
            {t('quality.title')}
          </Heading>
          <Text fontSize="md" color="neutral.stone" lineHeight="1.7" maxW="600px">
            {t('quality.description')}
          </Text>
        </Box>

        {/* Quality Points */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {qualityPoints.map((point, index) => (
            <Box
              key={point.title}
              ref={qualityRefs(index)}
              className="reveal"
              p={6}
              bg="white"
              borderLeft="4px solid"
              borderLeftColor={ACCENT_COLORS[index % ACCENT_COLORS.length]}
              border="1px solid"
              borderColor="neutral.border"
            >
              <Flex gap={4} align="flex-start">
                <Box color={ACCENT_COLORS[index % ACCENT_COLORS.length]} flexShrink={0}>
                  <CheckBadgeIcon />
                </Box>
                <VStack align="flex-start" spacing={2}>
                  <Text
                    fontSize="md"
                    fontWeight="600"
                    color="neutral.charcoal"
                    fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                    letterSpacing="0.05em"
                  >
                    {point.title.toUpperCase()}
                  </Text>
                  <Text fontSize="sm" color="neutral.stone" lineHeight="1.7">
                    {point.description}
                  </Text>
                </VStack>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Quality
