"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Clock,
  MapPin,
  Gift,
  Timer,
  Users,
  Trophy,
  Zap,
  Star,
  Target,
  Brain,
  Puzzle,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function PlayAIPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const seasons = [
    {
      id: 1,
      title: "MULTIPLE QUESTION",
      subtitle: "Multiple Choice Challenge",
      icon: <Target className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598794/playai1_kqzugw.jpg",
      winners: 5,
      description: "Answer the correct choice questions to win your share of the prize",
      color: "from-blue-500 to-purple-600",
      date: "12:00 PM UTC, 19th November",
      questions: [],
    },
    {
      id: 2,
      title: "PUZZLE SCRAMBLE",
      subtitle: "Word Unscrambling Challenge",
      icon: <Puzzle className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598794/playai2_b2ujig.jpg",
      winners: 5,
      description: "Unscramble the words in the image to claim your reward",
      color: "from-purple-500 to-pink-600",
      date: "12:00 PM UTC, 24th November",
      questions: [],
    },
    {
      id: 3,
      title: "RIDDLE RESOLVER",
      subtitle: "Fill in the Blanks",
      icon: <Brain className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598795/playai3_apfrxe.jpg",
      winners: 5,
      description: "Write the correct answer to fill in the blank spaces",
      color: "from-pink-500 to-red-600",
      date: "12:00 PM UTC, 29th November",
      questions: [],
        },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
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
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.6); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-glow { animation: glow 3s ease-in-out infinite; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-fadeInScale { animation: fadeInScale 0.8s ease-out forwards; }
      `}</style>

      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-blue-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-semibold">Back to Portfolio</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div
              className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <img src="/L2E - 13.png" alt="PlayAI" className="h-20 w-auto rounded-lg animate-float" />
              </div>

              <h1 className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Node Discussion
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
                Play AI
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">By Muhamad Novreysa • November 18, 2024</p>

              {/* Event Details */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <Card
                  className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Schedule</h3>
                    <p className="text-sm text-gray-300">Season 1: Nov 19</p>
                    <p className="text-sm text-gray-300">Season 2: Nov 24</p>
                    <p className="text-sm text-gray-300">Season 3: Nov 29</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Venue</h3>
                    <p className="text-sm text-gray-300">Telegram Group</p>
                    <p className="text-sm text-purple-400">@openpad_official</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-pink-900/50 to-red-900/50 border-pink-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Gift className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Reward</h3>
                    <p className="text-sm text-gray-300">$150 USDT</p>
                    <p className="text-sm text-pink-400">15 Winners</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Timer className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Duration</h3>
                    <p className="text-sm text-gray-300">30 Minutes</p>
                    <p className="text-sm text-green-400">Per Season</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-blue-500/30 animate-slideInUp">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-400" />
                  <CardTitle className="text-2xl text-white">Hello OpenPad Community!</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-300">
                  Welcome to our Node Discussion for <span className="text-blue-400 font-bold">Play AI</span>!
                </p>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    How This Event Works
                  </h3>
                  <div className="space-y-4 text-gray-300 text-justify">
                    <p>
                      There will be a total of <span className="text-blue-400 font-bold">3 seasons</span>. In each
                      season, the host will give a different task and after the task share on group, user can prepare
                      the correct answer.
                    </p>
                    <p>
                      Once unmuted group, the user can answer. Users who answer correctly and quickly have a chance to
                      win.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-red-400" />
                    Rules of The Event
                  </h3>
                  <ul className="space-y-3 text-gray-300 text-justify">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">1.</span>
                      <span>Any edited answer will automatically be disqualified.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">2.</span>
                      <span>
                        Every answer you must put your answer and hashtag{" "}
                        <span className="text-blue-400 font-mono">#NodePlayAI</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">3.</span>
                      <span>Winners pick by random in all Round.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">4.</span>
                      <span>To be eligible for reward, the winner's wallet must own at least 1 OPAD Intel Key NFT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">5.</span>
                      <span>The list of winners will be announced after team is done with reviewing.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Seasons Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                LET'S START THE NODE DISCUSSION!
              </h2>
              <p className="text-xl text-gray-300">3 Exciting Seasons Await You</p>
            </div>

            <div className="grid gap-12 max-w-6xl mx-auto">
              {seasons.map((season, index) => (
                <Card
                  key={season.id}
                  className={`bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-blue-500/30 overflow-hidden animate-slideInUp`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${season.color}`}>{season.icon}</div>
                        <div className="flex-1">
                          <Badge className="mb-2 bg-blue-500/20 text-blue-400 border-blue-500/30">
                            SEASON {season.id}
                          </Badge>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                            <CardTitle className="text-xl md:text-2xl text-white">{season.title}</CardTitle>
                            <p className="text-gray-400 text-sm md:text-base">{season.subtitle}</p>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2">
                            <div className="flex items-center gap-2 text-green-400">
                              <Trophy className="h-4 w-4" />
                              <span className="font-bold text-sm">{season.winners} Winners</span>
                            </div>
                            <span className="text-green-400 text-sm">$10 each</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{season.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <p className="text-lg text-gray-300">{season.description}</p>

                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-4">
                          <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-400" />
                            Mechanics:
                          </h4>
                          <div className="space-y-2 text-gray-300">
                            <p>1️⃣ Answer the correct choice</p>
                            <p>2️⃣ After group unmute you can submit the answer with format:</p>
                            <div className="bg-gray-800/50 p-3 rounded border-l-4 border-blue-500 ml-4">
                              <p className="text-blue-400 font-mono">Your answer</p>
                              <p className="text-blue-400 font-mono">Hashtag #NodePlayAI</p>
                            </div>
                            <p>3️⃣ Give a reaction to each question</p>
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-lg font-bold text-green-400">
                            🎁 The winners are selected randomly by the team!
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="relative overflow-hidden rounded-xl border border-blue-500/30 animate-float">
                          <img
                            src={season.image || "/placeholder.svg"}
                            alt={`Season ${season.id} - ${season.title}`}
                            className="w-full h-auto object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Questions Section */}
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-blue-500/20">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/L2E - 13.png" alt="PlayAI" className="h-8 w-8 rounded" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Good Luck to All Participants!
              </h3>
            </div>
            <p className="text-gray-400 mb-6">May the fastest and smartest win! 🚀</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
