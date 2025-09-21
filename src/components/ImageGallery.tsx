import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

/**
 * Ürün detay sayfalarında kullanılan resim galerisi komponenti
 * - Küçük önizleme (thumbnail) gösterimi
 * - Tam boy görüntüleme modal'ı
 * - Klavye navigasyonu (sol/sağ ok tuşları)
 * - Responsive tasarım
 */
const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Modal açma fonksiyonu
  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  // Modal kapatma fonksiyonu
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Sonraki resme geçiş
  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  // Önceki resme geçiş
  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Klavye navigasyonu
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isModalOpen]);

  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-100 rounded-xl h-96 flex items-center justify-center">
        <p className="text-gray-500">Resim bulunamadı</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Ana resim gösterimi */}
      <div className="relative group">
        <div 
          className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
          onClick={() => openModal(selectedImageIndex)}
        >
          <img
            src={images[selectedImageIndex]}
            alt={`${productName} - Resim ${selectedImageIndex + 1}`}
            className="w-full h-96 object-contain hover:scale-105 transition-transform duration-300"
          />
          {/* Zoom ikonu */}
          <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Küçük önizleme resimleri (thumbnails) */}
      {images.length > 1 && (
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === selectedImageIndex
                  ? 'border-blue-600 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-blue-400'
              }`}
            >
              <img
                src={image}
                alt={`${productName} - Önizleme ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Tam boy görüntüleme modal'ı */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          {/* Modal içeriği */}
          <div className="relative max-w-7xl max-h-full">
            {/* Kapatma butonu */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors duration-200 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigasyon butonları */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Ana resim */}
            <img
              src={images[selectedImageIndex]}
              alt={`${productName} - Resim ${selectedImageIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Resim sayacı */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Modal dışına tıklama ile kapatma */}
          <div 
            className="absolute inset-0 -z-10"
            onClick={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;