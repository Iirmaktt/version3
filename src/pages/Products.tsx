import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Layers, Cpu, Atom, Microscope,
  Settings, Zap, Shield, Wrench, Flame
} from 'lucide-react';

import industrialWorkerImg from '@/assets/call-me-lamb-aLWgHZ1PC0o-unsplash.jpg';
import industrialBgImg from '@/assets/industrial-worker-bg.jpg';
import nawelImg from "@/assets/nawel-cast.jpg";
import nawelToolImg from "@/assets/nawel-tool.png";
import nawelCorrosionImg from "@/assets/nawel-corrosion.png";
import nawelAbrasionImg from "@/assets/nawel-abrasion.jpg";
import nawelTungstenCarbideImg from "@/assets/tungsten-carbide.jpeg";
import nawelBuildupImg from "@/assets/buildup.jpg";
import nawelUltraLight67TImg from "@/assets/ultralight-67.png";
import nawelUltraHard67TImg from "@/assets/ultrahard-67.png";
import nawelUltraLight65Img from "@/assets/ultralight-65.png";
import nawelUltraHard65Img from "@/assets/ultrahard-65.png";
import nawelUltraHard70TImg from "@/assets/ultrahard-70.png";
import naweldElectrodeNBSImg from "@/assets/electrode-nbs.png";
import naweldElectrodeCImg from "@/assets/electrode-c.png";
import naweldElectrodeBNMImg from "@/assets/electrode-bnm.png";
import naweldElectrodeBImg from "@/assets/electrode-b.png";
import naweldElectrodeTiCImg from "@/assets/electrode-tic.png";
import foto7 from "@/assets/foto7.jpg";
import foto10 from "@/assets/foto10.jpg";
import foto9 from "@/assets/foto9.jpeg";



// Helper function to create URL-friendly slugs
const getSubProductSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9-]/g, '');
};

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Toz Kaynak Teli",
      description: "Yüksek kaliteli toz kaynak telleri ve flux cored kaynak çözümleri",
      longDescription:
        "SCİWELD'in toz kaynak teli ürünleri, endüstriyel kaynak uygulamaları için özel olarak geliştirilmiştir. Yüksek mukavemet, mükemmel kaynak kalitesi ve düşük spatter oranı ile karakterize edilen ürünlerimiz, çeşitli metal türleri için optimize edilmiştir.",
      features: [
        "Yüksek mukavemet ve dayanıklılık",
        "Düşük spatter oranı",
        "Mükemmel ark kararlılığı",
        "Çeşitli çap seçenekleri",
        "Kolay kullanım",
        "Yüksek verimlilik",
      ],
      subProducts: [
        { name: "nawel CAST", description: "Genel amaçlı kaynak uygulamaları için ideal", specs: "Çap: 0.8-2.4mm, AWS E71T-1 standardı", image: nawelImg },
        { name: "nawel TOOL", description: "Dış mekan kaynak işleri için mükemmel", specs: "Çap: 1.2-2.0mm, Rüzgar direnci yüksek", image: nawelToolImg },
        { name: "nawel CORROSİON", description: "316L ve 308L paslanmaz çelik kaynak teli", specs: "Çap: 0.8-1.6mm, Korozyon direnci", image: nawelCorrosionImg },
        { name: "nawel ABRASİON", description: "Yüksek mukavemet gerektiren uygulamalar", specs: "Çap: 1.2-2.4mm, 550-700 MPa mukavemet", image: nawelAbrasionImg },
        { name: "nawel TUNGSTEN CARBİDE", description: "Yüksek mukavemet gerektiren uygulamalar", specs: "Çap: 1.2-2.4mm, 550-700 MPa mukavemet", image: nawelTungstenCarbideImg },
        { name: "nawel BUİLDUP", description: "Yüksek mukavemet gerektiren uygulamalar", specs: "Çap: 1.2-2.4mm, 550-700 MPa mukavemet", image: nawelBuildupImg },
      ],
      image: foto7,
      icon: <Flame className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Aşınmaya Dayanıklı Plaka",
      description: "Endüstriyel uygulamalar için ultra dayanıklı aşınma önleyici plakalar",
      longDescription:
        "SCİWELD'in aşınmaya dayanıklı plakaları, zorlu endüstriyel koşullarda maksimum performans sunar. Özel alaşım kompozisyonu ve gelişmiş üretim teknikleri ile üretilen plakalarımız, uzun ömür ve düşük bakım maliyeti sağlar.",
      features: [
        "Yüksek aşınma direnci (HB 400-600)",
        "Mükemmel darbe dayanımı",
        "Kolay işlenebilirlik",
        "Çeşitli kalınlık seçenekleri",
        "Kaynak edilebilir yapı",
        "Uzun servis ömrü",
      ],
      subProducts: [
        { name: "nawel Plate UltraLight 67T", description: "Genel amaçlı aşınma direnci için", specs: "Sertlik: 370-430 HB, Kalınlık: 6-80mm", image: nawelUltraLight67TImg },
        { name: "nawel Plate Ultrahard 67T", description: "Ağır aşınma koşulları için", specs: "Sertlik: 460-540 HB, Kalınlık: 8-100mm", image: nawelUltraHard67TImg },
        { name: "nawel Plate UltraLight 65", description: "Ekstrem aşınma uygulamaları", specs: "Sertlik: 570-625 HB, Kalınlık: 10-50mm", image: nawelUltraLight65Img },
        { name: "nawel Plate Ultrahard 65", description: "Çok katmanlı hibrit yapı", specs: "Değişken sertlik, 15-120mm kalınlık", image: nawelUltraHard65Img },
        { name: "nawel Plate Ultrahard 70T", description: "Çok katmanlı hibrit yapı", specs: "Değişken sertlik, 15-120mm kalınlık", image: nawelUltraHard70TImg },
      ],
      image: foto9,
      icon: <Shield className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Toz Kaplamalı El Elektrodu",
      description: "Profesyonel kaynak uygulamaları için yüksek performanslı elektrodlar",
      longDescription:
        "SCİWELD'in toz kaplamalı el elektrodları, manuel ark kaynak işlemlerinde üstün performans sunar. Özel kaplama formülasyonları ile geliştirilmiş elektrodlarımız, stabil ark, düşük spatter ve yüksek kaliteli kaynak dikişi sağlar.",
      features: [
        "Stabil ve güçlü ark",
        "Düşük hidrojen içeriği",
        "Kolay cüruf ayrılması",
        "Mükemmel mekanik özellikler",
        "Çeşitli pozisyon kabiliyeti",
        "Uzun raf ömrü",
      ],
      subProducts: [
        { name: "nawel Tubular Electrode NBS", description: "Başlangıç seviyesi için ideal", specs: "Çap: 2.5-5.0mm, AC/DC kullanım", image: naweldElectrodeNBSImg },
        { name: "nawel Tubular Electrode C", description: "Kritik kaynak işleri için", specs: "Çap: 2.5-6.0mm, Düşük hidrojen H4", image: naweldElectrodeCImg },
        { name: "nawel Tubular Electrode BNM", description: "Paslanmaz çelik kaynak elektrodu", specs: "Çap: 2.5-4.0mm, 316L uyumlu", image: naweldElectrodeBNMImg },
        { name: "nawel Tubular Electrode B", description: "Karbon-paslanmaz çelik birleştirme", specs: "Çap: 3.2-5.0mm, Yüksek alaşım", image: naweldElectrodeBImg },
        { name: "nawel Tubular Electrode TiC", description: "Aşınma direnci için özel elektrod", specs: "Çap: 3.2-6.0mm, 45-60 HRC sertlik", image: naweldElectrodeTiCImg },
      ],
      image: foto10,
      icon: <Wrench className="w-8 h-8" />,
    },
  ];

  const applications = [
    { title: "İnşaat ve Yapı", description: "Çelik konstrüksiyon ve altyapı projeleri", icon: <Settings className="w-6 h-6" /> },
    { title: "Otomotiv Sanayi", description: "Araç üretimi ve onarım uygulamaları", icon: <Cpu className="w-6 h-6" /> },
    { title: "Gemi İnşa", description: "Denizcilik ve offshore yapılar", icon: <Layers className="w-6 h-6" /> },
    { title: "Petrol ve Gaz", description: "Boru hatları ve rafineri ekipmanları", icon: <Zap className="w-6 h-6" /> },
    { title: "Madencilik", description: "Ağır makine ve ekipman üretimi", icon: <Microscope className="w-6 h-6" /> },
    { title: "Enerji Sektörü", description: "Güç santrali ve enerji altyapısı", icon: <Atom className="w-6 h-6" /> },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${industrialBgImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Kaynak ve <span className="text-blue-300">Endüstriyel Ürünlerimiz</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Yüksek kaliteli kaynak malzemeleri ve endüstriyel çözümlerle üretim süreçlerinizi güçlendirin
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id === 1 ? 'toz-kaynak-teli' : product.id === 2 ? 'asinmaya-dayanikli-plaka' : 'toz-kaplamali-el-elektrodu'}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    style={{ objectFit: 'contain' }}
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white p-3 rounded-full">
                    {product.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {product.description}
                  </p>
                  <div className="inline-flex items-center text-blue-800 font-semibold">
                    Ürünleri İncele
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div key={product.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img style={{objectFit: 'contain'}}
                      src={product.image}
                      alt={product.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-6 left-6 bg-blue-600 text-white p-3 rounded-full">
                    {product.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-lg text-blue-800 mb-4 font-medium">
                    {product.description}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.longDescription}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300">
                    Ürün Detayları
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sub-products */}
              <div className="mt-16">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  {product.title} Ürün Çeşitleri
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {product.subProducts.map((subProduct, subIndex) => (
                    <Link
                      to={`/product/${product.id === 1 ? 'toz-kaynak-teli' : product.id === 2 ? 'asinmaya-dayanikli-plaka' : 'toz-kaplamali-el-elektrodu'}/${getSubProductSlug(subProduct.name)}`}
                      key={subIndex}
                      className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 block"
                    >
                      <div className="overflow-hidden rounded-lg mb-4 relative">
                        <img style={{objectFit: 'contain'}}
                          src={subProduct.image}
                          alt={subProduct.name}
                          className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                        {subProduct.name}
                      </h5>
                      <p className="text-gray-600 mb-4 text-sm">
                        {subProduct.description}
                      </p>
                      <div className="bg-blue-50 p-3 rounded-md">
                        <p className="text-blue-800 text-xs font-medium">
                          {subProduct.specs}
                        </p>
                      </div>
                      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="inline-flex items-center text-blue-800 font-medium text-sm">
                          Detayları Gör
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{ backgroundImage: `url(${industrialBgImg})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Uygulama <span className="text-blue-800">Alanları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ürünlerimiz çeşitli endüstrilerde geniş uygulama alanı bulur
          </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-blue-600 text-white p-3 rounded-full w-fit mb-6">
                {app.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {app.title}
              </h3>
              <p className="text-gray-700">{app.description}</p>
            </div>
          ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;