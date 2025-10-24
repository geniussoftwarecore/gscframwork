// Enhanced Portfolio Data with Bilingual Support and KPIs
export interface PortfolioProject {
  slug: string;
  title: string;
  titleAr: string;
  client: string;
  clientAr: string;
  sector: string;
  sectorAr: string;
  year: number;
  status: 'published' | 'draft' | 'archived';
  kpis: KPI[];
  tech: string[];
  coverImage: string;
  gallery: GalleryItem[];
  summaryEn: string;
  summaryAr: string;
  descriptionEn: string;
  descriptionAr: string;
  challengeEn: string;
  challengeAr: string;
  solutionEn: string;
  solutionAr: string;
  services: string[];
  servicesAr: string[];
  duration: string;
  durationAr: string;
  teamSize: number;
  budget?: string;
  budgetAr?: string;
  websiteUrl?: string;
  githubUrl?: string;
  testimonial?: {
    name: string;
    nameAr: string;
    position: string;
    positionAr: string;
    content: string;
    contentAr: string;
    avatar?: string;
    rating: number;
  };
  features: string[];
  featuresAr: string[];
  results: string[];
  resultsAr: string[];
}

export interface KPI {
  id: string;
  label: string;
  labelAr: string;
  value: string;
  description: string;
  descriptionAr: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
  unit?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  altAr: string;
  type: 'image' | 'video';
  caption?: string;
  captionAr?: string;
}

// Sample Portfolio Data (6 projects with bilingual content)
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'complaints-system-peregrine',
    title: 'Complaints and Customer Service Management System',
    titleAr: 'تطبيق إدارة الشكاوى وخدمة العملاء',
    client: 'Government & Corporate Institutions',
    clientAr: 'المؤسسات الحكومية والشركات',
    sector: 'Government / Customer Service',
    sectorAr: 'حكومي / خدمة العملاء',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'response_time',
        label: 'Response Time Reduction',
        labelAr: 'تقليل وقت الاستجابة',
        value: '75%',
        description: 'Faster complaint resolution and processing',
        descriptionAr: 'معالجة وحل الشكاوى بشكل أسرع',
        icon: 'Clock',
        trend: 'down'
      },
      {
        id: 'user_satisfaction',
        label: 'User Satisfaction',
        labelAr: 'رضا المستخدمين',
        value: '94%',
        description: 'Overall satisfaction with the digital system',
        descriptionAr: 'الرضا العام عن النظام الرقمي',
        icon: 'Star',
        trend: 'up'
      },
      {
        id: 'paperless',
        label: 'Digital Transformation',
        labelAr: 'التحول الرقمي',
        value: '100%',
        description: 'Complete elimination of paper-based processes',
        descriptionAr: 'القضاء التام على العمليات الورقية',
        icon: 'FileText',
        trend: 'up'
      },
      {
        id: 'efficiency',
        label: 'Processing Efficiency',
        labelAr: 'كفاءة المعالجة',
        value: '85%',
        description: 'Improvement in complaint handling efficiency',
        descriptionAr: 'تحسين كفاءة معالجة الشكاوى',
        icon: 'TrendingUp',
        trend: 'up'
      }
    ],
    tech: ['React', 'Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'JWT', 'Bootstrap', 'Tailwind CSS', 'Docker'],
    coverImage: '/attached_assets/1_1761269603885.jpg',
    gallery: [
      {
        id: '1',
        url: '/attached_assets/1_1761269603885.jpg',
        alt: 'Splash Screen - Peregrine App',
        altAr: 'شاشة البداية - تطبيق بيريجرين',
        type: 'image',
        caption: 'App splash screen showcasing the Peregrine logo with security and protection features',
        captionAr: 'شاشة تحميل التطبيق تعرض شعار بيريجرين مع ميزات الحماية والأمان'
      },
      {
        id: '2',
        url: '/attached_assets/2_1761269603886.jpg',
        alt: 'Login Screen',
        altAr: 'شاشة تسجيل الدخول',
        type: 'image',
        caption: 'Secure login interface with username and password fields, featuring multiple authentication options including client and employee accounts',
        captionAr: 'واجهة تسجيل دخول آمنة مع حقول اسم المستخدم وكلمة المرور، تتضمن خيارات مصادقة متعددة للعملاء والموظفين'
      },
      {
        id: '3',
        url: '/attached_assets/3 - Copy_1761269603887.jpg',
        alt: 'Main Dashboard',
        altAr: 'الشاشة الرئيسية',
        type: 'image',
        caption: 'User-friendly dashboard displaying quick action cards for submitting requests and complaints, with recent activity feed showing latest submissions',
        captionAr: 'لوحة تحكم سهلة الاستخدام تعرض بطاقات الإجراءات السريعة لتقديم الطلبات والشكاوى، مع موجز النشاطات الأخيرة'
      },
      {
        id: '4',
        url: '/attached_assets/5_1761269603888.jpg',
        alt: 'Notifications Screen',
        altAr: 'شاشة الإشعارات',
        type: 'image',
        caption: 'Real-time notifications center showing new service requests, complaints, and status updates with color-coded priority indicators',
        captionAr: 'مركز الإشعارات الفورية يعرض طلبات الخدمة الجديدة والشكاوى وتحديثات الحالة مع مؤشرات الأولوية الملونة'
      },
      {
        id: '5',
        url: '/attached_assets/6 - Copy_1761269603888.jpg',
        alt: 'Customer Support Dashboard',
        altAr: 'لوحة دعم العملاء',
        type: 'image',
        caption: 'Comprehensive customer support dashboard displaying active tickets, pending requests, and resolved issues with detailed status tracking',
        captionAr: 'لوحة دعم العملاء الشاملة تعرض التذاكر النشطة والطلبات المعلقة والمشكلات المحلولة مع تتبع تفصيلي للحالة'
      },
      {
        id: '6',
        url: '/attached_assets/11 - Copy_1761269603889.jpg',
        alt: 'Request Details and Chat',
        altAr: 'تفاصيل الطلب والمحادثة',
        type: 'image',
        caption: 'Detailed complaint view featuring real-time chat interface between users and support staff for efficient communication and issue resolution',
        captionAr: 'عرض تفصيلي للشكوى يتضمن واجهة محادثة فورية بين المستخدمين وموظفي الدعم لتواصل فعال وحل المشكلات'
      }
    ],
    summaryEn: 'A comprehensive digital solution for managing complaints and feedback, serving government institutions, corporations, and service centers with modern, efficient complaint resolution workflows.',
    summaryAr: 'حل رقمي متكامل لإدارة الشكاوى والملاحظات، يخدم المؤسسات الحكومية والشركات ومراكز الخدمة بأسلوب حديث وفعّال لحل الشكاوى.',
    descriptionEn: 'Peregrine (Al-Shakaha) is a full-stack intelligent complaints management system designed to modernize and automate the process of receiving, tracking, and resolving complaints. The platform eliminates traditional paper-based methods, providing a seamless digital experience for both users and administrators with real-time notifications and comprehensive analytics.',
    descriptionAr: 'تطبيق الشَّكَهَة (Peregrine) هو نظام ذكي متكامل لإدارة الشكاوى، مصمم لتحديث وأتمتة عملية استقبال وتتبع وحل الشكاوى. تلغي المنصة الطرق الورقية التقليدية، وتوفر تجربة رقمية سلسة للمستخدمين والإداريين مع إشعارات فورية وتحليلات شاملة.',
    challengeEn: 'Government and corporate institutions faced inefficient paper-based complaint systems with slow response times, lack of tracking transparency, difficulty in data analysis, and poor user experience. Organizations needed a modern digital solution to handle high volumes of complaints while maintaining accountability and providing real-time updates.',
    challengeAr: 'واجهت المؤسسات الحكومية والشركات أنظمة شكاوى ورقية غير فعالة مع أوقات استجابة بطيئة، وعدم شفافية في التتبع، وصعوبة في تحليل البيانات، وتجربة مستخدم ضعيفة. احتاجت المنظمات إلى حل رقمي حديث للتعامل مع أعداد كبيرة من الشكاوى مع الحفاظ على المساءلة وتوفير تحديثات فورية.',
    solutionEn: 'We developed a comprehensive full-stack complaints management platform featuring an intuitive user interface for submitting complaints with file attachments, a powerful admin dashboard for processing and categorizing complaints, role-based access control, real-time email and in-app notifications, advanced analytics and reporting tools, and complete Arabic language support. The system is built with modern technologies ensuring scalability, security, and ease of deployment across various institutions.',
    solutionAr: 'طورنا منصة متكاملة لإدارة الشكاوى تتميز بواجهة مستخدم سهلة لتقديم الشكاوى مع إرفاق الملفات، ولوحة تحكم قوية للإدارة لمعالجة وتصنيف الشكاوى، ونظام صلاحيات حسب الأدوار، وإشعارات فورية عبر البريد الإلكتروني والتطبيق، وأدوات تحليلات وتقارير متقدمة، ودعم كامل للغة العربية. النظام مبني بتقنيات حديثة تضمن قابلية التوسع والأمان وسهولة النشر عبر مختلف المؤسسات.',
    services: ['Full Stack Development', 'System Architecture', 'Database Design', 'UX/UI Design', 'API Development', 'Security Implementation'],
    servicesAr: ['تطوير متكامل', 'تصميم معماري للأنظمة', 'تصميم قواعد البيانات', 'تصميم UX/UI', 'تطوير واجهات برمجية', 'تنفيذ أمني'],
    duration: '6 months',
    durationAr: '6 أشهر',
    teamSize: 8,
    githubUrl: 'https://github.com/geniussoftwarecore/compleints',
    features: [
      'Electronic Complaint Submission with File Attachments',
      'Real-time Complaint Status Tracking',
      'Advanced Admin Control Panel',
      'Multi-level User Permissions System',
      'Email & In-app Notifications',
      'Analytics Dashboard & Reporting',
      'Full Arabic Language Support',
      'Responsive Design for All Devices',
      'Secure Authentication (JWT)',
      'Database Backup & Recovery System'
    ],
    featuresAr: [
      'تقديم الشكاوى إلكترونياً مع إرفاق الملفات',
      'تتبع حالة الشكوى في الوقت الفعلي',
      'لوحة تحكم إدارية متقدمة',
      'نظام صلاحيات متعدد المستويات',
      'إشعارات عبر البريد والتطبيق',
      'لوحة تحليلات وتقارير شاملة',
      'دعم كامل للغة العربية',
      'تصميم متجاوب لجميع الأجهزة',
      'مصادقة آمنة (JWT)',
      'نظام نسخ احتياطي واسترجاع للبيانات'
    ],
    results: [
      '75% reduction in complaint processing time',
      '94% user satisfaction rate',
      '100% digital transformation - paperless operations',
      '85% improvement in handling efficiency',
      'Real-time tracking for all complaints',
      'Comprehensive data analytics and insights'
    ],
    resultsAr: [
      '75% تقليل وقت معالجة الشكاوى',
      '94% معدل رضا المستخدمين',
      '100% تحول رقمي - عمليات بدون ورق',
      '85% تحسين كفاءة المعالجة',
      'تتبع فوري لجميع الشكاوى',
      'تحليلات ورؤى بيانات شاملة'
    ],
    testimonial: {
      name: 'Dr. Khalid Al-Harbi',
      nameAr: 'د. خالد الحربي',
      position: 'Director of Digital Transformation',
      positionAr: 'مدير التحول الرقمي',
      content: 'The Peregrine system revolutionized how we handle complaints. The transition from paper to digital was seamless, and the impact on our service quality has been remarkable. Genius Software Core delivered a robust, scalable solution that exceeded our expectations.',
      contentAr: 'نظام الشَّكَهَة أحدث ثورة في طريقة تعاملنا مع الشكاوى. كان الانتقال من الورق إلى الرقمي سلساً، والتأثير على جودة خدماتنا كان رائعاً. قدمت جينيوس سوفت وير كور حلاً قوياً وقابلاً للتوسع فاق توقعاتنا.',
      rating: 5
    }
  },
  {
    slug: 'government-portal-riyadh',
    title: 'Smart Government Portal - Riyadh Municipality',
    titleAr: 'بوابة حكومية ذكية - أمانة الرياض',
    client: 'Riyadh Municipality',
    clientAr: 'أمانة مدينة الرياض',
    sector: 'Government',
    sectorAr: 'حكومي',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'service_efficiency',
        label: 'Service Efficiency',
        labelAr: 'كفاءة الخدمة',
        value: '85%',
        description: 'Reduction in service processing time',
        descriptionAr: 'انخفاض في وقت معالجة الخدمات',
        icon: 'Clock',
        trend: 'up'
      },
      {
        id: 'citizen_satisfaction',
        label: 'Citizen Satisfaction',
        labelAr: 'رضا المواطنين',
        value: '92%',
        description: 'Overall satisfaction with digital services',
        descriptionAr: 'الرضا العام عن الخدمات الرقمية',
        icon: 'Users',
        trend: 'up'
      },
      {
        id: 'digital_adoption',
        label: 'Digital Adoption',
        labelAr: 'التبني الرقمي',
        value: '78%',
        description: 'Citizens using digital services vs traditional',
        descriptionAr: 'المواطنون الذين يستخدمون الخدمات الرقمية مقابل التقليدية',
        icon: 'Smartphone',
        trend: 'up'
      }
    ],
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Docker', 'Azure', 'OAuth 2.0'],
    coverImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
        alt: 'Government portal dashboard',
        altAr: 'لوحة معلومات البوابة الحكومية',
        type: 'image'
      }
    ],
    summaryEn: 'Digital transformation initiative for Riyadh Municipality to streamline citizen services and improve government efficiency.',
    summaryAr: 'مبادرة تحول رقمي لأمانة الرياض لتبسيط خدمات المواطنين وتحسين الكفاءة الحكومية.',
    descriptionEn: 'A comprehensive digital government solution that enables citizens to access municipal services online, reducing bureaucracy and improving service delivery efficiency.',
    descriptionAr: 'حل حكومي رقمي شامل يمكن المواطنين من الوصول إلى الخدمات البلدية عبر الإنترنت، مما يقلل البيروقراطية ويحسن كفاءة تقديم الخدمات.',
    challengeEn: 'The municipality needed to digitize over 200 services while ensuring security, accessibility, and seamless integration with existing government systems.',
    challengeAr: 'احتاجت الأمانة إلى رقمنة أكثر من 200 خدمة مع ضمان الأمان والوصولية والتكامل السلس مع الأنظمة الحكومية الحالية.',
    solutionEn: 'We created a unified portal with single sign-on, document management, payment integration, and real-time service tracking capabilities.',
    solutionAr: 'أنشأنا بوابة موحدة مع تسجيل دخول واحد وإدارة المستندات وتكامل المدفوعات وقدرات تتبع الخدمات في الوقت الفعلي.',
    services: ['Government Solutions', 'Digital Transformation', 'Security Implementation', 'System Integration'],
    servicesAr: ['الحلول الحكومية', 'التحول الرقمي', 'تنفيذ الأمان', 'تكامل الأنظمة'],
    duration: '12 months',
    durationAr: '12 شهر',
    teamSize: 15,
    features: [
      'Single Sign-On (SSO)',
      'Document Management System',
      'Multi-language Support',
      'Mobile Application',
      'Payment Gateway Integration',
      'Service Status Tracking'
    ],
    featuresAr: [
      'تسجيل دخول واحد',
      'نظام إدارة المستندات',
      'دعم متعدد اللغات',
      'تطبيق الجوال',
      'تكامل بوابة الدفع',
      'تتبع حالة الخدمة'
    ],
    results: [
      '85% reduction in service processing time',
      '92% citizen satisfaction rate',
      '78% digital adoption rate',
      '50% decrease in paper usage'
    ],
    resultsAr: [
      '85% انخفاض في وقت معالجة الخدمات',
      '92% معدل رضا المواطنين',
      '78% معدل التبني الرقمي',
      '50% انخفاض في استخدام الورق'
    ]
  },
  {
    slug: 'healthcare-management-system',
    title: 'Healthcare Management System - King Fahd Hospital',
    titleAr: 'نظام إدارة الرعاية الصحية - مستشفى الملك فهد',
    client: 'King Fahd Hospital',
    clientAr: 'مستشفى الملك فهد',
    sector: 'Healthcare',
    sectorAr: 'صحي',
    year: 2023,
    status: 'published',
    kpis: [
      {
        id: 'patient_satisfaction',
        label: 'Patient Satisfaction',
        labelAr: 'رضا المرضى',
        value: '94%',
        description: 'Overall patient satisfaction with digital services',
        descriptionAr: 'رضا المرضى العام عن الخدمات الرقمية',
        icon: 'Heart',
        trend: 'up'
      },
      {
        id: 'appointment_efficiency',
        label: 'Appointment Efficiency',
        labelAr: 'كفاءة المواعيد',
        value: '67%',
        description: 'Reduction in appointment waiting time',
        descriptionAr: 'انخفاض في وقت انتظار المواعيد',
        icon: 'Calendar',
        trend: 'up'
      },
      {
        id: 'system_uptime',
        label: 'System Uptime',
        labelAr: 'وقت تشغيل النظام',
        value: '99.9%',
        description: 'System availability and reliability',
        descriptionAr: 'توفر النظام وموثوقيته',
        icon: 'Shield',
        trend: 'up'
      }
    ],
    tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Kubernetes', 'FHIR', 'HL7'],
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop',
        alt: 'Healthcare system interface',
        altAr: 'واجهة نظام الرعاية الصحية',
        type: 'image'
      }
    ],
    summaryEn: 'Comprehensive healthcare management system improving patient care and hospital operations efficiency.',
    summaryAr: 'نظام إدارة رعاية صحية شامل يحسن رعاية المرضى وكفاءة عمليات المستشفى.',
    descriptionEn: 'An integrated healthcare management solution that streamlines patient records, appointment scheduling, medical inventory, and clinical workflows while ensuring HIPAA compliance.',
    descriptionAr: 'حل إدارة رعاية صحية متكامل يبسط سجلات المرضى وجدولة المواعيد والمخزون الطبي وسير العمل السريري مع ضمان الامتثال لمعايير HIPAA.',
    challengeEn: 'The hospital needed to modernize legacy systems while maintaining patient data security and integrating with various medical equipment and third-party services.',
    challengeAr: 'احتاج المستشفى إلى تحديث الأنظمة القديمة مع الحفاظ على أمان بيانات المرضى والتكامل مع مختلف الأجهزة الطبية والخدمات الخارجية.',
    solutionEn: 'We developed a modular healthcare platform with electronic health records, telemedicine capabilities, inventory management, and comprehensive reporting tools.',
    solutionAr: 'طورنا منصة رعاية صحية مرنة مع السجلات الصحية الإلكترونية وقدرات الطب عن بعد وإدارة المخزون وأدوات التقارير الشاملة.',
    services: ['Healthcare IT', 'System Integration', 'Data Migration', 'Compliance Implementation'],
    servicesAr: ['تكنولوجيا المعلومات الصحية', 'تكامل الأنظمة', 'ترحيل البيانات', 'تنفيذ الامتثال'],
    duration: '10 months',
    durationAr: '10 أشهر',
    teamSize: 18,
    features: [
      'Electronic Health Records (EHR)',
      'Appointment Management',
      'Telemedicine Platform',
      'Medical Inventory Tracking',
      'Prescription Management',
      'Patient Portal'
    ],
    featuresAr: [
      'السجلات الصحية الإلكترونية',
      'إدارة المواعيد',
      'منصة الطب عن بعد',
      'تتبع المخزون الطبي',
      'إدارة الوصفات الطبية',
      'بوابة المرضى'
    ],
    results: [
      '94% patient satisfaction rate',
      '67% reduction in appointment waiting time',
      '99.9% system uptime',
      '45% improvement in workflow efficiency'
    ],
    resultsAr: [
      '94% معدل رضا المرضى',
      '67% انخفاض في وقت انتظار المواعيد',
      '99.9% وقت تشغيل النظام',
      '45% تحسن في كفاءة سير العمل'
    ]
  },
  {
    slug: 'fintech-mobile-app',
    title: 'Digital Banking App - Saudi Bank',
    titleAr: 'تطبيق البنكية الرقمية - البنك السعودي',
    client: 'Saudi Bank',
    clientAr: 'البنك السعودي',
    sector: 'Finance',
    sectorAr: 'مالي',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'transaction_volume',
        label: 'Daily Transactions',
        labelAr: 'المعاملات اليومية',
        value: '2.5M',
        description: 'Average daily transaction volume',
        descriptionAr: 'متوسط حجم المعاملات اليومية',
        icon: 'CreditCard',
        trend: 'up'
      },
      {
        id: 'security_score',
        label: 'Security Score',
        labelAr: 'نقاط الأمان',
        value: '99.8%',
        description: 'Security compliance and fraud prevention',
        descriptionAr: 'الامتثال الأمني ومنع الاحتيال',
        icon: 'Shield',
        trend: 'up'
      },
      {
        id: 'app_rating',
        label: 'App Store Rating',
        labelAr: 'تقييم متجر التطبيقات',
        value: '4.8/5',
        description: 'Average rating across app stores',
        descriptionAr: 'متوسط التقييم عبر متاجر التطبيقات',
        icon: 'Star',
        trend: 'up'
      }
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Blockchain', 'Biometric Auth', 'AWS'],
    coverImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
        alt: 'Mobile banking app interface',
        altAr: 'واجهة تطبيق البنكية المحمولة',
        type: 'image'
      }
    ],
    summaryEn: 'Next-generation mobile banking application with advanced security features and seamless user experience.',
    summaryAr: 'تطبيق بنكي محمول من الجيل التالي مع ميزات أمان متقدمة وتجربة مستخدم سلسة.',
    descriptionEn: 'A comprehensive digital banking solution offering secure transactions, investment management, and personalized financial insights through an intuitive mobile interface.',
    descriptionAr: 'حل بنكي رقمي شامل يقدم معاملات آمنة وإدارة الاستثمارات ورؤى مالية مخصصة من خلال واجهة محمولة بديهية.',
    challengeEn: 'The bank required a cutting-edge mobile app that could handle millions of transactions while maintaining the highest security standards and regulatory compliance.',
    challengeAr: 'احتاج البنك إلى تطبيق محمول متطور يمكنه التعامل مع ملايين المعاملات مع الحفاظ على أعلى معايير الأمان والامتثال التنظيمي.',
    solutionEn: 'We delivered a feature-rich banking app with biometric authentication, AI-powered fraud detection, real-time notifications, and comprehensive financial management tools.',
    solutionAr: 'قدمنا تطبيقاً بنكياً غنياً بالميزات مع المصادقة البيومترية وكشف الاحتيال المدعوم بالذكاء الاصطناعي والإشعارات في الوقت الفعلي وأدوات الإدارة المالية الشاملة.',
    services: ['Mobile Development', 'Cybersecurity', 'AI Integration', 'Blockchain Implementation'],
    servicesAr: ['تطوير الجوال', 'الأمن السيبراني', 'تكامل الذكاء الاصطناعي', 'تنفيذ البلوك تشين'],
    duration: '14 months',
    durationAr: '14 شهر',
    teamSize: 22,
    features: [
      'Biometric Authentication',
      'Real-time Transaction Monitoring',
      'Investment Portfolio Management',
      'AI-powered Financial Insights',
      'Contactless Payments',
      'Multi-currency Support'
    ],
    featuresAr: [
      'المصادقة البيومترية',
      'مراقبة المعاملات في الوقت الفعلي',
      'إدارة محفظة الاستثمار',
      'الرؤى المالية المدعومة بالذكاء الاصطناعي',
      'المدفوعات اللاتلامسية',
      'دعم متعدد العملات'
    ],
    results: [
      '2.5M daily transactions processed',
      '99.8% security compliance score',
      '4.8/5 average app store rating',
      '89% customer adoption rate'
    ],
    resultsAr: [
      '2.5 مليون معاملة يومية تتم معالجتها',
      '99.8% نقاط الامتثال الأمني',
      '4.8/5 متوسط تقييم متجر التطبيقات',
      '89% معدل تبني العملاء'
    ]
  },
  {
    slug: 'logistics-optimization-platform',
    title: 'Smart Logistics Platform - Aramex Saudi',
    titleAr: 'منصة اللوجستيات الذكية - أرامكس السعودية',
    client: 'Aramex Saudi',
    clientAr: 'أرامكس السعودية',
    sector: 'Logistics',
    sectorAr: 'لوجستيات',
    year: 2023,
    status: 'published',
    kpis: [
      {
        id: 'delivery_efficiency',
        label: 'Delivery Efficiency',
        labelAr: 'كفاءة التسليم',
        value: '43%',
        description: 'Improvement in delivery time optimization',
        descriptionAr: 'تحسن في تحسين وقت التسليم',
        icon: 'Truck',
        trend: 'up'
      },
      {
        id: 'cost_reduction',
        label: 'Operational Costs',
        labelAr: 'التكاليف التشغيلية',
        value: '28%',
        description: 'Reduction in operational expenses',
        descriptionAr: 'انخفاض في المصاريف التشغيلية',
        icon: 'DollarSign',
        trend: 'down'
      },
      {
        id: 'tracking_accuracy',
        label: 'Tracking Accuracy',
        labelAr: 'دقة التتبع',
        value: '99.5%',
        description: 'Real-time package tracking precision',
        descriptionAr: 'دقة تتبع الطرود في الوقت الفعلي',
        icon: 'MapPin',
        trend: 'up'
      }
    ],
    tech: ['Flutter', 'Django', 'PostgreSQL', 'Redis', 'Google Maps API', 'IoT Sensors'],
    coverImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop',
        alt: 'Logistics platform dashboard',
        altAr: 'لوحة معلومات منصة اللوجستيات',
        type: 'image'
      }
    ],
    summaryEn: 'AI-powered logistics optimization platform streamlining supply chain operations and delivery management.',
    summaryAr: 'منصة تحسين اللوجستيات المدعومة بالذكاء الاصطناعي لتبسيط عمليات سلسلة التوريد وإدارة التسليم.',
    descriptionEn: 'An intelligent logistics management system that optimizes route planning, tracks shipments in real-time, and provides predictive analytics for supply chain efficiency.',
    descriptionAr: 'نظام إدارة لوجستيات ذكي يحسن تخطيط المسارات ويتتبع الشحنات في الوقت الفعلي ويوفر التحليلات التنبؤية لكفاءة سلسلة التوريد.',
    challengeEn: 'Aramex needed to optimize complex delivery routes across Saudi Arabia while providing real-time visibility and reducing operational costs.',
    challengeAr: 'احتاجت أرامكس إلى تحسين مسارات التسليم المعقدة عبر المملكة العربية السعودية مع توفير الرؤية في الوقت الفعلي وتقليل التكاليف التشغيلية.',
    solutionEn: 'We developed an AI-driven platform with machine learning algorithms for route optimization, IoT integration for real-time tracking, and predictive maintenance capabilities.',
    solutionAr: 'طورنا منصة مدعومة بالذكاء الاصطناعي مع خوارزميات التعلم الآلي لتحسين المسارات وتكامل إنترنت الأشياء للتتبع في الوقت الفعلي وقدرات الصيانة التنبؤية.',
    services: ['AI Development', 'IoT Integration', 'Mobile Applications', 'Data Analytics'],
    servicesAr: ['تطوير الذكاء الاصطناعي', 'تكامل إنترنت الأشياء', 'تطبيقات الجوال', 'تحليل البيانات'],
    duration: '9 months',
    durationAr: '9 أشهر',
    teamSize: 14,
    features: [
      'AI Route Optimization',
      'Real-time GPS Tracking',
      'Predictive Analytics',
      'Automated Dispatch System',
      'Customer Notification System',
      'Performance Dashboard'
    ],
    featuresAr: [
      'تحسين المسار بالذكاء الاصطناعي',
      'تتبع GPS في الوقت الفعلي',
      'التحليلات التنبؤية',
      'نظام الإرسال الآلي',
      'نظام إشعارات العملاء',
      'لوحة معلومات الأداء'
    ],
    results: [
      '43% improvement in delivery efficiency',
      '28% reduction in operational costs',
      '99.5% tracking accuracy',
      '35% increase in customer satisfaction'
    ],
    resultsAr: [
      '43% تحسن في كفاءة التسليم',
      '28% انخفاض في التكاليف التشغيلية',
      '99.5% دقة التتبع',
      '35% زيادة في رضا العملاء'
    ]
  },
  {
    slug: 'educational-platform-ksu',
    title: 'Smart Learning Management System - KSU',
    titleAr: 'نظام إدارة التعلم الذكي - جامعة الملك سعود',
    client: 'King Saud University',
    clientAr: 'جامعة الملك سعود',
    sector: 'Education',
    sectorAr: 'تعليمي',
    year: 2024,
    status: 'published',
    kpis: [
      {
        id: 'student_engagement',
        label: 'Student Engagement',
        labelAr: 'مشاركة الطلاب',
        value: '87%',
        description: 'Active participation in online learning',
        descriptionAr: 'المشاركة النشطة في التعلم عبر الإنترنت',
        icon: 'Users',
        trend: 'up'
      },
      {
        id: 'course_completion',
        label: 'Course Completion',
        labelAr: 'إتمام الدورات',
        value: '92%',
        description: 'Students completing their courses',
        descriptionAr: 'الطلاب الذين يكملون دوراتهم',
        icon: 'BookOpen',
        trend: 'up'
      },
      {
        id: 'performance_improvement',
        label: 'Performance Boost',
        labelAr: 'تحسن الأداء',
        value: '34%',
        description: 'Average grade improvement',
        descriptionAr: 'متوسط تحسن الدرجات',
        icon: 'TrendingUp',
        trend: 'up'
      }
    ],
    tech: ['Next.js', 'Express.js', 'MongoDB', 'WebRTC', 'Socket.io', 'AWS S3'],
    coverImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    gallery: [
      {
        id: '1',
        url: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop',
        alt: 'Educational platform interface',
        altAr: 'واجهة المنصة التعليمية',
        type: 'image'
      }
    ],
    summaryEn: 'Comprehensive e-learning platform enhancing educational delivery and student engagement at university level.',
    summaryAr: 'منصة تعلم إلكتروني شاملة تعزز التعليم وتفاعل الطلاب على مستوى الجامعة.',
    descriptionEn: 'An advanced learning management system featuring virtual classrooms, AI-powered personalized learning paths, interactive content delivery, and comprehensive progress tracking.',
    descriptionAr: 'نظام إدارة تعلم متقدم يتميز بالفصول الافتراضية ومسارات التعلم المخصصة المدعومة بالذكاء الاصطناعي وتقديم المحتوى التفاعلي وتتبع التقدم الشامل.',
    challengeEn: 'The university needed a scalable platform to support 50,000+ students with diverse learning needs while maintaining high-quality educational standards.',
    challengeAr: 'احتاجت الجامعة إلى منصة قابلة للتوسع لدعم أكثر من 50,000 طالب مع احتياجات تعليمية متنوعة مع الحفاظ على معايير تعليمية عالية الجودة.',
    solutionEn: 'We created a comprehensive LMS with adaptive learning algorithms, integrated video conferencing, automated assessment tools, and analytics for personalized education.',
    solutionAr: 'أنشأنا نظام إدارة تعلم شامل مع خوارزميات التعلم التكيفي والمؤتمرات المرئية المتكاملة وأدوات التقييم الآلي والتحليلات للتعليم المخصص.',
    services: ['E-Learning Solutions', 'Video Streaming', 'AI Implementation', 'System Architecture'],
    servicesAr: ['حلول التعلم الإلكتروني', 'بث الفيديو', 'تنفيذ الذكاء الاصطناعي', 'هندسة الأنظمة'],
    duration: '11 months',
    durationAr: '11 شهر',
    teamSize: 16,
    features: [
      'Virtual Classrooms',
      'AI-Powered Learning Paths',
      'Interactive Content Library',
      'Automated Grading System',
      'Progress Analytics',
      'Mobile Learning App'
    ],
    featuresAr: [
      'الفصول الافتراضية',
      'مسارات التعلم المدعومة بالذكاء الاصطناعي',
      'مكتبة المحتوى التفاعلي',
      'نظام التقييم الآلي',
      'تحليلات التقدم',
      'تطبيق التعلم المحمول'
    ],
    results: [
      '87% student engagement rate',
      '92% course completion rate',
      '34% average performance improvement',
      '95% faculty satisfaction'
    ],
    resultsAr: [
      '87% معدل مشاركة الطلاب',
      '92% معدل إتمام الدورات',
      '34% متوسط تحسن الأداء',
      '95% رضا أعضاء هيئة التدريس'
    ]
  }
];

// Filter options for the portfolio
export const portfolioFilters = {
  industries: [
    { value: '', label: 'All Industries', labelAr: 'جميع الصناعات' },
    { value: 'E-commerce', label: 'E-commerce', labelAr: 'تجارة إلكترونية' },
    { value: 'Government', label: 'Government', labelAr: 'حكومي' },
    { value: 'Healthcare', label: 'Healthcare', labelAr: 'صحي' },
    { value: 'Finance', label: 'Finance', labelAr: 'مالي' },
    { value: 'Logistics', label: 'Logistics', labelAr: 'لوجستيات' },
    { value: 'Education', label: 'Education', labelAr: 'تعليمي' }
  ],
  
  technologies: [
    'React', 'Vue.js', 'Angular', 'Next.js', 'Flutter', 'React Native',
    'Node.js', 'Express.js', 'Laravel', 'Django', 'Spring Boot',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
    'AWS', 'Azure', 'Docker', 'Kubernetes'
  ],
  
  services: [
    { value: 'Web Development', labelAr: 'تطوير المواقع' },
    { value: 'Mobile Apps', labelAr: 'تطبيقات الجوال' },
    { value: 'System Integration', labelAr: 'تكامل الأنظمة' },
    { value: 'UX/UI Design', labelAr: 'تصميم UX/UI' },
    { value: 'AI Implementation', labelAr: 'تنفيذ الذكاء الاصطناعي' },
    { value: 'Cybersecurity', labelAr: 'الأمن السيبراني' }
  ],
  
  years: [2024, 2023, 2022, 2021],
  
  sortOptions: [
    { value: 'newest', label: 'Newest First', labelAr: 'الأحدث أولاً' },
    { value: 'oldest', label: 'Oldest First', labelAr: 'الأقدم أولاً' },
    { value: 'alphabetical', label: 'Alphabetical', labelAr: 'أبجدياً' },
    { value: 'industry', label: 'By Industry', labelAr: 'حسب الصناعة' }
  ]
};