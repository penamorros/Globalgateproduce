/**
 * Contact Form Section
 * 
 * Contact information and form for inquiries.
 * Uses forest green theme with leaf/teal accents.
 */

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Link,
  Image,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'
import marieImage from '../assets/images/Marieleal.png'

// Email icon
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

// Phone icon
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

// Map pin icon
const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

function ContactForm() {
  const { t, language } = useLanguage()
  const headerRef = useReveal()
  const formRef = useReveal({ delay: 100 })
  const toast = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.target)
    formData.append('form-name', 'contact')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      })

      if (response.ok) {
        toast({
          title: t('contact.form.success'),
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
        e.target.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch {
      toast({
        title: language === 'en' ? 'Something went wrong. Please try again.' : 'Algo salió mal. Por favor intenta de nuevo.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box as="section" id="contact" py={{ base: 16, md: 24 }} bg="neutral.cream">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 12, lg: 16 }}>
          {/* Left: Contact Info */}
          <Box ref={headerRef} className="reveal">
            <HStack spacing={3} mb={3}>
              <Box w="40px" h="3px" bg="accent.leaf" />
              <Text
                fontSize="sm"
                fontWeight="600"
                color="accent.leaf"
                textTransform="uppercase"
                letterSpacing="0.15em"
              >
                {t('contact.label')}
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
              {t('contact.title')}
            </Heading>
            <Text fontSize="md" color="neutral.stone" lineHeight="1.7" mb={8}>
              {t('contact.description')}
            </Text>

            {/* Contact Cards */}
            <VStack spacing={6} align="stretch">
              {/* Mariel Leal */}
              <HStack
                spacing={4}
                p={4}
                bg="white"
                borderLeft="4px solid"
                borderLeftColor="accent.leaf"
                border="1px solid"
                borderColor="neutral.border"
              >
                <Image
                  src={marieImage}
                  alt="Mariel Leal"
                  boxSize="60px"
                  objectFit="cover"
                  borderRadius="sm"
                />
                <VStack align="flex-start" spacing={1}>
                  <Text fontWeight="600" color="neutral.charcoal">Mariel Leal</Text>
                  <Text fontSize="sm" color="accent.leaf">{t('contact.salesManager')}</Text>
                  <Link href="mailto:sales@globalgateproduce.com" fontSize="sm" color="neutral.stone" _hover={{ color: 'brand.forest' }}>
                    sales@globalgateproduce.com
                  </Link>
                </VStack>
              </HStack>

              {/* Sara Torres */}
              <HStack
                spacing={4}
                p={4}
                bg="white"
                borderLeft="4px solid"
                borderLeftColor="brand.teal"
                border="1px solid"
                borderColor="neutral.border"
              >
                <Box
                  boxSize="60px"
                  bg="brand.teal"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="white"
                  fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                  fontSize="xl"
                >
                  ST
                </Box>
                <VStack align="flex-start" spacing={1}>
                  <Text fontWeight="600" color="neutral.charcoal">Sara Torres</Text>
                  <Text fontSize="sm" color="brand.teal">{t('contact.financeCeo')}</Text>
                  <Link href="mailto:finance@globalgateproduce.com" fontSize="sm" color="neutral.stone" _hover={{ color: 'brand.forest' }}>
                    finance@globalgateproduce.com
                  </Link>
                </VStack>
              </HStack>

              {/* Quick Contact Info */}
              <VStack align="flex-start" spacing={3} pt={4}>
                <HStack spacing={3}>
                  <Box color="brand.forest"><PhoneIcon /></Box>
                  <Link href="tel:+19566511021" fontSize="sm" color="neutral.stone" _hover={{ color: 'brand.forest' }}>
                    +1 956 651 1021
                  </Link>
                </HStack>
                <HStack spacing={3}>
                  <Box color="brand.forest"><MailIcon /></Box>
                  <Link href="mailto:sales@globalgateproduce.com" fontSize="sm" color="neutral.stone" _hover={{ color: 'brand.forest' }}>
                    sales@globalgateproduce.com
                  </Link>
                </HStack>
                <HStack spacing={3}>
                  <Box color="brand.forest"><MapPinIcon /></Box>
                  <Text fontSize="sm" color="neutral.stone">
                    {t('contact.location')}: Rio Grande Valley, Texas
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>

          {/* Right: Form */}
          <Box ref={formRef} className="reveal">
            <Box
              as="form"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              bg="white"
              p={{ base: 6, md: 8 }}
              border="1px solid"
              borderColor="neutral.border"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p style={{ display: 'none' }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </p>
              <VStack spacing={5}>
                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="600" color="neutral.charcoal">
                    {t('contact.form.name')}
                  </FormLabel>
                  <Input
                    name="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    size="lg"
                    borderRadius="2px"
                    borderColor="neutral.border"
                    _focus={{ borderColor: 'accent.leaf', boxShadow: '0 0 0 1px var(--chakra-colors-accent-leaf)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="600" color="neutral.charcoal">
                    {t('contact.form.email')}
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    size="lg"
                    borderRadius="2px"
                    borderColor="neutral.border"
                    _focus={{ borderColor: 'accent.leaf', boxShadow: '0 0 0 1px var(--chakra-colors-accent-leaf)' }}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize="sm" fontWeight="600" color="neutral.charcoal">
                    {t('contact.form.company')}
                  </FormLabel>
                  <Input
                    name="company"
                    placeholder={t('contact.form.companyPlaceholder')}
                    size="lg"
                    borderRadius="2px"
                    borderColor="neutral.border"
                    _focus={{ borderColor: 'accent.leaf', boxShadow: '0 0 0 1px var(--chakra-colors-accent-leaf)' }}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel fontSize="sm" fontWeight="600" color="neutral.charcoal">
                    {t('contact.form.message')}
                  </FormLabel>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.messagePlaceholder')}
                    size="lg"
                    rows={5}
                    borderRadius="2px"
                    borderColor="neutral.border"
                    _focus={{ borderColor: 'accent.leaf', boxShadow: '0 0 0 1px var(--chakra-colors-accent-leaf)' }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  bg="brand.forest"
                  color="white"
                  _hover={{ bg: 'brand.forestLight' }}
                  size="lg"
                  w="100%"
                  isLoading={isSubmitting}
                  loadingText={t('contact.form.submitting')}
                  fontFamily="'Bebas Neue', 'Oswald', sans-serif"
                  fontSize="lg"
                  letterSpacing="0.1em"
                >
                  {t('contact.form.submit')}
                </Button>
              </VStack>
            </Box>

            <Text fontSize="xs" color="neutral.stone" mt={4} textAlign="center">
              {t('contact.form.emailDirect')}{' '}
              <Link href="mailto:sales@globalgateproduce.com" color="brand.forest" fontWeight="600" _hover={{ color: 'accent.leaf' }}>
                sales@globalgateproduce.com
              </Link>
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default ContactForm
