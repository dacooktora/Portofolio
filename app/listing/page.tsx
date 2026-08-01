"use client"

import type React from "react"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Send } from "lucide-react"
import { useRouter } from "next/navigation"

type Errors = Record<string, string>

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const urlRegex = /^https?:\/\/[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/i
const telegramRegex = /^(?:@[\w_]{5,}|https?:\/\/t\.me\/[\w_]{5,})$/i

export default function ListingFormPage() {
  const router = useRouter()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const [form, setForm] = useState({
    // Contact
    contactName: "",
    contactEmail: "",
    contactTelegram: "",
    // Project
    projectName: "",
    website: "",
    description: "",
    // Listing preferences
    targetExchange: "",
    baseChain: "Ethereum",
    quoteAsset: "USDT",
    startPrice: "",
    liquidityAmount: "",
    marketMaker: false,
    mmProvider: "",
    liquidityPlan: "Project Provides",
    // Legal & Compliance
    legalEntity: false,
    jurisdiction: "",
    kyc: false,
    kycProvider: "",
    audit: false,
    auditor: "",
    contract: "",
    // Marketing
    prSupport: true,
    influencer: true,
    campaignBudget: "",
    // Timeline
    targetDate: "",
  })

  const exchanges = useMemo(
    () => [
      "Mexc",
      "Lbank",
      "Gateio",
      "BingX",
      "Bitmart",
      "Coinex",
      "AscenDex",
      "XT",
      "Coinstore",
      "CoinW",
      "Weex",
      "Biconomy",
      "Probit Exchange",
    ],
    [],
  )

  const quoteAssets = ["USDT", "USDC", "BTC", "ETH", "BNB", "SOL"]

  function inputClass(name: string, base: string) {
    return `${base} ${errors[name] ? "border-red-500/60 focus-visible:ring-red-500" : ""}`
  }

  function validate(values = form) {
    const e: Errors = {}

    // Required
    if (!values.contactName.trim()) e.contactName = "Required"
    if (!values.contactEmail.trim()) e.contactEmail = "Required"
    if (!values.contactTelegram.trim()) e.contactTelegram = "Required"
    if (!values.projectName.trim()) e.projectName = "Required"
    if (!values.website.trim()) e.website = "Required"
    if (!values.description.trim()) e.description = "Required"
    if (!values.targetExchange.trim()) e.targetExchange = "Select an exchange"

    // Formats
    if (values.contactEmail && !emailRegex.test(values.contactEmail)) {
      e.contactEmail = "Invalid email format"
    }
    if (values.website && !urlRegex.test(values.website)) {
      e.website = "Invalid URL format"
    }
    if (values.contract && !/^0x[a-fA-F0-9]{40}$/.test(values.contract) && values.baseChain !== "Solana") {
      // Keep simple check for EVM addresses; skip for Solana/Other
      e.contract = "Invalid EVM address"
    }
    if (values.contactTelegram && !telegramRegex.test(values.contactTelegram)) {
      e.contactTelegram = "Use @handle or https://t.me/handle"
    }

    return e
  }

  function validateField(name: string, value: string) {
    const next = { ...form, [name]: value }
    const e = validate(next)
    setErrors((prev) => ({ ...prev, [name]: e[name] }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const eobj = validate()
    setErrors(eobj)
    const firstErrorKey = Object.keys(eobj)[0]
    if (firstErrorKey) {
      const el = document.querySelector(`[data-field="${firstErrorKey}"]`) as HTMLElement | null
      if (el?.scrollIntoView) el.scrollIntoView({ behavior: "smooth", block: "center" })
      return
    }
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen relative overflow-hidden bg-black text-white">
      <style jsx>{`
        @keyframes floaty {
          0% { transform: translateY(0px) }
          50% { transform: translateY(-12px) }
          100% { transform: translateY(0px) }
        }
        .blob {
          filter: blur(60px);
          opacity: 0.25;
          animation: floaty 9s ease-in-out infinite;
        }
      `}</style>

      {/* Animated background */}
      <div className="pointer-events-none absolute -top-24 left-10 w-96 h-96 rounded-full bg-blue-500/25 blob" />
      <div
        className="pointer-events-none absolute top-1/3 right-0 w-80 h-80 rounded-full bg-purple-500/20 blob"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-cyan-500/20 blob"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="container mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="outline"
            className="border-blue-500/40 text-blue-400 bg-transparent"
            onClick={() => router.push("/")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30">Exchange Listing Application</Badge>
        </div>

        <Card className="bg-gray-900/60 border-blue-500/20 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Apply for Exchange Listing</CardTitle>
            <CardDescription className="text-gray-300">
              Share your listing preferences and readiness. We’ll facilitate communication and negotiation with the
              right exchanges or DEX routes.
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
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
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
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
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
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
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
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
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
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.website && <p className="mt-1 text-sm text-red-400">{errors.website}</p>}
                  </div>
                  <div className="md:col-span-3">
                    <Textarea
                      data-field="description"
                      placeholder="Brief project description (users, traction, token utility, roadmap)"
                      rows={3}
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      onBlur={(e) => validateField("description", e.target.value)}
                      required
                      className={inputClass(
                        "description",
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.description && <p className="mt-1 text-sm text-red-400">{errors.description}</p>}
                  </div>
                </div>
              </section>

              {/* Listing Preferences */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Listing Preferences</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Select
                      value={form.targetExchange}
                      onValueChange={(v) => {
                        setForm({ ...form, targetExchange: v })
                        setErrors((prev) => ({ ...prev, targetExchange: "" }))
                      }}
                    >
                      <SelectTrigger
                        data-field="targetExchange"
                        className={inputClass("targetExchange", "bg-gray-800 border-blue-500/30 text-white")}
                      >
                        <SelectValue placeholder="Name Exchange" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 text-white border-blue-500/30">
                        {exchanges.map((ex) => (
                          <SelectItem key={ex} value={ex}>
                            {ex}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.targetExchange && <p className="mt-1 text-sm text-red-400">{errors.targetExchange}</p>}
                  </div>

                  <Select value={form.baseChain} onValueChange={(v) => setForm({ ...form, baseChain: v })}>
                    <SelectTrigger className="bg-gray-800 border-blue-500/30 text-white">
                      <SelectValue placeholder="Base Chain" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-blue-500/30">
                      {[
                        "Ethereum",
                        "BNB Chain",
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
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={form.quoteAsset} onValueChange={(v) => setForm({ ...form, quoteAsset: v })}>
                    <SelectTrigger className="bg-gray-800 border-blue-500/30 text-white">
                      <SelectValue placeholder="Quote Asset" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-blue-500/30">
                      {quoteAssets.map((a) => (
                        <SelectItem key={a} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Input
                    placeholder="Expected Start Price (e.g., 0.02)"
                    value={form.startPrice}
                    onChange={(e) => setForm({ ...form, startPrice: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50"
                  />

                  <Input
                    placeholder="Liquidity Amount to Provide (USD value)"
                    value={form.liquidityAmount}
                    onChange={(e) => setForm({ ...form, liquidityAmount: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50"
                  />

                  <div className="flex items-center gap-3">
                    <Switch checked={form.marketMaker} onCheckedChange={(v) => setForm({ ...form, marketMaker: v })} />
                    <Label className="text-white">Need Market Maker</Label>
                  </div>
                  <Input
                    placeholder="Market Maker Provider (if any)"
                    value={form.mmProvider}
                    onChange={(e) => setForm({ ...form, mmProvider: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />

                  <Select value={form.liquidityPlan} onValueChange={(v) => setForm({ ...form, liquidityPlan: v })}>
                    <SelectTrigger className="bg-gray-800 border-blue-500/30 text-white">
                      <SelectValue placeholder="Liquidity Plan" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900 text-white border-blue-500/30">
                      <SelectItem value="Project Provides">Project Provides</SelectItem>
                      <SelectItem value="Exchange Provides">Exchange Provides</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </section>

              {/* Legal & Compliance */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Legal & Compliance</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3">
                    <Switch checked={form.legalEntity} onCheckedChange={(v) => setForm({ ...form, legalEntity: v })} />
                    <Label className="text-white">Registered Legal Entity</Label>
                  </div>
                  <Input
                    placeholder="Jurisdiction (e.g., BVI, Singapore)"
                    value={form.jurisdiction}
                    onChange={(e) => setForm({ ...form, jurisdiction: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />

                  <div className="flex items-center gap-3">
                    <Switch checked={form.kyc} onCheckedChange={(v) => setForm({ ...form, kyc: v })} />
                    <Label className="text-white">Team KYC Completed</Label>
                  </div>
                  <Input
                    placeholder="KYC Provider"
                    value={form.kycProvider}
                    onChange={(e) => setForm({ ...form, kycProvider: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />

                  <div className="flex items-center gap-3">
                    <Switch checked={form.audit} onCheckedChange={(v) => setForm({ ...form, audit: v })} />
                    <Label className="text-white">Smart Contract Audited</Label>
                  </div>
                  <Input
                    placeholder="Auditor Name"
                    value={form.auditor}
                    onChange={(e) => setForm({ ...form, auditor: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50"
                  />
                  <div className="md:col-span-2">
                    <Input
                      data-field="contract"
                      placeholder="Contract Address (optional for non-EVM)"
                      value={form.contract}
                      onChange={(e) => setForm({ ...form, contract: e.target.value })}
                      onBlur={(e) => validateField("contract", e.target.value)}
                      className={inputClass(
                        "contract",
                        "bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50",
                      )}
                    />
                    {errors.contract && <p className="mt-1 text-sm text-red-400">{errors.contract}</p>}
                  </div>
                </div>
              </section>

              {/* Marketing */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Marketing Support</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <label className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white">
                    <Checkbox
                      checked={form.prSupport}
                      onCheckedChange={(v) => setForm({ ...form, prSupport: Boolean(v) })}
                    />
                    <span>Tier-1 Media PR</span>
                  </label>
                  <label className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white">
                    <Checkbox
                      checked={form.influencer}
                      onCheckedChange={(v) => setForm({ ...form, influencer: Boolean(v) })}
                    />
                    <span>KOL / Influencer Campaign</span>
                  </label>
                  <Input
                    placeholder="Estimated Marketing Budget (USD)"
                    value={form.campaignBudget}
                    onChange={(e) => setForm({ ...form, campaignBudget: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50"
                  />
                </div>
              </section>

              {/* Timeline */}
              <section>
                <h3 className="text-xl font-semibold mb-4">Timeline</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <Label className="text-sm text-white">Preferred Listing Date</Label>
                  </div>
                  <Input
                    type="date"
                    value={form.targetDate}
                    onChange={(e) => setForm({ ...form, targetDate: e.target.value })}
                    className="bg-gray-800 border-blue-500/30 text-white placeholder:text-white/50 md:col-span-2"
                  />
                </div>
              </section>

              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  className="border-blue-500/40 text-blue-400 bg-transparent"
                  onClick={() => router.push("/")}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Send className="mr-2 h-4 w-4" /> Submit Application
                </Button>
              </div>

              {submitted && (
                <div className="p-4 rounded-lg border bg-blue-500/20 border-blue-500/40 text-blue-200">
                  Submitted! Thank you. We will review your listing application shortly. This is a demo UI only.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
