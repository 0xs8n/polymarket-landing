import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, BarChart3, Shield, Zap, Play } from "lucide-react";

export const Hero = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Floating Robot Logo */}
      <div className="absolute top-20 right-20 z-20 animate-float">
        <img 
          
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Hero Content - Moved Higher Up */}
        <div className="max-w-5xl mx-auto text-center pt-24 pb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Now Live: V0.1.0 with Copy Trading Functionality
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            The fastest way to trade 
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              prediction markets
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Execute Polymarket trades in 12 seconds flat. Place orders, check positions, and manage your portfolio - all from Telegram.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
              href="https://t.me/polyfocusbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-base px-8 py-3 w-full">
                Open @PolyTradeBot
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-base px-8 py-3 hover:bg-secondary/50"
              onClick={scrollToDemo}
            >
              See Live Demo
            </Button>
          </div>
        </div>

        {/* Feature Grid - Between text and video */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card/70 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <TrendingUp className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Live Market Data</h3>
              <p className="text-sm text-muted-foreground">Real-time prices and market movements</p>
            </Card>
            
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <Shield className="h-8 w-8 text-success mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Secure Trading</h3>
              <p className="text-sm text-muted-foreground">Non-custodial wallet integration</p>
            </Card>
            
            <Card className="p-6 bg-card/60 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <Zap className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Instant Execution</h3>
              <p className="text-sm text-muted-foreground">Sub-second trade processing</p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
              <BarChart3 className="h-8 w-8 text-primary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Portfolio Tracking</h3>
              <p className="text-sm text-muted-foreground">P&L and risk management</p>
            </Card>
          </div>
        </div>

        {/* Demo Video Section - Moved Further Down */}
        <div id="demo-video" className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              See It In Action
            </h2>
            <p className="text-muted-foreground">
              Watch how easy it is to trade Polymarket directly from Telegram
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card/20 backdrop-blur-sm border border-border/30">
            <div className="aspect-video w-full">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '16/9' }}
              >
                <source src="/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Trust indicators - At the bottom */}
        <div className="flex items-center justify-center gap-8 mb-16 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>99.9% uptime</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>15k+ active users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span>$2M+ volume</span>
          </div>
        </div>
      </div>
    </section>
  );
};