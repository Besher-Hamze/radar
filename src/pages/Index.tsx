
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import PartnersSection from '../components/PartnersSection';
import FAQSection from '../components/FAQSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('ar'); // Default to Arabic
  const [animatedHeaderTitle, setAnimatedHeaderTitle] = useState('رادار'); // Default Arabic title
  const [showHeaderTitle, setShowHeaderTitle] = useState(false);

  useScrollAnimation();

  useEffect(() => {
    // Apply RTL direction to document when Arabic is selected
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    // Update document title
    document.title = language === 'en' ? 'Radar - Watch, Earn, Reward' : 'رادار - شاهد، اكسب، كافئ';
  }, [language]);

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    // Instant language change without any animations
    setLanguage(lang);
    setAnimatedHeaderTitle(lang === 'en' ? 'Radar' : 'رادار');
  };

  const handleTitleAnimation = (title: string, shouldShow: boolean) => {
    setAnimatedHeaderTitle(title);
    setShowHeaderTitle(shouldShow);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="main-container">
        <Header
          language={language}
          onLanguageChange={handleLanguageChange}
          animatedTitle={animatedHeaderTitle}
          showAnimatedTitle={showHeaderTitle}
          isTransitioning={false}
        />

        <main>
          <HeroSection
            language={language}
            onTitleAnimation={handleTitleAnimation}
          />
          <HowItWorksSection language={language} />
          <PartnersSection language={language} />
          <StatsSection language={language} />
          <FAQSection language={language} />
        </main>

        <Footer language={language} />
      </div>
    </div>
  );
};

export default Index;
