import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back button skeleton */}
        <Skeleton className="h-10 w-32 mb-6 bg-blue-800/20" />

        {/* Header skeleton */}
        <div className="text-center mb-12">
          <Skeleton className="w-20 h-20 rounded-full mx-auto mb-6 bg-blue-800/20" />
          <Skeleton className="h-12 w-96 mx-auto mb-4 bg-blue-800/20" />
          <Skeleton className="h-6 w-48 mx-auto mb-2 bg-blue-800/20" />
          <Skeleton className="h-4 w-32 mx-auto bg-blue-800/20" />
        </div>

        {/* Info cards skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="bg-blue-800/20 border-blue-500/30">
              <CardHeader>
                <Skeleton className="h-4 w-24 bg-blue-700/30" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-32 bg-blue-700/30" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content skeletons */}
        <div className="space-y-6">
          <Card className="bg-blue-800/20 border-blue-500/30">
            <CardHeader>
              <Skeleton className="h-6 w-48 bg-blue-700/30" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2 bg-blue-700/30" />
              <Skeleton className="h-4 w-3/4 mb-2 bg-blue-700/30" />
              <Skeleton className="h-4 w-5/6 bg-blue-700/30" />
            </CardContent>
          </Card>

          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="bg-blue-800/20 border-blue-500/30">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Skeleton className="w-12 h-12 rounded-full bg-blue-700/30" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-48 mb-2 bg-blue-700/30" />
                    <Skeleton className="h-4 w-32 bg-blue-700/30" />
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
