import { useState } from 'react'

export default function TrendsPage() {
  const [selectedTab, setSelectedTab] = useState<'trends' | 'signals' | 'risks'>('trends')

  const trendSummaries = [
    {
      id: 'trend-geopolitical-risk',
      title: 'Geopolitical Risk',
      value: 'Rising',
      detail: 'Conflict-adjacent signals are clustering across multiple regions.',
      icon: 'globe',
      color: 'text-amber-400',
    },
    {
      id: 'trend-macro-stress',
      title: 'Macro Stress',
      value: 'Elevated',
      detail: 'Inflation, rates, and trade uncertainty remain tightly linked.',
      icon: 'chart-line',
      color: 'text-red-400',
    },
    {
      id: 'trend-supply-chain-pressure',
      title: 'Supply Chain Pressure',
      value: 'Watch',
      detail: 'Transport chokepoints and industrial dependency risks are increasing.',
      icon: 'truck',
      color: 'text-yellow-400',
    },
    {
      id: 'trend-tech-controls',
      title: 'Tech Controls',
      value: 'Escalating',
      detail: 'Strategic technology restrictions are reshaping global markets.',
      icon: 'cpu',
      color: 'text-blue-400',
    },
    {
      id: 'trend-energy-volatility',
      title: 'Energy Volatility',
      value: 'High',
      detail: 'Energy transport and pricing uncertainty affecting multiple regions.',
      icon: 'bolt',
      color: 'text-orange-400',
    },
    {
      id: 'trend-market-uncertainty',
      title: 'Market Uncertainty',
      value: 'Increasing',
      detail: 'Cross-market correlations suggest broader systemic stress.',
      icon: 'trend-up',
      color: 'text-purple-400',
    },
  ]

  const signalClusters = [
    {
      id: 'cluster-1',
      title: 'Trade Route Disruption',
      description: 'Multiple signals indicate elevated risk across key maritime corridors',
      severity: 'High',
      events: 12,
      regions: ['Middle East', 'Asia', 'Europe'],
      confidence: 0.8,
    },
    {
      id: 'cluster-2',
      title: 'Energy Infrastructure Pressure',
      description: 'Transport and policy uncertainty creating supply chain stress',
      severity: 'Medium',
      events: 8,
      regions: ['Europe', 'Americas'],
      confidence: 0.6,
    },
    {
      id: 'cluster-3',
      title: 'Technology Export Controls',
      description: 'Strategic restrictions affecting semiconductor and advanced tech supply',
      severity: 'Medium',
      events: 15,
      regions: ['Asia', 'Americas'],
      confidence: 0.7,
    },
  ]

  const risingRiskThemes = [
    {
      id: 'theme-1',
      title: 'Strategic Resource Competition',
      description: 'Competition for critical minerals and energy resources intensifying',
      impact: 'High',
      sectors: ['Energy', 'Technology', 'Manufacturing'],
      trend: 'Accelerating',
    },
    {
      id: 'theme-2',
      title: 'Financial Market Stress',
      description: 'Cross-market correlations suggest broader systemic vulnerabilities',
      impact: 'Medium',
      sectors: ['Finance', 'Trade', 'Technology'],
      trend: 'Developing',
    },
    {
      id: 'theme-3',
      title: 'Supply Chain Weaponization',
      description: 'Trade dependencies being leveraged for strategic advantage',
      impact: 'High',
      sectors: ['Trade', 'Manufacturing', 'Technology'],
      trend: 'Escalating',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic Trend Intelligence
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              AI-powered trend analysis that identifies emerging patterns before they impact your organization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-4 text-lg font-medium bg-slate-800 text-white rounded-2xl border border-slate-600 hover:bg-slate-700 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="bg-slate-800 rounded-2xl p-4">
            <nav className="flex justify-center space-x-8">
              {[
                { id: 'trends', label: 'Trend Summaries' },
                { id: 'signals', label: 'Signal Clustering' },
                { id: 'risks', label: 'Rising Risk Themes' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id as any)}
                  className={`px-4 py-2 text-sm font-medium rounded-2xl transition-all ${
                    selectedTab === tab.id
                      ? 'bg-emerald-400 text-slate-900 shadow-lg'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* Dynamic Content Based on Tab */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {selectedTab === 'trends' && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Trend Summaries
                </h2>
                <p className="text-xl text-slate-400">
                  AI-identified trend clusters across major global signals
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendSummaries.map((trend) => (
                  <div
                    key={trend.id}
                    className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <svg
                          className={`w-5 h-5 mr-3 ${trend.color}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={getTrendIconPath(trend.icon)}
                          />
                        </svg>
                        <h3 className="text-lg font-semibold text-white">
                          {trend.title}
                        </h3>
                      </div>
                      <span className={`text-sm font-bold ${trend.color}`}>
                        {trend.value}
                      </span>
                    </div>
                    <p className="text-sm text-slate-300 mb-4">
                      {trend.detail}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Confidence: {Math.round(Math.random() * 30 + 70)}%</span>
                      <span>Events: {Math.floor(Math.random() * 20) + 5}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedTab === 'signals' && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Signal Clustering
                </h2>
                <p className="text-xl text-slate-400">
                  AI-identified trend clusters across major global signals
                </p>
              </div>

              <div className="space-y-6">
                {signalClusters.map((cluster) => (
                  <div
                    key={cluster.id}
                    className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {cluster.title}
                        </h3>
                        <p className="text-sm text-slate-300">
                          {cluster.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          cluster.severity === 'High'
                            ? 'bg-red-500 text-white'
                            : cluster.severity === 'Medium'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-blue-500 text-white'
                        }`}>
                          {cluster.severity}
                        </span>
                        <span className="text-xs text-slate-400">
                          {cluster.events} events
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Regions</p>
                        <p className="text-sm text-slate-300">
                          {cluster.regions.join(', ')}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Confidence</p>
                        <p className="text-sm text-slate-300">
                          {Math.round(cluster.confidence * 100)}%
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>AI Confidence Score: {Math.round(cluster.confidence * 100)}%</span>
                      <span>Trend Duration: {Math.floor(Math.random() * 30) + 7} days</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {selectedTab === 'risks' && (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Rising Risk Themes
                </h2>
                <p className="text-xl text-slate-400">
                  Emerging risk patterns with strategic implications
                </p>
              </div>

              <div className="space-y-6">
                {risingRiskThemes.map((theme) => (
                  <div
                    key={theme.id}
                    className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {theme.title}
                        </h3>
                        <p className="text-sm text-slate-300">
                          {theme.description}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                          theme.impact === 'High'
                            ? 'bg-red-500 text-white'
                            : 'bg-yellow-500 text-white'
                        }`}>
                          {theme.impact}
                        </span>
                        <span className="text-xs text-slate-400">
                          {theme.sectors.join(', ')}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Trend</p>
                        <p className="text-sm text-slate-300">{theme.trend}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Duration</p>
                        <p className="text-sm text-slate-300">
                          {Math.floor(Math.random() * 45) + 15} days
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Strategic Priority: {theme.impact}</span>
                      <span>AI Confidence: {Math.round(Math.random() * 20 + 80)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Strategic Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Strategic Intelligence Insights
            </h2>
            <p className="text-xl text-slate-400">
              How REDWOUD transforms complex data into actionable strategic intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Pattern Recognition
              </h3>
              <p className="text-sm text-slate-300">
                Advanced machine learning identifies subtle patterns across disparate data sources
              </p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-3 0a3 3 0 110-6 3 3 0 010 6zm12 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Risk Assessment
              </h3>
              <p className="text-sm text-slate-300">
                Quantifies and prioritizes risks based on confidence, impact, and strategic importance
              </p>
            </div>
            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Strategic Recommendations
              </h3>
              <p className="text-sm text-slate-300">
                Provides actionable recommendations based on trend analysis and risk assessment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Intelligence?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join organizations making smarter decisions with REDWOUD
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all">
                Start Free Trial
              </button>
              <button className="px-8 py-4 text-lg font-medium bg-slate-800 text-white rounded-2xl border border-slate-600 hover:bg-slate-700 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function getTrendIconPath(icon: string): string {
  const icons: Record<string, string> = {
    globe: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
    'chart-line': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-3 0a3 3 0 110-6 3 3 0 010 6zm12 2a9 9 0 11-18 0 9 9 0 0118 0z',
    truck: 'M9 17v2m3 0v2m3 0v2m-6 0h18',
    cpu: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
    'trend-up': 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
  }
  return icons[icon] || icons.globe
}
