"use client"

export default function BluWhaleLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-8"></div>
          <div
            className="absolute inset-0 w-20 h-20 border-4 border-cyan-500/20 border-b-cyan-500 rounded-full animate-spin mx-auto"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
          BluWhale
        </h2>
        <p className="text-gray-400">Loading Node Discussion...</p>
      </div>
    </div>
  )
}
