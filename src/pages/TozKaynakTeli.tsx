import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame } from 'lucide-react';

import industrialBgImg from '@/assets/industrial-worker-bg.jpg';
import nawelImg from "@/assets/nawel-cast.jpg";
import nawelToolImg from "@/assets/nawel-tool.png";
import nawelCorrosionImg from "@/assets/nawel-corrosion.png";
import nawelAbrasionImg from "@/assets/nawel-abrasion.jpg";
import nawelTungstenCarbideImg from "@/assets/tungsten-carbide.jpeg";
import nawelBuildupImg from "@/assets/buildup.jpg";
import foto7 from "@/assets/foto7.jpg";

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

const TozKaynakTeli: React.FC = () => {
  const product = {
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
      { name: "SCİWELD CAST", description: "Genel amaçlı kaynak uygulamaları için ideal", specs: "Çap: 0.8-2.4mm, AWS E71T-1 standardı", image: nawelImg },
      { name: "SCİWELD TOOL", description: "Dış mekan kaynak işleri için mükemmel", specs: "Çap: 1.2-2.0mm, Rüzgar direnci yüksek", image: nawelToolImg },
      { name: "SCİWELD CORROSİON", description: "316L ve 308L paslanmaz çelik kaynak teli", specs: "Çap: 0.8-1.6mm, Korozyon direnci", image: nawelCorrosionImg },
      { name: "SCİWELD ABRASİON", description: "Aşırı aşınma koşulları için özel geliştirilmiş", specs: "Çap: 1.2-2.4mm, HRC 45-55 sertlik", image: nawelAbrasionImg },
      { name: "SCİWELD TUNGSTEN CARBİDE", description: "Ekstrem aşınma için tungsten karbür takviyeli", specs: "Çap: 1.2-2.4mm, HRC 58-65 sertlik", image: nawelTungstenCarbideImg },
      { name: "SCİWELD BUİLDUP", description: "Onarım ve yeniden boyutlandırma için", specs: "Çap: 1.2-2.4mm, Yüksek dolgu oranı", image: nawelBuildupImg },
    ],
    image: foto7,
    icon: <Flame className="w-8 h-8" />,
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
                  to={`/product/toz-kaynak-teli/${getSubProductSlug(subProduct.name)}`}
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

export default TozKaynakTeli;
