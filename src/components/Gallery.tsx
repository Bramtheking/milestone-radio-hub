import { Images } from 'lucide-react';
import students1 from '@/assets/gallery/students-1.jpg';
import students2 from '@/assets/gallery/students-2.jpg';
import students3 from '@/assets/gallery/students-3.jpg';
import graduation from '@/assets/gallery/graduation.jpg';
import healthcare from '@/assets/gallery/healthcare.jpg';
import ict from '@/assets/gallery/ict.jpg';

const galleryImages = [
  {
    src: graduation,
    alt: "3rd Graduation Ceremony at Milestone Institute",
    title: "Graduation Ceremony"
  },
  {
    src: students1,
    alt: "Students at Milestone Institute",
    title: "Campus Life"
  },
  {
    src: students2,
    alt: "Student activities at Milestone Institute",
    title: "Student Activities"
  },
  {
    src: students3,
    alt: "Learning environment at Milestone Institute",
    title: "Learning Together"
  },
  {
    src: healthcare,
    alt: "Healthcare training at Milestone Institute",
    title: "Healthcare Training"
  },
  {
    src: ict,
    alt: "ICT lab at Milestone Institute",
    title: "Technology Labs"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Images className="h-16 w-16 text-milestone-cyan mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-milestone-navy mb-4">
            Student Life @ Milestone Institute
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the vibrant community and learning environment at Milestone Institute through our photo gallery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 aspect-video"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-milestone-navy/80 via-milestone-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
