import { useState, useEffect } from 'react';

interface Partner {
  id: string;
  name: string;
  image: string;
  city: string;
  address: string;
  phone: string;
  category: {
    name: string;
  };
  _count: {
    rewards: number;
    offers: number;
  };
}

interface ApiResponse {
  data: Partner[];
  meta: {
    totalItems: number;
  };
}

interface PartnersSectionProps {
  language: 'en' | 'ar';
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ language }) => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  const translations = {
    en: {
      title: 'Our Partners',
      subtitle: 'Trusted by leading brands to deliver premium content and valuable rewards to our users.',
      offers: "Offers",
      rewards: "Rewards"
    },
    ar: {
      title: 'شركاؤنا',
      subtitle: 'موثوق من قبل العلامات التجارية لتقديم محتوى مميز ومكافآت قيمة لمستخدمينا.',
      offers: "عروض",
      rewards: "جوائز"
    }
  };

  const t = translations[language];

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://anycode-sy.com/radar/api/stores');

        if (!response.ok) {
          throw new Error('Failed to fetch partners');
        }

        const data: ApiResponse = await response.json();
        setPartners(data.data || []);
      } catch (err) {
        console.error('Error fetching partners:', err);
        // Generate fallback partners if API fails
        const fallbackPartners = Array.from({ length: 8 }, (_, i) => ({
          id: `fallback-${i + 1}`,
          name: `Partner ${i + 1}`,
          image: '',
          city: 'ALEPPO',
          address: '',
          phone: '',
          category: { name: 'Business' },
          _count: { rewards: 0, offers: 0 }
        }));
        setPartners(fallbackPartners);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // Use API data or fallback to generated partners
  const displayPartners = partners;

  return (
    <section
      id="partners"
      className="py-20 bg-gradient-to-b from-dark-800 to-black relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Partners Carousel */}
        <div className="relative animate-on-scroll py-8">
          <div className="overflow-hidden">
            <div
              className={`flex ${language === 'ar' ? 'animate-slide-rtl' : 'animate-slide-ltr'} hover:[animation-play-state:paused]`}
              style={{
                width: `${50 * (192 + 32)}px`, // Exact width: 3 sets × (192px + 32px margin)
              }}
            >

              {Array.from({ length: 3 }, (_, setIndex) =>
                partners.map((partner, partnerIndex) => (
                  <div
                    key={`set-${setIndex}-partner-${partner.id}`}
                    className="flex-shrink-0 w-48 h-48 glass-dark rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-coral-500/25 mx-4 my-4 border border-gray-700/50 hover:border-coral-500/30"
                  >
                    <div className="relative h-full flex flex-col">
                      {/* Partner Image */}
                      <div className="relative h-32 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                        {partner.image ? (
                          <img
                            src={partner.image}
                            alt={partner.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = target.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div
                          className={`absolute inset-0 flex items-center justify-center ${partner.image ? 'hidden' : 'flex'}`}
                          style={{ display: partner.image ? 'none' : 'flex' }}
                        >
                          <div className="w-16 h-16 bg-gradient-to-br from-coral-500/20 to-coral-600/20 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-coral-500/40 rounded"></div>
                          </div>
                        </div>

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Partner Info */}
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <h3 className="text-white text-sm font-semibold mb-1 line-clamp-2 group-hover:text-coral-300 transition-colors leading-tight">
                            {partner.name}
                          </h3>
                          <p className="text-gray-400 text-xs mb-2 group-hover:text-gray-300 transition-colors">
                            {partner.category.name}
                          </p>
                        </div>

                        {/* Stats badges */}
                        {(partner._count.rewards > 0 || partner._count.offers > 0) && (
                          <div className="flex gap-1 flex-wrap">
                            {partner._count.rewards > 0 && (
                              <span className="bg-green-900/40 text-green-300 text-xs px-2 py-1 rounded-full border border-green-700/30">
                                {partner._count.rewards} {t.rewards}
                              </span>
                            )}
                            {partner._count.offers > 0 && (
                              <span className="bg-blue-900/40 text-blue-300 text-xs px-2 py-1 rounded-full border border-blue-700/30">
                                {partner._count.offers} {t.offers}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>

          {/* Enhanced Gradient Masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-dark-800 via-dark-800/70 to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-dark-800 via-dark-800/70 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-on-scroll">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-coral-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white">
              {language === 'en' ? 'Premium Content' : 'محتوى مميز'}
            </h3>
            <p className="text-gray-400">
              {language === 'en'
                ? 'High-quality videos from trusted brands and content creators.'
                : 'فيديوهات عالية الجودة من علامات تجارية موثوقة ومنشئي محتوى مميزين.'
              }
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-coral-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white">
              {language === 'en' ? 'Exclusive Rewards' : 'مكافآت حصرية'}
            </h3>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Special offers and rewards available only through our partner network.'
                : 'عروض ومكافآت خاصة متاحة حصرياً من خلال شبكة شركائنا.'
              }
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-coral-500/20 rounded-full flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-coral-500 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold text-white">
              {language === 'en' ? 'Trusted Brands' : 'علامات موثوقة'}
            </h3>
            <p className="text-gray-400">
              {language === 'en'
                ? 'Partnership with established and reputable companies.'
                : 'شراكة مع شركات راسخة وذات سمعة طيبة .'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;