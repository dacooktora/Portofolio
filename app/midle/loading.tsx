"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function MidleLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-green-950 to-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-1/2 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute -bottom-40 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-teal-500/20 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Skeleton className="h-10 w-40 bg-teal-500/20" />
              <Skeleton className="h-6 w-32 bg-teal-500/20" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Skeleton className="w-32 h-32 rounded-2xl mx-auto mb-8 bg-teal-500/20" />
            <Skeleton className="h-20 w-96 mx-auto mb-4 bg-teal-500/20" />
            <Skeleton className="h-12 w-80 mx-auto mb-6 bg-teal-500/20" />
            <Skeleton className="h-6 w-96 mx-auto mb-8 bg-teal-500/20" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="bg-teal-900/20 border-teal-500/30">
                  <CardContent className="p-6 text-center">
                    <Skeleton className="h-8 w-8 mx-auto mb-3 bg-teal-500/20" />
                    <Skeleton className="h-4 w-16 mx-auto mb-2 bg-teal-500/20" />
                    <Skeleton className="h-4 w-20 mx-auto bg-teal-500/20" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Loading Cards */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <Skeleton className="h-12 w-80 mx-auto mb-12 bg-teal-500/20" />
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="bg-teal-900/20 border-teal-500/30">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Skeleton className="w-12 h-12 rounded-full bg-teal-500/20" />
                      <div className="space-y-2">
                        <Skeleton className="h-6 w-48 bg-teal-500/20" />
                        <Skeleton className="h-4 w-32 bg-teal-500/20" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full bg-teal-500/20" />
                      <Skeleton className="h-4 w-3/4 bg-teal-500/20" />
                      <Skeleton className="h-4 w-1/2 bg-teal-500/20" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
