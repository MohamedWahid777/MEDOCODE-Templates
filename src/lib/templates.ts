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
    id: 'professional-portfolio-Template',
    slug: 'professional-portfolio-Template',
    name: 'Professional Portfolio Template',
    nameAr: 'قالب معرض الأعمال الاحترافي',
    tagline: 'The definitive portfolio template for professionals who refuse to be overlooked.',
    taglineAr: 'قالب معرض الأعمال الاحترافي للمبدعين الذين يرفضون المرور دون أثر.',
    description:
      'Professional Portfolio Template is a production-grade portfolio website template engineered for professionals who understand that their online presence is their most powerful sales tool. In a market saturated with generic portfolios, standing out requires more than a clean layout — it demands an experience. This template delivers exactly that: a captivating 3D interactive hero section, silky-smooth scroll effects powered by Lenis and GSAP, a full advanced theme system (Dark, Light, and Warm modes), seamless bilingual support with RTL/LTR switching, and a deeply polished UI built on React.js, TypeScript, and Tailwind CSS. Whether you are a freelance developer looking to land high-value clients, a UI/UX designer building your personal brand, or a digital agency presenting your capabilities, Elite Portfolio Pro gives you the competitive edge your work deserves. The template includes a custom cursor experience, an interactive project showcase with dedicated detail pages, a scroll-animated professional timeline, and a contact section engineered to convert — all without a single line of backend code. Purchase once, deploy forever, and let your portfolio do the selling.',
    descriptionAr:
      'Professional Portfolio Template هو قالب موقع معرض أعمال احترافي مُصمَّم للمطورين والمصممين والمبدعين الذين يعرفون قيمة حضورهم الرقمي. في عالم يمتلئ بالمحافظ الشخصية المتشابهة، لم يعد يكفي أن تمتلك موقعاً نظيفاً — بل أنت بحاجة إلى تجربة تتحدث عنك قبل أن تتحدث بكلمة واحدة. يقدم هذا القالب بالضبط ما يحتاجه المحترفون: قسم Hero ثلاثي الأبعاد مذهل، تأثيرات تمرير سلسة باستخدام Lenis وGSAP، نظام سمات متكامل يدعم الوضع الداكن والفاتح والدافئ، ودعم ثنائي اللغة الكامل مع تبديل تلقائي بين RTL وLTR. سواء كنت مطور مستقل يسعى لجذب عملاء ذوي قيمة عالية، أو مصمم UI/UX يبني علامته الشخصية، أو وكالة رقمية تعرض كفاءاتها، فإن Elite Portfolio Pro يمنحك التميز الذي يستحقه عملك. يتضمن القالب مؤشراً مخصصاً تفاعلياً، عرض مشاريع ديناميكي مع صفحات تفصيلية مخصصة، خط زمني مهني يتحرك مع التمرير، وقسم تواصل مُصمَّم للتحويل — كل هذا دون أي كود خلفي. اشترِ مرة واحدة، انشر بلا حدود، ودع معرض أعمالك يبيع بدلاً عنك.',
    category: 'Portfolio',
    tags: ['portfolio', 'developer', 'freelancer', 'agency', 'designer', 'react', 'typescript', 'tailwind', 'threejs', 'gsap', 'multilingual', 'rtl', 'seo', 'showcase'],
    keywords: ['developer portfolio', 'freelancer website', 'personal website', 'frontend portfolio', 'creative portfolio', 'agency portfolio', 'designer website', 'cv website'],
    keywordsAr: ['بورتفوليو', 'معرض أعمال', 'سيرة ذاتية', 'موقع مطور', 'موقع مصمم', 'موقع شخصي', 'مستقل', 'وكالة', 'عرض أعمال احترافي'],
    status: 'featured',
    author: {
      name: 'MEDOCODE',
      handle: '@medocode',
    },
    coverImage: '/photoPP8.webp',
    galleryImages: ['/photoPP9.webp', '/photoPP10.webp', '/photoPP11.webp', '/photoPP12.webp'],
    technologies: [
      'React.js', 
      'TypeScript', 
      'Vite',
      'Tailwind CSS',
      'React Router DOM',
      'React i18next',
      'React Helmet Async',
      'Three.js',
      'React Three Fiber',
      'GSAP',
      'Framer Motion',
      'Lenis',
      'Lucide React',
    ],
    features: [
      'Fully Responsive Design — flawlessly adapts to all screen sizes and devices',
      'Advanced Theme System with Dark, Light, and Warm mode switching',
      'Interactive 3D Hero Section', 
      'Silky-smooth scroll experience using Lenis smooth scroll library',
      'Custom cursor animation for a premium, memorable first impression',
      'Professional project showcase with dedicated per-project detail pages',
      'Scroll-animated interactive professional timeline',
      'Complete Multilingual Support (Arabic & English) with RTL/LTR layouts',
      'SEO-Optimized architecture using React Helmet Async',
      'High-performance micro-interactions and page transitions via Framer Motion',
      'GSAP scroll-triggered animations throughout the entire site',
      'Backend-free modern contact section with WhatsApp and email integration',
      'Production-ready TypeScript codebase — clean, scalable, and easy to customize',
    ],
    featuresAr: [
      'تصميم متجاوب بالكامل — يتكيف بسلاسة مع جميع الأجهزة والشاشات',
      'نظام سمات متقدم يدعم التبديل بين الوضع الداكن والفاتح والدافئ',
      'قسم Hero ثلاثي الأبعاد تفاعلي ',
      'تجربة تمرير سلسة وناعمة باستخدام مكتبة Lenis المتخصصة',
      'مؤشر مخصص متحرك لترك انطباع أول لا يُنسى لدى الزوار',
      'عرض مشاريع احترافي مع صفحات تفصيلية منفصلة لكل مشروع', 
      'خط زمني مهني تفاعلي يتحرك ويكشف نفسه مع التمرير',
      'دعم ثنائي اللغة الكامل (العربية والإنجليزية) مع تخطيطات RTL/LTR',
      'بنية محسّنة لمحركات البحث (SEO) باستخدام React Helmet Async',
      'تفاعلات بصرية راقية وانتقالات صفحات احترافية مدعومة بـ Framer Motion',
      'حركات GSAP المرتبطة بالتمرير تنبض بالحياة في كل أنحاء الموقع',
      'قسم تواصل عصري يعمل بدون خادم مع دمج WhatsApp والبريد الإلكتروني',
      'كود TypeScript جاهز للإنتاج — نظيف وقابل للتوسع وسهل التخصيص',
    ], 
    price: 'EGP 1,198', 
    liveDemo: 'https://medocode.vercel.app/',
    metaTitle: 'professional-portfolio-Template — Premium Portfolio Template for Developers & Designers | MEDOCODE',
    metaDescription:
      'professional-portfolio-Template is a premium React.js portfolio template for developers, designers, and agencies. Featuring 3D hero, GSAP animations, bilingual RTL support, and dark/light/warm themes.',
    metaDescriptionAr:
      'professional-portfolio-Template — قالب بورتفوليو احترافي مبني بـ React.js للمطورين والمصممين والوكالات. يتميز بـ Hero ثلاثي الأبعاد وحركات GSAP ودعم ثنائي اللغة مع RTL وأوضاع داكن وفاتح ودافئ.',
    featured: true,
    publishedAt: '2026-01-15',
  },

  // ────────────────────────────────────────────────────────────
  // 3. Café / Coffee Shop Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'cafe-restaurant-pro',
    slug: 'cafe-restaurant-pro',
    name: 'Cafe & Restaurant Pro',
    nameAr: 'قالب الكافيهات والمطاعم الاحترافي',
    tagline: 'A premium website template that turns every visit into a dining experience worth returning for.',
    taglineAr: 'قالب موقع احترافي يحوّل كل زيارة رقمية إلى تجربة ضيافة تستحق العودة إليها.',
    description:
      'Cafe & Restaurant Pro is a complete, premium website template built for modern food businesses that understand the power of a strong online presence. Whether you run a specialty coffee shop, a full-service restaurant, a boutique bakery, a dessert lounge, or a cloud kitchen — your customers make their first impression of your brand online, long before they walk through your door. This template gives food businesses the digital storefront they deserve: a beautifully designed, mobile-first layout with warm, appetite-driving aesthetics, an interactive categorized menu system, a seamless table reservation form integrated with email delivery (no backend required), a stunning visual gallery, and a bilingual Arabic/English experience with full RTL support. Built entirely on HTML5, CSS3, Tailwind CSS, and vanilla JavaScript, it loads blazing fast on any device with zero framework overhead. Everything about this template is designed to build trust, showcase your offering, and convert online visitors into loyal regulars — without needing a developer to maintain it.',
    descriptionAr:
      'Cafe & Restaurant Pro هو قالب موقع متكامل وعالي الجودة، مُصمَّم خصيصاً للأعمال الغذائية الحديثة التي تدرك أهمية الحضور الرقمي القوي. سواء كنت تدير مقهى متخصصاً، مطعماً بخدمة كاملة، مخبزاً فاخراً، صالون حلويات، أو مطبخاً سحابياً — فإن عملاءك يكوّنون انطباعهم الأول عن علامتك التجارية عبر الإنترنت، قبل أن يطرقوا بابك. يمنح هذا القالب أعمالك الغذائية الواجهة الرقمية التي تستحقها: تصميم جميل يبدأ من الجوال بجماليات دافئة ومحفِّزة للشهية، نظام قائمة طعام تفاعلي مصنَّف بالفئات، نموذج حجز طاولات سلس مع تكامل البريد الإلكتروني (دون الحاجة إلى خادم)، جاليري بصري جذاب، وتجربة ثنائية اللغة عربي/إنجليزي مع دعم كامل لـ RTL. مبني بالكامل على HTML5 وCSS3 وTailwind CSS وJavaScript، يتحمل بسرعة فائقة على أي جهاز دون أي عبء إطار عمل. كل شيء في هذا القالب مُصمَّم لبناء الثقة، وعرض ما تقدمه باحترافية، وتحويل الزوار الرقميين إلى عملاء دائمين — دون الحاجة إلى مطور لصيانته.',
    category: 'Restaurant',
    tags: ['cafe', 'restaurant', 'food', 'coffee', 'bakery', 'dessert', 'menu', 'reservation', 'responsive', 'multilingual', 'rtl', 'business', 'hospitality'],
    keywords: ['cafe website template', 'restaurant website', 'food business website', 'coffee shop website', 'bakery website', 'restaurant landing page', 'menu website'],
    keywordsAr: ['موقع مقهى', 'موقع مطعم', 'قالب مطعم', 'قالب مقهى', 'قائمة طعام', 'حجز طاولة', 'قهوة', 'مخبز', 'حلويات', 'أعمال غذائية'],
    status: 'featured',
    author: {
      name: 'MEDOCODE',
      handle: '@medocode',
    },
    coverImage: '/photoPP13.webp',
    galleryImages: ['/photoPP14.webp', '/photoPP15.webp', '/photoPP16.webp', '/photoPP17.webp', '/photoPP18.webp'],
    technologies: [
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'JavaScript',
    ],
    features: [
      'Fully Responsive Design — optimized for all screen sizes, from mobile to large desktop',
      'Interactive Menu Section with categories, filters, and beautiful item presentation',
      'Online Table Reservation System with email delivery — no backend required',
      'Complete Bilingual Support (Arabic & English) with native RTL/LTR layouts',
      'Dark Mode & Light Mode for optimal ambiance across all environments',
      'Visual Story & Brand Section to communicate your unique identity',
      'Stunning Food Photo Gallery with lightbox viewer',
      'Social Media Integration to connect all your digital channels',
      'Contact Form with email integration — works without any server-side code',
      'Smooth CSS & JavaScript animations for a premium browsing feel',
      'SEO-Friendly semantic HTML structure for better search engine discoverability',
      'Blazing-fast performance — zero framework overhead, fully optimized assets',
      'Easy to customize — clean, well-commented code requires no advanced expertise',
    ],
    featuresAr: [
      'تصميم متجاوب بالكامل — محسَّن لجميع الشاشات من الجوال إلى الشاشات الكبيرة',
      'قسم قائمة طعام تفاعلي مع فئات وفلاتر وعرض جميل لكل عنصر',
      'نظام حجز طاولات عبر الإنترنت مع تكامل البريد الإلكتروني — بدون خادم',
      'دعم ثنائي اللغة الكامل (العربية والإنجليزية) مع تخطيطات RTL/LTR أصيلة',
      'وضع داكن ووضع فاتح لتجربة تصفح مريحة في جميع البيئات',
      'قسم قصة العلامة التجارية لإيصال هويتك الفريدة إلى زوارك',
      'جاليري صور طعام جذابة مع عارض صور احترافي',
      'تكامل منصات التواصل الاجتماعي لربط جميع قنواتك الرقمية',
      'نموذج تواصل مع تكامل البريد الإلكتروني — يعمل دون أي كود خلفي',
      'حركات CSS وJavaScript سلسة لتجربة تصفح راقية',
      'هيكل HTML دلالي صديق لمحركات البحث لتصنيف أفضل في نتائج البحث',
      'أداء فائق السرعة — بدون عبء إطار العمل، أصول محسَّنة بالكامل',
      'سهل التخصيص — كود نظيف ومُعلَّق يناسب المستخدمين من جميع المستويات',
    ],
    price: 'EGP 799',
    liveDemo: 'https://cafe-website-chi-blush.vercel.app/',
    metaTitle: 'Cafe & Restaurant Pro — Premium Food Business Website Template | MEDOCODE',
    metaDescription:
      'Cafe & Restaurant Pro is a premium HTML/CSS/JS website template for cafes, restaurants, bakeries, and food businesses. Features interactive menu, reservation system, bilingual RTL support.',
    metaDescriptionAr:
      'Cafe & Restaurant Pro — قالب موقع احترافي للمقاهي والمطاعم والمخابز والأعمال الغذائية. يتميز بقائمة طعام تفاعلية ونظام حجز ودعم ثنائي اللغة مع RTL.',
    featured: true,
    publishedAt: '2026-02-01',
  },

  // ────────────────────────────────────────────────────────────
  // 4. Portfolio  Template
  // ────────────────────────────────────────────────────────────
  {
    id: 'portfolio-Template',
    slug: 'portfolio-Template',
    name: 'Portfolio Template',
    nameAr: 'قالب معرض الأعمال ',
    tagline: 'Your skills deserve to be seen — a clean, professional portfolio that speaks for itself.',
    taglineAr: 'مهاراتك تستحق أن تُرى — معرض أعمال نظيف واحترافي يتحدث عنك.',
    description:
      'Portfolio Template is a clean, lightweight portfolio website template built for professionals who want an elegant online presence without the complexity. In a world where first impressions happen in seconds, a well-structured portfolio is the difference between being noticed and being overlooked. This template gives you everything you need to showcase your skills, projects, services, and experience in a modern, professional format — and nothing you do not. Built entirely on HTML5, CSS3, and vanilla JavaScript, it loads instantly on any device, requires zero framework knowledge to customize, and can be deployed in minutes. Whether you are a freelancer hunting for your next client, a developer building your first online presence, a designer presenting your work, or a student entering the job market, Portfolio Template provides the professional credibility that gets you taken seriously — at a price that makes sense for where you are right now. Clean code. Smart structure. No compromises on quality.',
    descriptionAr:
      'Portfolio Template هو قالب موقع معرض أعمال نظيف وخفيف الوزن، مُصمَّم للمحترفين الذين يريدون حضوراً رقمياً أنيقاً دون تعقيد. في عالم تحدث فيه الانطباعات الأولى خلال ثوانٍ، فإن معرض الأعمال المُهيكل بشكل جيد هو الفارق بين أن تُلاحَظ أو أن تُتجاهل. يمنحك هذا القالب كل ما تحتاجه لعرض مهاراتك ومشاريعك وخدماتك وخبرتك بتنسيق عصري واحترافي — ولا شيء زائداً عن الحاجة. مبني بالكامل على HTML5 وCSS3 وJavaScript، يُحمَّل فورياً على أي جهاز، ولا يتطلب أي معرفة بإطارات العمل للتخصيص، ويمكن نشره في دقائق. سواء كنت مستقلاً يبحث عن عميله التالي، أو مطوراً يبني حضوره الرقمي الأول، أو مصمماً يعرض أعماله، أو طالباً يدخل سوق العمل — يوفر Portfolio Starter المصداقية المهنية التي تجعلك تُؤخذ على محمل الجد، بسعر يناسب مرحلتك الحالية. كود نظيف. هيكل ذكي. جودة لا تُساوَم عليها.',
    category: 'Portfolio',
    tags: ['portfolio', 'freelancer', 'developer', 'designer', 'agency', 'responsive', 'modern', 'personal-brand', 'showcase', 'business', 'lightweight', 'html', 'beginner-friendly'],
    keywords: ['portfolio website template', 'personal portfolio', 'freelancer portfolio', 'professional website', 'developer portfolio', 'simple portfolio', 'starter template'],
    keywordsAr: ['قالب معرض أعمال', 'بورتفوليو', 'موقع شخصي', 'موقع مستقل', 'معرض مطور', 'موقع احترافي', 'قالب بسيط'],
    status: 'new',
    author: {
      name: 'MEDOCODE',
      handle: '@medocode',
    },
    coverImage: '/photoPP19.webp',
    galleryImages: ['/photoPP20.webp', '/photoPP21.webp'],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
    ],
    features: [
      'Fully Responsive Design — flawlessly adapts across mobile, tablet, and desktop',
      'Dark Mode & Light Mode with smooth, instant switching',
      'Professional Project Showcase section with hover effects and project cards',
      'Skills & Services section with clean, readable layout',
      'Interactive hover effects and smooth CSS animations throughout',
      'Contact Form with direct email integration — no backend required',
      'Fast Loading Performance — zero framework overhead, optimized for Core Web Vitals',
      'SEO-Friendly semantic HTML structure for better search visibility',
      'Mobile-First Layout ensuring a flawless experience on all screen sizes',
      'Clean, well-commented code — easy to customize without advanced expertise',
      'Modern UI Design with professional typography and spacing',
      'Production-ready structure deployable to any static hosting in minutes',
    ],
    featuresAr: [
      'تصميم متجاوب بالكامل — يتكيف بسلاسة على الجوال والتابلت والحاسوب',
      'وضع داكن ووضع فاتح مع تبديل سلس وفوري',
      'قسم عرض المشاريع الاحترافي مع تأثيرات hover وبطاقات مشاريع أنيقة',
      'قسم المهارات والخدمات بتصميم نظيف وسهل القراءة',
      'تأثيرات hover تفاعلية وحركات CSS سلسة في جميع أنحاء الموقع',
      'نموذج تواصل مع تكامل البريد الإلكتروني المباشر — بدون خادم',
      'أداء تحميل فائق السرعة — صفر عبء إطار عمل، محسَّن لـ Core Web Vitals',
      'هيكل HTML دلالي صديق لمحركات البحث لتصنيف رقمي أفضل',
      'تخطيط يبدأ من الجوال لضمان تجربة ممتازة على جميع الشاشات',
      'كود نظيف ومُعلَّق — سهل التخصيص دون الحاجة إلى خبرة برمجية متقدمة',
      'تصميم UI عصري بطباعة وتباعد احترافيين',
      'بنية جاهزة للإنتاج قابلة للنشر على أي استضافة ثابتة في دقائق',
    ],
    price: 'EGP 899',
    liveDemo: 'https://medocode-portfolio.vercel.app/',
    metaTitle: 'Portfolio Starter — Clean Professional Portfolio Template for Freelancers & Developers | MEDOCODE',
    metaDescription:
      'Portfolio Template is an affordable, clean HTML/CSS/JS portfolio template for freelancers, developers, designers, and students. Fast, responsive, dark mode, and easy to customize.',
    metaDescriptionAr:
      'Portfolio Template — قالب معرض أعمال نظيف واحترافي بأسعار مناسبة للمستقلين والمطورين والمصممين والطلاب. سريع ومتجاوب مع وضع داكن وسهل التخصيص.',
    featured: false,
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
