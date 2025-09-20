import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, BookOpen, Clock, CheckCircle, GraduationCap } from 'lucide-react';
import certificateProgramImg from "../assets/resim2.jpg"; // relative path

const SymbolAkademi: React.FC = () => {
  const trainingPrograms = [
    {
      title: "Eğitim İçeriği",
      description: "Sert Dolguya Giriş",
      features: [
        "Sert dolgu aşamalarının adım adım uygulamalı eğitimi",
        "Etkili parametrelerin incelenmesi ve optimizasyonu",
        "Sık sorulan sorular & yanıtları",
        "Nano-yapılı ve öz-korumalı özlü kaynak telleriyle pratik uygulamalar"
      ],
      icon: Users
    },
    {
      title: "Eğitim İçeriği",
      description: "Sert Dolgu Rehberi",
      features: [
        "Sert dolgunun sanayideki kullanım alanları",
        "Farklı sert dolgu yöntemleri ve doğru yöntem seçimi",
        "Sert dolgunun temel prensipleri",
        "Yaygın uygulama modelleri",
        "Sert dolgu türleri & kalite sınıfları"
      ],
      icon: Award
    },
    {
      title: "Neden Katılmalısınız?",
      description: "Uzaktan erişilebilir dijital eğitim içerikleri",
      features: [
        "Ücretsiz eğitim fırsatı",
        "İşletmenizde yerinde uygulamalı eğitim",
        "Uzman eğitmenlerden birebir destek",
        "Sert dolgu uygulamalarında en iyi sonuçlara ulaşma garantisi"
      ],
      icon: BookOpen
    },
    {
      title: "Kimler Katılmalı?",
      description: "Şirketlerin ihtiyaçlarına özel toplu eğitim çözümleri",
      features: [
        "Çelik, çimento ve ağır sanayi sektörlerinde çalışan teknik personel",
        "Kaynak mühendisleri ve bakım-onarım ekipleri",
        "Sert dolgu uygulamalarında uzmanlaşmak isteyen tüm teknik ekipler"
      ],
      icon: Award
    },
  ];

  const certifications = [
    "Product Standard Certificate – Ürünlerimizin ulusal ve uluslararası kalite standartlarına uygun olduğunu belgelendirir.",
    "Nanoscale Product Approval Certificate – Nano-yapılı ürünlerimizin güvenli, verimli ve endüstri gereksinimlerine uygun olduğunu onaylar.",
    "Patent Certificate – Geliştirdiğimiz yenilikçi ürün ve teknolojilerimizin patentli olduğunu ve sektördeki benzersizliğini garanti eder.",
    "EN ISO 9606 Kaynak Yeterliliği Belgesi",
    "Mesleki Yeterlilik Kurumu (MYK) Sertifikaları",
    "Özel Sektör Kaynak Sertifikaları"
  ];

  const stats = [
    { number: "500+", label: "Mezun Öğrenci" },
    { number: "25+", label: "Eğitim Programı" },
    { number: "10+", label: "Uzman Eğitmen" },
    { number: "95%", label: "İş Bulma Oranı" }
  ];

  const facilities = [
    "Modern kaynak atölyeleri",
    "Son teknoloji kaynak ekipmanları",
    "Güvenlik donanımları",
    "Teorik eğitim sınıfları",
    "Dijital eğitim araçları",
    "Kalite kontrol laboratuvarı"
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-300">Symbol Akademi</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Kaynak teknolojileri ve endüstriyel beceri geliştirme alanında kapsamlı eğitim programları
        </p>
        <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-blue-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Eğitim <span className="text-blue-800">Formatları</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun farklı eğitim format seçenekleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-blue-600 text-white p-3 rounded-full w-fit mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <ul className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sertifikalarımız <span className="text-blue-800">ve Belgelerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              NEMAD Teknoloji Geliştirme Grubu, kalite ve güvenceyi en üst seviyede tutma ilkesiyle, tüm ürün ve hizmetlerinde ulusal ve uluslararası standartlara uygunluğu garanti eder.
            </p>
            <div className="space-y-3 mb-8">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center">
                  <Award className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={certificateProgramImg} alt="Sertifika Programları" className="rounded-lg shadow-2xl w-full lg:w-[600px] h-auto" />
            <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Kariyerinizi Bir Sonraki Seviyeye Taşıyın</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Symbol Akademi'nin kapsamlı eğitim programları ile kaynak teknolojileri alanında uzmanlaşın
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
            Eğitime Başla
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/services" className="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-full hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-300">
            Tüm Hizmetleri Gör
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SymbolAkademi;
