import React, { useState } from 'react';
import { Menu, X, ChevronDown, PenTool as Tool, Laptop, Wrench, Cpu, HardDrive, Settings, Facebook, Youtube, Users, Headset, Computer, ClipboardList as Clip, Handshake, HelpingHand as Hand } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Add Kijiji icon component
function KijijiIcon({ className = "", size = 24 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M12 3a9 9 0 0 0-9 9v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a9 9 0 0 0-9-9Z" />
      <path d="M12 8v5" />
      <path d="M8 10v3" />
      <path d="M16 10v3" />
    </svg>
  );
}

// Add Footer component
function Footer() {
  return (
    <footer className="bg-black shadow-lg shadow-zinc-800/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.facebook.com/HakwareAssembli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.kijiji.ca/v-desktop-computers/london/custom-pc-builds-upgrades-and-repairs/1706857580"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
            aria-label="Kijiji"
          >
            <KijijiIcon size={24} />
          </a>
          <a
            href="https://www.youtube.com/@HakwareAssembli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-300 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

function HomeSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-100 mb-6">Welcome to Hakware Assembli</h1>
        <p className="text-xl sm:text-2xl text-zinc-400 mb-8">Computer building, upgrades, and maintenance services committed to excellence and affordability</p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Cpu className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-zinc-100 mb-3">Expert Builds</h2>
            <p className="text-zinc-400">Custom computer builds and upgrades adapted to your individual specifications</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Clip className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-zinc-100 mb-3">Comprehensive Services</h2>
            <p className="text-zinc-400">Extensive hardware, software, and consultation solutions and services </p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg">
            <Hand className="h-12 w-12 text-zinc-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-zinc-100 mb-3">Quality Support</h2>
            <p className="text-zinc-400">Attentive, transparent client support and ongoing maintainence </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4 sm:mb-6">About Hakware Assembli</h1>
      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xl sm:text-xl text-zinc-300 leading-relaxed">
            We offer a range of flexible and personalized computer and laptop services designed to meet your specific needs. Whether you're building a high-performance gaming PC, need extra storage for your family photos, or dealing with a device issue that's slowing you down, our services are here to help. Choose the level of involvement that best suits you and let us help you get the most out of your computing experience.
          </p>
          <div className="mt-4 sm:mt-6">
            <h2 className="text-2xl sm:text-2xl font-semibold text-zinc-200 mb-2 sm:mb-3">Our Mission</h2>
            <p className="text-xl sm:text-xl text-zinc-300 leading-relaxed">
              At Hakware Assembli, our mission is to deliver exceptional, customized computing solutions with care, expertise, and affordability. From the very first consultation through to post-service support, we're committed to providing the highest quality service at a price that works for you, tailored specifically to your goals. Together, we'll create the perfect computer experience for you.
            </p>
          </div>
        </div>
        <div className="bg-zinc-800 rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 mt-4 md:mt-0">
          <h2 className="text-lg sm:text-2xl font-semibold text-zinc-200">Company Highlights</h2>
          <ul className="space-y-2 sm:space-y-3 text-zinc-300">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
              <span className="text-base sm:text-lg">Exceptional Customer Support</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
              <span className="text-base sm:text-lg">Evolving with Latest Innovation</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
              <span className="text-base sm:text-lg">Extensive Array of Services</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3"></span>
              <span className="text-base sm:text-lg">Lifetime Post-Service Support </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function ComputerBuildsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <Computer className="h-8 w-8 text-zinc-300 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">Custom Computer Builds</h1>
        </div>
        <p className="text-xl text-zinc-300 mb-6">
          Experience computing excellence with our custom-built systems, engineered to fit your specific requirements.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-200">Why Choose Custom Builds?</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Optimized performance for your specific use case</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Premium components with manufacturer warranties</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Professional assembly and testing</span>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Build Types</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• High Performance Gaming PCs</li>
              <li>• Office Workstations</li>
              <li>• Content Creation Setups</li>
              <li>• Everyday Home Systems</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingCard
        title="Custom Build Service"
        price="75"
        description="Professional assembly and testing of your custom PC build"
      />
    </div>
  );
}

function AssistedBuildsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <Handshake className="h-8 w-8 text-zinc-300 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">Assisted Builds</h1>
        </div>
        <p className="text-xl text-zinc-300 mb-6">
          Build your dream PC with expert guidance and support every step of the way.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-200">Our Assistance Includes:</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Component Selection Guidance</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Assembly Supervision</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>First Startup, Setup, and Install Instruction</span>
              </li>
            </ul>
            <p className="text-xl text-zinc-300 mb-6">
              Enjoy flexible assistance, based on your needs. 
            </p>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Service Options</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• Remote Consultation</li>
              <li>• In-Person, Hands-On Assistance</li>
              <li>• Build Verification</li>
              <li>• Post-Build Support</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingCard
        title="Assisted Build Session"
        price="20"
        description="Per session, expert guidance and support throughout your build process"
      />
    </div>
  );
}

function HardwareUpgradesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <HardDrive className="h-8 w-8 text-zinc-300 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">Hardware Upgrades</h1>
        </div>
        <p className="text-xl text-zinc-300 mb-6">
          Enhance your system's performance with our professional hardware upgrade services.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-200">Upgrade Services</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Desktop, Laptop, and Macbook* Services</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Component Upgrades, and Additions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Case Transfers</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Motherboard, CPU Exchanges</span>
              </li>
            </ul>
            <p className="mt-4 text-zinc-400">
            *MacBook support limited to specific models
            </p>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Benefits</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• Improved Performance</li>
              <li>• Extended System Life</li>
              <li>• Cost-Effective</li>
              <li>• Adapted to Your Unique Device Applications</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingCard
        title="Hardware Upgrade Service"
        isMinorMajor={true}
        minorPrice="20"
        majorPrice="30"
        description="Professional hardware installation and testing"
      />
    </div>
  );
}

function SoftwareServicesSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <Laptop className="h-8 w-8 text-zinc-300 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">Software Services</h1>
        </div>
        <p className="text-xl text-zinc-300 mb-6">
          Complete software solutions to keep your system running smoothly and securely.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-200">Our Services</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>OS Installation and Updates</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Driver Management</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Security Solutions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Data Migration and Backup</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Software Installation</span>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Benefits</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• System Optimization</li>
              <li>• Efficient use of System Resources</li>
              <li>• Allow you to focus your time elsewhere</li>
              <li>• Ensure important documents, files, and memories are safe!</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingCard
        title="Software Service"
        isMinorMajor={true}
        minorPrice="10"
        majorPrice="20"
        description="Expert software installation and configuration"
      />
    </div>
  );
}

function RepairsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <Wrench className="h-8 w-8 text-zinc-300 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">Repairs</h1>
        </div>
        <p className="text-xl text-zinc-300 mb-6">
          Expert repair services for all your computer hardware and software issues.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-200">Repair Services</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Hardware Diagnostics and Repair</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Virus and Malware Removal</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Software and Driver Troubleshooting</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Firmware/Bios Configuration and Repair</span>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Why Choose Us</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• Free Diagnostic Evaluation</li>
              <li>• Quick Turnaround</li>
              <li>• Highly Skilled Technical Support</li>
              <li>• Quality Guarantee</li>
              <li>• Competitive Pricing</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingCard
        title="Repair Service"
        isMinorMajor={true}
        minorPrice="30"
        majorPrice="50"
        description="Professional diagnostics and repair services"
      />
    </div>
  );
}

function ConsultationSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <div className="flex items-center mb-6">
          <Headset className="h-8 w-8 text-zinc-300 mr-4" />
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100">Free Consultations</h1>
        </div>
        <p className="text-xl text-zinc-300 mb-6">
          Get expert guidance for your computer needs with our free consultation service. From buying and building to upgrading and beyond, we'll help you make the best choice.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-zinc-200">What We Offer</h2>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>System Requirement Assessment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Custom Solution Suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Hardware Selecton Recommendations </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-zinc-400 rounded-full mr-3 mt-2"></span>
                <span>Budget planning assistance</span>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-700 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-zinc-200 mb-4">Consultation Topics</h2>
            <ul className="space-y-3 text-zinc-300">
              <li>• Device Use Scenarios</li>
              <li>• System Requirements</li>
              <li>• Performance Optimization</li>
              <li>• Upgrade Planning</li>
              <li>• Cost Analysis</li>
            </ul>
          </div>
        </div>
      </div>
      <PricingCard
        title="Professional Consultation"
        price="0"
        description="Expert advice and planning for your computing needs"
      />
    </div>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    details: ''
  });
  const [showNotification, setShowNotification] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = formData.firstName && formData.email && formData.service;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid && !isSubmitting) {
      setIsSubmitting(true);
      
      const templateParams = {
        to_email: 'info@hakwareassembli.com',
        subject: `C: ${formData.firstName} ${formData.lastName} - ${formData.email} ${formData.phone}`,
        message: `Service Request: ${formData.service}\n\nAdditional Details: ${formData.details}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        details: formData.details
      };

      try {
        await emailjs.send(
          'service_ll03skl', // Replace with your EmailJS service ID
          'template_cqb1ovr', // Replace with your EmailJS template ID
          templateParams,
          'B9StehWo9O2l6-pr_' // Replace with your EmailJS public key
        );

        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          details: ''
        });
      } catch (error) {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
      <div className="bg-zinc-800 rounded-lg p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-4">Contact Us</h1>
        <p className="text-xl text-zinc-300 mb-6">
          Have questions or need assistance? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300">
                First Name or Alias <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-300">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-zinc-300">
              Service Request <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Select a service</option>
              <option value="Computer Builds">Computer Builds</option>
              <option value="Assisted Builds">Assisted Builds</option>
              <option value="Hardware Upgrades">Hardware Upgrades</option>
              <option value="Software Services">Software Services</option>
              <option value="Repairs">Repairs</option>
              <option value="Consultations">Consultations</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="block text-sm font-medium text-zinc-300">
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md bg-zinc-700 border-zinc-600 text-zinc-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                isFormValid && !isSubmitting
                  ? 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
                  : 'bg-zinc-600 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>

        {showNotification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg animate-fade-out">
            Submission Successful
          </div>
        )} </div>
    </div>
  );
}

function PricingCard({ title, price, description, isMinorMajor = false, minorPrice, majorPrice }) {
  if (isMinorMajor) {
    return (
      <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center mt-8">
        <h3 className="text-2xl font-bold text-zinc-100 mb-4">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-r border-zinc-700">
            <p className="text-zinc-400 mb-2">Minor</p>
            <p className="text-3xl font-bold text-zinc-100">${minorPrice}</p>
          </div>
          <div>
            <p className="text-zinc-400 mb-2">Major</p>
            <p className="text-3xl font-bold text-zinc-100">${majorPrice}</p>
          </div>
        </div>
        <p className="mt-4 text-zinc-400">{description}</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-lg text-center mt-8">
      <h3 className="text-2xl font-bold text-zinc-100 mb-4">{title}</h3>
      <p className="text-3xl font-bold text-zinc-100">${price}</p>
      <p className="mt-4 text-zinc-400">{description}</p>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Computer Builds', section: 'computer-builds' },
    { name: 'Assisted Builds', section: 'assisted-builds' },
    { name: 'Hardware Upgrades', section: 'hardware-upgrades' },
    { name: 'Software Services', section: 'software-services' },
    { name: 'Repairs', section: 'repairs' },
    { name: 'Consultations', section: 'consultation' }
  ];

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <AboutSection />;
      case 'computer-builds':
        return <ComputerBuildsSection />;
      case 'assisted-builds':
        return <AssistedBuildsSection />;
      case 'hardware-upgrades':
        return <HardwareUpgradesSection />;
      case 'software-services':
        return <SoftwareServicesSection />;
      case 'repairs':
        return <RepairsSection />;
      case 'consultation':
        return <ConsultationSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="font-Hhenum min-h-screen bg-zinc-900 flex flex-col">
      <nav className="bg-black shadow-lg shadow-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14 sm:h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <a 
                  href="#" 
                  onClick={() => setCurrentSection('home')}
                  className="flex items-center"
                >
                  <img 
                    src="{{ Vite::asset('/Img/Black_cube_NoBG.png') }}" 
                    alt="Hakware Assembli Logo" 
                    className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                  />
                  <span className="ml-2 text-xl sm:text-4xl font-bold text-zinc-100">Hakware Assembli</span>
                </a>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a 
                  href="#" 
                  onClick={() => setCurrentSection('home')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium ${
                    currentSection === 'home' 
                      ? 'border-zinc-400 text-zinc-100' 
                      : 'border-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  Home
                </a>
                <a 
                  href="#" 
                  onClick={() => setCurrentSection('about')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium ${
                    currentSection === 'about' 
                      ? 'border-zinc-400 text-zinc-100' 
                      : 'border-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  About Us
                </a>
                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-xl font-medium text-zinc-400 hover:border-zinc-700 hover:text-zinc-300 focus:outline-none"
                  >
                    Services
                    <ChevronDown className="ml-1 h-14 w-4" />
                  </button>
                  {isServicesOpen && (
                    <div 
                      className="absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5"
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {services.map((service) => (
                          <a
                            key={service.name}
                            href="#"
                            onClick={() => {
                              setCurrentSection(service.section);
                              setIsServicesOpen(false);
                            }}
                            className="block px-4 py-2 text-xl text-zinc-300 hover:bg-zinc-700"
                            role="menuitem"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <a 
                  href="#" 
                  onClick={() => setCurrentSection('contact')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-xl font-medium ${
                    currentSection === 'contact' 
                      ? 'border-zinc-400 text-zinc-100' 
                      : 'border-transparent text-zinc-400 hover:border-zinc-700 hover:text-zinc-300'
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>

            <div className="sm:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-300 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="pt-2 pb-3 space-y-1">
            <a 
              href="#" 
              onClick={() => {
                setCurrentSection('home');
                setIsMenuOpen(false);
              }}
              className={`block pl-3 pr-4 py-2 border-l-4 text-xl font-medium ${
                currentSection === 'home'
                  ? 'bg-zinc-900 border-zinc-400 text-zinc-100'
                  : 'border-transparent text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              Home
            </a>
            <a 
              href="#" 
              onClick={() => {
                setCurrentSection('about');
                setIsMenuOpen(false);
              }}
              className={`block pl-3 pr-4 py-2 border-l-4 text-xl font-medium ${
                currentSection === 'about'
                  ? 'bg-zinc-900 border-zinc-400 text-zinc-100'
                  : 'border-transparent text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              About Us
            </a>
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 border-transparent text-xl font-medium text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-300"
              >
                Services
                <ChevronDown className={`h-4 w-4 transform ${isServicesOpen ? 'rotate-180' : ''} transition-transform duration-200`} />
              </button>
              <div className={`${isServicesOpen ? 'block' : 'hidden'} bg-zinc-900`}>
                {services.map((service) => (
                  <a
                    key={service.name}
                    href="#"
                    onClick={() => {
                      setCurrentSection(service.section);
                      setIsMenuOpen(false);
                      setIsServicesOpen(false);
                    }}
                    className="block pl-8 pr-4 py-2 text-xl text-zinc-400 hover:bg-zinc-800 hover:text-zinc-300"
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            </div>
            <a 
              href="#" 
              onClick={() => {
                setCurrentSection('contact');
                setIsMenuOpen(false);
              }}
              className={`block pl-3 pr-4 py-2 border-l-4 text-xl font-medium ${
                currentSection === 'contact'
                  ? 'bg-zinc-900 border-zinc-400 text-zinc-100'
                  : 'border-transparent text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {renderSection()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
