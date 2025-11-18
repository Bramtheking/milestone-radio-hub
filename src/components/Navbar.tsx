import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import milestonelogo from '@/assets/milestone-logo.png';

interface NavbarProps {
  onAdminClick?: () => void;
}

const Navbar = ({ onAdminClick }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (onAdminClick) {
      onAdminClick();
    }
  };

  return (
    <nav className="bg-milestone-navy shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src={milestonelogo} 
              alt="Milestone Institute" 
              className="h-10 w-10 mr-3"
            />
            <div className="text-white">
              <div className="font-bold text-lg">MILESTONE RADIO</div>
              <div className="text-xs text-milestone-cyan">Learn, Grow & Thrive</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-white hover:text-milestone-cyan transition-colors font-medium">
              Home
            </a>
            <a href="#radio" className="text-white hover:text-milestone-cyan transition-colors font-medium">
              Live Radio
            </a>
            <a href="#courses" className="text-white hover:text-milestone-cyan transition-colors font-medium">
              Courses
            </a>
            <a href="#articles" className="text-white hover:text-milestone-cyan transition-colors font-medium">
              Articles
            </a>
            <a href="#gallery" className="text-white hover:text-milestone-cyan transition-colors font-medium">
              Gallery
            </a>
            <Link to="/mobile-app" className="text-white hover:text-milestone-cyan transition-colors font-medium">
              Mobile App
            </Link>
            <a 
              href="https://portal.milestoneinstitute.ac.ke/admissionv2?cid=Sm+BFwHAOCU/R+Rv3s4GpQ==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-milestone-red hover:bg-milestone-red/90 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-milestone-navy/95 backdrop-blur-sm border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-milestone-cyan transition-colors">
                Home
              </a>
              <a href="#radio" className="block px-3 py-2 text-white hover:text-milestone-cyan transition-colors">
                Live Radio
              </a>
              <a href="#courses" className="block px-3 py-2 text-white hover:text-milestone-cyan transition-colors">
                Courses
              </a>
              <a href="#articles" className="block px-3 py-2 text-white hover:text-milestone-cyan transition-colors">
                Articles
              </a>
              <a href="#gallery" className="block px-3 py-2 text-white hover:text-milestone-cyan transition-colors">
                Gallery
              </a>
              <Link to="/mobile-app" className="block px-3 py-2 text-white hover:text-milestone-cyan transition-colors">
                Mobile App
              </Link>
              <a 
                href="https://portal.milestoneinstitute.ac.ke/admissionv2?cid=Sm+BFwHAOCU/R+Rv3s4GpQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mx-3 my-2 px-3 py-2 bg-milestone-red hover:bg-milestone-red/90 text-white rounded-lg font-semibold transition-colors text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;