import React, { useState, useEffect, useRef } from 'react';

interface StatsSectionProps {
  language: 'en' | 'ar';
}

interface StatConfig {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatsSection: React.FC<StatsSectionProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ users: 0, videos: 0, rewards: 0, partners: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const translations = {
    en: {
      title: 'Grow Your Brand Through Engaging Video Content',
      subtitle: 'Join our platform and reach millions of engaged users while providing valuable rewards for their time and attention.',
      description: 'Our analytics dashboard provides real-time insights into user engagement, content performance, and reward distribution across our growing network.',
      cta: 'Get Started',
      stats: {
        users: { value: 250000, label: 'Active Users', suffix: '+' } as StatConfig,
        videos: { value: 50000, label: 'Videos Watched', suffix: '+' } as StatConfig,
        rewards: { value: 1200000, label: 'Rewards Distributed', prefix: '$' } as StatConfig,
        partners: { value: 150, label: 'Partner Brands', suffix: '+' } as StatConfig
      }
    },
    ar: {
      title: 'نمي علامتك التجارية من خلال محتوى فيديو جذاب',
      subtitle: 'انضم إلى منصتنا وصل إلى ملايين المستخدمين المتفاعلين مع توفير مكافآت قيمة لوقتهم واهتمامهم.',
      description: 'توفر لوحة التحليلات لدينا رؤى فورية حول تفاعل المستخدمين وأداء المحتوى وتوزيع المكافآت عبر شبكتنا المتنامية.',
      cta: 'ابدأ الآن',
      stats: {
        users: { value: 50000, label: 'مستخدم نشط', suffix: '+' } as StatConfig,
        videos: { value: 2000, label: 'فيديو تمت مشاهدته', suffix: '+' } as StatConfig,
        rewards: { value: 1000, label: 'عدد الجوائز الموزعة', suffix: '+' } as StatConfig,
        partners: { value: 150, label: 'علامة تجارية شريكة', suffix: '+' } as StatConfig
      }
    }
  };

  const t = translations[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.entries(t.stats).forEach(([key, stat]) => {
      let currentCount = 0;
      const increment = stat.value / steps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= stat.value) {
          currentCount = stat.value;
          clearInterval(timer);
        }

        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentCount)
        }));
      }, stepDuration);
    });
  };

  const formatNumber = (num: number, prefix?: string, suffix?: string) => {
    const formatted = num.toLocaleString();
    return `${prefix || ''}${formatted}${suffix || ''}`;
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-dark-800 to-black relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-on-scroll">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.title}
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              {t.subtitle}
            </p>

            <p className="text-gray-400 leading-relaxed">
              {t.description}
            </p>

            <a href="https://wa.me/+963968972764" className="gradient-coral text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-coral-500/30 mt-8">
              {t.cta}
            </a >
          </div>

          <div className="animate-on-scroll stagger-2">
            <div className="glass-dark rounded-2xl p-6 relative">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-semibold text-lg">
                  {language === 'en' ? 'Analytics Dashboard' : 'لوحة التحليلات'}
                </h3>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(t.stats).map(([key, stat]) => (
                  <div key={key} className="bg-black/30 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-coral-500 mb-1 animate-counter">
                      {formatNumber(counts[key as keyof typeof counts], stat.prefix, stat.suffix)}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-black/30 rounded-xl p-4 h-48 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-coral-500/20 to-transparent"></div>

                <div className="relative w-full h-full flex items-end justify-between px-4">
                  {Array.from({ length: 12 }, (_, i) => (
                    <div
                      key={i}
                      className="bg-coral-500/60 rounded-t w-4 transition-all duration-1000 ease-out"
                      style={{
                        height: isVisible ? `${Math.random() * 80 + 20}%` : '0%',
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-coral-500 rounded-full animate-float opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-coral-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
