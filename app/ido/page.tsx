"use client"

import { Checkbox } from "@/components/ui/checkbox"

import { Label } from "@/components/ui/label"

import type React from "react"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Send, BadgeCheck, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Errors = Record<string, string>

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const urlRegex = /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/i
const telegramRegex = /^(?:@[\w_]{5,}|https?:\/\/t\.me\/[\w_]{5,})$/i

// 1) After you deploy the Apps Script Web App, paste the URL below:
const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"

export default function IDOFormPage() {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const [raisePreset, setRaisePreset] = useState("50000")
  const [sending, setSending] = useState(false)
  const [successOpen, setSuccessOpen] = useState(false)

  const [form, setForm] = useState({
    contactName: "",
    contactEmail: "",
    contactTelegram: "",
    projectName: "",
    website: "",
    whitepaper: "",
    deck: "",
    description: "",
    tokenTicker: "",
    tokenType: "Utility",
    chain: "BNB Chain",
    totalSupply: "",
    contractAddress: "",
    audited: false,
    auditor: "",
    kyc: false,
    kycProvider: "",
    targetRaise: "",
    currency: "USDT",
    tgePercent: "",
    cliffMonths: "",
    vestMonths: "",
    launchpads: [] as string[],
    launchpadOther: "",
    timeline: "",
    marketing: {
      kol: false,
      ama: false,
      quests: false,
      pr: false,
      community: false,
      localization: false,
    },
  })

  const launchpadOptions = useMemo(() => ["OpenPad", "Kommunitas", "Gains", "BSCS", "SiriusPad"], [])

  function inputClass(name: string, base: string) {
    return `${base} ${errors[name] ? "border-red-500/60 focus-visible:ring-red-500" : ""}`
  }

  function validate(values = form) {
    const e: Errors = {}

    // Required fields
    if (!values.contactName.trim()) e.contactName = "Required"
    if (!values.contactEmail.trim()) e.contactEmail = "Required"
    if (!values.contactTelegram.trim()) e.contactTelegram = "Required"
    if (!values.projectName.trim()) e.projectName = "Required"
    if (!values.website.trim()) e.website = "Required"
    if (!values.description.trim()) e.description = "Required"
    if (!values.tokenTicker.trim()) e.tokenTicker = "Required"

    // Formats
    if (values.contactEmail && !emailRegex.test(values.contactEmail)) {
      e.contactEmail = "Invalid email format"
    }
    if (values.website && !urlRegex.test(values.website)) {
      e.website = "Invalid URL format"
    }
    if (values.whitepaper && !urlRegex.test(values.whitepaper)) {
      e.whitepaper = "Invalid URL format"
    }
    if (values.deck && !urlRegex.test(values.deck)) {
      e.deck = "Invalid URL format"
    }
    if (values.contactTelegram && !telegramRegex.test(values.contactTelegram)) {
      e.contactTelegram = "Use @handle or https://t.me/handle"
    }

    // Raise rule
    if (raisePreset === "other" && !values.targetRaise.trim()) {
      e.targetRaise = "Enter custom raise"
    }

    return e
  }

  function validateField(name: string, value: string) {
    const next = { ...form, [name]: value }
    const e = validate(next)
    setErrors((prev) => ({ ...prev, [name]: e[name] }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const eobj = validate()
    setErrors(eobj)
    const firstErrorKey = Object.keys(eobj)[0]
    if (firstErrorKey) {
      const el = document.querySelector(`[data-field="${firstErrorKey}"]`) as HTMLElement | null
      if (el?.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }

    // Submit to Google Apps Script
    setSending(true)
    try {
      const payload = {
        type: "IDO",
        timestamp: new Date().toISOString(),
        ...form,
      }
      if (!APPS_SCRIPT_URL || APPS_SCRIPT_URL.includes("PASTE_YOUR_APPS_SCRIPT")) {
        // Demo success if endpoint not configured yet
        await new Promise((r) => setTimeout(r, 800))
      } else {
        const res = await fetch(APPS_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        })
        // If Apps Script returns JSON, we can optionally read it
        if (!res.ok) throw new Error("Failed to submit to Sheet")
      }

      setSubmitted(true)
      setSuccessOpen(true)
      setForm({
        contactName: "",
        contactEmail: "",
        contactTelegram: "",
        projectName: "",
        website: "",
        whitepaper: "",
        deck: "",
        description: "",
        tokenTicker: "",
        tokenType: "Utility",
        chain: "BNB Chain",
        totalSupply: "",
        contractAddress: "",
        audited: false,
        auditor: "",
        kyc: false,
        kycProvider: "",
        targetRaise: "",
        currency: "USDT",
        tgePercent: "",
        cliffMonths: "",
        vestMonths: "",
        launchpads: [],
        launchpadOther: "",
        timeline: "",
        marketing: { kol: false, ama: false, quests: false, pr: false, community: false, localization: false },
      })
    } catch (err) {
      alert("Submission failed. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      <style jsx>{`
        @keyframes floaty {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-10px) }
          100% { transform: translateY(0px) }
        }
        .blob {
          filter: blur(60px);
          opacity: 0.25;
          animation: floaty 8s ease-in-out infinite;
        }
        @keyframes popIn {
          0% { transform: scale(0.9); opacity: 0 }
          100% { transform: scale(1); opacity: 1 }
        }
        .animate-popIn { animation: popIn .25s ease-out }
      `}</style>

      {/* Animated background */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-green-500/30 blob" />
      <div
        className="pointer-events-none absolute top-1/3 -right-10 w-96 h-96 rounded-full bg-blue-500/20 blob"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-emerald-500/20 blob"
        style={{ animationDelay: "0.6s" }}
      />

      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            className="border-green-500/40 text-green-400 bg-transparent"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
          <Badge className="bg-green-500/20 text-green-400 border border-green-500/30">IDO Application</Badge>
        </div>

        <Card className="bg-gray-900/60 border-green-500/20 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Apply for IDO</CardTitle>
            <CardDescription className="text-gray-300">
              Provide detailed information so we can connect you with the best launchpads and accelerate your
              fundraising.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-10" onSubmit={handleSubmit} noValidate>
              {/* Contact */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Input
                      data-field="contactName"
                      placeholder="Contact Name"
                      value={form.contactName}
                      onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                      onBlur={(e) => validateField("contactName", e.target.value)}
                      required
                      className={inputClass(
                        "contactName",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.contactName && <p className="mt-1 text-sm text-red-400">{errors.contactName}</p>}
                  </div>
                  <div>
                    <Input
                      data-field="contactEmail"
                      type="email"
                      placeholder="Email"
                      value={form.contactEmail}
                      onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                      onBlur={(e) => validateField("contactEmail", e.target.value)}
                      required
                      className={inputClass(
                        "contactEmail",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.contactEmail && <p className="mt-1 text-sm text-red-400">{errors.contactEmail}</p>}
                  </div>
                  <div>
                    <Input
                      data-field="contactTelegram"
                      placeholder="Telegram (e.g., @username or https://t.me/username)"
                      value={form.contactTelegram}
                      onChange={(e) => setForm({ ...form, contactTelegram: e.target.value })}
                      onBlur={(e) => validateField("contactTelegram", e.target.value)}
                      required
                      className={inputClass(
                        "contactTelegram",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.contactTelegram && <p className="mt-1 text-sm text-red-400">{errors.contactTelegram}</p>}
                  </div>
                </div>
              </section>

              {/* Project */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Input
                      data-field="projectName"
                      placeholder="Project Name"
                      value={form.projectName}
                      onChange={(e) => setForm({ ...form, projectName: e.target.value })}
                      onBlur={(e) => validateField("projectName", e.target.value)}
                      required
                      className={inputClass(
                        "projectName",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.projectName && <p className="mt-1 text-sm text-red-400">{errors.projectName}</p>}
                  </div>
                  <div>
                    <Input
                      data-field="website"
                      placeholder="Website URL"
                      value={form.website}
                      onChange={(e) => setForm({ ...form, website: e.target.value })}
                      onBlur={(e) => validateField("website", e.target.value)}
                      required
                      className={inputClass(
                        "website",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.website && <p className="mt-1 text-sm text-red-400">{errors.website}</p>}
                  </div>
                  <div>
                    <Input
                      data-field="whitepaper"
                      placeholder="Whitepaper URL (optional)"
                      value={form.whitepaper}
                      onChange={(e) => setForm({ ...form, whitepaper: e.target.value })}
                      onBlur={(e) => validateField("whitepaper", e.target.value)}
                      className={inputClass(
                        "whitepaper",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.whitepaper && <p className="mt-1 text-sm text-red-400">{errors.whitepaper}</p>}
                  </div>
                  <div className="md:col-span-3">
                    <Input
                      data-field="deck"
                      placeholder="Pitch Deck URL (optional)"
                      value={form.deck}
                      onChange={(e) => setForm({ ...form, deck: e.target.value })}
                      onBlur={(e) => validateField("deck", e.target.value)}
                      className={inputClass(
                        "deck",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.deck && <p className="mt-1 text-sm text-red-400">{errors.deck}</p>}
                  </div>
                  <div className="md:col-span-3">
                    <Textarea
                      data-field="description"
                      placeholder="Short project description (what you build, users, traction, roadmap)"
                      rows={4}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      onBlur={(e) => validateField("description", e.target.value)}
                      required
                      className={inputClass(
                        "description",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description}</p>}
                  </div>
                </div>
              </section>

              {/* Token */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Token Details</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Input
                      data-field="tokenTicker"
                      placeholder="Token Ticker (e.g., ABC)"
                      value={form.tokenTicker}
                      onChange={(e) => setForm({ ...form, tokenTicker: e.target.value })}
                      onBlur={(e) => validateField("tokenTicker", e.target.value)}
                      required
                      className={inputClass(
                        "tokenTicker",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.tokenTicker && <p className="mt-1 text-sm text-red-400">{errors.tokenTicker}</p>}
                  </div>
                  <Select value={form.tokenType} onValueChange={(v) => setForm({ ...form, tokenType: v })}>
                    <SelectTrigger className={inputClass("tokenType", "bg-gray-800 border-green-500/30 text-white")}>
                      <SelectValue placeholder="Token Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-green-500/30">
                      <SelectItem value="Utility">Utility</SelectItem>
                      <SelectItem value="Governance">Governance</SelectItem>
                      <SelectItem value="Meme">Meme</SelectItem>
                      <SelectItem value="Stablecoin">Stablecoin</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={form.chain} onValueChange={(v) => setForm({ ...form, chain: v })}>
                    <SelectTrigger className={inputClass("chain", "bg-gray-800 border-green-500/30 text-white")}>
                      <SelectValue placeholder="Chain" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-green-500/30">
                      {[
                        "BNB Chain",
                        "Ethereum",
                        "Solana",
                        "Polygon",
                        "Base",
                        "Arbitrum",
                        "Optimism",
                        "Avalanche",
                        "TON",
                        "Sui",
                        "Aptos",
                        "Other",
                      ].map((c) => (
                        <SelectItem value={c} key={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Total Supply (e.g., 1,000,000,000)"
                    value={form.totalSupply}
                    onChange={(e) => setForm({ ...form, totalSupply: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50"
                  />
                  <Input
                    placeholder="Contract Address (if live)"
                    value={form.contractAddress}
                    onChange={(e) => setForm({ ...form, contractAddress: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />

                  <div className="flex items-center gap-3">
                    <Switch checked={form.audited} onCheckedChange={(v) => setForm({ ...form, audited: v })} />
                    <Label className="text-white">Smart Contract Audit Completed</Label>
                  </div>
                  <Input
                    placeholder="Auditor Name (if audited)"
                    value={form.auditor}
                    onChange={(e) => setForm({ ...form, auditor: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />

                  <div className="flex items-center gap-3">
                    <Switch checked={form.kyc} onCheckedChange={(v) => setForm({ ...form, kyc: v })} />
                    <Label className="text-white">Team KYC Completed</Label>
                  </div>
                  <Input
                    placeholder="KYC Provider (if KYCed)"
                    value={form.kycProvider}
                    onChange={(e) => setForm({ ...form, kycProvider: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />
                </div>
              </section>

              {/* Raise */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Raise Details</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Select
                    value={raisePreset}
                    onValueChange={(v) => {
                      setRaisePreset(v)
                      setForm((prev) => ({ ...prev, targetRaise: v === "other" ? "" : v }))
                      setErrors((prev) => ({ ...prev, targetRaise: "" }))
                    }}
                  >
                    <SelectTrigger className="bg-gray-800 border-green-500/30 text-white">
                      <SelectValue placeholder="Target Raise" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-green-500/30">
                      <SelectItem value="50000">$50,000</SelectItem>
                      <SelectItem value="100000">$100,000</SelectItem>
                      <SelectItem value="250000">$250,000</SelectItem>
                      <SelectItem value="500000">$500,000</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <div>
                    <Input
                      data-field="targetRaise"
                      placeholder="Target Raise (custom USD)"
                      disabled={raisePreset !== "other"}
                      value={form.targetRaise}
                      onChange={(e) => setForm({ ...form, targetRaise: e.target.value })}
                      onBlur={(e) => validateField("targetRaise", e.target.value)}
                      className={inputClass(
                        "targetRaise",
                        "bg-gray-800 border-green-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.targetRaise && <p className="mt-1 text-sm text-red-400">{errors.targetRaise}</p>}
                  </div>
                  <Select value={form.currency} onValueChange={(v) => setForm({ ...form, currency: v })}>
                    <SelectTrigger className="bg-gray-800 border-green-500/30 text-white">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-green-500/30">
                      {["USDT", "USDC", "ETH", "BTC", "SOL", "BNB"].map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="TGE % (e.g., 10)"
                    value={form.tgePercent}
                    onChange={(e) => setForm({ ...form, tgePercent: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50"
                  />
                  <Input
                    placeholder="Cliff (months)"
                    value={form.cliffMonths}
                    onChange={(e) => setForm({ ...form, cliffMonths: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50"
                  />
                  <Input
                    placeholder="Vesting (months)"
                    value={form.vestMonths}
                    onChange={(e) => setForm({ ...form, vestMonths: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50"
                  />
                </div>

                <div className="mt-4">
                  <Label className="text-sm text-white">Preferred Launchpads</Label>
                  <div className="grid sm:grid-cols-3 gap-3 mt-2">
                    {launchpadOptions.map((lp) => (
                      <label
                        key={lp}
                        className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white"
                      >
                        <Checkbox
                          checked={form.launchpads.includes(lp)}
                          onCheckedChange={(v) => {
                            const next = new Set(form.launchpads)
                            v ? next.add(lp) : next.delete(lp)
                            setForm({ ...form, launchpads: Array.from(next) })
                          }}
                        />
                        <span>{lp}</span>
                      </label>
                    ))}
                    <Input
                      placeholder="Other launchpad"
                      value={form.launchpadOther}
                      onChange={(e) => setForm({ ...form, launchpadOther: e.target.value })}
                      className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50 sm:col-span-3"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="md:col-span-1">
                    <Label className="text-sm text-white">Preferred IDO Date</Label>
                  </div>
                  <Input
                    type="date"
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className="bg-gray-800 border-green-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />
                </div>
              </section>

              {/* Marketing */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Marketing Support Needed</h3>
                <div className="grid sm:grid-cols-3 gap-3">
                  {[
                    ["KOL Campaign", "kol"],
                    ["AMA Roadshow", "ama"],
                    ["Quest/Giveaway", "quests"],
                    ["Tier-1 Media PR", "pr"],
                    ["Community Management", "community"],
                    ["Localization", "localization"],
                  ].map(([label, key]) => (
                    <label
                      key={key}
                      className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white"
                    >
                      <Checkbox
                        checked={(form.marketing as any)[key]}
                        onCheckedChange={(v) => setForm({ ...form, marketing: { ...form.marketing, [key]: v } })}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </section>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  className="border-green-500/40 text-green-400 bg-transparent"
                  onClick={() => router.push("/")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                >
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Submit Application
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Success Dialog */}
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent className="bg-gray-900 border border-green-500/30 text-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-green-400">
              <BadgeCheck className="h-5 w-5" /> Application Submitted
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Your IDO application has been received. We will review and get back to you shortly.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </main>
  )
}
