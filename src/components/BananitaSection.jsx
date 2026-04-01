import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  VStack,
  HStack,
  Button,
  Link,
} from '@chakra-ui/react'

import { useReveal, useStaggerReveal } from '../hooks/useReveal'
import { useLanguage } from '../context/LanguageContext'

import img1 from '../assets/images/bananita-1.webp'
import img2 from '../assets/images/bananita-2.webp'
import img3 from '../assets/images/bananita-3.webp'
import img4 from '../assets/images/bananita-4.webp'
import img5 from '../assets/images/bananita-5.webp'
import img6 from '../assets/images/bananita-6.webp'

const bananitaGallery = [img1, img2, img3, img4, img5, img6]

function BananitaSection() {
  const { t } = useLanguage()
  const headerRef = useReveal()
  const itemRefs = useStaggerReveal(bananitaGallery.length, { variant: 'image', staggerDelay: 60 })

  return (
    <Box as="section" className="texture-light" py={{ base: 14, md: 20 }} bg="neutral.offwhite">
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <VStack ref={headerRef} className="reveal" align="stretch" spacing={5} mb={8}>
          <HStack spacing={3}>
            <Box w="40px" h="3px" bg="brand.forest" />
            <Text
              fontSize="sm"
              fontWeight="600"
              color="brand.forest"
              textTransform="uppercase"
              letterSpacing="0.15em"
            >
              {t('bananita.label')}
            </Text>
          </HStack>

          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl' }}
            fontFamily="'Bebas Neue', 'Oswald', sans-serif"
            fontWeight="400"
            color="neutral.charcoal"
            letterSpacing="0.02em"
          >
            {t('bananita.title')}
          </Heading>

          <Text fontSize="md" color="neutral.stone" lineHeight="1.8" maxW="850px">
            {t('bananita.description')}
          </Text>

          <HStack>
            <Button
              as={Link}
              href="/docs/DIPTICO_GRUPO_ZAVAYA_CLIENT_REVIEW.pdf"
              target="_blank"
              rel="noopener noreferrer"
              bg="brand.forest"
              color="white"
              _hover={{ bg: 'brand.forestLight' }}
            >
              {t('bananita.brochureCta')}
            </Button>
          </HStack>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
          {bananitaGallery.map((src, index) => (
            <Box
              key={index}
              ref={itemRefs(index)}
              className="reveal"
              overflow="hidden"
              border="1px solid"
              borderColor="neutral.border"
              bg="white"
            >
              <Image
                src={src}
                alt={`Bananita visual ${index + 1}`}
                w="100%"
                h={{ base: '240px', md: '260px' }}
                objectFit="cover"
                loading="lazy"
              />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default BananitaSection
