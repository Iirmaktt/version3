import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench } from 'lucide-react';

import industrialBgImg from '@/assets/industrial-worker-bg.jpg';
import naweldElectrodeNBSImg from "@/assets/electrode-nbs.png";
import naweldElectrodeCImg from "@/assets/electrode-c.png";
import naweldElectrodeBNMImg from "@/assets/electrode-bnm.png";
import naweldElectrodeBImg from "@/assets/electrode-b.png";
import naweldElectrodeTiCImg from "@/assets/electrode-tic.png";
import foto10 from "@/assets/foto10.jpg";

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

const TozKaplamaliElElektrodu: React.FC = () => {
  const product = {
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
      { name: "SCİWELD Tubular Electrode NBS", description: "Başlangıç seviyesi için ideal", specs: "Çap: 2.5-5.0mm, AC/DC kullanım", image: naweldElectrodeNBSImg },
      { name: "SCİWELD Tubular Electrode C", description: "Kritik kaynak işleri için", specs: "Çap: 2.5-6.0mm, Düşük hidrojen H4", image: naweldElectrodeCImg },
      { name: "SCİWELD Tubular Electrode BNM", description: "Paslanmaz çelik kaynak elektrodu", specs: "Çap: 2.5-4.0mm, 316L uyumlu", image: naweldElectrodeBNMImg },
      { name: "SCİWELD Tubular Electrode B", description: "Karbon-paslanmaz çelik birleştirme", specs: "Çap: 3.2-5.0mm, Yüksek alaşım", image: naweldElectrodeBImg },
      { name: "SCİWELD Tubular Electrode TiC", description: "Aşınma direnci için özel elektrod", specs: "Çap: 3.2-6.0mm, 45-60 HRC sertlik", image: naweldElectrodeTiCImg },
    ],
    image: foto10,
    icon: <Wrench className="w-8 h-8" />,
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
                  to={`/product/toz-kaplamali-el-elektrodu/${getSubProductSlug(subProduct.name)}`}
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

export default TozKaplamaliElElektrodu;
