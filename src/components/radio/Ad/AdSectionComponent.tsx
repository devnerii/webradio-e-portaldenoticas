// components/AdSectionComponent.tsx
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AdSectionComponent: React.FC = () => {
  const ads = [
    {
      title: "",
      description: "",
      imgSrcs: [
        "https://via.placeholder.com/1920x1080?text=An%C3%BAncio+Moda+1",
        "https://via.placeholder.com/1920x1080?text=An%C3%BAncio+Moda+2",
        "https://via.placeholder.com/1920x1080?text=An%C3%BAncio+Moda+3"
      ],
      link: "#",
      cta: "Compre Agora",
      hideArrows: true,
      hideCtaButton: true,
      hideInfoIcon: true
    },
    {
      title: "",
      description: "",
      imgSrcs: [
        "https://via.placeholder.com/1920x1080?text=An%C3%BAncio+Viagem+1",
        "https://via.placeholder.com/1920x1080?text=An%C3%BAncio+Viagem+2",
        "https://via.placeholder.com/1920x1080?text=An%C3%BAncio+Viagem+3"
      ],
      link: "#",
      cta: "Saiba Mais",
      hideArrows: true,
      hideCtaButton: true,
      hideInfoIcon: true
    },
    {
      title: "",
      description: "",
      imgSrcs: [
        "https://via.placeholder.com/600x300?text=An%C3%BAncio+Tecnologia+1",
        "https://via.placeholder.com/600x300?text=An%C3%BAncio+Tecnologia+2",
        "https://via.placeholder.com/600x300?text=An%C3%BAncio+Tecnologia+3"
      ],
      link: "#",
      cta: "Veja Agora",
      hideArrows: true,
      hideCtaButton: true,
      hideInfoIcon: true
    },
    {
      title: "",
      description: "",
      imgSrcs: [
        "https://via.placeholder.com/600x300?text=An%C3%BAncio+Esporte+1",
        "https://via.placeholder.com/600x300?text=An%C3%BAncio+Esporte+2",
        "https://via.placeholder.com/600x300?text=An%C3%BAncio+Esporte+3"
      ],
      link: "#",
      cta: "Descubra",
      hideArrows: true,
      hideCtaButton: true,
      hideInfoIcon: true
    }
  ];

  const sliderSettings = (hideArrows: boolean) => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: !hideArrows,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 4000
        }
      }
    ]
  });

  return (
    <div className="w-full px-4 py-12">
      <h2 className="text-5xl font-extrabold text-red-600 mb-10 text-center">Nossos Parceiros</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {ads.map((ad, index) => (
          <div key={index} className="relative group bg-white text-white p-8 rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500 h-40">
            <div className="absolute inset-0 z-0">
              <Slider {...sliderSettings(ad.hideArrows)}>
                {ad.imgSrcs.map((imgSrc, i) => (
                  <div key={i} className="relative h-40"> 
                    <Image 
                      src={imgSrc} 
                      alt={`Anúncio de ${ad.cta} - Slide ${i + 1}`} 
                      layout="fill" 
                      objectFit="cover" 
                      priority={i === 0}
                      className="opacity-100 group-hover:opacity-80 transition-opacity duration-500"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-2">{ad.title}</h2>
                <p className="text-lg text-red-600 mb-4">{ad.description}</p>
              </div>
              <div className="flex items-center space-x-4">
                {!ad.hideCtaButton && (
                  <a 
                    href={ad.link} 
                    aria-label={`Link para ${ad.cta}`} 
                    className="inline-block bg-red-600 py-1 px-3 rounded-full text-white font-bold uppercase transform hover:scale-110 transition-transform duration-300"
                  >
                    {ad.cta} <FaArrowRight className="ml-2 inline" />
                  </a>
                )}
                {!ad.hideInfoIcon && (
                  <button 
                    aria-label="Mais informações" 
                    className="inline-flex items-center justify-center bg-white text-red-600 p-2 rounded-full shadow-lg hover:bg-red-100 transform hover:scale-110 transition-transform duration-300"
                  >
                    <FaInfoCircle size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdSectionComponent;
