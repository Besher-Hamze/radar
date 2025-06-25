import { Instagram, Facebook, Twitter, Youtube, Smartphone, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const translations = {
    en: {
      company: 'Radar',
      description: 'The premier platform for earning rewards through engaging video content. Join millions of users who are already discovering amazing content and earning valuable rewards.',
      downloads: 'Downloads',
      contact: 'Contact Us',
      appStore: 'Download on App Store',
      playStore: 'Get it on Google Play',
      directDownload: 'Direct Download',
      qrCode: 'Scan QR Code',
      email: 'radar@anycode-sy.com',
      phone: '+963968972764',
      address: 'Syria,Aleppo Martini',
      copyright: '© 2024 Radar. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      followUs: 'Follow Us'
    },
    ar: {
      company: 'رادار',
      description: 'المنصة الرائدة لكسب المكافآت من خلال محتوى الفيديو الجذاب. انضم إلى ملايين المستخدمين الذين يكتشفون بالفعل محتوى رائع ويكسبون مكافآت قيمة.',
      downloads: 'التحميلات',
      contact: 'تواصل معنا',
      appStore: 'تحميل من متجر التطبيقات',
      playStore: 'تحميل من جوجل بلاي',
      directDownload: 'تحميل مباشر',
      qrCode: 'امسح رمز QR',
      email: 'radar@anycode-sy.com',
      phone: '+963968972764',
      address: 'سوريا-حلب-مارتيني أمام فندق كواترو',
      copyright: '© 2024 رادار. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      followUs: 'تابعنا'
    }
  };

  const t = translations[language];

  // App Store Icon Component
  const AppStoreIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );

  // Google Play Icon Component
  const GooglePlayIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  );

  // QR Code Icon Component
  const QRCodeIcon = () => (
    <svg width="96" height="96" viewBox="0 0 24 24" fill="none" className="text-gray-400">
      <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5" rx="1" />
      <rect x="5" y="5" width="4" height="4" fill="currentColor" rx="0.5" />
      <rect x="15" y="5" width="4" height="4" fill="currentColor" rx="0.5" />
      <rect x="5" y="15" width="4" height="4" fill="currentColor" rx="0.5" />
      <rect x="13" y="13" width="2" height="2" fill="currentColor" />
      <rect x="17" y="13" width="2" height="2" fill="currentColor" />
      <rect x="19" y="15" width="2" height="2" fill="currentColor" />
      <rect x="15" y="17" width="2" height="2" fill="currentColor" />
      <rect x="19" y="19" width="2" height="2" fill="currentColor" />
      <rect x="13" y="17" width="2" height="2" fill="currentColor" />
      <rect x="17" y="19" width="2" height="2" fill="currentColor" />
    </svg>
  );

  return (
    <footer
      className="bg-gradient-to-b from-dark-900 to-black text-white relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-coral-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6 animate-on-scroll">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/images/radar.png" alt="radar_logo" className='transition-all duration-300  max-w-24 max-h-24' />

              <span className="text-3xl font-bold">{t.company}</span>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              {t.description}
            </p>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">{t.followUs}</h4>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors duration-300 group">
                  <Instagram className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors duration-300 group">
                  <Facebook className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors duration-300 group">
                  <Twitter className="w-5 h-5 group-hover:text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-coral-500 transition-colors duration-300 group">
                  <Youtube className="w-5 h-5 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Downloads */}
          <div className="space-y-6 animate-on-scroll stagger-1">
            <h3 className="text-2xl font-bold">{t.downloads}</h3>

            <div className="space-y-4">
              <button className="flex items-center space-x-3 rtl:space-x-reverse bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <AppStoreIcon />
                <span className="font-medium">{t.appStore}</span>
              </button>

              <button className="flex items-center space-x-3 rtl:space-x-reverse bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <GooglePlayIcon />
                <span className="font-medium">{t.playStore}</span>
              </button>

              <button className="flex items-center space-x-3 rtl:space-x-reverse border-2 border-coral-500 text-coral-500 px-6 py-3 rounded-lg hover:bg-coral-500 hover:text-white transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <Smartphone className="w-5 h-5" />
                <span className="font-medium">{t.directDownload}</span>
              </button>
            </div>

            {/* QR Code */}
            <div className="glass-dark rounded-xl p-4 w-fit">
              <div className="w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center mb-2">
                <img src="images/qrcode.jpeg" alt="" />
              </div>
              <p className="text-sm text-gray-400 text-center">{t.qrCode}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-on-scroll stagger-2">
            <h3 className="text-2xl font-bold">{t.contact}</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-coral-500 rounded mt-1 flex-shrink-0 flex items-center justify-center">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="font-medium mb-1">
                    {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                  </p>
                  <a href={`mailto:${t.email}`} className="text-gray-300 hover:text-coral-500 transition-colors duration-200">
                    {t.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-coral-500 rounded mt-1 flex-shrink-0 flex items-center justify-center">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="font-medium mb-1">
                    {language === 'en' ? 'Phone' : 'الهاتف'}
                  </p>
                  <a href={`tel:${t.phone}`} className="text-gray-300 hover:text-coral-500 transition-colors duration-200">
                    {t.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 rtl:space-x-reverse">
                <div className="w-6 h-6 bg-coral-500 rounded mt-1 flex-shrink-0 flex items-center justify-center">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <div>
                  <p className="font-medium mb-1">
                    {language === 'en' ? 'Address' : 'العنوان'}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {t.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              {t.copyright}
            </p>

            <div className="flex space-x-6 rtl:space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-200">
                {t.privacy}
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-200">
                {t.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;