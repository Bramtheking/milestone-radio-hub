import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap } from 'lucide-react';
import healthcareImg from '@/assets/gallery/healthcare.jpg';
import healthSciencesImg from '@/assets/gallery/health-sciences.jpg';
import ictImg from '@/assets/gallery/ict.jpg';
import engineeringImg from '@/assets/gallery/engineering.jpg';
import journalismImg from '@/assets/gallery/journalism.jpg';
import cosmetologyImg from '@/assets/gallery/cosmetology.jpg';

const courses = [
  {
    title: "School of HealthCare Assistants",
    image: healthcareImg,
    description: "Professional healthcare training programs to prepare you for a rewarding career in healthcare assistance."
  },
  {
    title: "School of Health Sciences",
    image: healthSciencesImg,
    description: "Comprehensive health sciences programs including nursing, public health, and clinical medicine."
  },
  {
    title: "School of ICT",
    image: ictImg,
    description: "Technology and computer studies programs including software engineering, data science, and cyber security."
  },
  {
    title: "School of Engineering",
    image: engineeringImg,
    description: "Technical and engineering courses designed to develop practical skills for the modern workforce."
  },
  {
    title: "School of Journalism & Media",
    image: journalismImg,
    description: "Media studies and journalism programs to prepare you for careers in broadcasting and communications."
  },
  {
    title: "School of Cosmetology",
    image: cosmetologyImg,
    description: "Professional beauty and cosmetology training for a career in the beauty industry."
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 bg-gradient-to-br from-milestone-blue/5 to-milestone-cyan/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <GraduationCap className="h-16 w-16 text-milestone-blue mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-milestone-navy mb-4">
            Our Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer TVET courses as per approved international standards to enable our graduands qualify for local & international job market.
          </p>
          <div className="mt-6">
            <a 
              href="https://portal.milestoneinstitute.ac.ke/admissionv2?cid=Sm+BFwHAOCU/R+Rv3s4GpQ==" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-milestone-red hover:bg-milestone-red/90 text-white font-semibold px-8 py-6 text-lg">
                Apply Now
              </Button>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-milestone-navy">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Bootcamp Courses */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-milestone-navy mb-6 text-center">
            Milestone Top Tech Bootcamp Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-milestone-blue/5 rounded-lg">
              <span className="font-semibold text-milestone-navy">Software Engineering Bootcamp</span>
              <span className="text-milestone-cyan font-bold">6 months</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-milestone-cyan/5 rounded-lg">
              <span className="font-semibold text-milestone-navy">DevOps Engineering</span>
              <span className="text-milestone-cyan font-bold">3 months</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-milestone-blue/5 rounded-lg">
              <span className="font-semibold text-milestone-navy">Data Science Bootcamp</span>
              <span className="text-milestone-cyan font-bold">6 months</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-milestone-cyan/5 rounded-lg">
              <span className="font-semibold text-milestone-navy">Data Analytics</span>
              <span className="text-milestone-cyan font-bold">6 months</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-milestone-blue/5 rounded-lg">
              <span className="font-semibold text-milestone-navy">Cyber Security Bootcamp</span>
              <span className="text-milestone-cyan font-bold">6 months</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-milestone-cyan/5 rounded-lg">
              <span className="font-semibold text-milestone-navy">Frontend Development</span>
              <span className="text-milestone-cyan font-bold">3 months</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
