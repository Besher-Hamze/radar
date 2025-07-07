import React, { useState, useEffect, useRef } from 'react';
import { Smartphone, Play, Link } from 'lucide-react';

interface HeroSectionProps {
  language: 'en' | 'ar';
  onTitleAnimation?: (title: string, shouldShow: boolean) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ language, onTitleAnimation }) => {
  const [titleAnimationState, setTitleAnimationState] = useState({
    shouldHide: false,
    shouldShow: false
  });
  const titleRef = useRef<HTMLHeadingElement>(null);

  const translations = {
    en: {
      title: 'Radar',
      subtitle: 'Watch videos, earn rewards, and discover amazing content while getting paid for your time.',
      description: 'Join thousands of users who are already earning points by watching engaging videos from our premium partners.',
      appStore: 'App Store',
      playStore: 'Google Play',
      directDownload: 'Direct Download'
    },
    ar: {
      title: 'رادار',
      subtitle: 'شاهد الفيديوهات، اكسب المكافآت، واكتشف محتوى رائع بينما تحصل على أموال مقابل وقتك.',
      description: 'انضم إلى آلاف المستخدمين الذين يكسبون النقاط بالفعل من خلال مشاهدة فيديوهات جذابة من شركائنا المميزين.',
      appStore: 'متجر التطبيقات',
      playStore: 'جوجل بلاي',
      directDownload: 'تحميل مباشر'
    }
  };

  const t = translations[language];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const startAnimation = 100;
          const completeAnimation = 200;

          if (scrollY >= startAnimation && !titleAnimationState.shouldHide) {
            setTitleAnimationState({ shouldHide: true, shouldShow: true });
            onTitleAnimation?.(t.title, true);
          } else if (scrollY < startAnimation && titleAnimationState.shouldHide) {
            setTitleAnimationState({ shouldHide: false, shouldShow: false });
            onTitleAnimation?.(t.title, false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [titleAnimationState.shouldHide, t.title, onTitleAnimation]);

  // App Store Icon Component
  const AppStoreIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );

  // Google Play Icon Component
  const GooglePlayIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );

  return (
    <section
      id="home"
      className="min-h-screen flex items-center gradient-hero relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coral-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Content */}
          <div className="lg:col-span-7 animate-on-scroll">
            <div className="space-y-6">
              <h1
                ref={titleRef}
                className={`text-5xl lg:text-7xl font-bold text-white mb-4 transition-all duration-500 ease-out ${titleAnimationState.shouldHide
                  ? 'opacity-0 -translate-y-8 scale-95'
                  : 'opacity-100 translate-y-0 scale-100'
                  }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
                data-animate-language
              >
                <span className="text-gradient">{t.title}</span>
              </h1>

              <p
                className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl"
                data-animate-language
              >
                {t.subtitle}
              </p>

              <p
                className="text-lg text-gray-400 leading-relaxed max-w-xl"
                data-animate-language
              >
                {t.description}
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button
                  className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  data-animate-language
                >
                  <AppStoreIcon />
                  <span className="font-medium">{t.appStore}</span>
                </button>

                <a
                  className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 min-w-[200px]"
                  data-animate-language
                  href='https://play.google.com/store/apps/details?id=com.anycode.radar'
                >
                  <GooglePlayIcon />
                  <span className="font-medium">{t.playStore}</span>
                </a>

                <a
                  className="flex items-center justify-center space-x-3 rtl:space-x-reverse border-2 border-coral-500 text-coral-500 px-6 py-4 rounded-lg hover:bg-coral-500 hover:text-white transition-all duration-300 hover:scale-105 min-w-[200px]"
                  data-animate-language
                  href='https://www.filemail.com/d/zrspxlcqwmtranx'
                >
                  <Smartphone className="w-5 h-5" />
                  <span className="font-medium">{t.directDownload}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Phone Mockup with GIF Placeholder */}
          <div className="lg:col-span-5 flex justify-center animate-on-scroll stagger-2">
            <div className="relative">
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-2 shadow-2xl animate-float">
                <div className="w-full h-full bg-black rounded-[2.5rem] relative overflow-hidden">
                  {/* Phone Screen Content - GIF Placeholder */}
                  <div className="absolute inset-4 bg-gradient-to-b from-black to-black rounded-[2rem] flex items-center justify-center overflow-hidden">
                    {/* GIF Container */}
                    <img src="/images/animated_radar.svg" alt="" />
                  </div>

                  {/* Phone Notch */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-coral-500/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-coral-500/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;