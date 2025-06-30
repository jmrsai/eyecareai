import React from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Award, 
  Lock, 
  FileText, 
  CheckCircle, 
  Globe, 
  Users, 
  Eye,
  AlertTriangle,
  Database,
  Key,
  Activity
} from 'lucide-react'

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      title: 'Ayushman Bharat Digital Mission (ABDM)',
      icon: Globe,
      status: 'Fully Compliant',
      description: 'Complete integration with India\'s national digital health ecosystem',
      color: 'green',
      features: [
        'ABHA ID creation and verification',
        'Health Information Provider (HIP) certification',
        'Health Information User (HIU) certification',
        'FHIR-compliant data exchange APIs',
        'Secure consent management',
        'Interoperability with ABDM ecosystem'
      ],
      benefits: [
        'Seamless patient data portability',
        'National health record integration',
        'Government scheme compatibility',
        'Standardized healthcare data exchange'
      ]
    },
    {
      title: 'National Accreditation Board for Hospitals (NABH)',
      icon: Award,
      status: 'Automated Reporting',
      description: 'Comprehensive quality management and automated compliance reporting',
      color: 'blue',
      features: [
        'Automated quality indicator tracking',
        'Real-time compliance monitoring',
        'NABH-compliant report generation',
        'Quality metrics dashboard',
        'Continuous improvement tracking',
        'Audit trail maintenance'
      ],
      benefits: [
        'Streamlined accreditation process',
        'Reduced manual reporting effort',
        'Improved quality outcomes',
        'Enhanced patient safety measures'
      ]
    },
    {
      title: 'Digital Personal Data Protection Act (DPDP) 2023',
      icon: Lock,
      status: 'Privacy by Design',
      description: 'Comprehensive data protection framework ensuring patient privacy rights',
      color: 'purple',
      features: [
        'Granular consent management',
        'Data minimization principles',
        'Right to erasure implementation',
        'Data portability features',
        'Breach notification system',
        'Privacy impact assessments'
      ],
      benefits: [
        'Enhanced patient trust',
        'Legal compliance assurance',
        'Reduced regulatory risk',
        'Transparent data handling'
      ]
    },
    {
      title: 'Healthcare Information Security',
      icon: Shield,
      status: 'Enterprise Grade',
      description: 'Multi-layered security framework protecting sensitive healthcare data',
      color: 'red',
      features: [
        'End-to-end encryption (AES-256)',
        'Transport Layer Security (TLS 1.3)',
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Comprehensive audit logging',
        'Regular security assessments'
      ],
      benefits: [
        'Data breach prevention',
        'Regulatory compliance',
        'Patient confidentiality',
        'System integrity assurance'
      ]
    }
  ]

  const securityFeatures = [
    {
      icon: Key,
      title: 'Advanced Authentication',
      description: 'Multi-factor authentication with biometric support and session management'
    },
    {
      icon: Database,
      title: 'Data Encryption',
      description: 'AES-256 encryption at rest and TLS 1.3 for data in transit'
    },
    {
      icon: Activity,
      title: 'Audit Trails',
      description: 'Comprehensive logging of all data access and modifications'
    },
    {
      icon: Users,
      title: 'Access Control',
      description: 'Granular role-based permissions with principle of least privilege'
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection',
      description: 'Real-time monitoring and automated threat response systems'
    },
    {
      icon: FileText,
      title: 'Compliance Reporting',
      description: 'Automated generation of compliance reports and documentation'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Fully Compliant': return 'bg-green-100 text-green-800 border-green-200'
      case 'Automated Reporting': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Privacy by Design': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Enterprise Grade': return 'bg-red-100 text-red-800 border-red-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      green: 'bg-green-100 text-green-600 border-green-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      red: 'bg-red-100 text-red-600 border-red-200'
    }
    return colors[color as keyof typeof colors] || colors.green
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
              Compliance & <span className="text-gradient">Security Framework</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Project Iris is built with comprehensive compliance and security measures, 
              ensuring full adherence to Indian healthcare regulations and international best practices.
            </p>
          </motion.div>

          {/* Compliance Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-8 mb-16"
          >
            <div className="text-center mb-8">
              <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy by Design</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Our platform is architected from the ground up with privacy and security as core principles, 
                not afterthoughts. Every feature is designed to protect patient data while enabling 
                seamless healthcare delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">ABDM Ready</h3>
                <p className="text-sm text-gray-600">Full integration with national health ecosystem</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">NABH Compatible</h3>
                <p className="text-sm text-gray-600">Automated quality reporting and monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">DPDP Act 2023</h3>
                <p className="text-sm text-gray-600">Complete data protection compliance</p>
              </div>
              <div className="text-center">
                <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-gray-900">Enterprise Security</h3>
                <p className="text-sm text-gray-600">Bank-grade security infrastructure</p>
              </div>
            </div>
          </motion.div>

          {/* Compliance Frameworks */}
          <div className="space-y-12">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={framework.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-lg ${getColorClasses(framework.color)}`}>
                    <framework.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{framework.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(framework.status)}`}>
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-6">{framework.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
                        <ul className="space-y-2">
                          {framework.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Benefits</h4>
                        <ul className="space-y-2">
                          {framework.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Architecture</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Multi-layered security approach protecting your practice and patient data 
                with enterprise-grade security measures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.05) }}
                  className="card p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="card p-8 mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Compliance Implementation Timeline</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phase 5: Compliance Framework Implementation</h3>
                  <p className="text-gray-600 text-sm">Complete ABDM, NABH, and DPDP Act compliance integration</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Ongoing: Security Monitoring</h3>
                  <p className="text-gray-600 text-sm">Continuous security assessments and compliance monitoring</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Future: Certification Maintenance</h3>
                  <p className="text-gray-600 text-sm">Regular audits and certification renewals</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CompliancePage