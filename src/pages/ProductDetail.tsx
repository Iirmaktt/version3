import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info, Settings, Zap } from 'lucide-react';

// Import images
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

const ProductDetail: React.FC = () => {
  const { productId, subproductId } = useParams<{ productId: string; subproductId: string }>();

  // Product data structure
  const productData = {
    "toz-kaynak-teli": {
      title: "Toz Kaynak Teli",
      description: "Yüksek kaliteli toz kaynak telleri ve flux cored kaynak çözümleri",
      subProducts: {
        "nawel-cast": {
          name: "NAWEL CAST",
          description: "Genel amaçlı kaynak uygulamaları için ideal çözüm sunan yüksek performanslı toz kaynak teli",
          detailedDescription: "NAWEL CAST, endüstriyel kaynak uygulamalarında mükemmel performans gösteren genel amaçlı toz kaynak telidir. Özel formülasyonu sayesinde stabil ark, düşük spatter oranı ve yüksek kaliteli kaynak dikişi sağlar. Çeşitli metal türleri için optimize edilmiş bu ürün, hem iç mekan hem de dış mekan uygulamalarında güvenle kullanılabilir.",
          image: nawelImg,
          specs: {
            "Çap Aralığı": "0.8-2.4mm",
            "Standart": "AWS E71T-1",
            "Akım Türü": "DC+",
            "Pozisyon": "Tüm pozisyonlar",
            "Mukavemet": "490-550 MPa",
            "Uzama": "≥22%"
          },
          features: [
            "Mükemmel ark kararlılığı",
            "Düşük spatter oranı",
            "Kolay cüruf ayrılması",
            "Yüksek verimlilik",
            "Geniş çap seçenekleri",
            "Çok pozisyonlu kaynak kabiliyeti"
          ],
          applications: [
            "Genel yapı çeliği kaynağı",
            "İnşaat sektörü uygulamaları",
            "Makine imalat sanayi",
            "Onarım ve bakım işleri"
          ]
        },
        "nawel-tool": {
          name: "NAWEL TOOL",
          description: "Dış mekan kaynak işleri için mükemmel performans gösteren özel formülasyonlu kaynak teli",
          detailedDescription: "NAWEL TOOL, zorlu dış mekan koşullarında üstün performans gösteren özel kaynak telidir. Rüzgar direnci yüksek formülasyonu sayesinde açık havada yapılan kaynak işlemlerinde stabil ark sağlar. Özellikle inşaat ve altyapı projelerinde tercih edilen bu ürün, değişken hava koşullarında bile güvenilir sonuçlar verir.",
          image: nawelToolImg,
          specs: {
            "Çap Aralığı": "1.2-2.0mm",
            "Özellik": "Rüzgar direnci yüksek",
            "Akım Türü": "DC+",
            "Pozisyon": "PA, PB, PC",
            "Mukavemet": "520-580 MPa",
            "Darbe Dayanımı": "≥47J (-20°C)"
          },
          features: [
            "Yüksek rüzgar direnci",
            "Dış mekan uygulamaları için ideal",
            "Stabil ark performansı",
            "Hızlı kaynak hızı",
            "Düşük hidrojen içeriği",
            "Mükemmel mekanik özellikler"
          ],
          applications: [
            "Dış mekan inşaat projeleri",
            "Köprü ve altyapı kaynağı",
            "Gemi inşa sanayi",
            "Offshore yapılar"
          ]
        },
        "nawel-corrosion": {
          name: "NAWEL CORROSION",
          description: "316L ve 308L paslanmaz çelik kaynak teli, yüksek korozyon direnci",
          detailedDescription: "NAWEL CORROSION, paslanmaz çelik kaynak uygulamaları için özel olarak geliştirilmiş yüksek kaliteli kaynak telidir. 316L ve 308L alaşım kompozisyonu sayesinde mükemmel korozyon direnci sağlar. Kimya, gıda, ilaç ve petrokimya endüstrilerinde güvenle kullanılabilir.",
          image: nawelCorrosionImg,
          specs: {
            "Çap Aralığı": "0.8-1.6mm",
            "Alaşım Türü": "316L / 308L",
            "Akım Türü": "DC+",
            "Pozisyon": "Tüm pozisyonlar",
            "Korozyon Direnci": "Yüksek",
            "Ferrit İçeriği": "5-12 FN"
          },
          features: [
            "Yüksek korozyon direnci",
            "Mükemmel kaynak kalitesi",
            "Düşük karbon içeriği",
            "Intergranüler korozyon direnci",
            "Temiz kaynak dikişi",
            "Geniş uygulama alanı"
          ],
          applications: [
            "Kimya endüstrisi",
            "Gıda işleme tesisleri",
            "İlaç sanayi",
            "Petrokimya tesisleri"
          ]
        },
        "nawel-abrasion": {
          name: "NAWEL ABRASION",
          description: "Yüksek mukavemet gerektiren uygulamalar için özel geliştirilmiş aşınma dirençli kaynak teli",
          detailedDescription: "NAWEL ABRASION, aşırı aşınma koşullarında çalışan parçalar için özel olarak geliştirilmiş yüksek performanslı kaynak telidir. Üstün mekanik özellikleri ve aşınma direnci sayesinde zorlu endüstriyel uygulamalarda uzun ömür sağlar.",
          image: nawelAbrasionImg,
          specs: {
            "Çap Aralığı": "1.2-2.4mm",
            "Mukavemet": "550-700 MPa",
            "Sertlik": "HRC 45-55",
            "Akım Türü": "DC+",
            "Pozisyon": "PA, PB",
            "Aşınma Direnci": "Çok yüksek"
          },
          features: [
            "Yüksek aşınma direnci",
            "Üstün mukavemet değerleri",
            "Darbe dayanımı",
            "Uzun servis ömrü",
            "Maliyet etkin çözüm",
            "Kolay uygulanabilirlik"
          ],
          applications: [
            "Madencilik ekipmanları",
            "İnşaat makineleri",
            "Çimento sanayi",
            "Ağır sanayi uygulamaları"
          ]
        },
        "nawel-tungsten-carbide": {
          name: "NAWEL TUNGSTEN CARBIDE",
          description: "Ekstrem aşınma koşulları için tungsten karbür takviyeli özel kaynak teli",
          detailedDescription: "NAWEL TUNGSTEN CARBIDE, tungsten karbür partikülleri ile takviye edilmiş ultra yüksek performanslı kaynak telidir. Ekstrem aşınma koşullarında bile üstün dayanım gösteren bu ürün, en zorlu endüstriyel uygulamalarda tercih edilir.",
          image: nawelTungstenCarbideImg,
          specs: {
            "Çap Aralığı": "1.2-2.4mm",
            "Sertlik": "HRC 58-65",
            "Tungsten Karbür": "%15-25",
            "Akım Türü": "DC+",
            "Pozisyon": "PA",
            "Aşınma Direnci": "Ekstrem yüksek"
          },
          features: [
            "Tungsten karbür takviyeli",
            "Ekstrem aşınma direnci",
            "Yüksek sıcaklık dayanımı",
            "Uzun servis ömrü",
            "Mükemmel sertlik değerleri",
            "Özel uygulamalar için ideal"
          ],
          applications: [
            "Maden işleme ekipmanları",
            "Aşındırıcı malzeme taşıma",
            "Yüksek sıcaklık uygulamaları",
            "Kritik aşınma noktaları"
          ]
        },
        "nawel-buildup": {
          name: "NAWEL BUILDUP",
          description: "Onarım ve yeniden boyutlandırma işleri için özel buildup kaynak teli",
          detailedDescription: "NAWEL BUILDUP, aşınmış parçaların onarımı ve yeniden boyutlandırılması için özel olarak geliştirilmiş kaynak telidir. Yüksek dolgu oranı ve mükemmel işlenebilirlik özellikleri sayesinde ekonomik onarım çözümleri sunar.",
          image: nawelBuildupImg,
          specs: {
            "Çap Aralığı": "1.2-2.4mm",
            "Dolgu Oranı": "Yüksek",
            "Sertlik": "HRC 35-45",
            "Akım Türü": "DC+",
            "Pozisyon": "PA, PB",
            "İşlenebilirlik": "Mükemmel"
          },
          features: [
            "Yüksek dolgu oranı",
            "Mükemmel işlenebilirlik",
            "Ekonomik onarım çözümü",
            "Düşük dilüsyon",
            "Hızlı uygulama",
            "Çok katmanlı kaynak uygun"
          ],
          applications: [
            "Makine parçası onarımı",
            "Mil ve şaft onarımı",
            "Boyut düzeltme işleri",
            "Bakım ve onarım sektörü"
          ]
        }
      }
    },
    "asinmaya-dayanikli-plaka": {
      title: "Aşınmaya Dayanıklı Plaka",
      description: "Endüstriyel uygulamalar için ultra dayanıklı aşınma önleyici plakalar",
      subProducts: {
        "nawel-plate-ultralight-67t": {
          name: "NAWEL Plate UltraLight 67T",
          description: "Genel amaçlı aşınma direnci için optimize edilmiş plaka",
          detailedDescription: "NAWEL Plate UltraLight 67T, genel endüstriyel uygulamalarda mükemmel aşınma direnci sağlayan ekonomik çözümdür. Orta seviye sertlik değerleri ile kolay işlenebilirlik özelliklerini birleştiren bu plaka, geniş kullanım alanına sahiptir.",
          image: nawelUltraLight67TImg,
          specs: {
            "Sertlik": "370-430 HB",
            "Kalınlık": "6-80mm",
            "Boyut": "1500x3000mm'ye kadar",
            "Alaşım": "Düşük alaşımlı çelik",
            "İşlenebilirlik": "İyi",
            "Kaynak Edilebilirlik": "Mükemmel"
          },
          features: [
            "Orta seviye aşınma direnci",
            "Kolay işlenebilirlik",
            "Ekonomik çözüm",
            "Geniş boyut seçenekleri",
            "İyi kaynak edilebilirlik",
            "Çeşitli kalınlık seçenekleri"
          ],
          applications: [
            "Genel endüstriyel uygulamalar",
            "Orta seviye aşınma koşulları",
            "İnşaat makineleri",
            "Tarım ekipmanları"
          ]
        },
        "nawel-plate-ultrahard-67t": {
          name: "NAWEL Plate Ultrahard 67T",
          description: "Ağır aşınma koşulları için yüksek sertlik değerli plaka",
          detailedDescription: "NAWEL Plate Ultrahard 67T, ağır aşınma koşullarında üstün performans gösteren yüksek sertlik değerli plakadır. Zorlu endüstriyel uygulamalarda uzun servis ömrü sağlayan bu ürün, maliyet etkin çözümler sunar.",
          image: nawelUltraHard67TImg,
          specs: {
            "Sertlik": "460-540 HB",
            "Kalınlık": "8-100mm",
            "Boyut": "2000x6000mm'ye kadar",
            "Alaşım": "Yüksek alaşımlı çelik",
            "Darbe Dayanımı": "Yüksek",
            "Aşınma Direnci": "Çok yüksek"
          },
          features: [
            "Yüksek aşınma direnci",
            "Mükemmel darbe dayanımı",
            "Uzun servis ömrü",
            "Geniş boyut seçenekleri",
            "Ağır koşullara uygun",
            "Maliyet etkin çözüm"
          ],
          applications: [
            "Madencilik ekipmanları",
            "Çimento sanayi",
            "Ağır inşaat makineleri",
            "Kırma ve öğütme sistemleri"
          ]
        },
        "nawel-plate-ultralight-65": {
          name: "NAWEL Plate UltraLight 65",
          description: "Hafif uygulamalar için optimize edilmiş aşınma dirençli plaka",
          detailedDescription: "NAWEL Plate UltraLight 65, hafif ve orta seviye aşınma koşulları için özel olarak geliştirilmiş plakadır. Düşük ağırlık ve iyi işlenebilirlik özellikleri ile pratik çözümler sunar.",
          image: nawelUltraLight65Img,
          specs: {
            "Sertlik": "350-420 HB",
            "Kalınlık": "4-60mm",
            "Boyut": "1500x3000mm'ye kadar",
            "Ağırlık": "Hafif",
            "İşlenebilirlik": "Çok iyi",
            "Kaynak Edilebilirlik": "Mükemmel"
          },
          features: [
            "Hafif yapı",
            "Kolay işlenebilirlik",
            "İyi aşınma direnci",
            "Ekonomik seçenek",
            "Çeşitli kalınlık seçenekleri",
            "Hızlı montaj"
          ],
          applications: [
            "Hafif endüstriyel uygulamalar",
            "Tarım makineleri",
            "Gıda işleme ekipmanları",
            "Genel makine imalatı"
          ]
        },
        "nawel-plate-ultrahard-65": {
          name: "NAWEL Plate Ultrahard 65",
          description: "Yüksek performans gerektiren uygulamalar için ultra sert plaka",
          detailedDescription: "NAWEL Plate Ultrahard 65, en zorlu aşınma koşullarında bile üstün performans gösteren ultra sert plakadır. Yüksek sertlik değerleri ve mükemmel aşınma direnci ile kritik uygulamalarda tercih edilir.",
          image: nawelUltraHard65Img,
          specs: {
            "Sertlik": "500-580 HB",
            "Kalınlık": "10-80mm",
            "Boyut": "2000x4000mm'ye kadar",
            "Alaşım": "Ultra yüksek alaşımlı",
            "Aşınma Direnci": "Ekstrem yüksek",
            "Darbe Dayanımı": "Yüksek"
          },
          features: [
            "Ultra yüksek sertlik",
            "Ekstrem aşınma direnci",
            "Mükemmel darbe dayanımı",
            "Uzun servis ömrü",
            "Kritik uygulamalar için ideal",
            "Yüksek performans"
          ],
          applications: [
            "Kritik aşınma noktaları",
            "Ağır madencilik ekipmanları",
            "Yüksek darbe yükleri",
            "Ekstrem koşullar"
          ]
        },
        "nawel-plate-ultrahard-70t": {
          name: "NAWEL Plate Ultrahard 70T",
          description: "En zorlu koşullar için maksimum sertlik değerli plaka",
          detailedDescription: "NAWEL Plate Ultrahard 70T, maksimum sertlik değerleri ile en zorlu endüstriyel koşullarda bile üstün performans gösteren premium plakadır. Ekstrem aşınma direnci ve yüksek darbe dayanımı ile kritik uygulamalarda tercih edilir.",
          image: nawelUltraHard70TImg,
          specs: {
            "Sertlik": "570-625 HB",
            "Kalınlık": "10-50mm",
            "Boyut": "1500x3000mm'ye kadar",
            "Alaşım": "Premium alaşım",
            "Aşınma Direnci": "Maksimum",
            "Darbe Dayanımı": "Çok yüksek"
          },
          features: [
            "Maksimum sertlik değerleri",
            "Ekstrem aşınma direnci",
            "Yüksek darbe dayanımı",
            "Premium kalite",
            "Uzun servis ömrü",
            "En zorlu koşullar için"
          ],
          applications: [
            "Ekstrem aşınma koşulları",
            "Kritik endüstriyel uygulamalar",
            "Ağır darbe yükleri",
            "Premium performans gereken yerler"
          ]
        }
      }
    },
    "toz-kaplamali-el-elektrodu": {
      title: "Toz Kaplamalı El Elektrodu",
      description: "Profesyonel kaynak uygulamaları için yüksek performanslı elektrodlar",
      subProducts: {
        "nawel-tubular-electrode-nbs": {
          name: "Nawel Tubular Electrode NBS",
          description: "Başlangıç seviyesi için ideal genel amaçlı elektrod",
          detailedDescription: "Nawel Tubular Electrode NBS, başlangıç seviyesindeki kaynak operatörleri için özel olarak geliştirilmiş kullanıcı dostu elektrodtur. Kolay tutuşma, stabil ark ve temiz kaynak dikişi özellikleri ile öğrenme sürecini kolaylaştırır.",
          image: naweldElectrodeNBSImg,
          specs: {
            "Çap Aralığı": "2.5-5.0mm",
            "Akım Türü": "AC/DC",
            "Pozisyon": "Tüm pozisyonlar",
            "Kaplama Türü": "Rutil",
            "Mukavemet": "420-520 MPa",
            "Uzama": "≥22%"
          },
          features: [
            "Kolay tutuşma",
            "Stabil ark",
            "Temiz kaynak dikişi",
            "Başlangıç seviyesi için ideal",
            "AC/DC kullanım",
            "Geniş çap seçenekleri"
          ],
          applications: [
            "Genel kaynak uygulamaları",
            "Eğitim amaçlı kullanım",
            "Bakım ve onarım işleri",
            "Hafif yapı çeliği kaynağı"
          ]
        },
        "nawel-tubular-electrode-c": {
          name: "Nawel Tubular Electrode C",
          description: "Kritik kaynak işleri için düşük hidrojen içerikli elektrod",
          detailedDescription: "Nawel Tubular Electrode C, kritik kaynak uygulamaları için özel olarak geliştirilmiş düşük hidrojen içerikli elektrodtur. Yüksek kalite gerektiren projelerde çatlak riski olmadan güvenli kaynak sağlar.",
          image: naweldElectrodeCImg,
          specs: {
            "Çap Aralığı": "2.5-6.0mm",
            "Hidrojen İçeriği": "H4 (≤4ml/100g)",
            "Akım Türü": "DC+",
            "Pozisyon": "Tüm pozisyonlar",
            "Mukavemet": "530-680 MPa",
            "Darbe Dayanımı": "≥47J (-20°C)"
          },
          features: [
            "Düşük hidrojen içeriği",
            "Yüksek mukavemet",
            "Çatlak direnci",
            "Kritik uygulamalar için",
            "Mükemmel mekanik özellikler",
            "Tüm pozisyon kabiliyeti"
          ],
          applications: [
            "Kritik yapı çeliği kaynağı",
            "Basınçlı kaplar",
            "Köprü inşaatı",
            "Yüksek mukavemet gereken yerler"
          ]
        },
        "nawel-tubular-electrode-bnm": {
          name: "Nawel Tubular Electrode BNM",
          description: "Paslanmaz çelik kaynak elektrodu, 316L uyumlu",
          detailedDescription: "Nawel Tubular Electrode BNM, paslanmaz çelik kaynak uygulamaları için özel olarak geliştirilmiş elektrodtur. 316L alaşım uyumluluğu ile mükemmel korozyon direnci ve kaynak kalitesi sağlar.",
          image: naweldElectrodeBNMImg,
          specs: {
            "Çap Aralığı": "2.5-4.0mm",
            "Alaşım Türü": "316L uyumlu",
            "Akım Türü": "DC+",
            "Pozisyon": "Tüm pozisyonlar",
            "Korozyon Direnci": "Yüksek",
            "Ferrit İçeriği": "5-12 FN"
          },
          features: [
            "316L uyumluluğu",
            "Yüksek korozyon direnci",
            "Temiz kaynak dikişi",
            "Düşük karbon içeriği",
            "Intergranüler korozyon direnci",
            "Gıda sınıfı uygulamalar"
          ],
          applications: [
            "Paslanmaz çelik kaynağı",
            "Kimya endüstrisi",
            "Gıda işleme tesisleri",
            "İlaç sanayi"
          ]
        },
        "nawel-tubular-electrode-b": {
          name: "Nawel Tubular Electrode B",
          description: "Karbon-paslanmaz çelik birleştirme için özel elektrod",
          detailedDescription: "Nawel Tubular Electrode B, karbon çelik ile paslanmaz çelik arasında kaynak yapmak için özel olarak geliştirilmiş elektrodtur. Farklı malzeme özelliklerini başarıyla birleştiren bu elektrod, hibrit uygulamalarda tercih edilir.",
          image: naweldElectrodeBImg,
          specs: {
            "Çap Aralığı": "3.2-5.0mm",
            "Özellik": "Yüksek alaşım",
            "Akım Türü": "DC+",
            "Pozisyon": "PA, PB, PC",
            "Uyumluluk": "Karbon-Paslanmaz çelik",
            "Mukavemet": "≥550 MPa"
          },
          features: [
            "Farklı malzeme birleştirme",
            "Yüksek alaşım içeriği",
            "Mükemmel uyumluluk",
            "Güçlü kaynak dikişi",
            "Özel uygulamalar için",
            "Hibrit çözümler"
          ],
          applications: [
            "Karbon-paslanmaz çelik birleştirme",
            "Hibrit yapılar",
            "Özel endüstriyel uygulamalar",
            "Farklı malzeme kombinasyonları"
          ]
        },
        "nawel-tubular-electrode-tic": {
          name: "Nawel Tubular Electrode TiC",
          description: "Aşınma direnci için özel elektrod, yüksek sertlik değerleri",
          detailedDescription: "Nawel Tubular Electrode TiC, titanium karbür takviyeli özel elektrodtur. Ekstrem aşınma koşullarında üstün performans gösteren bu elektrod, yüksek sertlik değerleri ile uzun servis ömrü sağlar.",
          image: naweldElectrodeTiCImg,
          specs: {
            "Çap Aralığı": "3.2-6.0mm",
            "Sertlik": "45-60 HRC",
            "Özellik": "TiC takviyeli",
            "Akım Türü": "DC+",
            "Pozisyon": "PA, PB",
            "Aşınma Direnci": "Ekstrem yüksek"
          },
          features: [
            "Titanium karbür takviyeli",
            "Yüksek sertlik değerleri",
            "Ekstrem aşınma direnci",
            "Uzun servis ömrü",
            "Özel uygulamalar için",
            "Yüksek performans"
          ],
          applications: [
            "Aşınma direnci gereken yerler",
            "Madencilik ekipmanları",
            "Ağır sanayi uygulamaları",
            "Kritik aşınma noktaları"
          ]
        }
      }
    }
  };

  // Get current product and subproduct
  const currentProduct = productId ? productData[productId as keyof typeof productData] : null;
  const currentSubProduct = currentProduct && subproductId ? 
    currentProduct.subProducts[subproductId as keyof typeof currentProduct.subProducts] : null;

  if (!currentProduct || !currentSubProduct) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
          <p className="text-gray-600 mb-8">Aradığınız ürün mevcut değil.</p>
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Ürünlere Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Breadcrumb */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
              Anasayfa
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-gray-500 hover:text-blue-800 transition-colors duration-200">
              Ürünler
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500">{currentProduct.title}</span>
            <span className="text-gray-400">/</span>
            <span className="text-blue-800 font-medium">{currentSubProduct.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                < img style ={{objectFit: 'contain'}}
                  src={currentSubProduct.image}
                  alt={currentSubProduct.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Back Button */}
              <Link
                to="/products"
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 p-2 rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-lg"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {currentProduct.title}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentSubProduct.name}
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  {currentSubProduct.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {currentSubProduct.detailedDescription}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  Özellikler
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSubProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Settings className="w-5 h-5 text-blue-600 mr-2" />
                  Uygulama Alanları
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentSubProduct.applications.map((application, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
                >
                  <Zap className="mr-2 w-4 h-4" />
                  Teklif Al
                </Link>
                <Link
                  to="/products"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-800 hover:text-blue-800 transition-all duration-300"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  Ürünlere Dön
                </Link>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="w-6 h-6 text-blue-600 mr-3" />
              Teknik Özellikler
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(currentSubProduct.specs).map(([key, value], index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-600 mb-1">
                    {key}
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;