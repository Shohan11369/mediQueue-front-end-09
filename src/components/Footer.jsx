import Link from "next/link";

import { FaFacebook as Facebook, FaTwitter as Twitter, FaInstagram as Instagram, FaLinkedin as Linkedin } from "react-icons/fa";

import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 dark:bg-slate-900 text-black dark:text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 ">
          {/* Brand Section */}
          <div className="space-y-4 ">
            <span className="text-3xl font-black tracking-tighter  dark:text-white text-blue-600">
              MediQueue
            </span>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">
              Empowering students through expert-led learning. Join our
              community and reach your full potential.
            </p>
          </div>

          {/* Learning Services */}
          <div className="space-y-4">
            <h4 className="text-sm  text-slate-900 font-black dark:text-white  uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2 text-sm font-bold dark:text-white  text-slate-600">
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-600  transition-colors"
                >
                  Find a Tutor
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-blue-600 transition-colors"
                >
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-blue-600 transition-colors"
                >
                  Student Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/add-course"
                  className="hover:text-blue-600 transition-colors"
                >
                  Become an Instructor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white  uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600 dark:text-white ">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" /> support@mediqueue.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" /> +1 (555) 000-1234
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-black text-slate-900 dark:text-white  uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-black border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-black border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-black border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white dark:bg-black border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Bottom Links */}
        <div className="border-t border-slate-200 pt-8  flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 dark:text-white font-medium">
            © 2026 MediQueue Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-slate-600">
            <a href="#" className="hover:text-blue-600 dark:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 dark:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
