
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  language: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
  animatedTitle?: string;
  showAnimatedTitle?: boolean;
  isTransitioning?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  animatedTitle = '',
  showAnimatedTitle = false,
  isTransitioning = false
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      home: 'Home',
      download: 'Download Now',
      about: 'About Us',
      partners: 'Our Partners',
      faqs: 'FAQs',
      join: 'Join Us',
      contact: 'Contact Us'
    },
    ar: {
      home: 'الرئيسية',
      download: 'تحميل الآن',
      about: 'من نحن',
      partners: 'شركاؤنا',
      faqs: 'الأسئلة الشائعة',
      join: 'انضم إلينا',
      contact: 'تواصل معنا'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'download', href: '#download' },
    { key: 'about', href: '#about' },
    { key: 'partners', href: '#partners' },
    { key: 'faqs', href: '#faqs' },
    { key: 'join', href: '#join' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-dark backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Animated Title */}
          <div className="flex items-center space-x-3 rtl:space-x-reverse">

            <img src="/images/radar.png" alt="radar_logo" className='transition-all duration-300  max-w-24 max-h-24' />
            {/* Animated Title - only shows when scrolled */}
            <div
              className={`transition-all duration-500 ease-out ${showAnimatedTitle
                ? 'opacity-100 translate-y-0 scale-100'
                : 'opacity-0 -translate-y-4 scale-95'
                }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              <span className="text-2xl font-bold text-white">
                {animatedTitle}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-white hover:text-coral-500 transition-colors duration-200 relative group"
              >
                {t[item.key as keyof typeof t]}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Simple Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* Simple Language Switch */}
            <div className="relative">
              <button
                onClick={() => onLanguageChange(language === 'en' ? 'ar' : 'en')}
                className={`relative w-16 h-8 rounded-full border-2 transition-all duration-200 ${language === 'en'
                  ? 'bg-gray-700 border-gray-600'
                  : 'bg-coral-500 border-coral-400'
                  } hover:scale-105`}
              >
                {/* Sliding circle */}
                <div
                  className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${language === 'en' ? 'left-0.5' : 'right-0.5'
                    }`}
                >
                  <span className="text-xs font-bold text-gray-800">
                    {language === 'en' ? 'EN' : 'AR'}
                  </span>
                </div>

                {/* Background labels */}
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <span className={`text-xs font-medium transition-opacity duration-200 ${language === 'en' ? 'opacity-0' : 'opacity-60 text-white'
                    }`}>
                    EN
                  </span>
                  <span className={`text-xs font-medium transition-opacity duration-200 ${language === 'ar' ? 'opacity-0' : 'opacity-60 text-gray-400'
                    }`}>
                    AR
                  </span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-coral-500 transition-colors duration-200 hover:scale-110"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <nav className="py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-white hover:text-coral-500 hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {t[item.key as keyof typeof t]}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
