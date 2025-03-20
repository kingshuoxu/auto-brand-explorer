
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { CarFront, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '首页', path: '/' },
    { name: '品牌', path: '/brands' },
    { name: '关于', path: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-8 py-4',
        isScrolled ? 'glass-effect shadow-md' : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        <NavLink 
          to="/" 
          className="flex items-center space-x-2 text-foreground font-display"
        >
          <CarFront className="w-8 h-8" />
          <span className="text-xl font-semibold">汽车品牌</span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'relative font-medium transition-colors py-1',
                  'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5',
                  'after:origin-bottom-right after:transition-transform after:duration-300',
                  isActive
                    ? 'after:scale-x-100 after:bg-primary'
                    : 'hover:after:scale-x-100 hover:after:origin-bottom-left after:scale-x-0 after:bg-primary/70'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 transition-all duration-300 ease-in-out',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col space-y-6 p-6 pt-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-lg font-medium py-2 border-b border-border/30 transition-colors',
                  isActive ? 'text-primary' : 'text-foreground/80 hover:text-primary'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
