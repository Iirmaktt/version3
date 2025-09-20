import React from 'react';
import {
  ArrowRight, Layers, Cpu, Atom, Microscope,
  Settings, Zap, Shield, Wrench, Flame
} from 'lucide-react';

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

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: "Toz Kaynak Teli",
      description: "Yüksek kaliteli toz kaynak telleri ve flux cored kaynak çözümleri",
      longDescription:
        "NamadNanoTech'in toz kaynak teli ürünleri, endüstriyel kaynak uygulamaları için özel olarak geliştirilmiştir. Yüksek mukavemet, mükemmel kaynak kalitesi ve düşük spatter oranı ile karakterize edilen ürünlerimiz, çeşitli metal türleri için optimize edilmiştir.",
      features: [
        "Yüksek mukavemet ve dayanıklılık",
        "Düşük spatter oranı",
        "Mükemmel ark kararlılığı",
        "Çeşitli çap seçenekleri",
        "Kolay kullanım",
        "Yüksek verimlilik",
      ],
      subProducts: [
        { name: "NAWEL CAST", description: "Genel amaçlı kaynak uygulamaları için ideal", specs: "Çap: 0.8-2.4mm, AWS E71T-1 standardı", image: nawelImg },
        { name: "NAWEL TOOL", description: "Dış mekan kaynak işleri için mükemmel", specs: "Çap: 1.2-2.0mm, Rüzgar direnci yüksek", image: nawelToolImg },
        { name: "NAWEL CORROSİON", description: "316L ve 308L paslanmaz çelik kaynak teli", specs: "Çap: 0.8-1.6mm, Korozyon direnci", image: nawelCorrosionImg },
        { name: "NAWEL ABRASİON", description: "Yüksek mukavemet gerektiren uygulamalar", specs: "Çap: 1.2-2.4mm, 550-700 MPa mukavemet", image: nawelAbrasionImg },
        { name: "NAWEL TUNGSTEN CARBİDE", description: "Yüksek mukavemet gerektiren uygulamalar", specs: "Çap: 1.2-2.4mm, 550-700 MPa mukavemet", image: nawelTungstenCarbideImg },
        { name: "NAWEL BUİLDUP", description: "Yüksek mukavemet gerektiren uygulamalar", specs: "Çap: 1.2-2.4mm, 550-700 MPa mukavemet", image: nawelBuildupImg },
      ],
      image: "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg",
      icon: <Flame className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Aşınmaya Dayanıklı Plaka",
      description: "Endüstriyel uygulamalar için ultra dayanıklı aşınma önleyici plakalar",
      longDescription:
        "NamadNanoTech'in aşınmaya dayanıklı plakaları, zorlu endüstriyel koşullarda maksimum performans sunar. Özel alaşım kompozisyonu ve gelişmiş üretim teknikleri ile üretilen plakalarımız, uzun ömür ve düşük bakım maliyeti sağlar.",
      features: [
        "Yüksek aşınma direnci (HB 400-600)",
        "Mükemmel darbe dayanımı",
        "Kolay işlenebilirlik",
        "Çeşitli kalınlık seçenekleri",
        "Kaynak edilebilir yapı",
        "Uzun servis ömrü",
      ],
      subProducts: [
        { name: "NAWEL Plate UltraLight 67T", description: "Genel amaçlı aşınma direnci için", specs: "Sertlik: 370-430 HB, Kalınlık: 6-80mm", image: nawelUltraLight67TImg },
        { name: "NAWEL Plate Ultrahard 67T", description: "Ağır aşınma koşulları için", specs: "Sertlik: 460-540 HB, Kalınlık: 8-100mm", image: nawelUltraHard67TImg },
        { name: "NAWEL Plate UltraLight 65", description: "Ekstrem aşınma uygulamaları", specs: "Sertlik: 570-625 HB, Kalınlık: 10-50mm", image: nawelUltraLight65Img },
        { name: "NAWEL Plate Ultrahard 65", description: "Çok katmanlı hibrit yapı", specs: "Değişken sertlik, 15-120mm kalınlık", image: nawelUltraHard65Img },
        { name: "NAWEL Plate Ultrahard 70T", description: "Çok katmanlı hibrit yapı", specs: "Değişken sertlik, 15-120mm kalınlık", image: nawelUltraHard70TImg },
      ],
      image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Toz Kaplamalı El Elektrodu",
      description: "Profesyonel kaynak uygulamaları için yüksek performanslı elektrodlar",
      longDescription:
        "NamadNanoTech'in toz kaplamalı el elektrodları, manuel ark kaynak işlemlerinde üstün performans sunar. Özel kaplama formülasyonları ile geliştirilmiş elektrodlarımız, stabil ark, düşük spatter ve yüksek kaliteli kaynak dikişi sağlar.",
      features: [
        "Stabil ve güçlü ark",
        "Düşük hidrojen içeriği",
        "Kolay cüruf ayrılması",
        "Mükemmel mekanik özellikler",
        "Çeşitli pozisyon kabiliyeti",
        "Uzun raf ömrü",
      ],
      subProducts: [
        { name: "Nawel Tubular Electrode NBS", description: "Başlangıç seviyesi için ideal", specs: "Çap: 2.5-5.0mm, AC/DC kullanım", image: naweldElectrodeNBSImg },
        { name: "Nawel Tubular Electrode C", description: "Kritik kaynak işleri için", specs: "Çap: 2.5-6.0mm, Düşük hidrojen H4", image: naweldElectrodeCImg },
        { name: "Nawel Tubular Electrode BNM", description: "Paslanmaz çelik kaynak elektrodu", specs: "Çap: 2.5-4.0mm, 316L uyumlu", image: naweldElectrodeBNMImg },
        { name: "Nawel Tubular Electrode B", description: "Karbon-paslanmaz çelik birleştirme", specs: "Çap: 3.2-5.0mm, Yüksek alaşım", image: naweldElectrodeBImg },
        { name: "Nawel Tubular Electrode TiC", description: "Aşınma direnci için özel elektrod", specs: "Çap: 3.2-6.0mm, 45-60 HRC sertlik", image: naweldElectrodeTiCImg },
      ],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg",
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Kaynak ve <span className="text-blue-300">Endüstriyel Ürünlerimiz</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Yüksek kaliteli kaynak malzemeleri ve endüstriyel çözümlerle üretim süreçlerinizi güçlendirin
          </p>
          <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {products.map((product, index) => (
            <div key={product.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-2xl">
                    <img
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
                    <div
                      key={subIndex}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
                    >
                      <div className="overflow-hidden rounded-lg mb-4">
                        <img
                          src={subProduct.image}
                          alt={subProduct.name}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">
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
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Uygulama <span className="text-blue-800">Alanları</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ürünlerimiz çeşitli endüstrilerde geniş uygulama alanı bulur
          </p>
        </div>
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
      </section>
    </div>
  );
};

export default Products;