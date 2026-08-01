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
  Search,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

export default function AstraNovaPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const rounds = [
    {
      id: 1,
      title: "THE CHOICE CHALLENGE",
      subtitle: "Multiple Choice Questions",
      icon: <Target className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598787/astranova1_jwfczw.jpg",
      winners: 5,
      description: "Answer the correct choice questions to win $10 in $RVV tokens",
      color: "from-violet-500 to-purple-600",
      showRoundNumber: false,
      questions: [],
    },
    {
      id: 2,
      title: "PUZZLE SCRAMBLE",
      subtitle: "Word Unscrambling Challenge",
      icon: <Puzzle className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598788/astranova2_od1qrj.jpg",
      winners: 5,
      description: "Unscramble the words in the image to claim your reward",
      color: "from-purple-500 to-violet-600",
      showRoundNumber: false,
      questions: [],
    },
    {
      id: 3,
      title: "RIDDLE RESOLVER",
      subtitle: "Fill in the Blanks",
      icon: <Brain className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598787/astranova3_op39fu.jpg",
      winners: 5,
      description: "Write the correct answer to fill in the blank spaces",
      color: "from-violet-500 to-indigo-600",
      showRoundNumber: true,
      questions: [],
    },
    {
      id: 4,
      title: "COMPLETE THE PUZZLE",
      subtitle: "Interactive Challenge",
      icon: <Search className="h-8 w-8" />,
      image: "https://res.cloudinary.com/ncbsx8go/image/upload/v1785598788/astranova4_cpy1jb.jpg",
      winners: 5,
      description: "Complete the Astra Nova whitepaper puzzle with correct answers",
      color: "from-violet-500 to-purple-600",
      showRoundNumber: false,
      questions: [], // No questions for round 4
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-violet-900/20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse"
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
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.6); }
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
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-violet-500/20">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <ArrowLeft className="h-6 w-6 text-violet-400" />
                <span className="text-lg font-semibold">Back to Portfolio</span>
              </Link>
              <div className="flex items-center gap-2">{/* Empty space - logo removed as requested */}</div>
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
                <img
                  src="/L2E - 8.jpeg"
                  alt="Astra Nova L2E"
                  className="h-20 w-auto rounded-lg animate-float"
                />
              </div>
              <h1 className="text-3xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                Learn To Earn
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
                Sessions 2
              </h2>
              <h3 className="text-xl md:text-3xl font-bold mb-6 text-white">Astra Nova</h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">By Muhamad Novreysa • May 04, 2024</p>

              {/* Event Details */}
              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
                <Card
                  className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 border-violet-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.2s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-violet-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Time</h3>
                    <p className="text-sm text-gray-300">07:00 AM UTC</p>
                    <p className="text-sm text-gray-300">May 05, 2024</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-500/30 animate-fadeInScale"
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
                  className="bg-gradient-to-br from-violet-900/50 to-indigo-900/50 border-violet-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Gift className="h-8 w-8 text-violet-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Reward</h3>
                    <p className="text-sm text-gray-300">$200 worth</p>
                    <p className="text-sm text-violet-400">$RVV Tokens</p>
                  </CardContent>
                </Card>

                <Card
                  className="bg-gradient-to-br from-purple-900/50 to-violet-900/50 border-purple-500/30 animate-fadeInScale"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardContent className="p-6 text-center">
                    <Timer className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                    <h3 className="font-bold text-white mb-2">Duration</h3>
                    <p className="text-sm text-gray-300">1 Hour</p>
                    <p className="text-sm text-purple-400">Interactive Session</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-violet-500/30 animate-slideInUp">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-violet-400" />
                  <CardTitle className="text-2xl text-white">Hello OpenPad Community!</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-gray-300">
                  Welcome to our Learn To Earn session 2 for{" "}
                  <span className="text-violet-400 font-bold">Astra Nova</span>!
                </p>

                <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-6 w-6 text-purple-400" />
                    How This Game Works
                  </h3>
                  <div className="space-y-4 text-gray-300 text-justify">
                    <p>
                      There will be a total of <span className="text-violet-400 font-bold">4 rounds</span>. In each
                      round, the host will give a different task and after the task share on group, user can prepare the
                      correct answer.
                    </p>
                    <p>
                      Once unmuted group, the user can answer. Users who answer correctly and quickly have a chance to
                      win.
                    </p>
                    <p className="text-lg font-bold text-violet-400">
                      20 total winners to get $10 each in $RVV tokens.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-violet-500/10 border border-red-500/30 rounded-lg p-6">
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
                        Every answer you submit must include your answer and hashtag{" "}
                        <span className="text-violet-400 font-mono">#L2EAstraNova</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">3.</span>
                      <span>
                        For tasks involving images from your data, we will choose only valid and authentic entries.
                        Copied or duplicated submissions will be disregarded.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">4.</span>
                      <span>The list of winners will be announced after team is done with reviewing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">5.</span>
                      <span>User must participate in all 4 rounds and each user can only win once.</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Rounds Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                LET'S START THE CHALLENGE!
              </h2>
              <p className="text-xl text-gray-300">4 Exciting Rounds Await You</p>
            </div>
            <div className="grid gap-12 max-w-6xl mx-auto">
              {rounds.map((round, index) => (
                <Card
                  key={round.id}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-violet-500/30 overflow-hidden animate-slideInUp"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-4 rounded-full bg-gradient-to-r ${round.color}`}>{round.icon}</div>
                        <div className="flex-1">
                          {round.showRoundNumber && (
                            <Badge className="mb-2 bg-violet-500/20 text-violet-400 border-violet-500/30">
                              ROUND {round.id}
                            </Badge>
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                            <CardTitle className="text-xl md:text-2xl text-white">{round.title}</CardTitle>
                            <p className="text-gray-400 text-sm md:text-base">{round.subtitle}</p>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-2">
                            <div className="flex items-center gap-2 text-purple-400">
                              <Trophy className="h-4 w-4" />
                              <span className="font-bold text-sm">{round.winners} Winners</span>
                            </div>
                            <span className="text-purple-400 text-sm">$10 each in $RVV</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div className="space-y-6">
                        <p className="text-lg text-gray-300">{round.description}</p>

                        <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/30 rounded-lg p-4">
                          <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                            <Star className="h-5 w-5 text-purple-400" />
                            Mechanics:
                          </h4>
                          <div className="space-y-2 text-gray-300">
                            {round.id === 1 && (
                              <>
                                <p>1️⃣ Answer the correct choice</p>
                                <p>2️⃣ After group unmute you can submit the answer with format:</p>
                                <div className="bg-gray-800/50 p-3 rounded border-l-4 border-violet-500 ml-4">
                                  <p className="text-violet-400 font-mono">Your answer</p>
                                  <p className="text-violet-400 font-mono">Hashtag #L2EAstraNova</p>
                                </div>
                              </>
                            )}
                            {round.id === 2 && (
                              <>
                                <p>1️⃣ Unscramble the words in the image</p>
                                <p>2️⃣ After group unmute you can submit the answer with format:</p>
                                <div className="bg-gray-800/50 p-3 rounded border-l-4 border-purple-500 ml-4">
                                  <p className="text-purple-400 font-mono">Your answer</p>
                                  <p className="text-purple-400 font-mono">Hashtag #L2EAstraNova</p>
                                </div>
                              </>
                            )}
                            {round.id === 3 && (
                              <>
                                <p>1️⃣ Write the correct answer to fill in the blank on the dotted line</p>
                                <p>2️⃣ After group unmute you can submit the answer with format:</p>
                                <div className="bg-gray-800/50 p-3 rounded border-l-4 border-violet-500 ml-4">
                                  <p className="text-violet-400 font-mono">Your answer</p>
                                  <p className="text-violet-400 font-mono">Hashtag #L2EAstraNova</p>
                                </div>
                              </>
                            )}
                            {round.id === 4 && (
                              <>
                                <p>1️⃣ Find answers on whitepaper</p>
                                <p>
                                  2️⃣ Download the image and edit the image by writing the correct answer to fill in each
                                  PURPLE BOX
                                </p>
                                <p>3️⃣ Put your Telegram Username and hashtag #L2EAstraNova on the RED BOX</p>
                                <p>4️⃣ Send the image with your correct answer to the group</p>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="text-center">
                          <p className="text-lg font-bold text-purple-400">
                            {round.id === 1 || round.id === 2
                              ? "🎁 The fastest and correct answer will win $10 in $RVV!"
                              : "🎁 The winners are selected randomly by the team for $10 in $RVV!"}
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="relative overflow-hidden rounded-xl border border-violet-500/30 animate-float">
                          <div className="w-full h-64 bg-gray-700/50 rounded border-2 border-dashed border-gray-600 flex items-center justify-center">
                            <p className="text-gray-400 text-lg">(foto disini)</p>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                      </div>
                    </div>

                    {/* Questions Section - Show actual images for rounds 1, 2, and 3 */}
                    {round.id !== 4 && (
                      <div className="mt-8 space-y-4">
                        <h4 className="text-xl font-bold text-white mb-4">Questions:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                          {[1, 2, 3, 4, 5].map((questionNum) => (
                            <Card key={questionNum} className="bg-gray-800/50 border-gray-600/30 p-4 text-center">
                              <p className="text-gray-400 mb-2 text-sm">Question {questionNum}️⃣</p>
                              <div className="w-full h-48 md:h-56 bg-gray-700/50 rounded border-2 border-dashed border-gray-600 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center">
                                  <p className="text-gray-500 text-xs">(foto disini)</p>
                                </div>
                              </div>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-violet-500/20">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/L2E - 8.jpeg" alt="Astra Nova L2E" className="h-8 w-8 rounded" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                Good Luck to All Participants!
              </h3>
            </div>
            <p className="text-gray-400 mb-6">May the fastest and smartest win! 🚀</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-8 py-3">
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
