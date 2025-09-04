import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "$2.1M",
    label: "Bot Volume (30d)",
    description: "Processed through our platform"
  },
  {
    value: "15,247", 
    label: "Active Users",
    description: "Trading daily via Telegram"
  },
  {
    value: "47ms",
    label: "Avg Response Time", 
    description: "From command to execution"
  },
  {
    value: "124",
    label: "Markets Supported",
    description: "Across politics, sports & crypto"
  }
];

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for serious traders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real numbers from our community of prediction market enthusiasts
            </p>
          </div>

          {/* Symmetrical grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-card/60 backdrop-blur-sm border-border/30 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};