import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Eye, 
  Brain, 
  Camera,
  Activity,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2
} from 'lucide-react'

interface InteractiveFeatureDemoProps {
  feature: string
  title: string
  description: string
}

const InteractiveFeatureDemo: React.FC<InteractiveFeatureDemoProps> = ({ 
  feature, 
  title, 
  description 
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [progress, setProgress] = useState(0)

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
    if (!isPlaying) {
      // Simulate progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsPlaying(false)
            return 0
          }
          return prev + 2
        })
      }, 100)
    }
  }

  const renderFeatureContent = () => {
    switch (feature) {
      case 'ai-diagnostics':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
              <div className="text-center">
                <Eye className="h-16 w-16 text-primary-600 mx-auto mb-2" />
                <p className="text-gray-600">Retinal Image Analysis</p>
                {isPlaying && (
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-100"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Analyzing... {progress}%</p>
                  </div>
                )}
              </div>
            </div>
            {progress > 50 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4"
              >
                <h4 className="font-semibold text-green-800 mb-2">AI Analysis Results</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• No diabetic retinopathy detected</li>
                  <li>• Cup-to-disc ratio: 0.3 (Normal)</li>
                  <li>• Confidence level: 94%</li>
                </ul>
              </motion.div>
            )}
          </div>
        )
      
      case 'voice-dictation':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 h-48">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Voice Dictation</h4>
                <button
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-2 rounded-full ${
                    isRecording ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {isRecording ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                </button>
              </div>
              <div className="space-y-2">
                {isRecording && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-gray-600"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span>Recording...</span>
                    </div>
                    <p className="italic">
                      "Patient presents with decreased vision in right eye. Visual acuity 20/40 OD, 20/20 OS. 
                      Dense nuclear sclerotic cataract noted..."
                    </p>
                  </motion.div>
                )}
                {!isRecording && (
                  <div className="text-sm text-gray-500">
                    Click the microphone to start voice dictation
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      
      case 'surgical-planning':
        return (
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg p-4 h-48">
              <h4 className="font-semibold mb-4">IOL Power Calculation</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Axial Length</label>
                  <input type="text" className="w-full p-2 border rounded text-sm" value="23.45 mm" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">K1/K2</label>
                  <input type="text" className="w-full p-2 border rounded text-sm" value="43.2/44.1 D" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ACD</label>
                  <input type="text" className="w-full p-2 border rounded text-sm" value="3.15 mm" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target</label>
                  <input type="text" className="w-full p-2 border rounded text-sm" value="-0.25 D" readOnly />
                </div>
              </div>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-blue-50 rounded border border-blue-200"
                >
                  <p className="text-sm font-semibold text-blue-800">Recommended IOL Power: 21.5 D</p>
                  <p className="text-xs text-blue-600">Barrett Universal II Formula</p>
                </motion.div>
              )}
            </div>
          </div>
        )
      
      default:
        return (
          <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <Activity className="h-12 w-12 mx-auto mb-2" />
              <p>Interactive Demo</p>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePlay}
            className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button
            onClick={() => setProgress(0)}
            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      {renderFeatureContent()}
    </div>
  )
}

export default InteractiveFeatureDemo