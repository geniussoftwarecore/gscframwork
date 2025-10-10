import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/lang";
import { useTranslation } from "@/hooks/useTranslation";
import { Briefcase, Users, Code, Award, TrendingUp, Sparkles } from "lucide-react";

export function PageHeaderPortfolio() {
  const { dir } = useLanguage();
  const { t } = useTranslation();

  const stats = [
    {
      icon: Briefcase,
      value: "150+",
      labelAr: "مشروع منجز",
      labelEn: "Completed Projects",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: Users,
      value: "80+",
      labelAr: "عميل راضٍ",
      labelEn: "Happy Clients",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
    {
      icon: Code,
      value: "25+",
      labelAr: "تقنية مستخدمة",
      labelEn: "Technologies",
      color: "text-purple-500",
      bgColor: "bg-purple-100",
    },
    {
      icon: Award,
      value: "98%",
      labelAr: "رضا العملاء",
      labelEn: "Client Satisfaction",
      color: "text-orange-500",
      bgColor: "bg-orange-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-brand-bg via-brand-sky-light to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 rtl:right-10 ltr:left-10 w-96 h-96 bg-brand-sky-accent rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 rtl:left-10 ltr:right-10 w-80 h-80 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            y: [0, 40, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-sky-accent/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-brand-sky-accent/20 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-brand-sky-accent" />
            <span className="text-sm font-medium text-brand-text-primary">
              {dir === 'rtl' ? 'قصص نجاح ملهمة' : 'Inspiring Success Stories'}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text-primary mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-brand-sky-accent to-purple-600 bg-clip-text text-transparent">
              {dir === 'rtl' ? 'معرض' : 'Our'}
            </span>{' '}
            {dir === 'rtl' ? 'أعمالنا' : 'Portfolio'}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-brand-text-muted max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {dir === 'rtl' 
              ? 'استكشف مجموعة متنوعة من المشاريع التي طورناها بعناية فائقة، من التطبيقات المحمولة إلى الأنظمة المعقدة. كل مشروع يروي قصة نجاح فريدة'
              : 'Explore our carefully crafted projects, from mobile applications to complex systems. Each project tells a unique success story'
            }
          </motion.p>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-2 text-sm text-brand-text-muted"
          >
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span>
              {dir === 'rtl' 
                ? 'نمو مستمر في تقديم الحلول الرقمية المبتكرة' 
                : 'Continuous growth in delivering innovative digital solutions'
              }
            </span>
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-brand-sky-base hover:border-brand-sky-accent shadow-lg hover:shadow-xl transition-all duration-300 group"
              data-testid={`stat-${index}`}
            >
              <div className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-brand-text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-brand-text-muted font-medium">
                {dir === 'rtl' ? stat.labelAr : stat.labelEn}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
