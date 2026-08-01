"use client"

import { useState, useEffect } from "react"

export default function DTECLoading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-red-900/20 to-orange-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(249, 115, 22, 0.5); }
          50% { box-shadow: 0 0 40px rgba(249, 115, 22, 0.8), 0 0 60px rgba(249, 115, 22, 0.6); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=120&width=120"
            alt="DTEC L2E"
            className="h-30 w-30 mx-auto rounded-lg animate-float animate-glow"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
          DTEC
        </h1>

        <h2 className="text-xl md:text-2xl font-bold mb-8 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
          Learn To Earn Sessions 2
        </h2>

        <div className="w-64 mx-auto mb-6">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-600 h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="text-gray-400 mb-4">Loading DTEC Campaign...</p>
        <p className="text-sm text-gray-500">{Math.round(progress)}% Complete</p>

        <div className="mt-8 flex justify-center">
          <div className="animate-spin-slow">
            <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
