import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Link2, TrendingUp, DollarSign } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Start the Bot",
    description:
      "Open Telegram and search for our Polymarket Trading Bot. Click start to begin your trading journey.",
    color: "text-primary"
  },
  {
    step: "02",
    icon: Link2,
    title: "Connect Your Wallet",
    description:
      "Securely link your crypto wallet to access your funds. We support Polygon, Ethereum, and USDC networks.",
    color: "text-accent"
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Browse Markets",
    description:
      "Explore trending prediction markets or search for specific events. View real-time odds and market data.",
    color: "text-success"
  },
  {
    step: "04",
    icon: DollarSign,
    title: "Place Your Trades",
    description:
      "Execute trades with a few taps. Monitor your positions and track profits directly from Telegram.",
    color: "text-primary"
  }
];

export const HowItWorks = () => {
  const scrollToDemo = () => {
    const element = document.getElementById('demo-video');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Trading in Seconds
          </h2>
          <p className="text-xl text-muted-foreground">
            Our streamlined process gets you trading prediction markets faster than any other platform
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="relative h-full">
                {/* Connection line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
                )}

                <Card className="relative p-6 text-center bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group z-10 h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground font-bold text-lg mb-4">
                      {step.step}
                    </div>
                    <step.icon
                      className={`h-8 w-8 ${step.color} mx-auto group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://t.me/polyfocusbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mr-4"
            >
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Launch Trading Bot
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToDemo}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};