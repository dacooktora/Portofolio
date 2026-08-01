"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, MapPin, Gift, Timer, Users, Trophy, Zap, Star, Target, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function RuneMinePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Data gambar untuk 10 pertanyaan
  const questionImages = [
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621580/20260802_045902_hfll2y.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621580/20260802_045904_xstbti.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621581/20260802_045906_fl0ssh.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621581/20260802_045907_hernwv.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621581/20260802_045909_unqxlm.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621581/20260802_045911_a8tct3.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621582/20260802_045913_s4gavw.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621581/20260802_045915_avefaa.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621582/20260802_045917_ywgrti.jpg",
    "https://res.cloudinary.com/ncbsx8go/image/upload/v1785621582/20260802_045919_kjdkmx.jpg",
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-yellow-900/20 to-red-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/10 rounded-full blur-3xl animate-pulse"
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
          0%, 100% { box-shadow: 0 0 20px rgba(251, 146, 60, 0.5); }
          50% { box-shadow: 0 0 40px rgba(251, 146, 60, 0.8), 0 0 60px rgba(251, 146, 60, 0.6); }
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
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-orange-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="h-6 w-6 text-orange-400" />
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
                <img src="/L2E - 16.png" alt="Rune Mine" className="h-20 w-auto rounded-lg animate-float" />
              </div>

              <h1 className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent">
                Learn To Earn
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-yellow-500 to-red-600 bg-clip-text text-transparent">
                RuneMine
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">By Muhamad Novreysa • March 07, 2025</p>

              {/* Event Details */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <Card
                  className="bg-gradient-to-br from-orange-900/50 to-yellow-900/50 border-orange-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-orange-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Time</h3>
                    <p className="text-sm text-gray-300">09:00 AM UTC</p>
                    <p className="text-sm text-gray-300">March 8, 2025</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-yellow-900/50 to-red-900/50 border-yellow-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Venue</h3>
                    <p className="text-sm text-gray-300">Telegram Group</p>
                    <p className="text-sm text-yellow-400">@openpad_official</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-red-900/50 to-pink-900/50 border-red-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Gift className="h-8 w-8 text-red-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Reward</h3>
                    <p className="text-sm text-gray-300">$100 worth</p>
                    <p className="text-sm text-red-400">$MINE Tokens</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-green-900/50 to-teal-900/50 border-green-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Timer className="h-8 w-8 text-green-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Winners</h3>
                    <p className="text-sm text-gray-300">10 Total</p>
                    <p className="text-sm text-green-400">$10 Each</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 animate-slideInUp">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-orange-400" />
                  <CardTitle className="text-2xl text-white">Hello OpenPad Community!</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-300">
                  Welcome to our Learn To Earn session for <span className="text-orange-400 font-bold">RuneMine</span>!
                </p>

                <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-yellow-400" />
                    How This Game Works
                  </h3>
                  <div className="space-y-4 text-gray-300 text-justify">
                    <p>
                      There will be a total of{" "}
                      <span className="text-orange-400 font-bold">10 question multiple choice in 1 round</span>, the
                      host will drop the questions one at a time on group.
                    </p>
                    <p>
                      After the question is sent to the group, host will be unmuted. A total of 10 winners with correct
                      answers will get $10 in $MINE each. Winners will be chosen randomly.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-red-400" />
                    Important Notes
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
                        <span className="text-orange-400 font-mono">#L2ERuneMine</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">3.</span>
                      <span>The list of winners will be announced after team is done with reviewing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">4.</span>
                      <span>
                        User must participate in all question for make eligible to win and each user can only win once.
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                LET'S START THE CHALLENGE!
              </h2>
              <p className="text-xl text-gray-300">10 Multiple Choice Questions</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-orange-500/30 overflow-hidden animate-slideInUp">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-600">
                        <Target className="h-8 w-8" />
                      </div>
                      <div className="flex-1">
                        <Badge className="mb-2 bg-orange-500/20 text-orange-400 border-orange-500/30">
                          MULTIPLE CHOICE CHALLENGE
                        </Badge>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                          <CardTitle className="text-xl md:text-2xl text-white">Quick Fire Questions</CardTitle>
                          <p className="text-gray-400 text-sm md:text-base">Answer Fast & Win</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2">
                          <div className="flex items-center gap-2 text-green-400">
                            <Trophy className="h-4 w-4" />
                            <span className="font-bold text-sm">10 Winners</span>
                          </div>
                          <span className="text-green-400 text-sm">$10 each in $MINE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <p className="text-lg text-gray-300">
                        Answer the correct choice questions to win $10 in $MINE tokens. Be fast and accurate!
                      </p>

                      <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-lg p-4">
                        <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-400" />
                          Mechanics:
                        </h4>
                        <div className="space-y-2 text-gray-300">
                          <p>1. Answer the correct choice</p>
                          <p>2. After group unmute you can submit the answer with format:</p>
                          <div className="bg-gray-800/50 p-3 rounded border-l-4 border-orange-500 ml-4">
                            <p className="text-orange-400 font-mono">Your answer</p>
                            <p className="text-orange-400 font-mono">Hashtag #L2ERuneMine</p>
                          </div>
                          <p>3. Give a reaction to each question</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-lg font-bold text-green-400">
                          🎁 The 10 winners are selected randomly for win $10 $MINE!
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative overflow-hidden rounded-xl border border-orange-500/30 animate-float">
                        <img
                          src="https://res.cloudinary.com/ncbsx8go/image/upload/v1785621324/20260802_045452_q21dan.jpg"
                          alt="RuneMine Challenge"
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                    </div>
                  </div>

                  {/* Questions Section */}
                  <div className="mt-8 space-y-4">
                    <h4 className="text-xl font-bold text-white mb-4">Questions:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((questionNum) => (
                        <Card key={questionNum} className="bg-gray-800/50 border-gray-600/30 p-4 text-center">
                          <p className="text-gray-400 mb-2 text-sm">
                            Question {questionNum === 10 ? "1⃣0⃣" : `${questionNum}⃣`}
                          </p>
                          <div className="w-full h-48 md:h-56 bg-gray-700/50 rounded border-2 border-dashed border-gray-600 overflow-hidden">
                            {questionImages[questionNum - 1] ? (
                              <img
                                src={questionImages[questionNum - 1]}
                                alt={`Question ${questionNum}`}
                                className="w-full h-full object-cover rounded"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <p className="text-gray-500 text-xs">Coming Soon</p>
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-orange-500/20">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/L2E - 16.png" alt="Rune Mine" className="h-8 w-8 rounded" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Good Luck to All Participants!
              </h3>
            </div>
            <p className="text-gray-400 mb-6">May the fastest and smartest win! 🚀</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white px-8 py-3">
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
