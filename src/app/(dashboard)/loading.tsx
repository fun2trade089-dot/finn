export default function DashboardLoading() {
  return (
    <div className="space-y-10 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <div className="h-8 w-64 bg-white/5 rounded-xl" />
          <div className="h-4 w-48 bg-white/5 rounded-lg" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-40 bg-white/5 rounded-xl" />
          <div className="h-10 w-32 bg-white/5 rounded-xl" />
        </div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-48 bg-white/5 border border-white/5 rounded-3xl p-6 space-y-4">
            <div className="h-4 w-24 bg-white/5 rounded" />
            <div className="h-10 w-32 bg-white/5 rounded" />
            <div className="h-2 w-full bg-white/5 rounded mt-auto" />
          </div>
        ))}
      </div>

      {/* Main Content Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="h-64 bg-white/5 border border-white/5 rounded-3xl" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-40 bg-white/5 border border-white/5 rounded-3xl" />
            <div className="h-40 bg-white/5 border border-white/5 rounded-3xl" />
          </div>
        </div>
        <div className="space-y-8">
          <div className="h-48 bg-white/5 border border-white/5 rounded-3xl" />
          <div className="h-64 bg-white/5 border border-white/5 rounded-3xl" />
        </div>
      </div>
    </div>
  )
}
