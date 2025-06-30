import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Brain, 
  Shield, 
  Smartphone, 
  Activity, 
  Users, 
  ArrowRight,
  CheckCircle,
  Zap,
  Globe,
  Award
} from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Specialized EMR Templates',
      description: 'Customizable templates for Cataracts, Glaucoma, Diabetic Retinopathy, and AMD with voice-to-text dictation.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'Advanced AI algorithms for automated detection and severity grading of retinal diseases.',
    },
    {
      icon: Shield,
      title: 'ABDM & NABH Compliant',
      description: 'Full compliance with Indian healthcare regulations including DPDP Act 2023.',
    },
    {
      icon: Smartphone,
      title: 'Patient Portal & Mobile App',
      description: 'Multi-language support for Indian regional languages with telemedicine capabilities.',
    },
    {
      icon: Activity,
      title: 'Surgical Planning',
      description: 'Advanced IOL calculations, pre-operative checklists, and AR-assisted surgical overlays.',
    },
    {
      icon: Users,
      title: 'Practice Management',
      description: 'Comprehensive billing, inventory management, and automated appointment reminders.',
    },
  ]

  const stats = [
    { number: '6', label: 'Development Phases', icon: Zap },
    { number: '15+', label: 'Core Modules', icon: Activity },
    { number: '9', label: 'Indian Languages', icon: Globe },
    { number: '100%', label: 'ABDM Compliant', icon: Award },
  ]

  const phases = [
    {
      phase: 'Phase 1',
      title: 'Core Clinical Module',
      description: 'EMR templating, imaging integration, surgical planning',
      status: 'In Development'
    },
    {
      phase: 'Phase 2',
      title: 'Administrative Module',
      description: 'Practice management, billing, patient portal',
      status: 'Planning'
    },
    {
      phase: 'Phase 3',
      title: 'AI & Analytics',
      description: 'AI diagnostics, EyeGPT, surgical video analysis',
      status: 'Research'
    },
  ]

  return (
    <div className="gradient-bg">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Next-Generation
                <span className="text-gradient block">Ophthalmology EMR</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive AI-powered ophthalmology EMR and practice management software 
                designed specifically for the Indian healthcare ecosystem with ABDM and NABH compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/demo" className="btn-primary">
                  View Live Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/project-plan" className="btn-secondary">
                  Explore Project Plan
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered diagnostics to surgical planning, Project Iris delivers 
              cutting-edge technology tailored for ophthalmology practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 hover:scale-105 transition-transform"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary-100 rounded-lg mr-4">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="section-padding bg-medical-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures comprehensive feature delivery 
              across six carefully planned development phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {phase.phase}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    phase.status === 'In Development' 
                      ? 'bg-green-100 text-green-800' 
                      : phase.status === 'Planning'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {phase.status}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/project-plan" className="btn-primary">
              View Complete Project Plan
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Join the future of ophthalmology with Project Iris. Experience the power 
              of AI-driven healthcare technology designed for Indian medical practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors">
                Schedule a Demo
              </Link>
              <Link to="/features" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors">
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage