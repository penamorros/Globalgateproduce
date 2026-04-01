/**
 * Language Context
 * 
 * Provides EN/ES translations with localStorage persistence.
 * All UI strings should be accessed via the t() function.
 */

import { createContext, useContext, useState, useEffect, useCallback } from 'react'

// Create context
const LanguageContext = createContext()

// Translations dictionary
const translations = {
  en: {
    // Navigation
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.quality': 'Quality',
    'nav.certifications': 'Certifications',
    'nav.contact': 'Contact',
    'nav.getPricing': 'Get Pricing',
    
    // Hero section
    'hero.tagline': 'Rio Grande Valley, Texas',
    'hero.headline': 'Avocados, Dragon Fruit & Tropicals',
    'hero.headlineAccent': '—Direct From Mexico',
    'hero.description': 'We work with growers in Michoacán, Jalisco, and Yucatán. You get export-ready produce, packed to spec, with all the USDA paperwork handled.',
    'hero.cta': 'Get Pricing',
    'hero.ctaSecondary': 'See What We Ship',
    'hero.credibility': 'Women-owned, Rio Grande Valley–based since 2020.',
    
    // Export Scale section
    'exportScale.label': 'Zavaya Brand',
    'exportScale.title': 'Export-Scale Packaging',
    'exportScale.description': 'We pack for large-scale distribution. Our Zavaya brand ensures consistent quality and recognition in the market.',
    'exportScale.boxesPallets': 'Boxes + Pallets',
    'exportScale.containerBackdrop': 'Full Container Background (Photo Coming)',
    'exportScale.placeholderNote': 'Note: Images are placeholders pending final photography/AI renders.',
    
    // Capabilities section
    'capabilities.label': 'How It Works',
    'capabilities.title': 'From Orchard to Your Dock',
    'capabilities.description': 'We started in 2020 with a handful of grower relationships. Now we move produce from three Mexican states into the U.S. and beyond.',
    'capabilities.sourcing.title': 'Sourcing',
    'capabilities.sourcing.description': 'We know the growers personally. Certified orchards in Michoacán, Jalisco, and Yucatán—no brokers, no surprises.',
    'capabilities.packing.title': 'Packing',
    'capabilities.packing.description': "Every piece gets inspected and size-graded at our packhouses. Tell us your specs—we'll match them.",
    'capabilities.shipping.title': 'Shipping',
    'capabilities.shipping.description': 'Cold chain from farm to your dock. We handle phyto certificates, USDA clearance, and temperature logs.',
    
    // Products section
    'products.label': 'Our Products',
    'products.title': 'What We Ship',
    'products.description': 'Our main lines, plus seasonal and specialty items by request.',
    'products.alsoAvailable': 'Also Available:',
    'products.learnMore': 'Learn More',
    'products.viewAll': 'View All Products',
    
    // Products Page
    'productsPage.label': 'Zavaya Products',
    'productsPage.title': 'Our Complete Product Range',
    'productsPage.description': 'Export-ready produce packed under the Zavaya brand. Consistent quality, professional packaging, full documentation.',
    'productsPage.fresh': 'Fresh Produce',
    'productsPage.processed': 'Frozen & Pulp',
    
    // Product Detail Page
    'productDetail.backToProducts': '← Back to Products',
    'productDetail.boxesPalletsTitle': 'Full Boxes + Pallets',
    'productDetail.boxesPalletsDescription': 'Export-ready packaging with professional labeling and documentation.',
    'productDetail.productImage': 'Product',
    'productDetail.seasonality': 'Seasonality',
    'productDetail.origin': 'Origin Regions',
    'productDetail.packagingOptions': 'Packaging Options',
    'productDetail.certifications': 'Certifications',
    'productDetail.contactForPricing': 'Contact For Pricing',
    'productDetail.individualSku': 'Individual SKU View (Placeholder)',
    'productDetail.assortmentView': 'Assortment View (Placeholder)',
    
    // Quality section
    'quality.label': 'Quality Assurance',
    'quality.title': 'The Paperwork Is Handled',
    'quality.description': "Phyto certificates, USDA/APHIS clearance, certificates of origin—we deal with it so you don't have to.",
    'quality.fieldVisits.title': 'Field Visits',
    'quality.fieldVisits.description': "We inspect partner farms regularly. If something's off, we catch it early.",
    'quality.temperatureLogs.title': 'Temperature Logs',
    'quality.temperatureLogs.description': 'Continuous monitoring from packhouse to your receiving dock.',
    'quality.traceability.title': 'Full Traceability',
    'quality.traceability.description': 'Every box tracked back to the orchard it came from.',
    
    // Certifications Page
    'certifications.label': 'Quality Assurance',
    'certifications.title': 'Certifications & Compliance',
    'certifications.introTitle': 'Why Certifications Matter',
    'certifications.intro': 'For our buyers, certifications are a guarantee of quality, safety, and ethical sourcing. We ensure all our partners meet stringent international standards, giving you confidence in every shipment.',
    'certifications.partnerNote': 'We require our packing partners to maintain these certifications.',
    'certifications.badgeGridTitle': 'Our Certifications',
    'certifications.requestNote': 'Certifications list & documentation available upon request.',
    'certifications.contactCta': 'Request Documentation',
    
    // Contact section
    'contact.label': 'Get In Touch',
    'contact.title': 'Talk To Us',
    'contact.description': "Tell us what you need—product, volume, sizing, delivery location. We'll get back to you within a day with pricing.",
    'contact.salesManager': 'Sales Manager',
    'contact.financeCeo': 'Finance / CEO',
    'contact.location': 'Location',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'you@company.com',
    'contact.form.company': 'Company',
    'contact.form.companyPlaceholder': 'Your company (optional)',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Products needed, volumes, delivery locations, timing...',
    'contact.form.submit': 'Send Message',
    'contact.form.submitting': 'Sending...',
    'contact.form.success': "Thank you! We'll be in touch within 24 hours.",
    'contact.form.error': 'Something went wrong. Please try again.',
    'contact.form.emailDirect': 'Or email us directly at',
    
    // Carousel section
    'carousel.label': 'From Our Facility',
    'carousel.title': 'Packed & Ready to Ship',

    // Bananita section
    'bananita.label': 'Grupo Zavaya',
    'bananita.title': 'Freeze-Dried Program Visuals',
    'bananita.description': 'Client review material updated from legacy Avocomex references to Grupo Zavaya branding, including brochure and product visuals for freeze-dried avocado presentations.',
    'bananita.brochureCta': 'Open Updated Brochure (PDF)',

    // Footer
    'footer.description': 'Avocados, dragon fruit, and tropicals from Mexico. Women-owned, Rio Grande Valley–based.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactUs': 'Contact Us',
    'footer.tagline': 'Taste The Rare, Taste Exotic',
    'footer.taglineAccent': ' From Mexico',
    'footer.copyright': '© {year} Global Gate Produce LLC. All rights reserved.',
  },
  
  es: {
    // Navigation
    'nav.products': 'Productos',
    'nav.about': 'Nosotros',
    'nav.quality': 'Calidad',
    'nav.certifications': 'Certificaciones',
    'nav.contact': 'Contacto',
    'nav.getPricing': 'Cotización',
    
    // Hero section
    'hero.tagline': 'Valle del Río Grande, Texas',
    'hero.headline': 'Aguacates, Pitahaya y Tropicales',
    'hero.headlineAccent': '—Directo de México',
    'hero.description': 'Trabajamos con productores en Michoacán, Jalisco y Yucatán. Obtiene productos listos para exportar, empacados según especificaciones, con toda la documentación USDA gestionada.',
    'hero.cta': 'Cotización',
    'hero.ctaSecondary': 'Ver Productos',
    'hero.credibility': 'Empresa de mujeres, con sede en el Valle del Río Grande desde 2020.',
    
    // Export Scale section
    'exportScale.label': 'Marca Zavaya',
    'exportScale.title': 'Embalaje a Escala de Exportación',
    'exportScale.description': 'Empacamos para distribución a gran escala. Nuestra marca Zavaya asegura calidad consistente y reconocimiento en el mercado.',
    'exportScale.boxesPallets': 'Cajas + Tarimas',
    'exportScale.containerBackdrop': 'Fondo de Contenedor Completo (Foto Próximamente)',
    'exportScale.placeholderNote': 'Nota: Las imágenes son marcadores de posición pendientes de fotografía final/renders de IA.',
    
    // Capabilities section
    'capabilities.label': 'Cómo Funciona',
    'capabilities.title': 'Del Huerto a Su Muelle',
    'capabilities.description': 'Comenzamos en 2020 con un puñado de relaciones con productores. Ahora movemos productos de tres estados mexicanos a EE.UU. y más allá.',
    'capabilities.sourcing.title': 'Abastecimiento',
    'capabilities.sourcing.description': 'Conocemos personalmente a los productores. Huertos certificados en Michoacán, Jalisco y Yucatán—sin intermediarios, sin sorpresas.',
    'capabilities.packing.title': 'Empaque',
    'capabilities.packing.description': 'Cada pieza se inspecciona y clasifica por tamaño en nuestras empacadoras. Díganos sus especificaciones—las cumpliremos.',
    'capabilities.shipping.title': 'Envío',
    'capabilities.shipping.description': 'Cadena de frío desde la granja hasta su muelle. Manejamos certificados fitosanitarios, autorización USDA y registros de temperatura.',
    
    // Products section
    'products.label': 'Nuestros Productos',
    'products.title': 'Lo Que Enviamos',
    'products.description': 'Nuestras líneas principales, más artículos de temporada y especialidad por pedido.',
    'products.alsoAvailable': 'También Disponible:',
    'products.learnMore': 'Ver Más',
    'products.viewAll': 'Ver Todos los Productos',
    
    // Products Page
    'productsPage.label': 'Productos Zavaya',
    'productsPage.title': 'Nuestra Gama Completa de Productos',
    'productsPage.description': 'Productos listos para exportar empacados bajo la marca Zavaya. Calidad consistente, empaque profesional, documentación completa.',
    'productsPage.fresh': 'Productos Frescos',
    'productsPage.processed': 'Congelados y Pulpa',
    
    // Product Detail Page
    'productDetail.backToProducts': '← Volver a Productos',
    'productDetail.boxesPalletsTitle': 'Cajas + Tarimas Completas',
    'productDetail.boxesPalletsDescription': 'Empaque listo para exportar con etiquetado profesional y documentación.',
    'productDetail.productImage': 'Producto',
    'productDetail.seasonality': 'Temporada',
    'productDetail.origin': 'Regiones de Origen',
    'productDetail.packagingOptions': 'Opciones de Empaque',
    'productDetail.certifications': 'Certificaciones',
    'productDetail.contactForPricing': 'Contactar para Precios',
    'productDetail.individualSku': 'Vista de SKU Individual (Marcador)',
    'productDetail.assortmentView': 'Vista de Surtido (Marcador)',
    
    // Quality section
    'quality.label': 'Garantía de Calidad',
    'quality.title': 'El Papeleo Está Cubierto',
    'quality.description': 'Certificados fitosanitarios, autorización USDA/APHIS, certificados de origen—nosotros lo manejamos para que usted no tenga que hacerlo.',
    'quality.fieldVisits.title': 'Visitas de Campo',
    'quality.fieldVisits.description': 'Inspeccionamos las granjas asociadas regularmente. Si algo está mal, lo detectamos temprano.',
    'quality.temperatureLogs.title': 'Registros de Temperatura',
    'quality.temperatureLogs.description': 'Monitoreo continuo desde la empacadora hasta su muelle de recepción.',
    'quality.traceability.title': 'Trazabilidad Completa',
    'quality.traceability.description': 'Cada caja rastreada hasta el huerto de donde provino.',
    
    // Certifications Page
    'certifications.label': 'Garantía de Calidad',
    'certifications.title': 'Certificaciones y Cumplimiento',
    'certifications.introTitle': 'Por Qué Importan las Certificaciones',
    'certifications.intro': 'Para nuestros compradores, las certificaciones son una garantía de calidad, seguridad y abastecimiento ético. Aseguramos que todos nuestros socios cumplan con estrictos estándares internacionales, dándole confianza en cada envío.',
    'certifications.partnerNote': 'Requerimos que nuestros socios empacadores mantengan estas certificaciones.',
    'certifications.badgeGridTitle': 'Nuestras Certificaciones',
    'certifications.requestNote': 'Lista de certificaciones y documentación disponible bajo solicitud.',
    'certifications.contactCta': 'Solicitar Documentación',
    
    // Contact section
    'contact.label': 'Contáctenos',
    'contact.title': 'Hable Con Nosotros',
    'contact.description': 'Díganos lo que necesita—producto, volumen, tamaño, lugar de entrega. Le responderemos dentro de un día con precios.',
    'contact.salesManager': 'Gerente de Ventas',
    'contact.financeCeo': 'Finanzas / CEO',
    'contact.location': 'Ubicación',
    'contact.form.name': 'Nombre',
    'contact.form.namePlaceholder': 'Su nombre',
    'contact.form.email': 'Correo',
    'contact.form.emailPlaceholder': 'usted@empresa.com',
    'contact.form.company': 'Empresa',
    'contact.form.companyPlaceholder': 'Su empresa (opcional)',
    'contact.form.message': 'Mensaje',
    'contact.form.messagePlaceholder': 'Productos necesarios, volúmenes, ubicaciones de entrega, tiempos...',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.submitting': 'Enviando...',
    'contact.form.success': '¡Gracias! Nos pondremos en contacto dentro de 24 horas.',
    'contact.form.error': 'Algo salió mal. Por favor intente de nuevo.',
    'contact.form.emailDirect': 'O envíenos un correo directamente a',
    
    // Carousel section
    'carousel.label': 'Desde Nuestra Planta',
    'carousel.title': 'Empacado y Listo Para Enviar',

    // Bananita section
    'bananita.label': 'Grupo Zavaya',
    'bananita.title': 'Visuales de Programa Liofilizado',
    'bananita.description': 'Material de revisión de cliente actualizado desde referencias legadas de Avocomex hacia branding de Grupo Zavaya, incluyendo díptico y visuales de producto para presentaciones de aguacate liofilizado.',
    'bananita.brochureCta': 'Abrir Díptico Actualizado (PDF)',

    // Footer
    'footer.description': 'Aguacates, pitahaya y tropicales de México. Empresa de mujeres, con sede en el Valle del Río Grande.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contactUs': 'Contáctenos',
    'footer.tagline': 'Prueba Lo Raro, Prueba Lo Exótico',
    'footer.taglineAccent': ' De México',
    'footer.copyright': '© {year} Global Gate Produce LLC. Todos los derechos reservados.',
  },
}

// Provider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ggp-language')
      if (saved === 'en' || saved === 'es') {
        return saved
      }
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('ggp-language', language)
  }, [language])

  const t = useCallback((key, vars = {}) => {
    const value = translations[language][key] || translations.en[key] || key
    return value.replace(/\{(\w+)\}/g, (_, varName) => vars[varName] ?? `{${varName}}`)
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'es' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
