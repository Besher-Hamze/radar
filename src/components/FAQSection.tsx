import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  language: 'ar';
}

const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const translations = {
    ar: {
      title: 'الأسئلة الشائعة عن تطبيق رادار (Radar)',
      subtitle: 'اعثر على إجابات للأسئلة الأكثر شيوعاً حول منصتنا.',
      faqs: [
        {
          question: 'ما هو تطبيق رادار (Radar)؟',
          answer: 'رادار هو تطبيق مبتكر يجمع بين الإعلانات الترفيهية والمكافآت، حيث يمكن للمستخدمين مشاهدة ريلزات (مقاطع قصيرة) لمتاجر مشاركة، واكتشاف عروض وجوائز، وربح نقاط يمكن استبدالها بجوائز حقيقية.'
        },
        {
          question: 'كيف أحدد اهتماماتي داخل التطبيق؟',
          answer: 'عند التسجيل لأول مرة، يمكنك اختيار اهتماماتك من عدة تصنيفات (مثل: الأزياء، التكنولوجيا، الطعام...) وسيتم عرض ريلزات وعروض تتناسب مع هذه الاهتمامات.'
        },
        {
          question: 'ما هي الريلزات في تطبيق رادار؟',
          answer: 'الريلزات هي مقاطع فيديو قصيرة تمثل إعلانات ترويجية من المتاجر المشاركة، أو مقاطع ترفيهية من Radar، وتُمنح نقاط مقابل مشاهدتها.'
        },
        {
          question: 'ما هي "الجوهرة الأسبوعية" وكيف يمكنني ربحها؟',
          answer: 'كل أسبوع يتم إخفاء جوهرة داخل ريلز عشوائي، وأول مستخدم يشاهد هذا الريلز سيربح الجوهرة تلقائيًا، وتُمنح له نقاط إضافية محددة مسبقًا من Radar.'
        },
        {
          question: 'ما هو "متجر الجوائز"؟',
          answer: 'هو قسم داخل التطبيق يمكنك من خلاله استبدال نقاطك بجوائز حقيقية مقدمة من المتاجر المشاركة أو من Radar، مثل كوبونات، منتجات، أو هدايا مميزة.'
        },
        {
          question: 'كيف أستخدم ميزة "امسح واربح – QR"؟',
          answer: 'ابحث عن رموز QR الخاصة بـ Radar داخل المتاجر المشاركة أو الفعاليات، ثم امسحها باستخدام التطبيق لربح نقاط فورية.'
        },
        {
          question: 'ما هو "رادار العروض والمتاجر"؟',
          answer: 'رادار هو ميزة تفاعلية تمكنك من اكتشاف عروض حصرية ومتاجر ضمن نطاق جغرافي تختاره (مثلاً 4 كيلومتر)، ويتم عرض العروض والمتاجر القريبة مباشرة على الخريطة.'
        },
        {
          question: 'كيف أرى جميع المتاجر المشتركة في Radar؟',
          answer: 'داخل قسم "جميع المتاجر"، يمكنك استعراض كل المتاجر المشاركة في التطبيق، ويتم إبراز المتاجر النشطة التي تقدم عروض وجوائز أكثر.'
        },
        {
          question: 'هل أحتاج إلى إنشاء حساب لاستخدام التطبيق؟',
          answer: 'نعم، يلزم إنشاء حساب مجاني لتخصيص تجربتك، تتبع نقاطك، المشاركة في المسابقات، وشراء الجوائز من المتجر.'
        },
        {
          question: 'هل تنتهي صلاحية الريلزات؟',
          answer: 'نعم، كل ريلز يظهر لفترة زمنية محددة يتم تحديدها بناءً على الاتفاق بين Radar والمتجر صاحب الإعلان.'
        },
        {
          question: 'كيف يمكنني زيادة فرص ربحي للنقاط والجواهر؟',
          answer: 'شاهد ريلزات جديدة باستمرار.\nكن من أوائل من يشاهدون الريلزات كل أسبوع.\nامسح رموز QR عند توفرها.\nتابع الرادار للعثور على عروض قريبة منك.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions about Radar App',
      subtitle: 'Find answers to the most common questions about our platform.',
      faqs: [
        {
          question: 'What is the Radar app?',
          answer: 'Radar is an innovative app that combines entertaining advertisements with rewards, where users can watch reels (short clips) from participating stores, discover offers and prizes, and earn points that can be redeemed for real rewards.'
        },
        {
          question: 'How do I set my interests within the app?',
          answer: 'When registering for the first time, you can choose your interests from several categories (such as: fashion, technology, food...) and reels and offers that match these interests will be displayed.'
        },
        {
          question: 'What are reels in the Radar app?',
          answer: 'Reels are short video clips that represent promotional advertisements from participating stores, or entertainment clips from Radar, and points are awarded for watching them.'
        },
        {
          question: 'What is the "Weekly Gem" and how can I win it?',
          answer: 'Each week, a gem is hidden inside a random reel, and the first user to watch this reel will automatically win the gem and be awarded predetermined additional points from Radar.'
        },
        {
          question: 'What is the "Prize Store"?',
          answer: 'It is a section within the app through which you can redeem your points for real prizes offered by participating stores or from Radar, such as coupons, products, or special gifts.'
        },
        {
          question: 'How do I use the "Scan and Win - QR" feature?',
          answer: 'Look for Radar-specific QR codes inside participating stores or events, then scan them using the app to earn instant points.'
        },
        {
          question: 'What is "Radar Offers and Stores"?',
          answer: 'Radar is an interactive feature that enables you to discover exclusive offers and stores within a geographical range you choose (for example, 4 kilometers), and nearby offers and stores are displayed directly on the map.'
        },
        {
          question: 'How do I see all stores participating in Radar?',
          answer: 'Within the "All Stores" section, you can browse all participating stores in the app, and active stores that offer more deals and prizes are highlighted.'
        },
        {
          question: 'Do I need to create an account to use the app?',
          answer: 'Yes, you need to create a free account to customize your experience, track your points, participate in contests, and purchase prizes from the store.'
        },
        {
          question: 'Do reels expire?',
          answer: 'Yes, each reel appears for a specific time period determined based on the agreement between Radar and the store that owns the advertisement.'
        },
        {
          question: 'How can I increase my chances of earning points and gems?',
          answer: 'Watch new reels constantly.\nBe among the first to watch reels each week.\nScan QR codes when available.\nFollow the radar to find offers near you.'
        }
      ]
    }
  };

  const t = translations[language];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section
      id="faqs"
      className="py-20 bg-gradient-to-b from-black to-dark-800 relative overflow-hidden"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-coral-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-coral-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-coral-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {t.faqs.map((faq, index) => {
            const contentRef = useRef<HTMLDivElement>(null);
            const [contentHeight, setContentHeight] = useState(0);

            useEffect(() => {
              if (contentRef.current && openItem === index) {
                setContentHeight(contentRef.current.scrollHeight);
              } else {
                setContentHeight(0);
              }
            }, [openItem, index]);

            return (
              <div
                key={index}
                className="glass-dark rounded-xl overflow-hidden animate-on-scroll hover:shadow-lg hover:shadow-coral-500/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-white pr-4 rtl:pr-0 rtl:pl-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-coral-500 transition-transform duration-300 flex-shrink-0 ${openItem === index ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-max-height duration-300 ease-in-out"
                  style={{
                    maxHeight: openItem === index ? `${contentHeight}px` : '0px',
                  }}
                >
                  <div ref={contentRef} className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-gray-400 mb-6">
            لا تزال لديك أسئلة؟ نحن هنا للمساعدة!
          </p>
          <a href="https://wa.me/+963968972764">
            <button className="gradient-coral text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-coral-500/30">
              تواصل مع الدعم
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;