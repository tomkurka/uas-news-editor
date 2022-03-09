import React from "react"

import Navbar from "../../components/navbar/Navbar"
import ArticlesPreview from "../../components/articlesPreview/ArticlesPreview"

import "./dashboardPage.scss"

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <Navbar />
      <div className="dashboard-page-container">
        <ArticlesPreview />
      </div>
    </div>
  )
}

export default DashboardPage
