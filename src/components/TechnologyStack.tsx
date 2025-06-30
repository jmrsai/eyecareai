import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Database, 
  Shield, 
  Cloud, 
  Smartphone, 
  Brain,
  ChevronRight,
  ExternalLink
} from 'lucide-react'

const TechnologyStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const technologies = {
    frontend: {
      title: 'Frontend & User Experience',
      icon: Code,
      color: 'blue',
      description: 'Modern, responsive interfaces built with cutting-edge web technologies',
      stack: [
        { name: 'React 18', description: 'Latest React with concurrent features', version: '18.2.0' },
        { name: 'TypeScript', description: 'Type-safe development', version: '5.2.2' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework', version: '3.3.6' },
        { name: 'Framer Motion', description: 'Production-ready motion library', version: '10.16.16' },
        { name: 'Vite', description: 'Next generation frontend tooling', version: '5.0.8' },
        { name: 'PWA', description: 'Progressive Web App capabilities', version: 'Latest' }
      ]
    },
    backend: {
      title: 'Backend & Infrastructure',
      icon: Database,
      color: 'green',
      description: 'Scalable, cloud-native architecture with microservices design',
      stack: [
        { name: 'Node.js', description: 'JavaScript runtime environment', version: '20.x' },
        { name: 'Express.js', description: 'Web application framework', version: '4.18.x' },
        { name: 'PostgreSQL', description: 'Advanced open source database', version: '15.x' },
        { name: 'Redis', description: 'In-memory data structure store', version: '7.x' },
        { name: 'Docker', description: 'Containerization platform', version: 'Latest' },
        { name: 'Kubernetes', description: 'Container orchestration', version: '1.28.x' }
      ]
    },
    ai: {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'purple',
      description: 'Advanced AI models for diagnostic assistance and clinical decision support',
      stack: [
        { name: 'TensorFlow', description: 'Machine learning platform', version: '2.14.x' },
        { name: 'PyTorch', description: 'Deep learning framework', version: '2.1.x' },
        { name: 'OpenCV', description: 'Computer vision library', version: '4.8.x' },
        { name: 'Hugging Face', description: 'Transformers and NLP models', version: 'Latest' },
        { name: 'ONNX', description: 'Open neural network exchange', version: '1.15.x' },
        { name: 'MLflow', description: 'ML lifecycle management', version: '2.7.x' }
      ]
    },
    mobile: {
      title: 'Mobile & Cross-Platform',
      icon: Smartphone,
      color: 'indigo',
      description: 'Native mobile experiences with cross-platform compatibility',
      stack: [
        { name: 'React Native', description: 'Cross-platform mobile development', version: '0.72.x' },
        { name: 'Expo', description: 'Platform for universal React applications', version: '49.x' },
        { name: 'Flutter', description: 'UI toolkit for mobile, web, and desktop', version: '3.13.x' },
        { name: 'Firebase', description: 'Mobile and web application platform', version: 'Latest' },
        { name: 'WebRTC', description: 'Real-time communication', version: 'Latest' },
        { name: 'Socket.io', description: 'Real-time bidirectional communication', version: '4.7.x' }
      ]
    },
    security: {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'red',
      description: 'Enterprise-grade security with comprehensive compliance frameworks',
      stack: [
        { name: 'OAuth 2.0', description: 'Authorization framework', version: 'RFC 6749' },
        { name: 'JWT', description: 'JSON Web Tokens', version: 'RFC 7519' },
        { name: 'AES-256', description: 'Advanced Encryption Standard', version: 'FIPS 197' },
        { name: 'TLS 1.3', description: 'Transport Layer Security', version: 'RFC 8446' },
        { name: 'RBAC', description: 'Role-Based Access Control', version: 'NIST' },
        { name: 'FHIR R4', description: 'Healthcare interoperability standard', version: '4.0.1' }
      ]
    },
    cloud: {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'cyan',
      description: 'Scalable cloud infrastructure with automated deployment pipelines',
      stack: [
        { name: 'AWS', description: 'Amazon Web Services cloud platform', version: 'Latest' },
        { name: 'Terraform', description: 'Infrastructure as Code', version: '1.6.x' },
        { name: 'GitHub Actions', description: 'CI/CD automation', version: 'Latest' },
        { name: 'Prometheus', description: 'Monitoring and alerting', version: '2.47.x' },
        { name: 'Grafana', description: 'Analytics and monitoring', version: '10.1.x' },
        { name: 'ELK Stack', description: 'Elasticsearch, Logstash, Kibana', version: '8.10.x' }
      ]
    }
  }

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200',
      indigo: 'bg-indigo-100 text-indigo-600 border-indigo-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      cyan: 'bg-cyan-100 text-cyan-600 border-cyan-200'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const getActiveColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white',
      green: 'bg-green-600 text-white',
      purple: 'bg-purple-600 text-white',
      indigo: 'bg-indigo-600 text-white',
      red: 'bg-red-600 text-white',
      cyan: 'bg-cyan-600 text-white'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="card p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Technology <span className="text-gradient">Stack</span>
        </h2>
        <p className="text-gray-600">
          Built with modern, enterprise-grade technologies for scalability, security, and performance
        </p>
      </div>

      {/* Category Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
        {Object.entries(technologies).map(([key, tech]) => {
          const IconComponent = tech.icon
          const isActive = activeCategory === key
          
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`p-3 rounded-lg text-center transition-all duration-200 ${
                isActive 
                  ? getActiveColorClasses(tech.color)
                  : `${getColorClasses(tech.color)} hover:shadow-md`
              }`}
            >
              <IconComponent className="h-5 w-5 mx-auto mb-1" />
              <span className="text-xs font-medium">{tech.title.split(' ')[0]}</span>
            </button>
          )
        })}
      </div>

      {/* Active Category Details */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getColorClasses(technologies[activeCategory as keyof typeof technologies].color)} mb-4`}>
            <technologies[activeCategory as keyof typeof technologies].icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {technologies[activeCategory as keyof typeof technologies].title}
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {technologies[activeCategory as keyof typeof technologies].description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies[activeCategory as keyof typeof technologies].stack.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {item.version}
                </span>
              </div>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Architecture Highlights */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Architecture Highlights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Cloud className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900">Cloud Native</h4>
            <p className="text-sm text-gray-600">Microservices architecture</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900">Security First</h4>
            <p className="text-sm text-gray-600">Zero-trust architecture</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Brain className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900">AI-Powered</h4>
            <p className="text-sm text-gray-600">Machine learning integration</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Smartphone className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900">Mobile First</h4>
            <p className="text-sm text-gray-600">Cross-platform compatibility</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnologyStack