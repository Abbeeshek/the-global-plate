import heroImage from "@/assets/hero-hospitality.jpg";
import { Building2, UtensilsCrossed, Handshake, Users, TrendingUp, Globe, ShieldCheck, Award, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gold text-sm tracking-[0.3em] font-display">FOOD & HOTELS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#impact" className="hover:text-foreground transition-colors">Impact</a>
            <a href="#vision" className="hover:text-foreground transition-colors">Vision</a>
          </div>
          <button className="text-sm border border-gold-muted text-gold px-4 py-2 hover:bg-gold/10 transition-all duration-300">
            Partner With Us
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Luxury hospitality ambiance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="gold-line mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }} />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wide text-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            FOOD <span className="text-gold">&</span> HOTELS
          </h1>
          <div className="gold-line mx-auto mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }} />
          <p className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            Hospitality Built on Quality, Trust & Global Standards
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
            <a href="#about" className="group inline-flex items-center gap-2 bg-gold/10 border border-gold-muted text-gold px-8 py-3 hover:bg-gold/20 transition-all duration-500">
              Explore Our Vision
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "1.2s" }}>
          <div className="gold-line-vertical animate-gold-shimmer" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold text-sm tracking-[0.3em] mb-4 block">ABOUT US</span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8">
              A Structured Hospitality Ecosystem
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Food & Hotels represents a comprehensive hospitality ecosystem operating under Network Global. 
              We integrate food services, restaurants, hotels, stays, and allied operations into a unified 
              platform that delivers exceptional experiences while maintaining the highest standards of 
              quality and governance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our commitment extends beyond service delivery—we build lasting partnerships, empower 
              local businesses, and contribute to sustainable tourism development across communities.
            </p>
          </div>
        </div>
      </section>

      {/* Core Areas Section */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] mb-4 block">OUR EXPERTISE</span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Core Areas
            </h2>
            <div className="gold-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Food Services Card */}
            <div className="group relative bg-charcoal border border-border hover:border-gold-muted/50 p-8 md:p-10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-gold/50 to-transparent" />
              <div className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              <UtensilsCrossed className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-2xl text-foreground mb-4">Food Services</h3>
              <p className="text-muted-foreground leading-relaxed">
                Premium dining experiences, catering solutions, and food management services 
                that uphold exceptional culinary standards across all operations.
              </p>
            </div>

            {/* Hotels & Stays Card */}
            <div className="group relative bg-charcoal border border-border hover:border-gold-muted/50 p-8 md:p-10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-gold/50 to-transparent" />
              <div className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              <Building2 className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-2xl text-foreground mb-4">Hotels & Stays</h3>
              <p className="text-muted-foreground leading-relaxed">
                Curated accommodations ranging from boutique properties to premium hotels, 
                ensuring comfort, safety, and memorable guest experiences.
              </p>
            </div>

            {/* Hospitality Partnerships Card */}
            <div className="group relative bg-charcoal border border-border hover:border-gold-muted/50 p-8 md:p-10 transition-all duration-500">
              <div className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-gold/50 to-transparent" />
              <div className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-gold/50 to-transparent" />
              <Handshake className="w-10 h-10 text-gold mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-2xl text-foreground mb-4">Hospitality Partnerships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Strategic collaborations with venues, suppliers, and service providers to 
                expand reach and enhance value delivery across the ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business & Community Impact */}
      <section id="impact" className="py-24 md:py-32 bg-charcoal-light">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-sm tracking-[0.3em] mb-4 block">MAKING A DIFFERENCE</span>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Business & Community Impact
              </h2>
              <div className="gold-line mb-8" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our operations extend far beyond hospitality services. We actively contribute 
                to economic growth, community development, and sustainable practices that 
                benefit all stakeholders.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-charcoal border border-border p-6 text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-foreground mb-2">Employment</h4>
                <p className="text-sm text-muted-foreground">Creating meaningful jobs across hospitality sectors</p>
              </div>
              <div className="bg-charcoal border border-border p-6 text-center">
                <TrendingUp className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-foreground mb-2">MSME Growth</h4>
                <p className="text-sm text-muted-foreground">Empowering small businesses through partnerships</p>
              </div>
              <div className="bg-charcoal border border-border p-6 text-center">
                <Globe className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-foreground mb-2">Tourism</h4>
                <p className="text-sm text-muted-foreground">Driving sustainable tourism development</p>
              </div>
              <div className="bg-charcoal border border-border p-6 text-center">
                <Award className="w-8 h-8 text-gold mx-auto mb-4" />
                <h4 className="font-display text-lg text-foreground mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Setting benchmarks in service quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Integration */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold text-sm tracking-[0.3em] mb-4 block">CONNECTED SERVICES</span>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
              Ecosystem Integration
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Seamlessly connected with Network Global's comprehensive suite of services 
              for a unified experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              "Payments & Banking",
              "Travel Services",
              "Event Management",
              "MSME Services",
              "Digital Solutions",
              "Logistics Support",
              "Marketing & Media",
              "Training & Development"
            ].map((service, index) => (
              <div 
                key={service} 
                className="bg-charcoal border border-border hover:border-gold-muted/30 p-4 md:p-6 text-center transition-all duration-300"
              >
                <span className="text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality & Governance */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-sm tracking-[0.3em] mb-4 block">OUR COMMITMENT</span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
                Quality & Governance
              </h2>
              <div className="gold-line mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-2">Service Standards</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Rigorous quality benchmarks across all hospitality operations ensuring consistency and excellence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-2">Compliance Framework</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Adherence to regulatory requirements and industry best practices at every level.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-2">Service Monitoring</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Continuous performance tracking and feedback integration for ongoing improvement.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <ShieldCheck className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg text-foreground mb-2">Safety Management</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Comprehensive safety protocols protecting guests, staff, and partners at all touchpoints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-gold/10" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="gold-line mx-auto mb-8" />
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
              Building Tomorrow's Hospitality, <br />
              <span className="text-gold">Rooted in Trust</span>
            </h2>
            <div className="gold-line mx-auto mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              We envision a hospitality landscape where quality meets accessibility, 
              where local businesses thrive alongside global standards, and where every 
              guest experience reflects our unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-charcoal border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <span className="text-gold text-sm tracking-[0.3em] font-display">FOOD & HOTELS</span>
              <p className="text-muted-foreground text-sm mt-2">A Network Global Initiative</p>
            </div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Food & Hotels. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;