"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  GraduationCap,
  Code,
  Server,
  Globe,
  MessageSquare,
  Send,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react"
import { useRouter } from "next/navigation"

import ProfileCard from "../components/ProfileCard"
import LetterGlitch from "../components/LetterGlitch"
import Hyperspeed from "../components/Hyperspeed"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Intersection Observer Hook for animations
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [options])

  return [ref, isIntersecting] as const
}

// Circular Progress Component for Technical Skills
function CircularProgress({ percentage, label }: { percentage: number; label: string }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPercentage(percentage), 500)
    return () => clearTimeout(timer)
  }, [percentage])

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-green-400 transition-all duration-1000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{animatedPercentage}%</span>
        </div>
      </div>
      <span className="mt-2 text-sm text-center text-gray-300">{label}</span>
    </div>
  )
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [applyOpen, setApplyOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const professionalSkills = [
    { name: "Community Management", level: 95 },
    { name: "Digital Marketing", level: 90 },
    { name: "Content Creation", level: 88 },
    { name: "KOL Management", level: 85 },
    { name: "Event Planning", level: 90 },
    { name: "Partnership Development", level: 88 },
  ]

  const technicalSkills = [
    { name: "WordPress", level: 90 },
    { name: "Microsoft Excel", level: 85 },
    { name: "PowerPoint", level: 90 },
    { name: "Microsoft Word", level: 95 },
    { name: "Canva", level: 88 },
    { name: "Figma", level: 82 },
    { name: "Blockchain/Web3", level: 85 },
    { name: "Social Media Tools", level: 92 },
  ]

  const educationData = [
    {
      level: "University",
      school: "Universitas Pelita Bangsa",
      degree: "Bachelor of Digital Business",
      period: "2022 - Present",
      gpa: "3.9/4.0",
      achievements: [
        "Field Trip UMKM Subang 2023",
        "Contest ESCA (Embrace Student Creativity) UNSOED 2023",
        "Maintaining excellent academic performance",
      ],
    },
  ]

  const experiences = [
    {
      title: "Community Manager",
      company: "OpenPad",
      period: "Feb 2024 - Oct 2025",
      description: "",
      achievements: ["L2E Content Strategy", "Community Growth", "10% Participation Increase"],
    },
    {
      title: "Marketing Specialist",
      company: "AirdropDay",
      period: "Sept 2023 - July 2024",
      description: "",
      achievements: ["AMA Events", "Trading Competitions", "CEX Partnerships"],
    },
    {
      title: "Head Of Marketing",
      company: "DETECTIVE ID",
      period: "Jan 2020 - Feb 2021",
      description: "",
      achievements: ["30+ AMA Events", "Top CEX Collaborations", "2000+ Campaign Participants"],
    },
    {
      title: "Manager Indonesian & KOL",
      company: "GeoDB",
      period: "May 2020 - Oct 2020",
      description: "",
      achievements: ["27% User Growth", "Indonesia #1 Ranking", "100K+ Video Views"],
    },
    {
      title: "Community Moderator",
      company: "IntelliShare",
      period: "Jan 2019 - Apr 2020",
      description: "",
      achievements: ["Community Moderation", "Content Management", "Community Support"],
    },
  ]

  // Map company names to logo paths
  const companyLogos: Record<string, string> = {
    OpenPad: "/openpad.jpg",
    AirdropDay: "/AirdropDay.jpg",
    "DETECTIVE ID": "/DetectiveID.jpg",
    GeoDB: "/geodb.jpg",
    IntelliShare: "/IntelliShare.jpg",
  }

  const amaProjects = [
    { id: 1, name: "HTX", logo: "/ama1.png", description: "Centralized Exchange", participants: 1250 },
    { id: 2, name: "Hacken AI", logo: "/ama2.png", description: "Blockchain Security Auditor", participants: 980 },
    { id: 3, name: "Trekki", logo: "/ama3.png", description: "NFT", participants: 1100 },
    {
      id: 4,
      name: "Stacks",
      logo: "/ama4.jpg",
      description: "Bitcoin L2 enabling smart contracts ",
      participants: 850,
    },
    { id: 5, name: "Nuls AI", logo: "/ama5.jpg", description: "AI", participants: 720 },
    { id: 6, name: "Spool", logo: "/ama6.png", description: "DeFi", participants: 650 },
    { id: 7, name: "My Neighbor Alice", logo: "/ama7.jpg", description: "Gaming, NFT", participants: 580 },
    { id: 8, name: "Mexc Exchange", logo: "/ama8.png", description: "Centralized Exchange", participants: 520 },
    { id: 9, name: "ARCS", logo: "/ama9.jpg", description: "Payment", participants: 480 },
    { id: 10, name: "Thunder Core", logo: "/ama10.png", description: "EVM-compatible", participants: 750 },
    { id: 11, name: "Statera", logo: "/ama11.png", description: "Deflationary Token", participants: 420 },
    { id: 12, name: "Jarvis Network", logo: "/ama12.png", description: "DeFi", participants: 380 },
    { id: 13, name: "Tachyon Protocol", logo: "/ama13.png", description: "VPN", participants: 350 },
    { id: 14, name: "Velas", logo: "/ama14.png", description: "Open-source platform", participants: 680 },
    { id: 15, name: "GeoDB", logo: "/ama15.png", description: "Big Data", participants: 320 },
    { id: 16, name: "Iustitia", logo: "/ama16.png", description: "Payment, Wallet", participants: 290 },
    { id: 17, name: "WOM Protocol", logo: "/ama17.png", description: "Social Content", participants: 410 },
    { id: 18, name: "CoinZoom", logo: "/ama18.png", description: "Exchange", participants: 270 },
    { id: 19, name: "SandBox", logo: "/ama19.png", description: "Gaming, Metaverse", participants: 340 },
    { id: 20, name: "Orchid", logo: "/ama20.png", description: "DePin, Marketplace, VPN", participants: 250 },
  ]

  const l2eProjects = [
    {
      id: 1,
      name: "Plena Finance",
      logo: "/L2E - 1.png",
      description: "DeFi wallet and portfolio management",
      link: "/plena-finance",
      isExternal: false,
    },
    {
      id: 2,
      name: "R Games",
      logo: "/L2E - 2.png",
      description: "Blockchain gaming platform",
      link: "/r-games",
      isExternal: false,
    },
    {
      id: 3,
      name: "OrangeDX",
      logo: "/L2E - 3.png",
      description: "Reputation and trust protocol",
      link: "/orangedx",
      isExternal: false,
    },
    {
      id: 4,
      name: "Sugar Kingdom",
      logo: "/L2E - 4.png",
      description: "Play-to-earn gaming odyssey",
      link: "/sugar-kingdom",
      isExternal: false,
    },
    {
      id: 5,
      name: "Another - 1",
      logo: "/L2E - 5.png",
      description: "Advanced DeFi solutions",
      link: "/another-1",
      isExternal: false,
    },
    {
      id: 6,
      name: "Exverse",
      logo: "/L2E - 6.png",
      description: "Metaverse development platform",
      link: "/exverse",
      isExternal: false,
    },
    {
      id: 7,
      name: "Better Fan",
      logo: "/L2E - 7.png",
      description: "Improved blockchain infrastructure",
      link: "/better-fan",
      isExternal: false,
    },
    {
      id: 8,
      name: "Astra Nova",
      logo: "/L2E - 8.jpeg",
      description: "Space-themed blockchain project",
      link: "/astra-nova",
      isExternal: false,
    },
    {
      id: 9,
      name: "Midle",
      logo: "/L2E - 9.png",
      description: "Middleware blockchain solutions",
      link: "/midle",
      isExternal: false,
    },
    {
      id: 10,
      name: "DTEC",
      logo: "/L2E - 10.png",
      description: "Privacy-focused blockchain",
      link: "/dtec",
      isExternal: false,
    },
    {
      id: 11,
      name: "BluWhale",
      logo: "/L2E - 11.png",
      description: "Ocean-themed DeFi platform",
      link: "/bluwhale",
      isExternal: false,
    },
    {
      id: 12,
      name: "OG Foundation",
      logo: "/L2E - 12.png",
      description: "Multi-chain DeFi solutions",
      link: "/og-labs",
      isExternal: false,
    },
    {
      id: 13,
      name: "PLAYAI",
      logo: "/L2E - 13.png",
      description: "Modular blockchain architecture",
      link: "/playai",
      isExternal: false,
    },
    {
      id: 14,
      name: "Ink Finance",
      logo: "/L2E - 14.png",
      description: "Knowledge-based blockchain",
      link: "/ink-finance",
      isExternal: false,
    },
    {
      id: 15,
      name: "Yuliverse",
      logo: "/L2E - 15.png",
      description: "Cross-chain connectivity",
      link: "/yuliverse",
      isExternal: false,
    },
    {
      id: 16,
      name: "MineLabs",
      logo: "/L2E - 16.png",
      description: "Payment infrastructure blockchain",
      link: "/minelabs",
      isExternal: false,
    },
  ]

  // Contact form state (UI only)
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState<"success" | "error" | "">("")
  const [alertMessage, setAlertMessage] = useState("")

  // Animation refs
  const [aboutRef, aboutInView] = useIntersectionObserver({ threshold: 0.1 })
  const [educationRef, educationInView] = useIntersectionObserver({ threshold: 0.1 })
  const [experienceRef, experienceInView] = useIntersectionObserver({ threshold: 0.1 })
  const [projectsRef, projectsInView] = useIntersectionObserver({ threshold: 0.1 })
  const [servicesRef, servicesInView] = useIntersectionObserver({ threshold: 0.1 })
  const [skillsRef, skillsInView] = useIntersectionObserver({ threshold: 0.1 })
  const [contactRef, contactInView] = useIntersectionObserver({ threshold: 0.1 })

  const handleL2EClick = (project: (typeof l2eProjects)[0]) => {
    if (project.isExternal) {
      window.open(project.link, "_blank")
    } else {
      router.push(project.link)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlertType("error")
      setAlertMessage("Gagal! Semua kolom harus diisi.")
    } else {
      setAlertType("success")
      setAlertMessage("Sukses! Pesan berhasil dikirim.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    }
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  // Tools list for marquee (updated per request; using Source URLs provided)
  const tools = [
    {
      name: "Zealy",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Zealy1-1ooZhPzgNxsIfx1OrJBdHO8i81WS4t.png",
    },
    {
      name: "Galxe",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/galxe1-FSrVLIIUhXtLgIGUmKTMsZQki8ciSf.png",
    },
    {
      name: "TaskOn",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taskon1-ZrZDwkrzqG2OnNerfbFMDyYM5r13LV.png",
    },
    {
      name: "QuestN",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/questn-uphuE87RKdPbELIMNfVMXHHQkEBFYv.png",
    },
    {
      name: "Canva",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Canva-icon-JYJnTbjT6MPZkgvlxsW6EyYxi8qYJg.png",
    },
    {
      name: "Figma",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Figma-ioHrTaw9ESmWn29JX1t2pjpJb29rYF.png",
    },
    {
      name: "Google Form",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Google_Forms-RNEu5hqd57SL21ArNcIuPuCjzUkz9q.png",
    },
    { name: "Excel", logo: "/excel-logo.png" },
    {
      name: "Telegram Bot",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Telegram%20Bot-lxNwqZL49NLaQYpTlAvYl77NHMbnh5.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom CSS for animations and marquee */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        /* Seamless marquee: moves half width of duplicated track */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
        .animate-slideInUp { animation: slideInUp 0.8s ease-out forwards; }
        .animate-zoomIn { animation: zoomIn 0.8s ease-out forwards; }
        .opacity-0 { opacity: 0; }
        .translate-y-8 { transform: translateY(2rem); }
        .translate-x-8 { transform: translateX(2rem); }
        .-translate-x-8 { transform: translateX(-2rem); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Novreysa
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "education", "experience", "projects", "services", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-green-400 transition-colors ${
                    activeSection === item ? "text-green-400" : "text-white"
                  }`}
                >
                  {item === "projects" ? "AMA & L2E" : item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {["home", "about", "education", "experience", "projects", "services", "skills", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 capitalize hover:text-green-400 transition-colors"
                >
                  {item === "projects" ? "AMA & L2E" : item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Letter Glitch Background */}
      <section id="home" className="h-screen relative flex items-center justify-center">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />

        <div className="relative z-10 text-center px-4">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">MUHAMAD NOVREYSA</h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-bold">Community Manager & Marketing Specialist</p>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white font-semibold">
              Crypto enthusiast since 2018. Expert in DeFi, Web3, and blockchain gaming. Building communities and
              driving innovation in the crypto ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button
                variant="outline"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black px-8 py-3 text-lg bg-transparent"
                onClick={() => window.open("/Muhamad%20Novreysa%20-%20CV.pdf", "_blank")}
                aria-label="Download CV PDF"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-green-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4" ref={aboutRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              aboutInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
            <div className={`space-y-8 ${aboutInView ? "animate-fadeInLeft" : "opacity-0 -translate-x-8"}`}>
              <div className="flex justify-center">
                <div className="transform scale-60 sm:scale-65 md:scale-70 lg:scale-75">
                  <ProfileCard
                    name="Muhamad Novreysa"
                    title="Community Manager & Marketing Specialist"
                    handle="novreysa"
                    status="Available for Projects"
                    contactText="Contact Me"
                    avatarUrl="/profile.png"
                    miniAvatarUrl="/profile.png"
                    showUserInfo={true}
                    enableTilt={true}
                    onContactClick={() => scrollToSection("contact")}
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-48 sm:h-56 md:h-64 lg:h-72 rounded-3xl overflow-hidden">
                  <Hyperspeed
                    effectOptions={{
                      distortion: "turbulentDistortion",
                      length: 400,
                      roadWidth: 9,
                      islandWidth: 2,
                      lanesPerRoad: 3,
                      fov: 90,
                      fovSpeedUp: 150,
                      speedUp: 2,
                      carLightsFade: 0.4,
                      totalSideLightSticks: 50,
                      lightPairsPerRoadWay: 50,
                      shoulderLinesWidthPercentage: 0.05,
                      brokenLinesWidthPercentage: 0.1,
                      brokenLinesLengthPercentage: 0.5,
                      lightStickWidth: [0.12, 0.5],
                      lightStickHeight: [1.3, 1.7],
                      movingAwaySpeed: [60, 80],
                      movingCloserSpeed: [-120, -160],
                      carLightsLength: [400 * 0.05, 400 * 0.15],
                      carLightsRadius: [0.05, 0.14],
                      carWidthPercentage: [0.3, 0.5],
                      carShiftX: [-0.2, 0.2],
                      carFloorSeparation: [0.05, 1],
                      colors: {
                        roadColor: 0x080808,
                        islandColor: 0x0a0a0a,
                        background: 0x000000,
                        shoulderLines: 0x131318,
                        brokenLines: 0x131318,
                        leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                        rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                        sticks: 0x03b3c3,
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={`space-y-6 ${aboutInView ? "animate-fadeInRight" : "opacity-0 translate-x-8"}`}>
              <div className="space-y-6">
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
                  I'm a passionate crypto enthusiast who has been actively involved in the blockchain space since 2018.
                  My expertise spans across DeFi, Web3, and blockchain gaming sectors.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
                  I excel at building and managing communities, designing effective marketing strategies, and
                  strengthening relationships with key opinion leaders to increase project visibility and credibility.
                </p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify">
                  With a combination of deep insight and strategic skills, I am committed to driving innovation and
                  growth in the ever-evolving crypto ecosystem.
                </p>
              </div>

              <div className="space-y-4 pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Bekasi, West Java, Indonesia</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base">+62 895 0644 6413</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">muhammadnovreysa@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-900/50" ref={educationRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              educationInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            Education Journey
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 ${
                  educationInView ? "animate-slideInUp" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {/* University logo from Source URL */}
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/universitas%20pelita%20bangsa-yy9ZroTYtHhkEeIRRYmvR2mUbGLgbq.png"
                      alt="Universitas Pelita Bangsa Logo"
                      className="h-10 w-10 rounded-sm object-contain bg-white p-1"
                    />
                    <GraduationCap className="h-8 w-8 text-green-400 hidden sm:block" />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-white">{edu.degree || edu.school}</CardTitle>
                          <CardDescription className="text-green-400">{edu.school}</CardDescription>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline" className="border-green-500/30 text-green-400 mb-2">
                            {edu.period}
                          </Badge>
                          {edu.gpa && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 block">
                              GPA: {edu.gpa}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Achievements & Activities:</h4>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4" ref={experienceRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              experienceInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            Work Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 ${
                  experienceInView ? "animate-slideInUp" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <img
                        src={companyLogos[exp.company] ?? "/placeholder-logo.png"}
                        alt={exp.company}
                        className="h-8 w-8 rounded-full object-contain"
                      />
                      <div>
                        <CardTitle className="text-xl text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-green-400">{exp.company}</CardDescription>
                        <Badge variant="outline" className="border-green-500/30 text-green-400 mt-1 block sm:hidden">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-green-500/30 text-green-400 hidden sm:block">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {exp.achievements.map((achievement, i) => (
                      <Badge key={i} className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AMA Projects & L2E Section */}
      <section id="projects" className="py-20 px-4 bg-gray-900/50" ref={projectsRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              projectsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            AMA Projects & L2E Campaigns
          </h2>

          {/* AMA Projects */}
          <div className="mb-16">
            <h3
              className={`text-2xl font-bold text-white mb-8 text-center ${
                projectsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
            >
              AMA Projects ({amaProjects.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {amaProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 group hover:scale-105 ${
                    projectsInView ? "animate-zoomIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.logo || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-2">{project.name}</h4>
                    <p className="text-xs text-gray-400 mb-2">{project.description}</p>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      {project.participants} participants
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* L2E Projects */}
          <div>
            <h3
              className={`text-2xl font-bold text-white mb-8 text-center ${
                projectsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
            >
              L2E Campaigns ({l2eProjects.length})
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {l2eProjects.map((project, index) => (
                <Card
                  key={project.id}
                  className={`bg-gray-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group hover:scale-105 ${
                    projectsInView ? "animate-zoomIn" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${(index + amaProjects.length) * 0.1}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={project.logo || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-2">{project.name}</h4>
                    <p className="text-xs text-gray-400 mb-3">{project.description}</p>
                    <Button
                      size="sm"
                      className="bg-blue-500/20 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white transition-all duration-300 text-xs px-3 py-1"
                      onClick={() => handleL2EClick(project)}
                    >
                      Check
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4" ref={servicesRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              servicesInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="h-8 w-8" />,
                title: "Community Management",
                description: "Building and managing active crypto communities with strategic engagement",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Digital Marketing",
                description: "Comprehensive marketing strategies for blockchain and Web3 projects",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Content Creation",
                description: "Educational and promotional content for crypto and tech projects",
              },
              {
                icon: <Server className="h-8 w-8" />,
                title: "KOL Management",
                description: "Influencer partnerships and key opinion leader relationship management",
              },
              {
                icon: <Server className="h-8 w-8" />,
                title: "IDO/Listing",
                description:
                  "We connect you with top-tier exchanges and launchpads — including full assistance for legal review, deal-making, and marketing push. We handle everything end-to-end.\n\nGet listed. Get funded. Go global.",
                cta: "Apply Now",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 text-center group ${
                  servicesInView ? "animate-slideInUp" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="mx-auto text-green-400 group-hover:text-blue-400 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 whitespace-pre-line mb-4">{service.description}</p>
                  {"cta" in service && (
                    <Button
                      onClick={() => setApplyOpen(true)}
                      size="sm"
                      className="bg-green-500/20 text-green-400 border border-green-500/30 hover:bg-green-500 hover:text-black transition-all duration-300"
                    >
                      {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Dialog with two options */}
      <Dialog open={applyOpen} onOpenChange={setApplyOpen}>
        <DialogContent className="bg-gradient-to-br from-gray-900 to-black border border-green-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl">Choose Your Path</DialogTitle>
            <DialogDescription className="text-gray-300">
              Select an option to get started. We will guide you through a detailed form.
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => {
                setApplyOpen(false)
                router.push("/ido")
              }}
              className="group relative overflow-hidden rounded-xl border border-green-500/30 bg-white/5 p-5 text-left hover:border-green-400/60 transition-all"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-lg font-semibold mb-1">IDO</h4>
              <p className="text-sm text-gray-300">Raise funding and launch your token with tier-1 launchpads.</p>
            </button>
            <button
              onClick={() => {
                setApplyOpen(false)
                router.push("/listing")
              }}
              className="group relative overflow-hidden rounded-xl border border-blue-500/30 bg-white/5 p-5 text-left hover:border-blue-400/60 transition-all"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <h4 className="text-lg font-semibold mb-1">Listing</h4>
              <p className="text-sm text-gray-300">List on top exchanges with full support for market readiness.</p>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-900/50" ref={skillsRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              skillsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            Skills & Expertise
          </h2>

          {/* Professional Skills */}
          <div className="mb-16">
            <h3
              className={`text-2xl font-bold text-white mb-8 text-center ${
                skillsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
            >
              Professional Skills
            </h3>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {professionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`space-y-2 ${skillsInView ? "animate-fadeInLeft" : "opacity-0 -translate-x-8"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-green-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: skillsInView ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <h3
              className={`text-2xl font-bold text-white mb-8 text-center ${
                skillsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
              }`}
            >
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`${skillsInView ? "animate-zoomIn" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CircularProgress percentage={skill.level} label={skill.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="text-center">
            <h3
              className={`text-2xl font-bold text-white mb-6 ${skillsInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"}`}
            >
              Languages
            </h3>
            <div className="flex justify-center gap-8">
              <div className={`text-center ${skillsInView ? "animate-fadeInLeft" : "opacity-0 -translate-x-8"}`}>
                <div className="text-3xl font-bold text-green-400">Indonesian</div>
                <div className="text-gray-300">Native</div>
              </div>
              <div className={`text-center ${skillsInView ? "animate-fadeInRight" : "opacity-0 translate-x-8"}`}>
                <div className="text-3xl font-bold text-blue-400">English</div>
                <div className="text-gray-300">Medium</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Web3 - Continuous Marquee (updated description and tools) */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Tools Web3
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            I use the tools below scale and mobilize Web3 communities — allowing me to execute campaigns efficiently and
            maintain long-term community loyalty.
          </p>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 py-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900/90 to-transparent" />

            <div
              className="flex gap-8 whitespace-nowrap will-change-transform"
              style={{
                animation: "marquee 28s linear infinite",
                width: "max-content",
              }}
            >
              {[...tools, ...tools].map((tool, idx) => (
                <div
                  key={`${tool.name}-${idx}`}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/40 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                    <img src={tool.logo || "/placeholder.svg"} alt={tool.name} className="w-7 h-7 object-contain" />
                  </div>
                  <span className="text-sm text-white/90">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-900/50" ref={contactRef}>
        <div className="container mx-auto">
          <h2
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent ${
              contactInView ? "animate-fadeInUp" : "opacity-0 translate-y-8"
            }`}
          >
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className={`space-y-8 ${contactInView ? "animate-fadeInLeft" : "opacity-0 -translate-x-8"}`}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-green-400" />
                    <span className="text-gray-300">+62 895 0644 6413</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-green-400" />
                    <span className="text-gray-300">muhammadnovreysa@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageSquare className="h-6 w-6 text-green-400" />
                    <span className="text-gray-300">t.me/novreysa</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-6 w-6 text-green-400" />
                    <span className="text-gray-300">Bekasi, West Java, Indonesia</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black bg-transparent"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white bg-transparent"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black bg-transparent"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <div className={`${contactInView ? "animate-fadeInRight" : "opacity-0 translate-x-8"}`}>
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-gray-400"
                  />
                </div>
                <Input
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-gray-800 border-green-500/30 text-white placeholder:text-gray-400"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-800 border-green-500/30 text-white placeholder:text-gray-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
              {showAlert && (
                <div
                  className={`mt-4 p-4 rounded-lg border ${
                    alertType === "success"
                      ? "bg-green-500/20 border-green-500/50 text-green-400"
                      : "bg-red-500/20 border-red-500/50 text-red-400"
                  } animate-fadeInUp`}
                >
                  {alertMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-green-500/20">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Muhamad Novreysa. All rights reserved. Built with passion for the crypto community.
          </p>
        </div>
      </footer>
    </div>
  )
}
