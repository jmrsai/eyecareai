import React from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, 
  Brain, 
  Shield, 
  Smartphone, 
  Activity, 
  Users,
  Mic,
  Camera,
  Stethoscope,
  Calendar,
  CreditCard,
  MessageSquare,
  Zap,
  Globe,
  Lock,
  Award
} from 'lucide-react'
import InteractiveFeatureDemo from '../components/InteractiveFeatureDemo'
import FeatureComparison from '../components/FeatureComparison'
import TechnologyStack from '../components/TechnologyStack'
import ROICalculator from '../components/ROICalculator'

const FeaturesPage: React.FC = () => {
  const featureCategories = [
    {
      title: 'Clinical Excellence',
      description: 'Advanced clinical tools designed specifically for ophthalmology practice',
      icon: Eye,
      color: 'primary',
      features: [
        {
          icon: Eye,
          title: 'Specialized EMR Templates',
          description: 'Customizable templates for Cataracts, Glaucoma, Diabetic Retinopathy, and AMD with structured data entry.',
          highlights: ['Voice-to-text dictation', 'SNOMED CT coding', 'Indian accent support']
        },
        {
          icon: Camera,
          title: 'Digital Imaging Integration',
          description: 'Seamless integration with diagnostic devices and advanced image analysis tools.',
          highlights: ['DICOM/PACS compatibility', 'OCT & Fundus integration', 'Real-time annotations']
        },
        {
          icon: Stethoscope,
          title: 'Surgical Planning',
          description: 'Comprehensive surgical management with advanced IOL calculations and planning tools.',
          highlights: ['Barrett Universal II formulas', 'Pre-operative checklists', 'Digital consent forms']
        },
        {
          icon: Activity,
          title: 'E-Prescribing',
          description: 'Secure electronic prescribing with comprehensive drug database and interaction alerts.',
          highlights: ['Indian generic & brand names', 'Dosage calculations', 'Allergy alerts']
        }
      ]
    },
    {
      title: 'AI-Powered Intelligence',
      description: 'Cutting-edge artificial intelligence for enhanced diagnostics and decision support',
      icon: Brain,
      color: 'purple',
      features: [
        {
          icon: Brain,
          title: 'AI Diagnostic Tools',
          description: 'Automated detection and severity grading of retinal diseases using validated algorithms.',
          highlights: ['Diabetic retinopathy detection', 'Glaucoma screening', 'AMD progression tracking']
        },
        {
          icon: Mic,
          title: 'EyeGPT Clinical Assistant',
          description: 'Generative AI assistant for clinical documentation and patient education.',
          highlights: ['Auto-generated notes', 'Natural language queries', 'Patient education content']
        },
        {
          icon: Zap,
          title: 'Surgical Video Analysis',
          description: 'AI-powered analysis of surgical procedures for skill assessment and optimization.',
          highlights: ['Technique feedback', 'Efficiency metrics', 'Real-time assistance']
        },
        {
          icon: Activity,
          title: 'Predictive Analytics',
          description: 'Advanced analytics for disease progression and treatment response prediction.',
          highlights: ['Risk stratification', 'Treatment optimization', 'Outcome prediction']
        }
      ]
    },
    {
      title: 'Practice Management',
      description: 'Comprehensive administrative tools for efficient practice operations',
      icon: Users,
      color: 'green',
      features: [
        {
          icon: Calendar,
          title: 'Smart Scheduling',
          description: 'Multi-doctor scheduling with drag-and-drop functionality and conflict detection.',
          highlights: ['Automated reminders', 'WhatsApp integration', 'Two-way confirmation']
        },
        {
          icon: CreditCard,
          title: 'Billing & Claims',
          description: 'Automated billing with GST compliance and government scheme integration.',
          highlights: ['Indian ICD-10 codes', 'Ayushman Bharat support', 'Claims tracking']
        },
        {
          icon: Users,
          title: 'Inventory Management',
          description: 'Comprehensive optical inventory with automated reorder alerts and vendor management.',
          highlights: ['Real-time tracking', 'Reorder alerts', 'Vendor integration']
        },
        {
          icon: MessageSquare,
          title: 'Referral Management',
          description: 'Seamless communication and tracking system for patient referrals.',
          highlights: ['Automated notifications', 'Progress tracking', 'Outcome reporting']
        }
      ]
    },
    {
      title: 'Patient Engagement',
      description: 'Modern patient portal and mobile solutions for enhanced patient experience',
      icon: Smartphone,
      color: 'blue',
      features: [
        {
          icon: Smartphone,
          title: 'Patient Portal & Mobile App',
          description: 'Comprehensive patient portal with online booking and medical record access.',
          highlights: ['Online appointments', 'Medical records access', 'Secure messaging']
        },
        {
          icon: Globe,
          title: 'Multi-Language Support',
          description: 'Support for 9 Indian regional languages for patient comfort and accessibility.',
          highlights: ['Hindi, Tamil, Telugu', 'Bengali, Marathi, Gujarati', 'Kannada, Malayalam, Punjabi']
        },
        {
          icon: MessageSquare,
          title: 'Telemedicine',
          description: 'Integrated telemedicine capabilities for remote consultations and follow-ups.',
          highlights: ['Video consultations', 'Remote monitoring', 'Digital prescriptions']
        },
        {
          icon: Activity,
          title: 'Patient Education',
          description: 'AI-powered personalized patient education materials and resources.',
          highlights: ['Condition-specific content', 'Visual aids', 'Progress tracking']
        }
      ]
    },
    {
      title: 'Compliance & Security',
      description: 'Robust security framework with full Indian healthcare compliance',
      icon: Shield,
      color: 'red',
      features: [
        {
          icon: Award,
          title: 'ABDM Compliance',
          description: 'Full Ayushman Bharat Digital Mission compliance with ABHA ID integration.',
          highlights: ['ABHA ID creation', 'HIP/HIU certification', 'FHIR APIs']
        },
        {
          icon: Shield,
          title: 'NABH Integration',
          description: 'Automated reporting and monitoring for NABH quality accreditation standards.',
          highlights: ['Quality indicators', 'Automated reports', 'Compliance dashboard']
        },
        {
          icon: Lock,
          title: 'Data Privacy & Security',
          description: 'Comprehensive security framework compliant with DPDP Act 2023.',
          highlights: ['End-to-end encryption', 'RBAC with MFA', 'Audit trails']
        },
        {
          icon: Activity,
          title: 'Consent Management',
          description: 'Transparent consent management system for data collection and sharing.',
          highlights: ['DPDP Act compliance', 'Granular permissions', 'Audit logs']
        }
      ]
    }
  ]

  const interactiveDemos = [
    {
      feature: 'ai-diagnostics',
      title: 'AI Diagnostic Assistant',
      description: 'Experience real-time retinal image analysis with our AI-powered diagnostic tools'
    },
    {
      feature: 'voice-dictation',
      title: 'Voice-to-Text Dictation',
      description: 'See how voice dictation works with medical terminology and Indian accents'
    },
    {
      feature: 'surgical-planning',
      title: 'Surgical Planning Tools',
      description: 'Interactive IOL power calculation with advanced formulas'
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      primary: 'bg-primary-100 text-primary-600 border-primary-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    }
    return colors[color as keyof typeof colors] || colors.primary
  }

  return (
    <div className="gradient-bg min-h-screen">
      {/* Header */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-gradient">Feature Suite</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Project Iris delivers a complete ecosystem of advanced features designed specifically 
              for modern ophthalmology practices in the Indian healthcare landscape.
            </p>
          </motion.div>

          {/* Interactive Demos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Interactive Demonstrations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience our key features through interactive demonstrations
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {interactiveDemos.map((demo, index) => (
                <motion.div
                  key={demo.feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                >
                  <InteractiveFeatureDemo
                    feature={demo.feature}
                    title={demo.title}
                    description={demo.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Feature Categories */}
          <div className="space-y-16 mb-20">
            {featureCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${getColorClasses(category.color)} mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">{category.description}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (featureIndex * 0.05) }}
                      className="card p-6 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg ${getColorClasses(category.color)}`}>
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                          <p className="text-gray-600 mb-4">{feature.description}</p>
                          <div className="space-y-2">
                            {feature.highlights.map((highlight, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                                <span className="text-sm text-gray-700">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <FeatureComparison />
          </motion.div>

          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-20"
          >
            <ROICalculator />
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <TechnologyStack />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FeaturesPage