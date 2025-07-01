import React from 'react';
import { QrCode, Download, Smartphone, Instagram, Facebook } from 'lucide-react';

interface ScanAndWinSectionProps {
  language: 'en' | 'ar';
}

const ScanAndWinSection: React.FC<ScanAndWinSectionProps> = ({ language }) => {
  const translations = {
    en: {
      title: 'Scan & Win',
      subtitle: 'QR Code Rewards',
      description: 'Find Radar QR codes in partner stores and events to earn instant points and unlock exclusive rewards!',
      howToTitle: 'How to Scan & Win:',
      steps: [
        'Download the Radar app',
        'Open the QR scanner inside the app',
        'Find QR codes at partner locations',
        'Scan and earn instant points!'
      ],
      important: 'Important: QR codes must be scanned within the Radar app to receive points',
      downloadApp: 'Download Radar App',
      followUs: 'Follow Us',
      scanInstructions: 'Scan QR codes like this one to win points instantly!'
    },
    ar: {
      title: 'امسح واربح',
      subtitle: 'مكافآت رمز QR',
      description: 'ابحث عن رموز QR الخاصة بـ رادار في المتاجر المشاركة والفعاليات لتحصل على نقاط فورية وتفتح مكافآت حصرية!',
      howToTitle: 'كيفية المسح والربح:',
      steps: [
        'حمل تطبيق رادار',
        'افتح ماسح QR داخل التطبيق',
        'ابحث عن رموز QR في المواقع المشاركة',
        'امسح واحصل على نقاط فورية!'
      ],
      important: 'مهم: يجب مسح رموز QR داخل تطبيق رادار لتحصل على النقاط',
      downloadApp: 'حمل تطبيق رادار',
      followUs: 'تابعنا',
      scanInstructions: 'امسح رموز QR مثل هذا لتربح نقاط فوراً!'
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

  return (
    <section
      id="scan-win"
      className="py-20 bg-gradient-to-b from-dark-800 to-black relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        {/* QR Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className={`w-full h-full ${Math.random() > 0.7 ? 'bg-coral-500' : 'bg-transparent'}`}
                style={{ animationDelay: `${Math.random() * 2}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4">
            <QrCode className="w-8 h-8 text-coral-500 mr-3 rtl:mr-0 rtl:ml-3" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              {t.title}
            </h2>
          </div>
          <p className="text-xl text-coral-500 font-semibold mb-4">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {t.description}
          </p>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* QR Code Display */}
          <div className="animate-on-scroll">
            <div className="relative">
              {/* QR Code Container */}
              <div className="glass-dark rounded-3xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-6">
                  {t.scanInstructions}
                </h3>

                {/* Sample QR Code */}
                <div className="relative mx-auto w-80 h-80 bg-white rounded-2xl p-4 mb-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-xl relative overflow-hidden flex items-center justify-center">
                    {/* Actual QR Code Image */}
                    <img
                      src="/images/scan_win.png"
                      alt="Radar QR Code"
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>

                  {/* Scan Animation */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-coral-500 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-coral-500/20 rounded-full flex items-center justify-center animate-float">
                <QrCode className="w-6 h-6 text-coral-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-coral-500/30 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Download className="w-5 h-5 text-coral-500" />
              </div>
            </div>
          </div>

          {/* Instructions and Downloads */}
          <div className="animate-on-scroll stagger-2">
            <div className="space-y-8">
              {/* How to Instructions */}
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Smartphone className="w-6 h-6 text-coral-500 mr-3 rtl:mr-0 rtl:ml-3" />
                  {t.howToTitle}
                </h3>
                <div className="space-y-4">
                  {t.steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-coral-500 to-coral-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notice */}
              <div className="bg-coral-500/10 border border-coral-500/30 rounded-xl p-4">
                <p className="text-coral-300 font-medium text-center">
                  ⚠️ {t.important}
                </p>
              </div>

              {/* Download Buttons */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-bold text-white text-center">{t.downloadApp}</h4>
                <div className="grid gap-3">
                  <button className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105">
                    <AppStoreIcon />
                    <span className="font-medium">{language === 'ar' ? 'متجر التطبيقات' : 'App Store'}</span>
                  </button>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.anycode.radar"
                    className="flex items-center justify-center space-x-3 rtl:space-x-reverse bg-black text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
                  >
                    <GooglePlayIcon />
                    <span className="font-medium">{language === 'ar' ? 'جوجل بلاي' : 'Google Play'}</span>
                  </a>

                  <a
                    href="https://limewire.com/d/GxVwT#QdOZ0LH1cm"
                    className="flex items-center justify-center space-x-3 rtl:space-x-reverse border-2 border-coral-500 text-coral-500 px-6 py-4 rounded-lg hover:bg-coral-500 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Smartphone className="w-5 h-5" />
                    <span className="font-medium">{language === 'ar' ? 'تحميل مباشر' : 'Direct Download'}</span>
                  </a>
                </div>
              </div> */}

              {/* Social Media */}
              {/* <div className="text-center space-y-4">
                <h4 className="text-xl font-bold text-white">{t.followUs}</h4>
                <div className="flex justify-center space-x-4 rtl:space-x-reverse">
                  <a
                    href="https://www.instagram.com/radar_sy?igsh=dHIzdWVtZDByMzdw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1KBa8AAJEF/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-white">
              {language === 'ar' ? 'ابدأ المسح والربح الآن!' : 'Start Scanning & Winning Now!'}
            </h3>
            <p className="text-gray-300">
              {language === 'ar'
                ? 'حمل التطبيق وابحث عن رموز QR في المتاجر المشاركة لتبدأ في جمع النقاط فوراً'
                : 'Download the app and look for QR codes at partner stores to start earning points instantly'
              }
            </p>
            <a
              href="https://play.google.com/store/apps/details?id=com.anycode.radar"
              className="inline-block gradient-coral text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-coral-500/30"
            >
              {language === 'ar' ? 'حمل التطبيق الآن' : 'Download App Now'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScanAndWinSection;