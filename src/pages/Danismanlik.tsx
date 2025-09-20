import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, Users, Award, Target, Lightbulb } from 'lucide-react';
import consultationImg from '@/assets/headway-5QgIuuBxKwM-unsplash.jpg';
import resim3 from "../assets/resim3.jpg";

const Danismanlik: React.FC = () => {
  const consultingServices = [
    {
      title: "Malzeme Seçimi Danışmanlığı",
      description: "Projenizin ihtiyaçlarına en uygun kaynak malzemelerinin belirlenmesi",
      features: [
        "Ekipmanın türüne ve boyutlarına uygun kaynak telinin belirlenmesi",
        "Ekipmanın malzemesi ve türü  Kullanılacak kaynak teli türü ve miktari",
        "Özel çalışma koşullarına uygun kaynak telinin seçilmesi ve Geniş bir yelpazedeki kaynak parametreleri",
        "Maliyet-performans analizi"
      ],
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Süreç Optimizasyonu",
      description: "Kaynak süreçlerinizin verimliliğini artıracak optimizasyon çözümleri",
      features: [
        "Kaynak teli ve koşullara uygun kaynak yönteminin belirlenmesi",
        "Kaynak uygulamalarında kritik değişkenlerin tanıtılması",
        "Üretim süreç iyileştirmeleri"
      ],
      icon: <Lightbulb className="w-8 h-8" />
    },
    {
      title: "Hata Analizi ve Çözüm",
      description: "Kaynak hatalarının tespiti ve giderilmesi için uzman desteği",
      features: [
        "Kaynak hatalarının giderilmesi",
        "Farklı alaşımlar üzerinde kaynak yapılırken hataların önlenmesi",
        "Kalite kontrol sistemleri kurulumu"
      ],
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "İhtiyaç Analizi",
      description: "Projenizi detaylı analiz ederek ihtiyaçlarınızı belirleriz"
    },
    {
      step: "02",
      title: "Çözüm Geliştirme",
      description: "Size özel danışmanlık çözümlerini geliştiririz"
    },
    {
      step: "03",
      title: "Uygulama Desteği",
      description: "Önerilerimizi hayata geçirmenizde aktif destek sağlarız"
    },
    {
      step: "04",
      title: "Takip ve İyileştirme",
      description: "Sürekli takip ile performansı optimize ederiz"
    }
  ];

  const benefits = [
    "Üretim verimliliğinde %30'a varan artış",
    "Kaynak hatalarında %80 azalma",
    "Malzeme maliyetlerinde %20 tasarruf",
    "Proje teslim sürelerinde %25 kısalma",
    "Kalite standartlarında iyileştirme",
    "Sürekli teknik destek"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${consultationImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Uzman <span className="text-blue-300">Danışmanlık Hizmetleri</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Kaynak teknolojileri ve endüstriyel üretim süreçlerinde profesyonel danışmanlık desteği alın
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Danışmanlık <span className="text-blue-800">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deneyimli uzman kadromuzla kaynak teknolojileri alanında kapsamlı danışmanlık desteği sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-100 text-blue-600 p-3 rounded-full w-fit mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-700 text-sm">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Neden Danışmanlık Hizmetimizi Tercih Etmelisiniz?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                NamadNanoTech olarak, kaynak teknolojileri ve endüstriyel üretim süreçlerinde kapsamlı danışmanlık 
                hizmetleri sunuyoruz. Deneyimli mühendis kadromuz, projelerinizin her aşamasında teknik rehberlik sağlar.
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">
                  Danışmanlık Avantajları:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
              >
                Danışmanlık Talebi Oluştur
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src={resim3}
                alt="Danışmanlık Hizmetleri" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Danışmanlık <span className="text-blue-800">Sürecimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistematik yaklaşımımızla projelerinizde maksimum verimlilik sağlıyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Uzmanlık <span className="text-blue-800">Alanlarımız</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "İnşaat ve Yapı", description: "Çelik konstrüksiyon kaynak danışmanlığı", icon: <BookOpen className="w-6 h-6" /> },
              { title: "Otomotiv Sanayi", description: "Araç üretimi kaynak süreç optimizasyonu", icon: <Users className="w-6 h-6" /> },
              { title: "Gemi İnşa", description: "Denizcilik sektörü kaynak çözümleri", icon: <Award className="w-6 h-6" /> },
              { title: "Petrol ve Gaz", description: "Boru hatları kaynak standardları", icon: <Target className="w-6 h-6" /> },
              { title: "Madencilik", description: "Ağır makine kaynak uygulamaları", icon: <Lightbulb className="w-6 h-6" /> },
              { title: "Enerji Sektörü", description: "Güç santrali kaynak teknolojileri", icon: <CheckCircle className="w-6 h-6" /> }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-blue-600 text-white p-3 rounded-full w-fit mb-4">
                  {area.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${consultationImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue-900/90"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
            Projelerinizi Bir Üst Seviyeye Taşıyın
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Uzman danışmanlık hizmetlerimizle üretim süreçlerinizi optimize edin ve rekabet avantajı kazanın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
            >
              Ücretsiz Danışmanlık Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Tüm Hizmetleri Gör
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Danismanlik;