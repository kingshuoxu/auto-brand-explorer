
import { Link } from 'react-router-dom';
import { CarFront, Facebook, Twitter, Instagram, Youtube, ChevronRight } from 'lucide-react';
import { brands } from '@/data/carsData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border/50 pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 text-foreground mb-4">
              <CarFront className="w-6 h-6" />
              <span className="text-lg font-semibold">汽车品牌</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              探索全球顶级汽车品牌的最新车型，了解它们的创新特性、性能数据和设计理念。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary text-sm inline-flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  首页
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-muted-foreground hover:text-primary text-sm inline-flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  品牌列表
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm inline-flex items-center transition-colors">
                  <ChevronRight className="w-3 h-3 mr-1" />
                  关于我们
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">热门品牌</h4>
            <ul className="space-y-2">
              {brands.slice(0, 4).map((brand) => (
                <li key={brand.id}>
                  <Link 
                    to={`/brand/${brand.id}`} 
                    className="text-muted-foreground hover:text-primary text-sm inline-flex items-center transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 mr-1" />
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4">联系我们</h4>
            <address className="not-italic text-sm text-muted-foreground">
              <p>北京市朝阳区</p>
              <p>汽车展示中心大厦</p>
              <p>1号楼100层</p>
              <p className="mt-2">电话: 010-12345678</p>
              <p>邮箱: info@carbrand.example.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} 汽车品牌介绍. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
