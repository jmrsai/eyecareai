import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Eye,
  Brain,
  Shield,
  Smartphone,
  Zap,
  Globe
} from 'lucide-react'

const ProjectPlanPage: React.FC = () => {
  const [expandedPhases, setExpandedPhases] = useState<number[]>([0])

  const togglePhase = (phaseIndex: number) => {
    setExpandedPhases(prev => 
      prev.includes(phaseIndex) 
        ? prev.filter(i => i !== phaseIndex)
        : [...prev, phaseIndex]
    )
  }

  const phases = [
    {
      id: 1,
      title: 'Core Clinical Module (Foundation)',
      icon: Eye,
      status: 'In Progress',
      duration: '6 months',
      description: 'Establish foundational clinical functionalities, specialized EMR templating, imaging integration, and surgical planning tools.',
      tasks: [
        {
          title: 'Develop Ophthalmology-Specific EMR Templating Engine',
          subtasks: [
            'Create customizable templates for Cataracts, Glaucoma, Diabetic Retinopathy, and AMD',
            'Integrate voice-to-text dictation with medical terminology support',
            'Implement SNOMED CT coding for interoperability'
          ]
        },
        {
          title: 'Build Digital Imaging & Diagnostics Integration Suite',
          subtasks: [
            'Implement DICOM/PACS and VNA compatibility',
            'Integrate with diagnostic devices (OCT, Fundus Cameras, etc.)',
            'Develop image comparison and annotation tools',
            'Implement secure cloud storage for diagnostic images'
          ]
        },
        {
          title: 'Create Surgical Planning & Management Module',
          subtasks: [
            'Design pre-operative checklists and consent management',
            'Integrate IOL power calculation formulas',
            'Develop surgical scheduling and resource allocation'
          ]
        },
        {
          title: 'Implement Secure E-Prescribing Module',
          subtasks: [
            'Integrate comprehensive drug database with Indian medications',
            'Implement dosage calculation and allergy alerts'
          ]
        }
      ]
    },
    {
      id: 2,
      title: 'Administrative & Operational Module',
      icon: Smartphone,
      status: 'Planning',
      duration: '4 months',
      description: 'Streamline practice management, billing, and patient engagement for enhanced operational efficiency.',
      tasks: [
        {
          title: 'Develop Integrated Practice Management System',
          subtasks: [
            'Build patient registration and multi-doctor scheduling',
            'Implement automated appointment reminders (SMS, Email, WhatsApp)',
            'Develop referral management system'
          ]
        },
        {
          title: 'Create Billing, Claims, and Optical Inventory Management',
          subtasks: [
            'Automate superbill generation with Indian ICD-10 and CPT codes',
            'Ensure GST compliance and government scheme integration',
            'Implement optical inventory management',
            'Develop claims management with tracking'
          ]
        },
        {
          title: 'Develop Patient Portal & Mobile App',
          subtasks: [
            'Enable online appointment booking and medical records access',
            'Implement multi-language support for Indian regional languages',
            'Integrate telemedicine capabilities'
          ]
        }
      ]
    },
    {
      id: 3,
      title: 'Advanced Intelligence Layer (AI & Analytics)',
      icon: Brain,
      status: 'Research',
      duration: '8 months',
      description: 'Leverage AI for enhanced diagnostics, clinical decision support, and operational insights.',
      tasks: [
        {
          title: 'Integrate AI-Powered Diagnostic Tools',
          subtasks: [
            'Deploy algorithms for automated retinal disease detection',
            'Build predictive analytics for disease progression',
            'Implement AI-driven anomaly detection in scans'
          ]
        },
        {
          title: 'Develop Generative AI Clinical Assistant ("EyeGPT")',
          subtasks: [
            'Implement AI Scribe for clinical note generation',
            'Create natural language query for data retrieval',
            'Develop AI-powered patient education content'
          ]
        },
        {
          title: 'Build AI-Powered Surgical Video Analysis',
          subtasks: [
            'Analyze surgical videos for skill assessment',
            'Integrate with surgical microscopes for real-time AI assistance'
          ]
        }
      ]
    },
    {
      id: 4,
      title: 'Immersive & Cutting-Edge Technologies',
      icon: Zap,
      status: 'Future',
      duration: '6 months',
      description: 'Explore next-generation technologies for enhanced clinical and patient experiences.',
      tasks: [
        {
          title: 'Develop AR-Assisted Surgical Overlay Integration',
          subtasks: [
            'Create AR projection of pre-operative data onto surgical views',
            'Integrate with compatible surgical equipment'
          ]
        },
        {
          title: 'Create VR Module for Clinical Applications',
          subtasks: [
            'Design VR-based visual field testing software',
            'Implement gamified VR vision therapy programs',
            'Develop VR simulations for surgical training'
          ]
        },
        {
          title: 'Design Ophthalmic Digital Twin Prototype',
          subtasks: [
            'Create virtual representation of patient\'s eye and visual system'
          ]
        }
      ]
    },
    {
      id: 5,
      title: 'Indian Healthcare Ecosystem Compliance',
      icon: Shield,
      status: 'Ongoing',
      duration: '4 months',
      description: 'Ensure full compliance with Indian healthcare regulations and implement robust data privacy measures.',
      tasks: [
        {
          title: 'Achieve Full ABDM Compliance',
          subtasks: [
            'Integrate ABHA ID creation and verification',
            'Configure as compliant HIP and HIU',
            'Implement secure FHIR-compliant APIs'
          ]
        },
        {
          title: 'Build Automated NABH Reporting Module',
          subtasks: [
            'Develop automated NABH-compliant report generation',
            'Implement continuous monitoring for compliance metrics'
          ]
        },
        {
          title: 'Implement Data Privacy and Security Framework',
          subtasks: [
            'Integrate RBAC with MFA for all users',
            'Implement end-to-end encryption (AES-256, TLS 1.3)',
            'Develop comprehensive audit trail system',
            'Design DPDP Act 2023 compliant consent management'
          ]
        }
      ]
    },
    {
      id: 6,
      title: 'Deployment & Go-Live',
      icon: Globe,
      status: 'Future',
      duration: '3 months',
      description: 'Successfully deploy the platform and ensure smooth transition for initial users.',
      tasks: [
        {
          title: 'Finalize Cloud Infrastructure',
          subtasks: [
            'Optimize cloud resource allocation',
            'Implement disaster recovery and business continuity plans'
          ]
        },
        {
          title: 'Conduct Beta Testing',
          subtasks: [
            'Onboard beta testers and provide training',
            'Collect feedback and iterate on features'
          ]
        },
        {
          title: 'Final Launch and Marketing',
          subtasks: [
            'Prepare user manuals and support documentation',
            'Execute marketing strategy for Indian market',
            'Establish customer support infrastructure'
          ]
        }
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-green-100 text-green-800'
      case 'Planning': return 'bg-yellow-100 text-yellow-800'
      case 'Research': return 'bg-blue-100 text-blue-800'
      case 'Ongoing': return 'bg-purple-100 text-purple-800'
      case 'Future': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'In Progress': return CheckCircle
      case 'Planning': return Clock
      case 'Research': return Brain
      case 'Ongoing': return AlertCircle
      case 'Future': return Clock
      default: return Clock
    }
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
              Project <span className="text-gradient">Development Plan</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A comprehensive roadmap for developing the next-generation ophthalmology EMR platform 
              with AI-powered features and full Indian healthcare compliance.
            </p>
          </motion.div>

          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Goal</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To design, develop, and deploy a comprehensive, AI-powered, cloud-native ophthalmology EMR 
              and practice management software. The platform will be hyper-integrated, supporting the latest 
              advancements in clinical care, surgical assistance, and patient engagement, with a specific focus 
              on compliance with the Indian healthcare ecosystem (ABDM & NABH).
            </p>
          </motion.div>

          {/* Development Phases */}
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const StatusIcon = getStatusIcon(phase.status)
              const isExpanded = expandedPhases.includes(index)
              
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card overflow-hidden"
                >
                  {/* Phase Header */}
                  <div 
                    className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => togglePhase(index)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary-100 rounded-lg">
                          <phase.icon className="h-6 w-6 text-primary-600" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">
                              Phase {phase.id}: {phase.title}
                            </h3>
                            <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(phase.status)}`}>
                              {phase.status}
                            </span>
                          </div>
                          <p className="text-gray-600">{phase.description}</p>
                          <div className="flex items-center space-x-4 mt-2">
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <StatusIcon className="h-4 w-4" />
                              <span>{phase.status}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>{phase.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Phase Details */}
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Tasks & Milestones</h4>
                        <div className="space-y-6">
                          {phase.tasks.map((task, taskIndex) => (
                            <div key={taskIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                              <h5 className="font-semibold text-gray-900 mb-3">{task.title}</h5>
                              <ul className="space-y-2">
                                {task.subtasks.map((subtask, subtaskIndex) => (
                                  <li key={subtaskIndex} className="flex items-start space-x-2">
                                    <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{subtask}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Ongoing Considerations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="card p-8 mt-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">User Experience & Design</h3>
                <p className="text-gray-700 text-sm">Prioritize intuitive, clean interface across all modules, minimizing clicks and maximizing user satisfaction.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Scalability</h3>
                <p className="text-gray-700 text-sm">Design architecture to seamlessly scale for growing users, clinics, and data volume.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Interoperability</h3>
                <p className="text-gray-700 text-sm">Ensure integration with healthcare systems through open APIs and industry standards (HL7, FHIR).</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ethical AI Implementation</h3>
                <p className="text-gray-700 text-sm">Establish guidelines for ethical AI use, including bias detection and transparent decision-making.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ProjectPlanPage