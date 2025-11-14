import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-bg text-white-secondary font-lexend">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src="image\logo\cropped-cropped-Dishari-Institute-of-Paramedical-and-Allied-Health-Science-Malda-150x150.jpeg" alt="Dishari Institute Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-bold text-white">Dishari Institute</h3>
                <p className="text-xs text-footer-text">Of Paramedical & Allied Health Science</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Empowering the next generation of healthcare professionals with quality education and practical skills.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-blue transition-colors">About Us</Link></li>
              <li><Link to="/course" className="hover:text-primary-blue transition-colors">Courses</Link></li>
              <li><Link to="/notice" className="hover:text-primary-blue transition-colors">Admissions</Link></li>
              <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Register Office</p>
                  <p>N.H-34 Malda Bypass, Near Malda Court Railway Station, Post-Madhaipur, P.S. & Dist-Malda-732142 West Bengal.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Corporate Office</p>
                  <p>Dishari Health Point Pvt. Ltd. (Education Dept), Room No-7, 19, B. G. Road, Mokdumpur, English Bazar, Malda-732103, West Bengal.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <a href="tel:+919775901793" className="hover:text-primary-blue transition-colors">+91 9775901793</a>
                    <p className="text-footer-text text-xs">(11am to 5pm)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-primary-blue mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <a href="mailto:dipahs2022@gmail.com" className="hover:text-primary-blue transition-colors">dipahs2022@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white-muted/20 pt-8 flex flex-col sm:flex-row justify-between items-center text-center text-sm gap-4">
          <p>© 2025 Dishari Institute. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white-secondary hover:text-primary-blue transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-white-secondary hover:text-primary-blue transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-white-secondary hover:text-primary-blue transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
