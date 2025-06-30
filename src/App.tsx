import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ProjectPlanPage from './pages/ProjectPlanPage'
import FeaturesPage from './pages/FeaturesPage'
import CompliancePage from './pages/CompliancePage'
import DemoPage from './pages/DemoPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project-plan" element={<ProjectPlanPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/demo" element={<DemoPage />} />
      </Routes>
    </Layout>
  )
}

export default App