import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Info, Settings, Zap } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';

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
import sira from "@/assets/sira.jpeg";
import fourth from "@/assets/fourth.png";
import nawelalloy from "@/assets/nawelalloy.png";
import naweldevamı from "@/assets/naweldevamı.png";
import third from "@/assets/third.png";
import corrosion1 from "@/assets/corrosion1.png";
import corrision2 from "@/assets/corrision2.png";
import corrosion3 from "@/assets/corrosion3.png";
import corrosion5 from "@/assets/corrosion5.jpg";
import abrasion1 from "@/assets/abrasion1.png";
import abrasion2 from "@/assets/abrasion2.png";
import abrasion3 from "@/assets/abrasion3.png";
import abrasion4 from "@/assets/abrasion4.png";
import abrasion5 from "@/assets/abrasion5.png";
import abrasion6 from "@/assets/abrasion6.png";
import tung  from "@/assets/tung.jpg";
import tung1  from "@/assets/tung1.jpg";
import fto from "@/assets/812.jpg";
import sdk11 from "@/assets/sdk11.jpg";
import cor410 from "@/assets/cor410.jpg";
import cor414 from "@/assets/cor414.jpg";
import rail from "@/assets/nawelrail.png";
import nawel200 from "@/assets/nawel200.png";
import mpact600 from "@/assets/mpact600.png";
import mpact510 from "@/assets/mpact510.png";
import nbs from "@/assets/nbs.jpg";
import lcbn from "@/assets/lcbn.png";
import tic from "@/assets/tic.png";
/**
 * Ürün detay sayfası komponenti
 * - URL parametrelerinden ürün ve alt ürün bilgilerini alır
 * - Ürün özelliklerini, teknik spesifikasyonları ve uygulama alanlarını gösterir
 * - Çoklu resim galerisi ile ürün görsellerini sunar
 * - Breadcrumb navigasyonu sağlar
 */

const ProductDetail: React.FC = () => {
  const { productId, subproductId } = useParams<{ productId: string; subproductId: string }>();

  // Ürün veri yapısı - Her ürün için detaylı bilgiler ve çoklu resimler
  const productData = {
    "toz-kaynak-teli": {
      title: "Toz Kaynak Teli",
      description: "Yüksek kaliteli toz kaynak telleri ve flux cored kaynak çözümleri",
      subProducts: {
        "sciweld-cast": {
          name: "SCİWELD CAST",
          description: "Genel amaçlı kaynak uygulamaları için ideal çözüm sunan yüksek performanslı toz kaynak teli",
          detailedDescription: "SCİWELD CAST, endüstriyel kaynak uygulamalarında mükemmel performans gösteren genel amaçlı toz kaynak telidir. Özel formülasyonu sayesinde stabil ark, düşük spatter oranı ve yüksek kaliteli kaynak dikişi sağlar. Çeşitli metal türleri için optimize edilmiş bu ürün, hem iç mekan hem de dış mekan uygulamalarında güvenle kullanılabilir.",
          images: [sira, ],
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
        "sciweld-tool": {
          name: "SCİWELD TOOL",
          description: "Dış mekan kaynak işleri için mükemmel performans gösteren özel formülasyonlu kaynak teli",
          detailedDescription: "SCİWELD TOOL, zorlu dış mekan koşullarında üstün performans gösteren özel kaynak telidir. Rüzgar direnci yüksek formülasyonu sayesinde açık havada yapılan kaynak işlemlerinde stabil ark sağlar. Özellikle inşaat ve altyapı projelerinde tercih edilen bu ürün, değişken hava koşullarında bile güvenilir sonuçlar verir.",
          images: [ nawelalloy, third, fourth, naweldevamı, fto, sdk11],
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
        "sciweld-corrosion": {
          name: "SCİWELD CORROSION",
          description: "316L ve 308L paslanmaz çelik kaynak teli, yüksek korozyon direnci",
          detailedDescription: "SCİWELD CORROSION, paslanmaz çelik kaynak uygulamaları için özel olarak geliştirilmiş yüksek kaliteli kaynak telidir. 316L ve 308L alaşım kompozisyonu sayesinde mükemmel korozyon direnci sağlar. Kimya, gıda, ilaç ve petrokimya endüstrilerinde güvenle kullanılabilir.",
          images: [ corrosion1, corrision2, corrosion3, corrosion5,cor410, cor414],
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
        "sciweld-abrasion": {
          name: "SCİWELD ABRASION",
          description: "Yüksek mukavemet gerektiren uygulamalar için özel geliştirilmiş aşınma dirençli kaynak teli",
          detailedDescription: "SCİWELD ABRASION, aşırı aşınma koşullarında çalışan parçalar için özel olarak geliştirilmiş yüksek performanslı kaynak telidir. Üstün mekanik özellikleri ve aşınma direnci sayesinde zorlu endüstriyel uygulamalarda uzun ömür sağlar.",
          images: [ abrasion1, abrasion2, abrasion3, abrasion4, abrasion5, abrasion6, mpact600, mpact510, nbs, lcbn, tic],
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
        "sciweld-tungsten-carbide": {
          name: "SCİWELD TUNGSTEN CARBIDE",
          description: "Ekstrem aşınma koşulları için tungsten karbür takviyeli özel kaynak teli",
          detailedDescription: "SCİWELD TUNGSTEN CARBIDE, tungsten karbür partikülleri ile takviye edilmiş ultra yüksek performanslı kaynak telidir. Ekstrem aşınma koşullarında bile üstün dayanım gösteren bu ürün, en zorlu endüstriyel uygulamalarda tercih edilir.",
          images: [ tung, tung1, ],
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
        "sciweld-buildup": {
          name: "SCİWELD BUILDUP",
          description: "Onarım ve yeniden boyutlandırma işleri için özel buildup kaynak teli",
          detailedDescription: "SCİWELD BUILDUP, aşınmış parçaların onarımı ve yeniden boyutlandırılması için özel olarak geliştirilmiş kaynak telidir. Yüksek dolgu oranı ve mükemmel işlenebilirlik özellikleri sayesinde ekonomik onarım çözümleri sunar.",
          images: [cor410, cor414, sira, nawelalloy, third,rail,nawel200,corrosion5],
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
        "sciweld-plate-ultralight-67t": {
          name: "SCİWELD Plate UltraLight 67T",
          description: "Çok İnce Aşınma Plakası",
          detailedDescription: "Sciweld Teknoloji Geliştirme Şirketi tarafından geliştirilen aşınmaya dayanıklı kaynak teliyle, düşük karbonlu ST37 çeliği üzerine yapılan kaynak işlemiyle üretilen bir aşınma önleyici plakadır. Kaynak telinin özel özellikleriyle birlikte Namad’ın yenilikçi kaynak yöntemi sayesinde çok düşük seyreltme oranı elde edilirken, ilk kaynak katmanında olağanüstü aşınma direnci sağlanmaktadır. Ayrıca, kaynak metalinde oluşan karbür-borür fazları bu alaşımın aşınma direncini klasik krom karbürlü alaşımlara kıyasla yaklaşık iki kat artırmaktadır.",
          images: [nawelUltraLight67TImg, ],
          specs: {
            "Sertlik": "64–68 HRC",
            "Kalınlık": "6-80mm",
            "Boyut": "1500x3000mm'ye kadar",
            "Alaşım": "Düşük alaşımlı çelik",
            "İşlenebilirlik": "İyi",
            "Kaynak Edilebilirlik": "Mükemmel"
          },
          features: [
            "Çok yüksek sertlik ve aşınma direnci, 550 °C’ye kadar düşük darbe toleransı ile korunur",
            "Minimum deformasyon ve kolay montaj",
            "Ekonomik çözüm",
            "Gerilim boşaltımı için oluşan kontrollü çatlaklar, alt tabakaya ilerlemez",
            "İyi kaynak edilebilirlik",
            "Çeşitli kalınlık seçenekleri"
          ],
          applications: [
            "Malzeme taşıma helezonları",
            "Kovalı yükleyiciler (buckets)",
            "Maden karıştırıcı pervaneler",
            "Ağırlık ve kalınlık kısıtlaması olan ekipmanlar"
          ]
        },
        "sciweld-plate-ultrahard-67t": {
          name: "SCİWELD Plate Ultrahard 67T",
          description: "Kalın Aşınma Plakası",
          detailedDescription: " Sciweld Teknoloji Geliştirme Şirketi tarafından geliştirilen aşınmaya dayanıklı kaynak teliyle düşük karbonlu ST37 çeliği üzerine yapılan kaynak işlemiyle üretilen bir aşınma plakasıdır; kaynak telinin özel bileşimi ve Namad’ın yenilikçi kaynak yöntemi sayesinde çok düşük seyreltme oranı elde edilirken ilk kaynak katmanında son derece yüksek aşınma direnci sağlanır; ayrıca kaynak metalinde oluşan karbür-borür fazları bu alaşımın aşınma direncini geleneksel krom karbürlü alaşımlara göre yaklaşık 2–3 kat artırır ve alaşımdaki niyobyum elementi malzemenin 550 °C’ye kadar yüksek sıcaklıklarda dahi aşınma direncini korumasını sağlar..",
          images: [nawelUltraHard67TImg, ],
          specs: {
            "Sertlik": "64–68 HRC",
            "Kalınlık": "8-100mm",
            "Boyut": "2000x6000mm'ye kadar",
            "Alaşım": "Yüksek alaşımlı çelik",
            "Darbe Dayanımı": "Yüksek",
            "Aşınma Direnci": "Çok yüksek"
          },
          features: [
            "Yüksek sertlik ve şiddetli aşınmaya karşı direnç, 550 °C’ye kadar orta düzeyde darbe dayanımı",
            "Aşınma koşullarının çoğu için ideal çözüm",
            "Düşük deformasyon, kolay montaj ve kullanım",
            "Gerilimi serbest bırakmak için oluşan kontrollü çatlaklar, alt tabakaya ilerlemez",
            "Ağır koşullara uygun",
            "Maliyet etkin çözüm"
          ],
          applications: [
            "Malzeme taşıma helezonları",
            "Kırıcı zırhları",
            "Maden malzeme şutları",
            "Fanlar"
          ]
        },
        "sciweld-plate-ultralight-65": {
          name: "SCİWELD Plate UltraLight 65",
          description: "Hafif uygulamalar için optimize edilmiş aşınma dirençli plaka",
          detailedDescription: " Sciweld Teknoloji Geliştirme Şirketi tarafından geliştirilen aşınmaya dayanıklı kaynak teli ile düşük karbonlu ST37 çeliği üzerine yapılan kaynak işlemiyle üretilen bir aşınma önleyici plakadır; kaynak telinin özel özellikleri ve Namad’ın yenilikçi kaynak yöntemi sayesinde çok düşük seyreltme oranı elde edilirken ilk kaynak katmanında yüksek aşınma direnci sağlanır; ayrıca özel soğutma tekniği sayesinde kaynak sırasında karbür-borür fazları oluşur ve bu yapı kaynak tabakasının tüm kalınlığı boyunca ve plakanın tamamında homojen bir şekilde dağılmıştır..",
          images: [nawelUltraLight65Img, ],
          specs: {
            "Sertlik": "64–68 HRC",
            "Kalınlık": "4-60mm",
            "Boyut": "1500x3000mm'ye kadar",
            "Ağırlık": "Hafif",
            "İşlenebilirlik": "Çok iyi",
            "Kaynak Edilebilirlik": "Mükemmel"
          },
          features: [
            "Hafif yapı",
            "300 °C’ye kadar çok yüksek sertlik ve aşındırıcı aşınmaya karşı direnç",
            "Benzer aşınma özelliklerine sahip geleneksel plakalara göre daha ince yapısı sayesinde daha hafif",
            "Ekonomik seçenek",
            "Gerilimi serbest bırakmak için oluşan kontrollü çatlaklar, alt tabakaya ilerlemez",
            "Hızlı montaj"
          ],
          applications: [
            "Malzeme taşıma helezonları",
            "Kovalı yükleyiciler (buckets)",
            "Ağırlık ve kalınlık sınırlaması olan ekipmanlar",
            "Genel makine imalatı"
          ]
        },
        "sciweld-plate-ultrahard-65": {
          name: "SCİWELD Plate Ultrahard 65",
          description: "Yüksek performans gerektiren uygulamalar için ultra sert plaka",
          detailedDescription: " Sciweld Teknoloji Geliştirme Şirketi tarafından geliştirilen aşınmaya dayanıklı kaynak teliyle düşük karbonlu ST37 çeliği üzerine yapılan kaynak işlemiyle üretilen bir aşınmaya dayanıklı plakadır; kaynak telinin özel özellikleri ve Namad’ın yenilikçi kaynak yöntemi sayesinde çok düşük seyreltme oranı elde edilirken ilk kaynak katmanında son derece yüksek aşınma direnci sağlanır; ayrıca kaynak sırasında kullanılan özel soğutma yöntemi kaynak metalinde karbür-borür fazlarının oluşumuna neden olur ve bu sayede aşınmaya dayanıklı yapı kaynak tabakasının tüm kalınlığı boyunca ve plaka genelinde homojen bir şekilde oluşur..",
          images: [nawelUltraHard65Img, ],
          specs: {
            "Sertlik": "64–68 HRC",
            "Kalınlık": "10-80mm",
            "Boyut": "2000x4000mm'ye kadar",
            "Alaşım": "Ultra yüksek alaşımlı",
            "Aşınma Direnci": "Ekstrem yüksek",
            "Darbe Dayanımı": "Yüksek"
          },
          features: [
            "300 °C’ye kadar çok yüksek sertlik ve aşındırıcı aşınmaya karşı mükemmel direnç",
            "Ekstrem aşınma direnci",
            "Mükemmel darbe dayanımı",
            "Uzun servis ömrü",
            "Gerilimi serbest bırakmak için oluşan kontrollü çatlaklar, alt tabakaya ilerlemez",
            "Yüksek performans"
          ],
          applications: [
            "Malzeme taşıma helezonları",
            "Kovalı yükleyiciler (buckets)",
            "Maden karıştırıcı pervaneler",
            "Ekstrem koşullar"
          ]
        },
        "sciweld-plate-ultrahard-70t": {
          name: "SCİWELD Plate Ultrahard 70T",
          description: "En zorlu koşullar için maksimum sertlik değerli plaka",
          detailedDescription: "Sciweld Teknoloji Geliştirme Şirketi tarafından geliştirilen aşınmaya dayanıklı kaynak teli ile düşük karbonlu ST37 çeliği üzerine yapılan kaynak işlemiyle üretilen bir aşınmaya dayanıklı plakadır; kaynak telinin özel bileşimi çok düşük seyreltme oranı ile birlikte ilk kaynak katmanında son derece yüksek aşınma direnci sağlar; ayrıca kaynak sırasında karbür-borür içeren fazların oluşumu bu kaynak telinin benzersiz özelliklerini kazandırır; alaşıma eklenen molibden elementi sayesinde bu plaka krom karbürlü alaşımlara göre 2 ila 5 kat daha fazla aşınma direnci sunar ve bu özellik çok yüksek sıcaklıklarda dahi (700 °C’ye kadar) korunur; Namad’ın özel kaynak yöntemi, aşınmaya dayanıklı yapının tüm kaynak kalınlığı boyunca ve plaka genelinde homojen bir şekilde oluşmasını sağlar.",
          images: [nawelUltraHard70TImg, ],
          specs: {
            "Sertlik": "68–70 HRC",
            "Kalınlık": "10-50mm",
            "Boyut": "1500x3000mm'ye kadar",
            "Alaşım": "Premium alaşım",
            "Aşınma Direnci": "Maksimum",
            "Darbe Dayanımı": "Çok yüksek"
          },
          features: [
            "700 °C’ye kadar çok yüksek sertlik ve şiddetli aşındırıcı ortamlarda mükemmel aşınma direnci",
            "Tungsten karbür içeren plakaların yerini alabilecek ideal çözüm",
            "Ağır aşınma koşulları için optimize edilmiş yapı",
            "Gerilim boşaltıcı kontrollü çatlaklar, alt tabakaya ilerlemez",
            "Uzun servis ömrü",
            "Düşük deformasyon ve kolay montaj"
          ],
          applications: [
            "Malzeme taşıma helezonları",
            "Mikser kürekleri",
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
        "sciweld-tubular-electrode-nbs": {
          name: "SCİWELD Tubular Electrode NBS",
          description: "DIN 8555: E 2-UM-65-GR",
          detailedDescription: " SCİWELD tübüler elektrot NBS, demir esaslı bir alaşımdır ve tek pasoda yüksek sertlik ile çok yüksek aşınma direnci elde etme özelliğine sahiptir. Kaynak metalinin, katılaşma sırasında çok yüksek oranda demir karbo-boritler içeren ince mikro yapıya sahip olması, bu elektrota özgün özellikler kazandırır. Bu sayede elde edilen kaynak metali, düşük darbe koşullarında, metal-metal sürtünmesinde ve çok ince partiküllerin aşındırıcı etkisine maruz kalan parçalar için idealdir. Basit karbonlu ve düşük alaşımlı çelikler üzerinde, aşındırıcı aşınmaya dayanıklı tabaka oluşturmak amacıyla hem tek pasoda hem de çift pasoda kaynak yapılması tavsiye edilir. Maksimum çalışma sıcaklığı 200 °C’dir.",
          images: [naweldElectrodeNBSImg, ],
          specs: {
            "Çap Aralığı": "2.5-5.0mm",
            "Akım Türü": "AC/DC",
            "Pozisyon": "Tüm pozisyonlar",
            "Kaplama Türü": "Rutil",
            "Mukavemet": "420-520 MPa",
            "Uzama": "≥22%"
          },
          features: [
            "Portatif cihazlarla AC/DC kutuplarda uygulanabilir",
            "Cüruf temizlemeye gerek yok",
            "Neme dayanıklı, kurutma gerektirmez",
            "Yüksek dolgu oranı ve %92’ye kadar geri kazanım",
            "Düşük amperde uygulanabilir, düşük ısı girdisi ve deformasyon, ihmal edilebilir seyreltme",
           
          ],
          applications: [
            "Malzeme taşıma helezonları",
            "Çeşitli beton ve bulamaç pompaları",
            "İnce partiküllerle aşındırıcı temas eden parçalar",
            "Tarım ve madencilik endüstrisi"
          ]
        },
        "sciweld-tubular-electrode-c": {
          name: "SCİWELD Tubular Electrode C",
          description: "DIN 8555: E 10-UM-70-G",
          detailedDescription: "Demir esaslı, kromca zengin matris içinde sert krom karbür fazı içeren bir alaşımdır. Kuru ve ıslak aşındırıcı aşınmaya karşı yüksek direnç gösterebilir. Bu elektrot, basit karbonlu ve düşük alaşımlı çeliklerin sert dolgu kaynağı için tasarlanmıştır. Tek pasoda optimum özelliklere ulaşabilse de, iki pasoda uygulanması tavsiye edilir.",
          images: [naweldElectrodeCImg, ],
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
        "sciweld-tubular-electrode-bnm": {
          name: "SCİWELD Tubular Electrode BNM",
          description: "DIN 8555: E 10-UM-70-GZ",
          detailedDescription: "SCİWELD tübüler elektrot BNM, demir esaslı bir alaşımdır ve tek pasoda çok yüksek sertlik ile aşınma direncine ulaşabilir. Kaynak metalinin, katılaşma sırasında nano karbo-boritler içeren ince mikro yapıya sahip olması bu elektrota özgün özellikler kazandırır. Molibden elementi sayesinde alaşım, çok yüksek sıcaklıklarda dahi aşınma özelliklerini koruyabilir ve aynı zamanda kimyasal korozyona karşı da belirli bir direnç gösterebilir. Bu elektrot, basit karbonlu ve düşük alaşımlı çelikler üzerinde, zorlu ve karmaşık aşınma koşullarında kullanılmak üzere tasarlanmıştır.",
          images: [naweldElectrodeBNMImg, ],
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
            "Yüksek sıcaklıkta malzeme taşıma helezonları",
            "Kimya endüstrisi",
            "Gıda işleme tesisleri",
            "İlaç sanayi"
          ]
        },
        "sciweld-tubular-electrode-b": {
          name: "SCİWELD Tubular Electrode B",
          description: "Karbon-paslanmaz çelik birleştirme için özel elektrod",
          detailedDescription: "SCİWELD Tubular Electrode B, karbon çelik ile paslanmaz çelik arasında kaynak yapmak için özel olarak geliştirilmiş elektrodtur. Farklı malzeme özelliklerini başarıyla birleştiren bu elektrod, hibrit uygulamalarda tercih edilir.",
          images: [naweldElectrodeBImg, ],
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
        "sciweld-tubular-electrode-tic": {
          name: "SCİWELD Tubular Electrode TiC",
          description: "Aşınma direnci için özel elektrod, yüksek sertlik değerleri",
          detailedDescription: "SCİWELD Tubular Electrode TiC, titanium karbür takviyeli özel elektrodtur. Ekstrem aşınma koşullarında üstün performans gösteren bu elektrod, yüksek sertlik değerleri ile uzun servis ömrü sağlar.",
          images: [naweldElectrodeTiCImg, ],
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

  // Mevcut ürün ve alt ürün bilgilerini al
  const currentProduct = productId ? productData[productId as keyof typeof productData] : null;
  const currentSubProduct = currentProduct && subproductId ? 
    currentProduct.subProducts[subproductId as keyof typeof currentProduct.subProducts] : null;

  // Ürün bulunamadığında hata sayfası göster
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
      {/* Breadcrumb navigasyonu */}
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

      {/* Ürün detay bölümü */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ürün resim galerisi */}
            <div className="relative">
              <ImageGallery 
                images={currentSubProduct.images} 
                productName={currentSubProduct.name}
              />
              
              {/* Geri dönüş butonu */}
              <Link
                to="/products"
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full hover:bg-white hover:text-blue-800 transition-all duration-300 shadow-lg z-10"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>

            {/* Ürün bilgileri */}
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

              {/* Ürün özellikleri */}
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

              {/* Uygulama alanları */}
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

              {/* İletişim butonları */}
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

          {/* Teknik özellikler bölümü */}
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