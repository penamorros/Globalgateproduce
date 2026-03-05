/**
 * Footer Component
 * 
 * Site footer with navigation links and contact info.
 * Uses forest green by default, magenta on Products pages.
 * Includes both Global Gate and Zavaya logos on all pages.
 */

import {
  Box,
  Container,
  Flex,
  Text,
  VStack,
  Link,
  Heading,
  HStack,
} from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'

import { Logo } from './Logo'
import { useLanguage } from '../context/LanguageContext'
import ZavayaLogo from './ZavayaLogo'

const leafPatternSvg = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5c0 0 10 10 10 20s-10 15-20 5c0 0 5-10 10-20z' fill='%23ffffff'/%3E%3C/svg%3E")`

export function Tagline() {
  const { t } = useLanguage()
  const location = useLocation()
  
  // Check if we're on products page
  const isProductsPage = location.pathname === '/products' || location.pathname.startsWith('/products/')
  const bgColor = isProductsPage ? 'brand.primary' : 'brand.forest'
  const accentColor = isProductsPage ? 'brand.teal' : 'accent.leaf'
  
  return (
    <Box
      py={{ base: 16, md: 20 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        bgImage={leafPatternSvg}
        bgRepeat="repeat"
      />
      <Container maxW="1200px" px={{ base: 4, md: 8 }} position="relative">
        <Heading
          as="p"
          textAlign="center"
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          fontFamily="'Bebas Neue', 'Oswald', sans-serif"
          fontWeight="400"
          color="white"
          letterSpacing="0.05em"
        >
          {t('footer.tagline')}
          <Text as="span" color={accentColor}>{t('footer.taglineAccent')}</Text>
        </Heading>
      </Container>
    </Box>
  )
}

function Footer() {
  const { t } = useLanguage()
  const location = useLocation()
  const currentYear = new Date().getFullYear()

  // Check if we're on products page
  const isProductsPage = location.pathname === '/products' || location.pathname.startsWith('/products/')
  const footerBg = isProductsPage ? 'brand.primary' : 'brand.forest'
  const accentColor = isProductsPage ? 'brand.teal' : 'accent.leaf'

  const FOOTER_LINKS = [
    { label: t('nav.products'), href: '/products' },
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.quality'), href: '/#quality' },
    { label: t('nav.certifications'), href: '/certifications' },
    { label: t('nav.contact'), href: '/#contact' },
  ]

  return (
    <Box
      as="footer"
      py={{ base: 12, md: 16 }}
      bg={footerBg}
      color="white"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'flex-start', md: 'flex-start' }}
          gap={{ base: 10, md: 16 }}
        >
          {/* Company Info */}
          <VStack align="flex-start" spacing={4} maxW="300px">
            {/* Logos - Global Gate + Zavaya */}
            <HStack spacing={4} as={RouterLink} to="/">
              <Logo size="md" />
              <Box h="40px" w="1px" bg="whiteAlpha.300" />
              {isProductsPage ? (
                <ZavayaLogo height={{ base: '52px', md: '64px' }} />
              ) : (
                <Box bg="brand.forest" borderRadius="md" overflow="hidden">
                  <ZavayaLogo 
                    height={{ base: '52px', md: '64px' }} 
                    filter="grayscale(1) contrast(5)"
                    mixBlendMode="lighten"
                  />
                </Box>
              )}
            </HStack>

            <Text fontSize="sm" color="whiteAlpha.800" lineHeight="1.7" pt={2}>
              {t('footer.description')}
            </Text>
          </VStack>

          {/* Navigation Links */}
          <VStack align="flex-start" spacing={3}>
            <Text
              fontSize="sm"
              fontWeight="600"
              color={accentColor}
              mb={1}
              letterSpacing="0.05em"
            >
              {t('footer.quickLinks').toUpperCase()}
            </Text>
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                as={RouterLink}
                to={link.href}
                fontSize="sm"
                color="whiteAlpha.800"
                _hover={{ color: accentColor }}
                transition="color 0.2s"
              >
                {link.label}
              </Link>
            ))}
          </VStack>

          {/* Contact Info */}
          <VStack align="flex-start" spacing={3}>
            <Text
              fontSize="sm"
              fontWeight="600"
              color={accentColor}
              mb={1}
              letterSpacing="0.05em"
            >
              {t('footer.contactUs').toUpperCase()}
            </Text>
            <Link
              href="mailto:sales@globalgateproduce.com"
              fontSize="sm"
              color="whiteAlpha.800"
              _hover={{ color: accentColor }}
            >
              sales@globalgateproduce.com
            </Link>
            <Link
              href="tel:+19566511021"
              fontSize="sm"
              color="whiteAlpha.800"
              _hover={{ color: accentColor }}
            >
              +1 956 651 1021
            </Link>
            <Text fontSize="sm" color="whiteAlpha.800">
              Rio Grande Valley, Texas
            </Text>
          </VStack>
        </Flex>

        {/* Copyright */}
        <Box
          mt={{ base: 10, md: 12 }}
          pt={6}
          borderTop="1px solid"
          borderColor="whiteAlpha.200"
        >
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            justify="space-between"
            align={{ base: 'flex-start', sm: 'center' }}
            gap={4}
          >
            <Text fontSize="xs" color="whiteAlpha.600">
              {t('footer.copyright', { year: currentYear })}
            </Text>
            <Link
              href="https://www.globalgateproduce.com"
              fontSize="xs"
              color="whiteAlpha.600"
              _hover={{ color: accentColor }}
              isExternal
            >
              globalgateproduce.com
            </Link>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
