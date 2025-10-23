import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

import industrialBgImg from '@/assets/industrial-worker-bg.jpg';
import nawelUltraLight67TImg from "@/assets/ultralight-67.png";
import nawelUltraHard67TImg from "@/assets/ultrahard-67.png";
import nawelUltraLight65Img from "@/assets/ultralight-65.png";
import nawelUltraHard65Img from "@/assets/ultrahard-65.png";
import nawelUltraHard70TImg from "@/assets/ultrahard-70.png";
import foto9 from "@/assets/foto9.jpeg";

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

const AsinmayaDayanikliPlaka: React.FC = () => {
  const product = {
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
      { name: "NAWEL Plate UltraLight 67T", description: "Genel amaçlı aşınma direnci için", specs: "Sertlik: 370-430 HB, Kalınlık: 6-80mm", image: nawelUltraLight67TImg },
      { name: "NAWEL Plate Ultrahard 67T", description: "Ağır aşınma koşulları için", specs: "Sertlik: 460-540 HB, Kalınlık: 8-100mm", image: nawelUltraHard67TImg },
      { name: "NAWEL Plate UltraLight 65", description: "Ekstrem aşınma uygulamaları", specs: "Sertlik: 570-625 HB, Kalınlık: 10-50mm", image: nawelUltraLight65Img },
      { name: "NAWEL Plate Ultrahard 65", description: "Çok katmanlı hibrit yapı", specs: "Değişken sertlik, 15-120mm kalınlık", image: nawelUltraHard65Img },
      { name: "NAWEL Plate Ultrahard 70T", description: "Çok katmanlı hibrit yapı", specs: "Değişken sertlik, 15-120mm kalınlık", image: nawelUltraHard70TImg },
    ],
    image: foto9,
    icon: <Shield className="w-8 h-8" />,
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${industrialBgImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-black/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <div className="bg-blue-600 text-white p-4 rounded-full w-fit mx-auto mb-6">
              {product.icon}
            </div>
            <h1 className="text-5xl font-bold mb-6">
              {product.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {product.description}
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <div className="overflow-hidden rounded-xl shadow-2xl">
                <img
                  style={{ objectFit: 'contain' }}
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ürün Özellikleri
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.longDescription}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {product.title} Ürün Çeşitleri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.subProducts.map((subProduct, subIndex) => (
                <Link
                  to={`/product/asinmaya-dayanikli-plaka/${getSubProductSlug(subProduct.name)}`}
                  key={subIndex}
                  className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300 block"
                >
                  <div className="overflow-hidden rounded-lg mb-4 relative">
                    <img
                      style={{ objectFit: 'contain' }}
                      src={subProduct.image}
                      alt={subProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                    {subProduct.name}
                  </h4>
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
      </section>
    </div>
  );
};

export default AsinmayaDayanikliPlaka;
