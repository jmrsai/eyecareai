import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Eye, 
  Calendar, 
  FileText, 
  Users, 
  Brain,
  Camera,
  Stethoscope,
  Activity,
  ChevronRight,
  Monitor,
  Smartphone
} from 'lucide-react'

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState('dashboard')

  const demoSections = [
    {
      id: 'dashboard',
      title: 'Clinical Dashboard',
      icon: Monitor,
      description: 'Comprehensive overview of patient data, appointments, and clinical insights',
      features: ['Real-time patient queue', 'AI-powered alerts', 'Quick access to records', 'Performance metrics']
    },
    {
      id: 'emr',
      title: 'EMR Templates',
      icon: FileText,
      description: 'Specialized ophthalmology templates with voice-to-text dictation',
      features: ['Condition-specific templates', 'Voice dictation', 'SNOMED CT coding', 'Structured data entry']
    },
    {
      id: 'imaging',
      title: 'Imaging Integration',
      icon: Camera,
      description: 'Seamless integration with diagnostic devices and advanced image analysis',
      features: ['DICOM compatibility', 'Real-time annotations', 'Image comparison', 'AI-powered analysis']
    },
    {
      id: 'ai',
      title: 'AI Diagnostics',
      icon: Brain,
      description: 'AI-powered diagnostic tools for automated disease detection and grading',
      features: ['Retinal disease detection', 'Severity grading', 'Predictive analytics', 'Risk assessment']
    },
    {
      id: 'scheduling',
      title: 'Smart Scheduling',
      icon: Calendar,
      description: 'Intelligent appointment scheduling with automated reminders',
      features: ['Drag-and-drop interface', 'Conflict detection', 'Multi-channel reminders', 'Resource optimization']
    },
    {
      id: 'mobile',
      title: 'Patient Portal',
      icon: Smartphone,
      description: 'Mobile-first patient portal with multi-language support',
      features: ['Online booking', 'Medical records access', 'Telemedicine', 'Multi-language UI']
    }
  ]

  const mockData = {
    dashboard: {
      title: 'Clinical Dashboard Overview',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-sm text-gray-600">Today's Appointments</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">18</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">3</div>
              <div className="text-sm text-gray-600">AI Alerts</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">156</div>
              <div className="text-sm text-gray-600">Active Patients</div>
            </div>
          </div>
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Recent AI Insights</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 p-2 bg-red-50 rounded">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Patient #1234: Possible diabetic retinopathy detected</span>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-yellow-50 rounded">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Patient #5678: Follow-up recommended for glaucoma monitoring</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    emr: {
      title: 'Ophthalmology EMR Template',
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Cataract Examination Template</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Visual Acuity (OD)</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="20/40" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Visual Acuity (OS)</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="20/30" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IOP (OD)</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="16 mmHg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">IOP (OS)</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="14 mmHg" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Clinical Notes</label>
              <div className="flex items-center space-x-2 mb-2">
                <button className="flex items-center space-x-1 text-primary-600 text-sm">
                  <Eye className="h-4 w-4" />
                  <span>Start Voice Dictation</span>
                </button>
              </div>
              <textarea 
                className="w-full p-2 border rounded h-24" 
                placeholder="Dense nuclear sclerotic cataract noted in right eye. Patient reports decreased vision and glare sensitivity..."
              />
            </div>
          </div>
        </div>
      )
    },
    imaging: {
      title: 'Diagnostic Imaging Integration',
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Fundus Photography Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Fundus Image - Right Eye</p>
                    <p className="text-sm text-gray-500">Captured: 2025-01-15 10:30 AM</p>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>AI Analysis:</span>
                    <span className="text-green-600">Normal</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cup-to-Disc Ratio:</span>
                    <span>0.3</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">OCT Scan - Macula</p>
                    <p className="text-sm text-gray-500">Captured: 2025-01-15 10:35 AM</p>
                  </div>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Central Thickness:</span>
                    <span>245 μm</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>AI Analysis:</span>
                    <span className="text-yellow-600">Mild Thinning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    ai: {
      title: 'AI-Powered Diagnostic Assistant',
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Diabetic Retinopathy Screening</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium">AI Confidence: 94%</span>
                </div>
                <span className="text-green-600 font-semibold">No DR Detected</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Analysis Results</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Microaneurysms: Not detected</li>
                    <li>• Hemorrhages: Not detected</li>
                    <li>• Hard exudates: Not detected</li>
                    <li>• Soft exudates: Not detected</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Recommendations</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Continue annual screening</li>
                    <li>• Maintain glycemic control</li>
                    <li>• Monitor blood pressure</li>
                    <li>• Next screening: Jan 2026</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    scheduling: {
      title: 'Smart Appointment Scheduling',
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Today's Schedule - Dr. Sharma</h3>
            <div className="space-y-2">
              {[
                { time: '09:00', patient: 'Rajesh Kumar', type: 'Routine Check-up', status: 'completed' },
                { time: '09:30', patient: 'Priya Patel', type: 'Cataract Consultation', status: 'completed' },
                { time: '10:00', patient: 'Mohammed Ali', type: 'Glaucoma Follow-up', status: 'in-progress' },
                { time: '10:30', patient: 'Sunita Devi', type: 'Diabetic Screening', status: 'waiting' },
                { time: '11:00', patient: 'Arjun Singh', type: 'Post-op Check', status: 'scheduled' },
              ].map((appointment, index) => (
                <div key={index} className={`flex items-center justify-between p-3 rounded ${
                  appointment.status === 'completed' ? 'bg-green-50' :
                  appointment.status === 'in-progress' ? 'bg-blue-50' :
                  appointment.status === 'waiting' ? 'bg-yellow-50' : 'bg-gray-50'
                }`}>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm">{appointment.time}</span>
                    <div>
                      <div className="font-medium">{appointment.patient}</div>
                      <div className="text-sm text-gray-600">{appointment.type}</div>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                    appointment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                    appointment.status === 'waiting' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {appointment.status.replace('-', ' ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    mobile: {
      title: 'Patient Mobile Portal',
      content: (
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-4">
            <h3 className="font-semibold mb-3">Patient Dashboard - Mobile View</h3>
            <div className="max-w-sm mx-auto bg-gray-100 rounded-lg p-4">
              <div className="bg-white rounded-lg p-4 space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="h-8 w-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold">राजेश कुमार</h4>
                  <p className="text-sm text-gray-600">Patient ID: #1234</p>
                </div>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-between p-3 bg-primary-50 rounded-lg">
                    <span className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">अपॉइंटमेंट बुक करें</span>
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center space-x-2">
                      <FileText className="h-4 w-4" />
                      <span className="text-sm">मेडिकल रिकॉर्ड</span>
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="flex items-center space-x-2">
                      <Activity className="h-4 w-4" />
                      <span className="text-sm">टेली-कंसल्टेशन</span>
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
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
              Interactive <span className="text-gradient">Platform Demo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Explore the comprehensive features of Project Iris through our interactive demonstrations. 
              See how our AI-powered platform transforms ophthalmology practice management.
            </p>
          </motion.div>

          {/* Demo Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          >
            {demoSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveDemo(section.id)}
                className={`p-4 rounded-lg text-center transition-all duration-200 ${
                  activeDemo === section.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                <section.icon className="h-6 w-6 mx-auto mb-2" />
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </motion.div>

          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Demo Description */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="card p-6 sticky top-24">
                {(() => {
                  const currentSection = demoSections.find(s => s.id === activeDemo)
                  const IconComponent = currentSection?.icon
                  return (
                    <>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          {IconComponent && <IconComponent className="h-6 w-6 text-primary-600" />}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{currentSection?.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{currentSection?.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {currentSection?.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )
                })()}
              </div>
            </motion.div>

            {/* Demo Interface */}
            <motion.div
              key={activeDemo}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {mockData[activeDemo as keyof typeof mockData].title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Live Demo</span>
                  </div>
                </div>
                {mockData[activeDemo as keyof typeof mockData].content}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience Project Iris?</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Schedule a personalized demonstration with our team to see how Project Iris 
                can transform your ophthalmology practice with AI-powered features and seamless workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  <Play className="mr-2 h-5 w-5" />
                  Schedule Live Demo
                </button>
                <button className="btn-secondary">
                  Request Trial Access
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DemoPage