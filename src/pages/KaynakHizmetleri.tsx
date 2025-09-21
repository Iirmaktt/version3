import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import foto1 from '@/assets/1.jpg';
import foto2 from '@/assets/2.jpg';
import foto3 from '@/assets/3.jpg';
import foto4 from '@/assets/4.jpg';
import foto5 from '@/assets/5.jpg';
import foto6 from '@/assets/6.jpg';
import foto7 from '@/assets/7.jpg';
import foto8 from '@/assets/8.jpg';
import foto9 from '@/assets/9.jpg';


import industrialWorkerImg from '@/assets/call-me-lamb-aLWgHZ1PC0o-unsplash.jpg';
import industrialBgImg from '@/assets/industrial-worker-bg.jpg';

const KaynakHizmetleri: React.FC = () => {
  const successfulProjects = [
    {
      
      image: foto1
    },
    {
      
      image: foto2
    },
    {
     
      image: foto3
    },
    {
     
      image: foto4
    },
    {
      
      image: foto5
    },
    {
     
      image: foto6
    },
    {
      
      image: foto7
    },
    {
      image: foto8
    },
    {
     
      image: foto9
    }
  ];

  const stats = [
    { number: "150+", label: "Tamamlanan Proje" },
    { number: "50+", label: "Mutlu Müşteri" },
    { number: "15+", label: "Yıllık Deneyim" },
    { number: "99%", label: "Başarı Oranı" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-black text-white py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${industrialBgImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-blue-800/65 to-black/75"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6">
              Başarılı <span className="text-blue-300">Kaynak Projelerimiz</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Farklı sektörlerde gerçekleştirdiğimiz başarılı kaynak projelerimizi keşfedin
            </p>
            <div className="w-24 h-1 bg-blue-400 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Başarılı <span className="text-blue-800">Projelerimiz</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çeşitli sektörlerde gerçekleştirdiğimiz kaliteli kaynak işleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successfulProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-80">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-200 text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-5 h-5 text-blue-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-18"
          style={{ backgroundImage: `url(${industrialBgImg})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/85 to-blue-900/85"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">
            Sizin Projeniz de Bir Sonraki Başarı Hikayemiz Olsun
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Profesyonel kaynak hizmetlerimizle projenizi hayata geçirin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-800 font-semibold rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
            >
              Proje Teklifi Al
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Ürünlerimizi İncele
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KaynakHizmetleri;