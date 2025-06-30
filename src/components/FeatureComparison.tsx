import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, X, Star } from 'lucide-react'

const FeatureComparison: React.FC = () => {
  const features = [
    {
      category: 'Clinical Features',
      items: [
        { name: 'Ophthalmology-specific EMR templates', iris: true, competitor1: false, competitor2: true },
        { name: 'Voice-to-text dictation with medical terminology', iris: true, competitor1: false, competitor2: false },
        { name: 'DICOM/PACS integration', iris: true, competitor1: true, competitor2: true },
        { name: 'Advanced IOL calculation formulas', iris: true, competitor1: false, competitor2: true },
        { name: 'Surgical planning and scheduling', iris: true, competitor1: false, competitor2: false },
        { name: 'E-prescribing with Indian drug database', iris: true, competitor1: false, competitor2: false },
      ]
    },
    {
      category: 'AI & Analytics',
      items: [
        { name: 'AI-powered diabetic retinopathy detection', iris: true, competitor1: false, competitor2: false },
        { name: 'Glaucoma screening algorithms', iris: true, competitor1: false, competitor2: false },
        { name: 'Predictive analytics for disease progression', iris: true, competitor1: false, competitor2: false },
        { name: 'AI clinical assistant (EyeGPT)', iris: true, competitor1: false, competitor2: false },
        { name: 'Surgical video analysis', iris: true, competitor1: false, competitor2: false },
      ]
    },
    {
      category: 'Compliance & Security',
      items: [
        { name: 'ABDM compliance and ABHA ID integration', iris: true, competitor1: false, competitor2: false },
        { name: 'NABH automated reporting', iris: true, competitor1: false, competitor2: false },
        { name: 'DPDP Act 2023 compliance', iris: true, competitor1: false, competitor2: false },
        { name: 'End-to-end encryption (AES-256)', iris: true, competitor1: true, competitor2: true },
        { name: 'Role-based access control with MFA', iris: true, competitor1: true, competitor2: false },
      ]
    },
    {
      category: 'Patient Engagement',
      items: [
        { name: 'Multi-language patient portal (9 Indian languages)', iris: true, competitor1: false, competitor2: false },
        { name: 'Telemedicine integration', iris: true, competitor1: true, competitor2: false },
        { name: 'WhatsApp appointment reminders', iris: true, competitor1: false, competitor2: false },
        { name: 'Online appointment booking', iris: true, competitor1: true, competitor2: true },
        { name: 'Patient education materials', iris: true, competitor1: false, competitor2: true },
      ]
    }
  ]

  const CheckIcon = ({ available }: { available: boolean }) => (
    available ? (
      <CheckCircle className="h-5 w-5 text-green-600" />
    ) : (
      <X className="h-5 w-5 text-gray-400" />
    )
  )

  return (
    <div className="card p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-gradient">Project Iris</span>?
        </h2>
        <p className="text-gray-600">
          Compare our comprehensive feature set with existing solutions in the market
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
              <th className="text-center py-4 px-4">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-primary-600">Project Iris</span>
                </div>
              </th>
              <th className="text-center py-4 px-4 font-semibold text-gray-600">Competitor A</th>
              <th className="text-center py-4 px-4 font-semibold text-gray-600">Competitor B</th>
            </tr>
          </thead>
          <tbody>
            {features.map((category, categoryIndex) => (
              <React.Fragment key={category.category}>
                <tr>
                  <td colSpan={4} className="py-4">
                    <h3 className="font-semibold text-gray-900 bg-gray-50 px-4 py-2 rounded">
                      {category.category}
                    </h3>
                  </td>
                </tr>
                {category.items.map((item, itemIndex) => (
                  <motion.tr
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-3 px-4 text-gray-700">{item.name}</td>
                    <td className="py-3 px-4 text-center">
                      <CheckIcon available={item.iris} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CheckIcon available={item.competitor1} />
                    </td>
                    <td className="py-3 px-4 text-center">
                      <CheckIcon available={item.competitor2} />
                    </td>
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-lg">
          <Star className="h-4 w-4" />
          <span className="text-sm font-medium">
            Project Iris offers 85% more features specifically designed for Indian ophthalmology practices
          </span>
        </div>
      </div>
    </div>
  )
}

export default FeatureComparison