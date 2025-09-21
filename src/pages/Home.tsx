import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Lightbulb, Users, Award, Target, BookOpen, Cog, GraduationCap, Flame, Wrench } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import resim4 from "../assets/resim4.jpg"; // 
import nawelImg from "@/assets/nawel-cast.jpg";
import nawelAbrasionImg from "@/assets/nawel-abrasion.jpg";
import naweldElectrodeNBSImg from "@/assets/electrode-nbs.png";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";

const Home: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "Uzman Danışmanlık",
      description: "Ürün seçimi konusunda profesyonel danışmanlık ve kaynak ile sert kaplama eğitimi sunuyoruz."
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Aşınmaya Dayanıklı Kaynak Telleri Üreticisi",
      description: "Farklı çaplarda toz kaynak telleri ve çeşitli boyut ile kalınlıklarda aşınmaya dayanıklı kaynak plakaları üretiyoruz."
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Uzman Üretim",
      description: "Yüksek kaliteli aşınmaya dayanıklı plakaların uzman üreticisiyiz."
    }
  ];

  const products = [
    {
      id: 1,
      title: "Toz Kaynak Teli",
      description: "Nano yapılı çelik esaslı toz dolgulu kaynak telleri, yüksek mukavemet ve mükemmel kaynak kalitesi sunar.",
      image: nawelImg,
      path: "/products#toz-kaynak-teli"
    },
    {
      id: 2,
      title: "Aşınmaya Dayanıklı Plaka",
      description: "Endüstriyel uygulamalar için ultra dayanıklı aşınma önleyici plakalar, uzun ömür garantisi.",
      image: nawelAbrasionImg,
      path: "/products#asinmaya-dayanikli-plaka"
    },
    {
      id: 3,
      title: "Toz Kaplamalı El Elektrodu",
      description: "Profesyonel kaynak uygulamaları için yüksek performanslı elektrodlar, stabil ark özelliği.",
      image: naweldElectrodeNBSImg,
      path: "/products#toz-kaplamali-el-elektrodu"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Danışmanlık Hizmetleri",
      description: "Malzeme seçimi, süreç optimizasyonu ve hata analizi konularında uzman danışmanlık hizmetleri sunuyoruz.",
      icon: <BookOpen className="w-8 h-8" />,
      image: foto1,
      path: "/danismanlik"
    },
    {
      id: 2,
      title: "Kaynak Hizmetleri",
      description: "Profesyonel kaynak işleri ve özel üretim çözümleri ile projelerinizi hayata geçiriyoruz.",
      icon: <Cog className="w-8 h-8" />,
      image: foto2,
      path: "/kaynak-hizmetleri"
    },
    {
      id: 3,
      title: "Symbol Akademi",
      description: "Kaynak teknolojileri ve endüstriyel beceri geliştirme alanında kapsamlı eğitim programları.",
      icon: <GraduationCap className="w-8 h-8" />,
      image: foto3,
      path: "/symbol-akademi"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlider>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                SCİWELD
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Nano-Hassasiyetle Geleceği Şekillendiriyoruz
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Nanoteknoloji alanında yüksek katma değerli çözümler sunan öncü teknoloji firması olarak, 
              bilimi gerçek dünya uygulamalarına dönüştürüyor ve geleceğin teknolojilerini bugüne taşıyoruz.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Çözümlerimizi Keşfedin
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <div className="mt-8">
              <Link
                to="/news"
                className="inline-flex items-center text-blue-200 hover:text-white font-medium transition-colors duration-200"
              >
                Son Haberlerimizi İnceleyin
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </HeroSlider>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Neden <span className="text-blue-800">SCİWELD?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nanoteknoloji alanında öncü çözümlerimizle endüstriyel dönüşümün lideri oluyoruz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-800">Ürünlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nano yapılı çelik esaslı toz dolgulu kaynak telleri ve aşınmaya dayanıklı plakalar üretiyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img style={{objectFit: 'contain'}}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    to={product.path}
                    className="inline-flex items-center px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
                  >
                    Detay
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Tüm Ürünleri Görüntüle
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-800">Hizmetlerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Danışmanlık, kaynak hizmetleri ve Symbol Akademi eğitimleri sunuyoruz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-800 p-3 rounded-full group-hover:bg-blue-800 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    className="inline-flex items-center px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
                  >
                    Detay
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-semibold rounded-full hover:bg-blue-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Tüm Hizmetleri Görüntüle
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Hakkımızda
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              Namad Teknoloji Geliştirme Şirketi, 2009 yılında  Nanoteknoloji Geliştirme Özel Kurulu’nun desteğiyle kurulmuştur. Şirketin temel amacı, malzeme ile ilgili teknolojilerin ve bu teknolojilere ait ekipmanların oluşturulması ve geliştirilmesine katkı sağlamaktır. Günümüzde ana faaliyet alanı, nano yapılı çelikler temelinde toz dolgulu kaynak tellerinin geliştirilmesi ve üretimidir.
              </p>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Namad, metalurji endüstrisinde nanoteknolojiye dayalı ürünlerin araştırma ve geliştirilmesinde uzmanlaşmıştır. Şirketin önemli çalışma konularından biri, mevcut pazardaki ürünlere kıyasla çok daha yüksek aşınma direncine sahip son derece sert alaşımların tasarlanmasıdır. Bu sayede endüstriyel 
              parçaların ömrünü uzatmak için sert kaplama  katmanları oluşturulmaktadır.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">50+</div>
                  <div className="text-sm text-blue-200">Tamamlanan Proje</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">15+</div>
                  <div className="text-sm text-blue-200">Uzman Araştırmacı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-300">5+</div>
                  <div className="text-sm text-blue-200">Yıllık Deneyim</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={resim4}
                alt="Nanoteknoloji Araştırma" 
                className="rounded-lg shadow-2xl w-full h-auto "
              />
              <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;