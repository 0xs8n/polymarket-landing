import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Mail, FileText, Users, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              PolyBot
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Execute Polymarket trades in 12 seconds flat - directly from Telegram.
            </p>
            <a 
              href="https://t.me/polyfocusbot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Start Trading
              </Button>
            </a>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://t.me/polyfocus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Telegram Support Group
                </a>
              </li>
              <li>
                <a 
                  href="mailto:polyfocusBot@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  polyfocusBot@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#" // Add your GitBook docs link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Docs
                </a>
              </li>
              <li>
                <a 
                  href="#" // Add your GitBook referrals link here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Users className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Referrals
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://x.com/PolyfocusBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <Twitter className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  X (prev Twitter)
                </a>
              </li>
              <li>
                <a 
                  href="https://t.me/polyfocus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <MessageSquare className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  Telegram Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 PolyBot. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <span className="text-muted-foreground">Powered by</span>
            <span className="font-semibold text-primary">Polymarket</span>
            <span className="text-muted-foreground">•</span>
            <span className="font-semibold text-accent">Telegram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};