/* ══════════════════════════════════════════════════════════════
   MEDOCODE — Templates Platform Data
   Single source of truth for all template data.
   To add a new template: append an entry to the `templates` array.
   ══════════════════════════════════════════════════════════════ */

// ── Types ───────────────────────────────────────────────────────

export type TemplateCategory =
  | 'Business'
  | 'Portfolio'
  | 'Medical'
  | 'Restaurant'
  | 'Agency'
  | 'SaaS'
  | 'Landing Page'
  | 'Dashboard'
  | 'Gym'

export type TemplateStatus = 'new' | 'featured' | 'popular'

export interface TemplateAuthor {
  name: string
  handle: string // e.g. "@medocode"
  avatarUrl?: string
}

export interface Template {
  // ── Identity ──────────────────────────────────────────────────
  id: string
  slug: string // Matches URL segment: /templates/:slug

  // ── Display ───────────────────────────────────────────────────
  name: string
  nameAr?: string
  tagline: string
  taglineAr?: string
  description: string
  descriptionAr?: string

  // ── Classification ────────────────────────────────────────────
  category: TemplateCategory
  tags: string[]
  status?: TemplateStatus

  // ── Creator ───────────────────────────────────────────────────
  author: TemplateAuthor

  // ── Media ─────────────────────────────────────────────────────
  coverImage: string
  galleryImages: string[]

  // ── Tech & Features ───────────────────────────────────────────
  technologies: string[]
  features: string[]
  featuresAr?: string[]

  // ── Commerce ──────────────────────────────────────────────────
  price: string // e.g. "$29", "$49"
  liveDemo?: string // External demo URL

  // ── Meta / SEO ────────────────────────────────────────────────
  metaTitle?: string
  metaDescription?: string
  metaDescriptionAr?: string

  // ── Visibility ────────────────────────────────────────────────
  featured: boolean
  publishedAt: string // ISO date string for sorting
}

// ── WhatsApp CTA Helpers ────────────────────────────────────────

const WHATSAPP_NUMBER = '201063841779'

export function buildBuyTemplateUrl(template: Template): string {
  const message = `مرحباً Mohamed،\n\nأرغب في شراء القالب التالي:\n\nاسم القالب: ${template.name}\n\nاسم المطور: ${template.author.name}\n\nيرجى تزويدي بتفاصيل الشراء.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildCustomizeTemplateUrl(template: Template): string {
  const message = `مرحباً Mohamed،\n\nأرغب في شراء وتعديل القالب التالي:\n\nاسم القالب: ${template.name}\n\nاسم المطور: ${template.author.name}\n\nوأرغب أيضاً في إجراء بعض التعديلات المخصصة عليه.\n\nيرجى التواصل معي لإتمام التفاصيل.`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

// ── Seed Data ───────────────────────────────────────────────────

const MEDOCODE_AUTHOR: TemplateAuthor = {
  name: 'Mohamed Wahid',
  handle: '@medocode',
}

export const templates: Template[] = [
  // ────────────────────────────────────────────────────────────
  // 1. Medical Center Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'medical-center', 
    slug: 'medical-center',
    name: 'Template for a medical center',
    nameAr: ' قالب لمركز طبي',
    tagline: 'Premium bilingual medical platform for clinics & rehab centers',
    taglineAr: 'منصة طبية احترافية ثنائية اللغة للعيادات ومراكز التأهيل',
    description:
      'A comprehensive, high-performance medical website template designed for clinics, rehabilitation centers, and healthcare practices. Featuring a medical-tech luxury visual identity, complete bilingual Arabic/English support with RTL layout, smooth GSAP animations, dynamic Dark/Light Mode, and professional service presentation sections. Built with React, Vite, and Tailwind CSS for blazing-fast performance.',
    descriptionAr:
      'قالب موقع طبي متكامل وعالي الأداء مصمم للعيادات ومراكز التأهيل والممارسات الصحية. يتميز بهوية بصرية احترافية تجمع بين الطابع الطبي والتقني، مع دعم كامل ثنائي اللغة للعربية والإنجليزية مع تخطيط RTL، وحركات GSAP سلسة، ووضع داكن/فاتح ديناميكي، وأقسام عرض خدمات احترافية.',
    category: 'Medical',
    tags: ['bilingual', 'rtl', 'dark-mode', 'animated', 'healthcare'],
    status: 'featured',
    author: MEDOCODE_AUTHOR,
    coverImage: '/photoP1.webp',
    galleryImages: ['/photoP1.webp', '/photoP2.webp'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18next', 'GSAP'],
    features: [
      'Bilingual Arabic / English with RTL Support',
      'Dynamic Dark & Light Mode',
      'Smooth GSAP Scroll Animations',
      'Fully Responsive — All Devices',
      'Services & Team Sections',
      'Patient Testimonials Section',
      'Appointment Contact Form',
      'SEO Optimized & Fast Loading',
    ],
    featuresAr: [
      'دعم ثنائي اللغة عربي/إنجليزي مع RTL',
      'وضع داكن وفاتح ديناميكي',
      'حركات GSAP سلسة عند التمرير',
      'متجاوب بالكامل على جميع الأجهزة',
      'أقسام الخدمات والفريق',
      'قسم آراء المرضى',
      'نموذج تواصل لحجز المواعيد',
      'محسّن لمحركات البحث وسريع التحميل',
    ],
    price: 'EGP 2,400',
    liveDemo: 'https://nasif-center.netlify.app/',
    metaTitle: 'MedCore Medical Center Template — MEDOCODE',
    metaDescription:
      'Premium bilingual medical website template for clinics and rehab centers. Dark/Light mode, RTL support, GSAP animations.',
    metaDescriptionAr:
      'قالب موقع طبي احترافي ثنائي اللغة للعيادات ومراكز التأهيل مع وضع داكن وفاتح ودعم RTL.',
    featured: true,
    publishedAt: '2026-01-01',
  },

  // ────────────────────────────────────────────────────────────
  // 2. Portfolio Website Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'devfolio-portfolio',
    slug: 'devfolio-portfolio',
    name: 'DevFolio — Developer Portfolio',
    nameAr: 'ديف فوليو — بورتفوليو مطور',
    tagline: 'Modern animated portfolio for developers & designers',
    taglineAr: 'بورتفوليو عصري متحرك للمطورين والمصممين',
    description:
      'A sleek, modern portfolio template built for frontend developers, UI/UX designers, and creative professionals. Features a stunning 3D hero section powered by Spline, smooth scroll animations, an interactive project showcase, client testimonials, and a backend-free contact form. The perfect template to make a powerful first impression and win more clients.',
    descriptionAr:
      'قالب بورتفوليو أنيق وعصري مصمم لمطوري الواجهات الأمامية ومصممي UI/UX والمبدعين. يتميز بقسم Hero ثلاثي الأبعاد مدعوم بـ Spline، وحركات تمرير سلسة، وعرض مشاريع تفاعلي، وآراء العملاء، ونموذج تواصل بدون خادم. القالب المثالي لترك انطباع أول قوي وكسب المزيد من العملاء.',
    category: 'Portfolio',
    tags: ['3d', 'animated', 'dark-mode', 'bilingual', 'gsap'],
    status: 'popular',
    author: MEDOCODE_AUTHOR,
    coverImage: '/photoP2.webp',
    galleryImages: ['/photoP2.webp', '/photoP1.webp'],
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Spline'],
    features: [
      '3D Interactive Hero with Spline',
      'GSAP Scroll-Triggered Animations',
      'Project Showcase with Detail Pages',
      'Client Testimonials Carousel',
      'Backend-Free WhatsApp Contact',
      'Multi-Language Support (EN/AR)',
      'Dark, Light & Warm Theme Modes',
      'Fully Responsive Design',
    ],
    featuresAr: [
      'Hero ثلاثي الأبعاد تفاعلي مع Spline',
      'حركات GSAP تُفعّل عند التمرير',
      'عرض مشاريع مع صفحات تفصيلية',
      'كاروسيل آراء العملاء',
      'تواصل عبر واتساب بدون خادم',
      'دعم متعدد اللغات (عربي/إنجليزي)',
      'أوضاع داكن وفاتح ودافئ',
      'تصميم متجاوب بالكامل',
    ],
    price: 'EGP 1,900',
    liveDemo: 'https://medocode-portfolio.netlify.app/',
    metaTitle: 'DevFolio Portfolio Template — MEDOCODE',
    metaDescription:
      'Modern animated developer portfolio template with 3D hero, GSAP animations, and multi-language support.',
    metaDescriptionAr:
      'قالب بورتفوليو مطور عصري متحرك مع Hero ثلاثي الأبعاد وحركات GSAP ودعم متعدد اللغات.',
    featured: true,
    publishedAt: '2026-01-15',
  },

  // ────────────────────────────────────────────────────────────
  // 3. Café / Coffee Shop Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'brewcraft-cafe',
    slug: 'brewcraft-cafe',
    name: 'BrewCraft — Café & Coffee Shop',
    nameAr: 'بريو كرافت — مقهى وكوفي شوب',
    tagline: 'Warm, immersive website for cafés and specialty coffee brands',
    taglineAr: 'موقع دافئ وغامر لمقاهي وماركات القهوة المتخصصة',
    description:
      'A beautifully crafted café website template with warm, inviting aesthetics that perfectly match the coffee shop experience. Includes an interactive menu with categories, a reservation/booking form, a story section, Instagram-style gallery, bilingual support, and smooth scroll effects. Designed to convert visitors into loyal customers.',
    descriptionAr:
      'قالب موقع مقهى جميل التصميم بجماليات دافئة وجذابة تتناسب تماماً مع تجربة المقهى. يتضمن قائمة تفاعلية بفئات، ونموذج حجز، وقسم قصة المقهى، وجاليري بأسلوب إنستغرام، ودعماً ثنائي اللغة، وتأثيرات تمرير سلسة. مصمم لتحويل الزوار إلى عملاء دائمين.',
    category: 'Restaurant',
    tags: ['bilingual', 'menu', 'warm-theme', 'animated', 'booking'],
    status: 'new',
    author: MEDOCODE_AUTHOR,
    coverImage: '/photoP3.webp',
    galleryImages: ['/photoP3.webp', '/photoP4.webp'],
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    features: [
      'Interactive Menu with Categories & Filters',
      'Table Reservation / Booking Form',
      'Bilingual Arabic / English',
      'Image Gallery with Lightbox',
      'Story & About Section',
      'Social Media Integration',
      'Mobile-First Responsive Design',
      'Fast Loading — Optimized Assets',
    ],
    featuresAr: [
      'قائمة تفاعلية مع فئات وفلاتر',
      'نموذج حجز الطاولات',
      'دعم ثنائي اللغة عربي/إنجليزي',
      'جاليري صور مع عارض',
      'قسم القصة والنبذة',
      'تكامل مع منصات التواصل الاجتماعي',
      'تصميم متجاوب يبدأ من الجوال',
      'سريع التحميل — أصول محسّنة',
    ],
    price: 'EGP 1,400',
    liveDemo: 'https://wbsite-cafe.netlify.app/',
    metaTitle: 'BrewCraft Café Template — MEDOCODE',
    metaDescription:
      'Warm, immersive café and coffee shop website template with interactive menu, booking form, and bilingual support.',
    metaDescriptionAr:
      'قالب موقع مقهى دافئ وغامر مع قائمة تفاعلية ونموذج حجز ودعم ثنائي اللغة.',
    featured: false,
    publishedAt: '2026-02-01',
  },

  // ────────────────────────────────────────────────────────────
  // 4. Restaurant / Fast Food Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'rushburger-restaurant',
    slug: 'rushburger-restaurant',
    name: 'RushBurger — Fast Food Restaurant',
    nameAr: 'راش برغر — مطعم وجبات سريعة',
    tagline: 'Bold, appetite-driven landing page for fast food restaurants',
    taglineAr: 'صفحة هبوط جريئة وشهية لمطاعم الوجبات السريعة',
    description:
      'A bold, vibrant restaurant website template designed to showcase your menu and brand in the most appetizing way possible. Features a hero with video background support, structured menu sections, location & hours, customer reviews, and a bold visual identity. Built to capture walk-ins and online orders effectively.',
    descriptionAr:
      'قالب موقع مطعم جريء وحيوي مصمم لعرض قائمتك وعلامتك التجارية بأكثر الطرق شهية. يتضمن Hero مع دعم خلفية الفيديو، وأقسام قائمة منظمة، وموقع وساعات العمل، ومراجعات العملاء، وهوية بصرية جريئة.',
    category: 'Restaurant',
    tags: ['bold', 'menu', 'animated', 'dark-hero', 'food'],
    status: 'popular',
    author: MEDOCODE_AUTHOR,
    coverImage: '/photoP4.webp',
    galleryImages: ['/photoP4.webp', '/photoP3.webp'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Bold Hero with Video Background Support',
      'Full Menu Showcase with Prices',
      'Customer Reviews & Ratings',
      'Location Map Integration',
      'Opening Hours Section',
      'Mobile-Optimized Layout',
      'Fast Delivery CTA Section',
      'SEO-Ready Structure',
    ],
    featuresAr: [
      'Hero جريء مع دعم خلفية الفيديو',
      'عرض قائمة كامل مع الأسعار',
      'مراجعات وتقييمات العملاء',
      'تكامل خريطة الموقع',
      'قسم ساعات العمل',
      'تخطيط محسّن للجوال',
      'قسم CTA للتوصيل السريع',
      'هيكل جاهز لتحسين محركات البحث',
    ],
    price: 'EGP 1,200',
    liveDemo: 'https://rurger-rush.netlify.app/',
    metaTitle: 'RushBurger Restaurant Template — MEDOCODE',
    metaDescription:
      'Bold and vibrant fast food restaurant website template with menu showcase, reviews, and location sections.',
    metaDescriptionAr:
      'قالب موقع مطعم وجبات سريعة جريء وحيوي مع عرض قائمة ومراجعات وأقسام الموقع.',
    featured: false,
    publishedAt: '2026-02-15',
  },

  // ────────────────────────────────────────────────────────────
  // 5. Gym / Fitness Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'ironcore-gym',
    slug: 'ironcore-gym',
    name: 'IronCore — Gym & Fitness',
    nameAr: 'آيرون كور — صالة رياضية',
    tagline: 'Powerful, energetic website for gyms and fitness studios',
    taglineAr: 'موقع قوي وحيوي للصالات الرياضية واستوديوهات اللياقة',
    description:
      'An energetic, motivating gym and fitness website template designed to inspire action and sign-ups. Includes a pricing plans comparison section, class schedule, trainer profiles, success stories with before/after, membership CTA, and full bilingual support. The bold visuals and strong typography command attention and drive conversions.',
    descriptionAr:
      'قالب موقع صالة رياضية ولياقة بدنية حيوي ومحفز مصمم لإلهام العمل والتسجيل. يتضمن قسم مقارنة خطط الأسعار، وجدول الدروس، وملفات المدربين، وقصص النجاح مع قبل/بعد، وCTA للعضوية، ودعماً ثنائي اللغة.',
    category: 'Business',
    tags: ['bold', 'bilingual', 'pricing', 'animated', 'fitness'],
    status: 'new',
    author: MEDOCODE_AUTHOR,
    coverImage: '/photoP5.webp',
    galleryImages: ['/photoP5.webp', '/photoP1.webp'],
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Pricing Plans Comparison Section',
      'Class Schedule & Timetable',
      'Trainer Profile Cards',
      'Before/After Success Gallery',
      'Membership Signup CTA',
      'Bilingual Arabic / English',
      'Bold Dark-Theme Design',
      'Fully Mobile Responsive',
    ],
    featuresAr: [
      'قسم مقارنة خطط الأسعار',
      'جدول الفصول والدروس',
      'بطاقات ملف المدربين',
      'جاليري قبل/بعد قصص النجاح',
      'CTA للتسجيل في العضوية',
      'دعم ثنائي اللغة عربي/إنجليزي',
      'تصميم داكن جريء',
      'متجاوب بالكامل للجوال',
    ],
    price: 'EGP 1,400',
    liveDemo: 'https://gym-ironcore.netlify.app/',
    metaTitle: 'IronCore Gym Template — MEDOCODE',
    metaDescription:
      'Powerful gym and fitness website template with pricing plans, class schedule, trainer profiles, and bilingual support.',
    metaDescriptionAr:
      'قالب موقع صالة رياضية قوي مع خطط أسعار وجدول دروس وملفات مدربين ودعم ثنائي اللغة.',
    featured: false,
    publishedAt: '2026-03-01',
  },

  // ────────────────────────────────────────────────────────────
  // 6. SaaS / Agency Landing Page Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'nexus-saas-agency',
    slug: 'nexus-saas-agency',
    name: 'Nexus — SaaS & Agency Landing',
    nameAr: 'نيكسوس — صفحة هبوط SaaS ووكالة',
    tagline: 'High-converting landing page for SaaS products and agencies',
    taglineAr: 'صفحة هبوط عالية التحويل لمنتجات SaaS والوكالات',
    description:
      'A conversion-focused SaaS and digital agency landing page template with a modern, clean aesthetic. Features a product hero with dashboard mockup, key features grid, social proof, pricing tiers, FAQ accordion, and a compelling CTA section. Engineered for lead generation with fast load times and excellent Core Web Vitals scores.',
    descriptionAr:
      'قالب صفحة هبوط للـ SaaS والوكالات الرقمية مُركّز على التحويل بجمالية حديثة ونظيفة. يتضمن Hero المنتج مع ماكيت لوحة التحكم، وشبكة الميزات الرئيسية، والدليل الاجتماعي، وفئات الأسعار، والأسئلة الشائعة، وقسم CTA مقنع. مُصمَّم لتوليد العملاء المحتملين.',
    category: 'SaaS',
    tags: ['saas', 'agency', 'dark-mode', 'conversion', 'modern'],
    status: 'featured',
    author: MEDOCODE_AUTHOR,
    coverImage: '/photoP2.webp',
    galleryImages: ['/photoP2.webp', '/photoP5.webp'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Product Hero with Dashboard Mockup',
      'Features Grid with Icons',
      'Social Proof & Testimonials',
      'Pricing Tiers Section',
      'FAQ Accordion Component',
      'Newsletter / Email Capture',
      'Animated Statistics Counter',
      'Dark Mode First Design',
    ],
    featuresAr: [
      'Hero المنتج مع ماكيت لوحة التحكم',
      'شبكة الميزات مع أيقونات',
      'دليل اجتماعي وتوصيات',
      'قسم فئات الأسعار',
      'مكون الأسئلة الشائعة الأكورديون',
      'التقاط البريد الإلكتروني/النشرة',
      'عداد إحصائيات متحرك',
      'تصميم يبدأ بالوضع الداكن',
    ],
    price: 'EGP 2,900',
    liveDemo: 'https://medocode-portfolio.netlify.app/',
    metaTitle: 'Nexus SaaS & Agency Landing Template — MEDOCODE',
    metaDescription:
      'High-converting SaaS and agency landing page template with pricing, FAQ, testimonials, and dark mode design.',
    metaDescriptionAr:
      'قالب صفحة هبوط SaaS ووكالة عالي التحويل مع أسعار وأسئلة شائعة وتوصيات وتصميم داكن.',
    featured: true,
    publishedAt: '2026-03-15',
  },
]

// ── Utilities ────────────────────────────────────────────────────

/** Find a template by its slug */
export function getTemplateBySlug(slug: string): Template | undefined {
  return templates.find(t => t.slug === slug)
}

/** Get all templates sorted by publishedAt descending */
export function getSortedTemplates(): Template[] {
  return [...templates].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

/** Search templates by name, tagline, or tags */
export function searchTemplates(query: string): Template[] {
  const q = query.toLowerCase().trim()
  if (!q) return getSortedTemplates()
  return getSortedTemplates().filter(
    t =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.tags.some(tag => tag.toLowerCase().includes(q)) ||
      t.category.toLowerCase().includes(q)
  )
}
