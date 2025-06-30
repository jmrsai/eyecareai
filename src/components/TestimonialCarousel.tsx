import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Rajesh Sharma',
      title: 'Senior Ophthalmologist',
      hospital: 'Apollo Hospitals, Mumbai',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      quote: 'Project Iris has revolutionized our practice. The AI-powered diagnostic tools have improved our accuracy by 40%, and the ABDM integration makes patient data management seamless.',
      specialty: 'Retinal Specialist'
    },
    {
      id: 2,
      name: 'Dr. Priya Patel',
      title: 'Consultant Ophthalmologist',
      hospital: 'Sankara Nethralaya, Chennai',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The voice dictation feature with Indian accent support is a game-changer. I can now complete patient documentation 60% faster, allowing me to focus more on patient care.',
      specialty: 'Glaucoma Specialist'
    },
    {
      id: 3,
      name: 'Dr. Arjun Singh',
      title: 'Director of Ophthalmology',
      hospital: 'AIIMS, New Delhi',
      image: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The surgical planning module with advanced IOL calculations has significantly improved our surgical outcomes. The AR overlay feature is particularly impressive.',
      specialty: 'Cataract & Refractive Surgery'
    },
    {
      id: 4,
      name: 'Dr. Sunita Devi',
      title: 'Chief Medical Officer',
      hospital: 'LV Prasad Eye Institute, Hyderabad',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The multi-language patient portal has dramatically improved patient engagement. Our patient satisfaction scores have increased by 35% since implementation.',
      specialty: 'Pediatric Ophthalmology'
    },
    {
      id: 5,
      name: 'Dr. Mohammed Ali',
      title: 'Senior Consultant',
      hospital: 'Narayana Nethralaya, Bangalore',
      image: 'https://images.pexels.com/photos/5452274/pexels-photo-5452274.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      quote: 'The NABH compliance features and automated reporting have streamlined our accreditation process. The security framework gives us complete confidence in data protection.',
      specialty: 'Cornea & External Diseases'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="card p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          What Healthcare Professionals <span className="text-gradient">Say</span>
        </h2>
        <p className="text-gray-600">
          Trusted by leading ophthalmologists across India
        </p>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl border border-primary-100"
          >
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-200" />
                  <p className="text-gray-700 text-lg italic leading-relaxed pl-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-600 font-medium">
                    {testimonials[currentIndex].title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].hospital}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                    {testimonials[currentIndex].specialty}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">500+</div>
          <div className="text-sm text-gray-600">Healthcare Professionals</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">98%</div>
          <div className="text-sm text-gray-600">Satisfaction Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary-600">40%</div>
          <div className="text-sm text-gray-600">Efficiency Improvement</div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCarousel