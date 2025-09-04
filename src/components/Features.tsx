import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Activity, Globe, Users, BarChart, Clock } from "lucide-react";

const features = [
  {
    icon: Wallet,
    title: "Wallet Integration",
    description: "Connect Polygon & Ethereum wallets in seconds. Your keys, your coins - we never hold custody.",
    color: "text-primary",
    size: "large"
  },
  {
    icon: Activity,
    title: "Market Alerts", 
    description: "Get pinged when prices move 5%+ or new markets launch in your interests.",
    color: "text-accent",
    size: "small"
  },
  {
    icon: Globe,
    title: "Global Events",
    description: "Elections, sports outcomes, crypto milestones, tech announcements - if people bet on it, we support it.",
    color: "text-success",
    size: "medium"
  },
  {
    icon: Users,
    title: "Copy Trading",
    description: "Follow top performers and mirror their positions automatically.",
    color: "text-primary",
    size: "small"
  },
  {
    icon: BarChart,
    title: "P&L Tracking",
    description: "Daily, weekly, monthly breakdowns. Export tax reports with one command.",
    color: "text-accent",
    size: "medium"
  },
  {
    icon: Clock,
    title: "Mobile-First",
    description: "Built for phones. No desktop required - manage everything from your pocket.",
    color: "text-success",
    size: "large"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why traders choose our bot
          </h2>
          <p className="text-lg text-muted-foreground">
            No fluff, just the features that matter when you're putting real money on the line.
          </p>
        </div>

        {/* Symmetrical grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/60 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4">
                <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300 mx-auto`} />
              </div>
              <h3 className="font-semibold mb-3 text-lg text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm text-center">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://t.me/polyfocusbot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Get Started Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};