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
  keywords?: string[]   // Extra English search keywords
  keywordsAr?: string[] // Extra Arabic search keywords
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
    nameAr: 'قالب لمركز طبي',
    tagline: 'A state-of-the-art, trust-building digital medical platform for modern clinics and pediatric rehabilitation centers.',
    taglineAr: 'منصة طبية رقمية متطورة وموثوقة للعيادات الحديثة ومراكز التأهيل المتخصص للأطفال.',
    description:
      'Nasef Medical Center is a premium, production-ready website template designed specifically for physical therapy centers, pediatric rehabilitation clinics, and modern medical practices. Many healthcare organizations struggle to establish a digital presence that reflects their clinical excellence, often relying on slow, generic templates that fail to build patient trust. This premium solution solves that by combining a cutting-edge medical-tech visual identity with absolute clinical professionalism. Built using a modern design system with dynamic theme options (Dark, Light, and Warm modes), smooth micro-interactions, and an interactive HTML5 canvas hero, the template exudes premium quality. More importantly, it features deep trust-building architectures—including interactive service showcases, dedicated success stories, patient testimonials, and highly detailed clinical focus areas. Upon purchase, you receive the complete, production-ready source code, comprehensive documentation, and a highly customizable architecture that allows you to easily tailor colors, content, and services to your own practice\'s needs. With built-in high-performance engineering, full bilingualism (Arabic/English), and seamless RTL/LTR layouts, this template provides everything a modern healthcare facility needs to convert online visitors into loyal patients.',
    descriptionAr:
      'قالب "مركز ناصف الطبي" هو منصة ويب متكاملة فائقة الجودة ومجهزة بالكامل للإنتاج، صُممت خصيصاً لمراكز العلاج الطبيعي، عيادات تأهيل الأطفال، والممارسات الطبية المتخصصة. تواجه العديد من المراكز الطبية صعوبة في بناء حضور رقمي يعكس كفاءتها الطبية الحقيقية، وغالباً ما تقع في فخ القوالب الجاهزة والبطيئة التي لا توحي بالثقة. يحل هذا القالب الاحترافي هذه المشكلة تماماً عبر دمج الهوية البصرية لتقنيات الطب الحديث مع لغة تصميمية تبني الثقة الفورية لدى المرضى وعائلاتهم. يتميز القالب بتصميم راقٍ يدعم ثلاثة أوضاع بصرية (الداكن، الفاتح، والدافئ)، مع تفاعلات حركية فائقة السلاسة، وواجهة رئيسية تفاعلية مدعومة بـ HTML5 Canvas. عند شراء القالب، ستحصل على الكود البرمجي الكامل الجاهز للنشر، توثيق شامل للمشروع، وبنية برمجية مرنة للغاية تتيح لك تخصيص الألوان والمحتوى والخدمات بسهولة تامة لتناسب هوية عيادتك الخاصة. يركز التصميم بشكل أساسي على تعزيز المصداقية من خلال استعراض تفصيلي للخدمات الطبية، قسم مخصص لقصص النجاح وتجارب المرضى، وهيكلية تواصل عصرية ومباشرة. وبفضل الأداء البرمجي الفائق، والدعم الكامل لثنائية اللغة (العربية والإنجليزية) مع التوافق التام للتصفح من اليمين إلى اليسار (RTL)، فإن هذا القالب يمنح عيادتك الأداة المثلى لجذب المرضى وتقديم رعاية تليق باسمك.',
    category: 'Medical',
    tags: ['medical', 'clinic', 'rehabilitation', 'healthcare', 'react', 'tailwind', 'rtl', 'multilingual', 'pediatric', 'dark-mode'],
    keywords: ['physical therapy', 'pediatric', 'rehab', 'health center', 'children therapy', 'bilingual clinic'],
    keywordsAr: ['علاج طبيعي', 'تأهيل', 'تأهيل أطفال', 'عيادة', 'مركز طبي', 'عيادة أطفال', 'مركز ناصف', 'صحة'],
    author: {
      name: 'MEDOCODE',
      handle: '@medocode',
    },
    coverImage: '/photoPP1.webp',
    galleryImages: ['/photoPP2.webp', '/photoPP3.webp', '/photoPP4.webp', '/photoPP5.webp', '/photoPP6.webp','/photoPP7.webp',],
    technologies: [
      'React 19', 
      'Vite',
      'Tailwind CSS 4',
      'Framer Motion',
      'React Router',
      'i18next',
      'React Helmet Async',
      'HTML5 Canvas',
    ],
    features: [
      'Fully Responsive Layout across all screen sizes and device types',
      'Complete Multilingual Support (English & Arabic) with native RTL/LTR layouts',
      'Dynamic Theme System supporting Dark, Light, and Warm modes seamlessly',
      'Interactive Hero Section powered by advanced HTML5 Canvas technology',
      'Comprehensive Medical Services Showcase for clinical specialties',
      'Success Stories & Patient Testimonials presentation sections',
      'Search Engine Optimized (SEO) architecture with React Helmet Async',
      'Fluid animations and premium micro-interactions using Framer Motion',
      'Production-ready, high-performance structure built on React 19 & Vite',
      'Modern Contact Experience with direct WhatsApp action flows',
    ],
    featuresAr: [
      'تصميم متجاوب بالكامل يتلاءم مع كافة الشاشات والأجهزة الذكية',
      'دعم كامل لثنائية اللغة (العربية والإنجليزية) مع اتجاهات متوافقة LTR/RTL',
      'نظام سمات تفاعلي يدعم الأوضاع (الداكن، الفاتح، والدافئ) بسلاسة',
      'قسم رئيسي تفاعلي وجاذب مدعوم بتقنية HTML5 Canvas المتطورة',
      'عرض احترافي للخدمات الطبية والتخصصات العلاجية المتنوعة',
      'مساحات مخصصة لعرض قصص النجاح الملهمة وآراء وتجارب المرضى',
      'بنية مهيأة لمحركات البحث (SEO) باستخدام React Helmet Async',
      'مؤثرات بصرية وانتقالات حركية راقية مدعومة بـ Framer Motion',
      'بنية برمجية عالية الأداء ومجهزة للإطلاق الفوري باستخدام React 19 وVite',
      'تجربة تواصل عصرية وسهلة مع دمج مباشر لخدمة المحادثة عبر WhatsApp',
    ],
    price: 'EGP 1,900', 
    liveDemo: 'https://nasif-physical-therapy-center.vercel.app/',
    metaTitle: 'Template for a medical center | MEDOCODE',
    metaDescription:
      'Empower your clinic or rehabilitation center with the Nasef Medical Center template. A premium, high-performance React 19 & Tailwind CSS 4 bilingual template.',
    metaDescriptionAr:
      'ارتقِ بحضور عيادتك أو مركزك الطبي مع قالب مركز ناصف الطبي. قالب احترافي عالي الأداء وثنائي اللغة مبني بـ React 19 وTailwind CSS 4.',
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
    keywords: ['developer portfolio', 'cv website', 'personal site', 'frontend portfolio', 'creative portfolio'],
    keywordsAr: ['بورتفوليو', 'سيرة ذاتية', 'موقع شخصي', 'مطور', 'موقع مطور', 'معرض أعمال'],
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
    keywords: ['cafe website', 'coffee shop', 'menu', 'restaurant booking', 'food'],
    keywordsAr: ['مقهى', 'قهوة', 'كوفي شوب', 'قائمة طعام', 'حجز طاولة', 'مطعم'],
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
    keywords: ['burger restaurant', 'fast food', 'food delivery', 'restaurant template', 'menu website'],
    keywordsAr: ['برغر', 'وجبات سريعة', 'مطعم', 'قائمة', 'توصيل طعام', 'مطعم وجبات'],
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
    keywords: ['gym website', 'fitness studio', 'workout', 'membership', 'training'],
    keywordsAr: ['صالة رياضية', 'جيم', 'لياقة', 'تمرين', 'عضوية', 'فيتنس'],
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
    keywords: ['saas landing page', 'startup', 'agency website', 'product page', 'lead generation'],
    keywordsAr: ['صفحة هبوط', 'وكالة', 'منتج رقمي', 'شركة ناشئة', 'تسويق', 'برمجيات'],
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

/** Search templates across all English and Arabic fields */
export function searchTemplates(query: string): Template[] {
  const q = query.trim()
  if (!q) return getSortedTemplates()

  // Use two separate lower-cased queries:
  // – qLower for case-insensitive Latin field matching
  // – qRaw  for Arabic matching (no lower-casing needed for Arabic)
  const qLower = q.toLowerCase()

  return getSortedTemplates().filter(t => {
    // ── English fields ───────────────────────────────────────
    if (t.name.toLowerCase().includes(qLower)) return true
    if (t.tagline.toLowerCase().includes(qLower)) return true
    if (t.description.toLowerCase().includes(qLower)) return true
    if (t.category.toLowerCase().includes(qLower)) return true
    if (t.tags.some(tag => tag.toLowerCase().includes(qLower))) return true
    if (t.keywords?.some(kw => kw.toLowerCase().includes(qLower))) return true

    // ── Arabic fields ────────────────────────────────────────
    if (t.nameAr?.includes(q)) return true
    if (t.taglineAr?.includes(q)) return true
    if (t.descriptionAr?.includes(q)) return true
    if (t.keywordsAr?.some(kw => kw.includes(q))) return true

    return false
  })
}
