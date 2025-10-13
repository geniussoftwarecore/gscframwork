import { motion } from 'framer-motion';

interface IPhoneMockupProps {
  image: string;
  alt: string;
  index?: number;
}

export function IPhoneMockup({ image, alt, index = 0 }: IPhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative mx-auto"
      style={{ 
        width: '300px',
        height: '600px'
      }}
    >
      {/* iPhone 15 Pro Max Frame */}
      <div className="relative w-full h-full">
        {/* Phone Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-[55px] shadow-2xl">
          {/* Inner Border */}
          <div className="absolute inset-[3px] bg-black rounded-[52px] overflow-hidden">
            {/* Screen */}
            <div className="absolute inset-[12px] bg-white rounded-[40px] overflow-hidden">
              {/* Status Bar Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-[20px] z-10">
                {/* Camera */}
                <div className="absolute top-[10px] left-[20px] w-[8px] h-[8px] bg-gray-800 rounded-full"></div>
                {/* Speaker */}
                <div className="absolute top-[12px] left-[35px] w-[45px] h-[4px] bg-gray-800 rounded-full"></div>
              </div>
              
              {/* App Screenshot */}
              <div className="w-full h-full">
                <img 
                  src={image} 
                  alt={alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Side Buttons */}
          {/* Power Button */}
          <div className="absolute right-[-3px] top-[180px] w-[3px] h-[80px] bg-gray-700 rounded-l-sm"></div>
          
          {/* Volume Buttons */}
          <div className="absolute left-[-3px] top-[140px] w-[3px] h-[30px] bg-gray-700 rounded-r-sm"></div>
          <div className="absolute left-[-3px] top-[180px] w-[3px] h-[30px] bg-gray-700 rounded-r-sm"></div>
          <div className="absolute left-[-3px] top-[220px] w-[3px] h-[50px] bg-gray-700 rounded-r-sm"></div>
        </div>
        
        {/* Reflection Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[55px] pointer-events-none"></div>
      </div>
    </motion.div>
  );
}

interface IPhoneGalleryProps {
  images: Array<{
    url: string;
    alt: string;
    altAr: string;
  }>;
}

export function IPhoneGallery({ images }: IPhoneGalleryProps) {
  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto px-4">
        {images.map((image, index) => (
          <IPhoneMockup
            key={index}
            image={image.url}
            alt={image.altAr || image.alt}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
