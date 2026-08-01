"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Gift, Users, Trophy, Star, Waves } from "lucide-react"

export default function BluWhalePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-800 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-slideInUp">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center animate-float">
              <Waves className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                BluWhale
              </h1>
              <p className="text-xl text-cyan-300 mt-2">Node Discussion</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              November 11, 18, 26, 2024
            </Badge>
            <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              12:00 PM UTC
            </Badge>
            <Badge variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-4 py-2">
              <MapPin className="w-4 h-4 mr-2" />
              Telegram
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 mb-8 animate-glow">
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <Gift className="w-6 h-6 text-blue-400" />
                <span className="text-2xl font-bold text-blue-300">$150 USDT</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-6 h-6 text-cyan-400" />
                <span className="text-lg text-cyan-300">15 Winners</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-6 h-6 text-teal-400" />
                <span className="text-lg text-teal-300">$10 Each</span>
              </div>
            </div>
          </div>

          <p className="text-xl text-cyan-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to our Node Discussion: BluWhale! Join us for three exciting 1-hour sessions across multiple dates
            with amazing rewards.
          </p>
        </div>

        {/* Event Details */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-500/20 mb-8 animate-fadeInScale">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-2">
              <Star className="w-6 h-6" />
              Event Schedule
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <h3 className="font-bold text-blue-300 mb-2">SEASON 1</h3>
                <p className="text-sm text-cyan-300">November 11, 2024</p>
                <p className="text-sm text-cyan-300">12:00 PM UTC</p>
                <p className="text-xs text-gray-300 mt-2">The Choice Challenge</p>
              </div>
              <div className="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                <h3 className="font-bold text-cyan-300 mb-2">SEASON 2</h3>
                <p className="text-sm text-blue-300">November 18, 2024</p>
                <p className="text-sm text-blue-300">12:00 PM UTC</p>
                <p className="text-xs text-gray-300 mt-2">Puzzle Scramble</p>
              </div>
              <div className="bg-teal-500/10 rounded-lg p-4 border border-teal-500/20">
                <h3 className="font-bold text-teal-300 mb-2">ROUND 3</h3>
                <p className="text-sm text-cyan-300">November 26, 2024</p>
                <p className="text-sm text-cyan-300">12:00 PM UTC</p>
                <p className="text-xs text-gray-300 mt-2">Riddle Resolver</p>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Duration: 1 Hour Each</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-gray-300">Total Seasons: 3</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span className="text-gray-300">Hashtag: #NodeBluWhale</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Random Winner Selection</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Seasons Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: "SEASON 1", subtitle: "MULTIPLE CHOICE", color: "blue", icon: "🌊", date: "Nov 11" },
            { title: "SEASON 2", subtitle: "PUZZLE SCRAMBLE", color: "cyan", icon: "🐋", date: "Nov 18" },
            { title: "ROUND 3", subtitle: "RIDDLE RESOLVER", color: "teal", icon: "💙", date: "Nov 26" },
          ].map((season, index) => (
            <Card
              key={index}
              className={`bg-black/40 backdrop-blur-sm border-${season.color}-500/20 animate-fadeInScale hover:scale-105 transition-transform duration-300`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-2">{season.icon}</div>
                <Badge
                  variant="secondary"
                  className={`bg-${season.color}-500/20 text-${season.color}-300 border-${season.color}-500/30 mb-3`}
                >
                  {season.title}
                </Badge>
                <h3 className={`font-bold text-${season.color}-300 text-sm mb-2`}>{season.subtitle}</h3>
                <p className="text-xs text-gray-400">{season.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Rules Section */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-500/20 mb-12 animate-fadeInScale">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-blue-300 mb-6">📌 RULES THE NODE DISCUSSION</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <span className="text-gray-300">Any edited answer will automatically be disqualified.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400 font-bold">2.</span>
                  <span className="text-gray-300">Every answer you must put your answer and hashtag #NodeBluWhale</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-teal-400 font-bold">3.</span>
                  <span className="text-gray-300">Winners pick by random.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <span className="text-gray-300">
                    The list of winners will be announced after team is done with reviewing.
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Season 1 */}
        <Card className="bg-black/40 backdrop-blur-sm border-blue-500/20 mb-8 animate-fadeInScale">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                SEASON 1
              </Badge>
              <h2 className="text-2xl font-bold text-blue-300">MULTIPLE CHOICE</h2>
              <Badge variant="outline" className="text-xs text-gray-400 border-gray-500">
                Nov 11, 12:00 PM UTC
              </Badge>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-300 mb-4">📝 Mechanics:</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-blue-400">1️⃣</span>
                  <span className="text-gray-300">Answer the correct choice</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400">2️⃣</span>
                  <div className="text-gray-300">
                    <p>After group unmate you can the answer with format:</p>
                    <div className="ml-4 mt-2 space-y-1">
                      <p className="text-cyan-300">--&gt; Your answer</p>
                      <p className="text-cyan-300">--&gt; Hashtag #NodeBluWhale</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-blue-400">3️⃣</span>
                  <span className="text-gray-300">Give a reaction to each question</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-4 mb-6">
              <p className="text-blue-300">🎁 The winners are selected randomly by the team for $10.</p>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="text-center text-gray-400 italic">(foto disini)</div>
                  <p className="text-blue-300 font-semibold mt-2">Question {num}️⃣</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Season 2 */}
        <Card className="bg-black/40 backdrop-blur-sm border-cyan-500/20 mb-8 animate-fadeInScale">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                SEASON 2
              </Badge>
              <h2 className="text-2xl font-bold text-cyan-300">PUZZLE SCRAMBLE</h2>
              <Badge variant="outline" className="text-xs text-gray-400 border-gray-500">
                Nov 18, 12:00 PM UTC
              </Badge>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-cyan-300 mb-4">📝 Mechanics:</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-cyan-400">1️⃣</span>
                  <span className="text-gray-300">Unscramble the words in the image.</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400">2️⃣</span>
                  <div className="text-gray-300">
                    <p>After group unmate you can the answer with format:</p>
                    <div className="ml-4 mt-2 space-y-1">
                      <p className="text-blue-300">--&gt; Your answer</p>
                      <p className="text-blue-300">--&gt; Hashtag #NodeBluWhale</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-cyan-400">3️⃣</span>
                  <span className="text-gray-300">Give a reaction to each question</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-lg p-4 mb-6">
              <p className="text-cyan-300">🎁 The winners are selected randomly by the team for $10.</p>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="text-center text-gray-400 italic">(foto disini)</div>
                  <p className="text-cyan-300 font-semibold mt-2">Question {num}️⃣</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Round 3 */}
        <Card className="bg-black/40 backdrop-blur-sm border-teal-500/20 mb-8 animate-fadeInScale">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                ROUND 3
              </Badge>
              <h2 className="text-2xl font-bold text-teal-300">RIDDLE RESOLVER</h2>
              <Badge variant="outline" className="text-xs text-gray-400 border-gray-500">
                Nov 26, 12:00 PM UTC
              </Badge>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-teal-300 mb-4">📝 Mechanics:</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-teal-400">1️⃣</span>
                  <span className="text-gray-300">
                    Write the correct answer to fill in the blank on the dotted line
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-400">2️⃣</span>
                  <div className="text-gray-300">
                    <p>After group unmate you can the answer with format:</p>
                    <div className="ml-4 mt-2 space-y-1">
                      <p className="text-cyan-300">--&gt; Your answer</p>
                      <p className="text-cyan-300">--&gt; Hashtag #NodeBluWhale</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-teal-400">3️⃣</span>
                  <span className="text-gray-300">Give a reaction to each question</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-lg p-4 mb-6">
              <p className="text-teal-300">🎁 The winners are selected randomly by the team for $10.</p>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                  <div className="text-center text-gray-400 italic">(foto disini)</div>
                  <p className="text-teal-300 font-semibold mt-2">Question {num}️⃣</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-700/50">
          <p className="text-gray-400 mb-2">Hosted by Muhamad Novreysa</p>
          <p className="text-sm text-gray-500">Node Discussion: BluWhale • November 2024</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out; }
        .animate-fadeInScale { animation: fadeInScale 0.6s ease-out; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
