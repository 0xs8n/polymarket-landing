import * as React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src="/favicon.ico" alt="PolyBot" className="h-8 w-8" />
            <span className="text-white font-bold text-xl">PolyBot</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-300 hover:text-white transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-300 hover:text-white transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('stats')} className="text-gray-300 hover:text-white transition-colors">
              Stats
            </button>
          </div>

          <a 
            href="https://t.me/polyfocusbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            <span>Launch on Telegram</span>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/40 rounded-lg mt-2 p-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              How It Works
            </button>
            <button onClick={() => scrollToSection('stats')} className="block w-full text-left text-gray-300 hover:text-white py-2">
              Stats
            </button>
            
            <a 
              href="https://t.me/polyfocusbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg mt-3 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              <span>Launch on Telegram</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;