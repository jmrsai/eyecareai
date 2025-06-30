import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Calculator, 
  TrendingUp, 
  Clock, 
  Users, 
  DollarSign,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const ROICalculator: React.FC = () => {
  const [inputs, setInputs] = useState({
    patientsPerDay: 50,
    averageConsultationFee: 500,
    workingDaysPerMonth: 25,
    currentEMRCost: 15000,
    staffCount: 5,
    averageStaffSalary: 25000
  })

  const [results, setResults] = useState({
    monthlyRevenue: 0,
    timeSavings: 0,
    costSavings: 0,
    roiPercentage: 0,
    paybackPeriod: 0
  })

  const calculateROI = () => {
    const monthlyRevenue = inputs.patientsPerDay * inputs.averageConsultationFee * inputs.workingDaysPerMonth
    const timeSavingsPerPatient = 5 // minutes saved per patient
    const totalTimeSavingsPerMonth = inputs.patientsPerDay * timeSavingsPerPatient * inputs.workingDaysPerMonth
    const additionalPatientsPerMonth = Math.floor(totalTimeSavingsPerMonth / 30) // assuming 30 min per additional patient
    const additionalRevenue = additionalPatientsPerMonth * inputs.averageConsultationFee
    
    const staffEfficiencyGain = 0.2 // 20% efficiency gain
    const staffCostSavings = inputs.staffCount * inputs.averageStaffSalary * staffEfficiencyGain
    
    const totalMonthlySavings = additionalRevenue + staffCostSavings
    const projectIrisCost = 25000 // monthly cost
    const netMonthlySavings = totalMonthlySavings - projectIrisCost + inputs.currentEMRCost
    
    const roiPercentage = (netMonthlySavings / projectIrisCost) * 100
    const paybackPeriod = projectIrisCost / netMonthlySavings

    setResults({
      monthlyRevenue,
      timeSavings: totalTimeSavingsPerMonth,
      costSavings: totalMonthlySavings,
      roiPercentage,
      paybackPeriod
    })
  }

  React.useEffect(() => {
    calculateROI()
  }, [inputs])

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({ ...prev, [field]: value }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount)
  }

  return (
    <div className="card p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
          <Calculator className="h-8 w-8 text-primary-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          ROI <span className="text-gradient">Calculator</span>
        </h2>
        <p className="text-gray-600">
          Calculate the return on investment for implementing Project Iris in your practice
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Practice Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Patients per day
              </label>
              <input
                type="number"
                value={inputs.patientsPerDay}
                onChange={(e) => handleInputChange('patientsPerDay', parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average consultation fee (₹)
              </label>
              <input
                type="number"
                value={inputs.averageConsultationFee}
                onChange={(e) => handleInputChange('averageConsultationFee', parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Working days per month
              </label>
              <input
                type="number"
                value={inputs.workingDaysPerMonth}
                onChange={(e) => handleInputChange('workingDaysPerMonth', parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current EMR cost per month (₹)
              </label>
              <input
                type="number"
                value={inputs.currentEMRCost}
                onChange={(e) => handleInputChange('currentEMRCost', parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of staff members
              </label>
              <input
                type="number"
                value={inputs.staffCount}
                onChange={(e) => handleInputChange('staffCount', parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average staff salary per month (₹)
              </label>
              <input
                type="number"
                value={inputs.averageStaffSalary}
                onChange={(e) => handleInputChange('averageStaffSalary', parseInt(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">ROI Analysis</h3>
          
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border border-green-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="text-sm text-green-700">Monthly ROI</p>
                    <p className="text-2xl font-bold text-green-800">
                      {results.roiPercentage.toFixed(1)}%
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200"
            >
              <div className="flex items-center space-x-3">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="text-sm text-blue-700">Monthly Cost Savings</p>
                  <p className="text-xl font-bold text-blue-800">
                    {formatCurrency(results.costSavings)}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200"
            >
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="text-sm text-purple-700">Time Saved per Month</p>
                  <p className="text-xl font-bold text-purple-800">
                    {Math.floor(results.timeSavings / 60)} hours
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border border-orange-200"
            >
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-orange-600" />
                <div>
                  <p className="text-sm text-orange-700">Payback Period</p>
                  <p className="text-xl font-bold text-orange-800">
                    {results.paybackPeriod.toFixed(1)} months
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits Summary */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3">Key Benefits</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">5 minutes saved per patient consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">20% improvement in staff efficiency</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">Reduced administrative overhead</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm text-gray-700">Enhanced patient satisfaction</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn-primary">
              Schedule ROI Discussion
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ROICalculator