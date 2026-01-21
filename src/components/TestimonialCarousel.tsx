'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialCarouselProps {
  testimonials: {
    id: number;
    name: string;
    role: string;
    content: string;
    image: string;
  }[];
}

// SVG Silhouette component for missing images
const PersonSilhouette = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="8" r="3" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.5"/>
    <path
      d="M12 14c-4 0-7 2-7 4.5V20h14v-1.5c0-2.5-3-4.5-7-4.5z"
      fill="#e5e7eb"
      stroke="#d1d5db"
      strokeWidth="0.5"
    />
  </svg>
);

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (testimonialId: number) => {
    setImageErrors(prev => new Set(prev).add(testimonialId));
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.testimonial-next',
          prevEl: '.testimonial-prev',
        }}
        pagination={{
          clickable: true,
          el: '.testimonial-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-12"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all h-full">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                  {imageErrors.has(testimonial.id) ? (
                    <PersonSilhouette className="w-6 h-6" />
                  ) : (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(testimonial.id)}
                    />
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="testimonial-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all">
        <ChevronLeft size={20} className="text-gray-700" />
      </button>
      <button className="testimonial-next absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all">
        <ChevronRight size={20} className="text-gray-700" />
      </button>

      {/* Pagination */}
      <div className="testimonial-pagination flex justify-center gap-2 mt-4"></div>
    </div>
  );
}