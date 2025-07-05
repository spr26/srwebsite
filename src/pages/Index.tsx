
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Zap, Home, Building, Wrench, Shield, Clock, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Residential Electrical",
      description: "Complete electrical solutions for homes including wiring, outlets, lighting, and panel upgrades.",
      icon: Home,
      features: ["New Installations", "Repairs & Maintenance", "Panel Upgrades", "Smart Home Integration"]
    },
    {
      title: "Commercial Electrical",
      description: "Professional electrical services for businesses, offices, and commercial properties.",
      icon: Building,
      features: ["Office Wiring", "Lighting Systems", "Emergency Lighting", "Data & Network Cabling"]
    },
    {
      title: "Electrical Repairs",
      description: "Fast and reliable electrical repair services for all types of electrical issues.",
      icon: Wrench,
      features: ["Troubleshooting", "Circuit Repairs", "Outlet Repairs", "Switch Replacements"]
    },
    {
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections to ensure your property meets all codes.",
      icon: Shield,
      features: ["Code Compliance", "Safety Audits", "Certification", "Preventive Maintenance"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">SR Electrical Works</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Professional Electrical Services</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional <span className="text-blue-600">Electrical</span> Solutions
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Trusted electrical contractors providing safe, reliable, and efficient electrical services for residential and commercial properties.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-blue-200 hover:bg-blue-50">
                  View Our Services
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <Zap className="h-16 w-16 text-blue-200" />
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Why Choose Us?</h3>
                    <ul className="space-y-2 text-blue-100">
                      <li>• 15+ Years Experience</li>
                      <li>• Licensed Electricians</li>
                      <li>• Quality Guaranteed</li>
                      <li>• Competitive Pricing</li>
                      <li>• Same Day Service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Electrical Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple repairs to complex installations, we provide complete electrical solutions for all your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-600 transition-colors">
                      <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">About SR Electrical Works</Badge>
              <h2 className="text-4xl font-bold text-gray-900">Your Trusted Electrical Partner</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 15 years of experience in the electrical industry, SR Electrical Works has been providing 
                safe, reliable, and professional electrical services to residential and commercial clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of licensed electricians is committed to delivering quality workmanship, exceptional customer 
                service, and solutions that meet the highest safety standards.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Our Commitment</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Safety First</h4>
                      <p className="text-blue-100 text-sm">All work performed to highest safety standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Quality Assured</h4>
                      <p className="text-blue-100 text-sm">Guaranteed workmanship on all projects</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-blue-200 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Timely Service</h4>
                      <p className="text-blue-100 text-sm">On-time completion of all electrical work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">Ready to get started? Contact us for a free consultation and quote.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-0 shadow-lg">
              <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Ready to help 24/7</p>
              <p className="text-lg font-semibold text-blue-600">(555) 123-4567</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Get a quick response</p>
              <p className="text-lg font-semibold text-blue-600">info@srelectrical.com</p>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 mb-4">Local service area</p>
              <p className="text-lg font-semibold text-blue-600">Your City, State</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Call Now for Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">SR Electrical Works</span>
              </div>
              <p className="text-gray-400 mb-4">
                Professional electrical services you can trust. Licensed, insured, and committed to excellence.
              </p>
              <div className="flex space-x-2">
                <Badge variant="outline" className="text-blue-400 border-blue-400">Licensed</Badge>
                <Badge variant="outline" className="text-blue-400 border-blue-400">Insured</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Electrical</li>
                <li>Commercial Electrical</li>
                <li>Electrical Repairs</li>
                <li>Safety Inspections</li>
                <li>Emergency Services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@srelectrical.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Your City, State</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>24/7 Emergency Service</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SR Electrical Works. All rights reserved. | Licensed & Insured Electrical Contractor
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
