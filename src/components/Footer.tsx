import React from 'react'
import { Eye, Mail, Phone, MapPin } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-medical-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Eye className="h-8 w-8 text-primary-400" />
              <div>
                <h3 className="text-xl font-bold">Project Iris</h3>
                <p className="text-sm text-gray-400">Next-Generation Ophthalmology EMR</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Comprehensive AI-powered ophthalmology EMR and practice management software 
              designed specifically for the Indian healthcare ecosystem with ABDM and NABH compliance.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@projectiris.health</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/project-plan" className="text-gray-300 hover:text-primary-400 transition-colors">Project Plan</a></li>
              <li><a href="/features" className="text-gray-300 hover:text-primary-400 transition-colors">Features</a></li>
              <li><a href="/compliance" className="text-gray-300 hover:text-primary-400 transition-colors">Compliance</a></li>
              <li><a href="/demo" className="text-gray-300 hover:text-primary-400 transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">ABDM Ready</span></li>
              <li><span className="text-gray-300">NABH Compatible</span></li>
              <li><span className="text-gray-300">DPDP Act 2023</span></li>
              <li><span className="text-gray-300">HIPAA Aligned</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Project Iris. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Security</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer