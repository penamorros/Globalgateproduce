/**
 * Certifications Page
 * 
 * Displays certification badges and explains their importance.
 * Uses forest green theme with leaf/teal accents (matches main site).
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Button,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import Header from '../components/Header'
import Footer, { Tagline } from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'
import { useReveal, useStaggerReveal } from '../hooks/useReveal'

// Accent colors for alternating badge borders (forest green theme)
const ACCENT_COLORS = ['accent.leaf', 'brand.teal', 'brand.green', 'brand.forest', 'accent.leaf']

// Certification data
const CERTIFICATIONS = [
  { id: 'usda', label: 'USDA', description: { en: 'United States Department of Agriculture compliance', es: 'Cumplimiento del Departamento de Agricultura de Estados Unidos' } },
  { id: 'globalgap', label: 'GlobalGAP', description: { en: 'Global Good Agricultural Practices standard', es: 'Estándar de Buenas Prácticas Agrícolas Globales' } },
  { id: 'senasica', label: 'SENASICA', description: { en: 'Mexican food safety and quality authority', es: 'Autoridad mexicana de seguridad y calidad alimentaria' } },
  { id: 'haccp', label: 'HACCP', description: { en: 'Hazard Analysis Critical Control Points', es: 'Análisis de Peligros y Puntos Críticos de Control' } },
  { id: 'organic', label: 'Organic', description: { en: 'Organic certification (select products)', es: 'Certificación orgánica (productos selectos)' } },
  { id: 'fsma', label: 'FSMA', description: { en: 'Food Safety Modernization Act compliance', es: 'Cumplimiento de la Ley de Modernización de Seguridad Alimentaria' } },
  { id: 'cert-tbd-1', label: 'Certification (TBD)', description: { en: 'Additional certification pending documentation', es: 'Certificación adicional pendiente de documentación' }, placeholder: true },
  { id: 'cert-tbd-2', label: 'Certification (TBD)', description: { en: 'Additional certification pending documentation', es: 'Certificación adicional pendiente de documentación' }, placeholder: true },
  { id: 'cert-tbd-3', label: 'Certification (TBD)', description: { en: 'Additional certification pending documentation', es: 'Certificación adicional pendiente de documentación' }, placeholder: true },
  { id: 'cert-tbd-4', label: 'Certification (TBD)', description: { en: 'Additional certification pending documentation', es: 'Certificación adicional pendiente de documentación' }, placeholder: true },
]

// Certification badge placeholder
function CertificationBadge({ cert, language, index }) {
  const isPlaceholder = cert.placeholder
  const accentColor = ACCENT_COLORS[index % ACCENT_COLORS.length]

  return (
    <Box
      p={6}
      bg={isPlaceholder ? 'neutral.offwhite' : 'white'}
      borderLeft="4px solid"
      borderLeftColor={isPlaceholder ? 'neutral.border' : accentColor}
      border="1px solid"
      borderColor={isPlaceholder ? 'neutral.border' : 'neutral.border'}
      position="relative"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
      sx={{
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        borderLeftColor: isPlaceholder ? 'var(--chakra-colors-neutral-border)' : `var(--chakra-colors-${accentColor.replace('.', '-')})`,
      }}
    >
      {/* Badge icon placeholder */}
      <Box
        w="60px"
        h="60px"
        mb={4}
        bg={isPlaceholder ? 'neutral.cream' : accentColor}
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="sm"
      >
        {isPlaceholder ? (
          <Text color="neutral.muted" fontSize="xl" fontWeight="bold">?</Text>
        ) : (
          <Text color="white" fontSize="xs" fontWeight="bold" letterSpacing="0.05em">
            {cert.label.slice(0, 3).toUpperCase()}
          </Text>
        )}
      </Box>
      
      <VStack align="flex-start" spacing={2}>
        <Text
          fontSize="sm"
          fontWeight="700"
          color={isPlaceholder ? 'neutral.muted' : 'neutral.charcoal'}
          fontFamily="'Bebas Neue', 'Oswald', sans-serif"
          letterSpacing="0.05em"
        >
          {cert.label.toUpperCase()}
        </Text>
        <Text fontSize="xs" color={isPlaceholder ? 'neutral.muted' : 'neutral.stone'} lineHeight="1.6">
          {cert.description[language]}
        </Text>
      </VStack>
      
      {isPlaceholder && (
        <Box position="absolute" top="2" right="2" px={2} py={0.5} bg="neutral.cream" fontSize="xs" color="neutral.muted">
          TBD
        </Box>
      )}
    </Box>
  )
}

function Certifications() {
  const { t, language } = useLanguage()
  const headerRef = useReveal()
  const contentRef = useReveal({ delay: 100 })
  const badgeRefs = useStaggerReveal(CERTIFICATIONS.length, { staggerDelay: 50 })

  return (
    <Box>
      <Header />
      
      <Box as="main" pt="72px">
        {/* Hero Section - Forest Green */}
        <Box py={{ base: 16, md: 24 }} bg="brand.forest" color="white" className="texture-green">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <Box ref={headerRef} className="reveal" maxW="700px">
              <HStack spacing={3} mb={3}>
                <Box w="40px" h="3px" bg="accent.leaf" />
                <Text
                  fontSize="sm"
                  fontWeight="600"
                  color="accent.leaf"
                  textTransform="uppercase"
                  letterSpacing="0.15em"
                >
                  {t('certifications.label')}
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
                {t('certifications.title')}
              </Heading>
            </Box>
          </Container>
        </Box>

        {/* Intro Section */}
        <Box py={{ base: 12, md: 16 }} bg="neutral.cream" className="texture-light">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <Box ref={contentRef} className="reveal" maxW="800px">
              <Heading
                as="h2"
                fontSize={{ base: 'xl', md: '2xl' }}
                fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                fontWeight="400"
                color="brand.forest"
                mb={4}
                letterSpacing="0.02em"
              >
                {t('certifications.introTitle')}
              </Heading>
              <Text fontSize="md" color="neutral.stone" lineHeight="1.8" mb={6}>
                {t('certifications.intro')}
              </Text>
              
              {/* Partner note */}
              <Box p={4} bg="white" borderLeft="4px solid" borderColor="accent.leaf">
                <Text fontSize="sm" color="brand.forest" fontWeight="500">
                  {t('certifications.partnerNote')}
                </Text>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Certifications Grid */}
        <Box py={{ base: 12, md: 16 }} bg="neutral.offwhite" className="texture-light">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <HStack spacing={3} mb={8}>
              <Box w="24px" h="3px" bg="brand.forest" />
              <Text
                fontSize="sm"
                fontWeight="600"
                color="brand.forest"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                {t('certifications.badgeGridTitle')}
              </Text>
            </HStack>
            
            <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={6}>
              {CERTIFICATIONS.map((cert, index) => (
                <Box key={cert.id} ref={badgeRefs(index)} className="reveal">
                  <CertificationBadge cert={cert} language={language} index={index} />
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Request Documentation CTA */}
        <Box py={{ base: 12, md: 16 }} bg="neutral.cream" className="texture-light">
          <Container maxW="1200px" px={{ base: 4, md: 8 }}>
            <VStack spacing={6} align="center" textAlign="center">
              <Text fontSize="md" color="neutral.stone" maxW="500px">
                {t('certifications.requestNote')}
              </Text>
              
              <Button
                as={RouterLink}
                to="/#contact"
                bg="brand.forest"
                color="white"
                _hover={{ bg: 'brand.forestLight' }}
                size="lg"
                fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                fontSize="lg"
                letterSpacing="0.1em"
              >
                {t('certifications.contactCta')}
              </Button>
            </VStack>
          </Container>
        </Box>
      </Box>

      <Tagline />
      <Footer />
    </Box>
  )
}

export default Certifications
