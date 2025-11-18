import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FooterProps {
  onAdminClick?: () => void;
}

const Footer = ({ onAdminClick }: FooterProps) => {
  return (
    <footer className="bg-milestone-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-milestone-cyan">Milestone Institute Radio</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Broadcasting educational content, news, and inspiring stories to help our community 
              learn, grow, and thrive. Your premier destination for quality educational radio programming.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-milestone-cyan hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-milestone-cyan hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-milestone-cyan hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-milestone-cyan hover:bg-white/10">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-milestone-cyan">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#radio" className="text-white/80 hover:text-white transition-colors">Live Radio</a></li>
              <li><a href="#courses" className="text-white/80 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#articles" className="text-white/80 hover:text-white transition-colors">Articles</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="https://portal.milestoneinstitute.ac.ke/enquiries?cid=Sm+BFwHAOCU/R+Rv3s4GpQ==" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li>
                <button 
                  onClick={onAdminClick}
                  className="text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  Admin Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-milestone-cyan">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-milestone-cyan" />
                <span className="text-white/80 text-sm">Milestone Institute Campus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-milestone-cyan" />
                <span className="text-white/80 text-sm">+254712403409</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-milestone-cyan" />
                <span className="text-white/80 text-sm">radio@milestoneinstitute.ac.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 Milestone Institute Radio. All rights reserved. Learn, Grow & Thrive.
            </p>
            <div className="flex gap-4 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;