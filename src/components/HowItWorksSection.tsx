
import React from 'react';

interface HowItWorksSectionProps {
  language: 'en' | 'ar';
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ language }) => {
  const translations = {
    en: {
      title: 'Start Now',
      steps: [
        {
          title: 'Watch',
          subtitle: 'Engaging Videos',
          description: 'Discover and watch premium video content from our trusted partners and earn points for every minute watched.'
        },
        {
          title: 'Earn',
          subtitle: 'Valuable Points',
          description: 'Accumulate points based on your viewing activity and engagement with the content throughout the platform.'
        },
        {
          title: 'Exchange',
          subtitle: 'Amazing Rewards',
          description: 'Redeem your points for cash, gift cards, exclusive deals, and premium products from our partner network.'
        }
      ]
    },
    ar: {
      title: 'ابدأ الآن',
      steps: [
        {
          title: 'شاهد',
          subtitle: 'فيديوهات جذابة',
          description: 'اكتشف وشاهد محتوى فيديو مميز من شركائنا الموثوقين واكسب نقاط عن كل دقيقة مشاهدة.'
        },
        {
          title: 'اكسب',
          subtitle: 'نقاط قيمة',
          description: 'اجمع النقاط بناءً على نشاط المشاهدة والتفاعل مع المحتوى عبر المنصة.'
        },
        {
          title: 'استبدل',
          subtitle: 'مكافآت رائعة',
          description: 'استبدل نقاطك بأموال نقدية أو بطاقات هدايا أو عروض حصرية ومنتجات مميزة من شبكة شركائنا.'
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-black to-dark-800 relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full"></div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {t.steps.map((step, index) => (
            <div key={index} className="relative animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Connection Arrow */}
              {index < t.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-coral-500 to-transparent transform translate-x-4 rtl:right-full rtl:left-auto rtl:-translate-x-4 rtl:rotate-180">
                  <div className="absolute right-0 top-0 w-0 h-0 border-l-8 border-l-coral-500 border-t-4 border-t-transparent border-b-4 border-b-transparent transform -translate-y-1/2"></div>
                </div>
              )}

              {/* Step Card */}
              <div className="glass-dark rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-coral-500/20">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full mx-auto flex items-center justify-center group-hover:animate-glow">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-coral-300 rounded-full animate-float opacity-60"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-coral-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  <p className="text-coral-500 font-medium text-lg">{step.subtitle}</p>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral-500/0 to-coral-500/0 group-hover:from-coral-500/10 group-hover:to-coral-500/5 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <button className="gradient-coral text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-coral-500/30">
            {language === 'en' ? 'Get Started Today' : 'ابدأ اليوم'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
