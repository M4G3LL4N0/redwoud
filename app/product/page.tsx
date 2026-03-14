import { useState } from 'react'

export default function ProductPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'modules' | 'enterprise'>('overview')

  const modules = [
    {
      id: 'live-feed',
      name: 'Live Event Feed',
      icon: 'lightning',
      description: 'Real-time intelligence from global sources',
      benefits: [
        'Instant alerts on emerging events',
        'AI-powered event classification',
        'Customizable filtering and search',
        'Historical event tracking',
      ],
    },
    {
      id: 'global-map',
      name: 'Global Event Map',
      icon: 'globe',
      description: 'Spatial visualization of intelligence events',
      benefits: [
        'Geographic risk mapping',
        'Heat maps of event density',
        'Regional trend analysis',
        'Custom region tracking',
      ],
    },
    {
      id: 'daily-briefing',
      name: 'AI Daily Briefing',
      icon: 'newspaper',
      description: 'Automated daily intelligence summaries',
      benefits: [
        'AI-curated top stories',
        'Personalized briefing generation',
        'Key theme extraction',
        'Risk assessment highlights',
      ],
    },
    {
      id: 'trend-summaries',
      name: 'Trend Summaries',
      icon: 'chart-line',
      description: 'AI-identified trend clusters and analysis',
      benefits: [
        'Emerging pattern detection',
        'Cross-topic trend analysis',
        'Predictive trend modeling',
        'Historical trend comparison',
      ],
    },
    {
      id: 'filters',
      name: 'Intelligent Filters',
      icon: 'funnel',
      description: 'Advanced filtering for targeted intelligence',
      benefits: [
        'Multi-dimensional filtering',
        'Saved filter presets',
        'Smart filter suggestions',
        'Real-time filter updates',
      ],
    },
    {
      id: 'alerts',
      name: 'Custom Alerts',
      icon: 'bell',
      description: 'Proactive notification system',
      benefits: [
        'Threshold-based alerts',
        'Custom alert conditions',
        'Multiple delivery channels',
        'Alert history tracking',
      ],
    },
    {
      id: 'saved-dashboards',
      name: 'Saved Dashboards',
      icon: 'grid',
      description: 'Personalized intelligence workspaces',
      benefits: [
        'Custom dashboard layouts',
        'Widget-based configuration',
        'Dashboard sharing',
        'Template management',
      ],
    },
    {
      id: 'enterprise-workspaces',
      name: 'Enterprise Workspaces',
      icon: 'users',
      description: 'Collaborative intelligence environments',
      benefits: [
        'Team-based access control',
        'Shared intelligence spaces',
        'Role-based permissions',
        'Audit trail capabilities',
      ],
    },
  ]

  const freeFeatures = [
    'Basic intelligence feeds',
    'Limited event tracking (100 events/month)',
    'Standard analysis',
    'Community support',
    'Up to 3 users',
    'Public dashboard templates',
    'Basic filtering',
    'Email alerts only',
  ]

  const paidFeatures = [
    'Advanced intelligence feeds',
    'Real-time event tracking (unlimited)',
    'AI-powered analysis',
    'Priority support',
    'Up to 10 users (Pro) / 25 users (Team)',
    'Custom dashboard creation',
    'Advanced filtering',
    'Multi-channel alerts',
    'API access',
    'White-label reports',
    'Custom intelligence feeds',
    'Advanced analytics',
    'Dedicated support',
    'Unlimited users',
    'Custom integrations',
    'On-premise deployment',
    '24/7 support with SLA',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              REDWOUD Intelligence Platform
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Transform how your organization understands and responds to global
              events with AI-powered strategic intelligence.
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

      {/* What REDWOUD Does */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What REDWOUD Does
            </h2>
            <p className="text-xl text-slate-400">
              REDWOUD is an AI-powered strategic intelligence platform that
              continuously monitors global events, identifies emerging trends,
              and delivers actionable insights to decision makers.
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
                    d="M19 11a7 7 0 01-9.769 6.858V17a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h3v-6a1 1 0 012-1h6a1 1 0 012 1v6h3a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Continuous Monitoring
              </h3>
              <p className="text-sm text-slate-300">
                REDWOUD continuously scans thousands of global sources to detect
                emerging events and trends as they develop.
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                AI-Powered Analysis
              </h3>
              <p className="text-sm text-slate-300">
                Advanced machine learning models identify patterns, assess risks,
                and generate insights that humans might miss.
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
                    d="M9 17v2m3 0v2m3 0v2m-6 0h18"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Actionable Insights
              </h3>
              <p className="text-sm text-slate-300">
                Transform complex data into clear, actionable intelligence that
                drives better strategic decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Modules */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Key Modules
            </h2>
            <p className="text-xl text-slate-400">
              Comprehensive intelligence capabilities for every use case
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-all"
              >
                <div className="w-10 h-10 bg-emerald-400 rounded-full flex items-center justify-center mb-4">
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
                      d={getModuleIconPath(module.icon)}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {module.name}
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  {module.description}
                </p>
                <div className="space-y-2">
                  {module.benefits.map((benefit) => (
                    <p key={benefit} className="text-xs text-slate-400 flex items-center">
                      <svg
                        className="w-3 h-3 mr-2 text-emerald-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {benefit}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Capabilities */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Technical Capabilities
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Enterprise-grade technology powering your intelligence advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                Real-time Processing
              </h3>
              <p className="text-sm text-slate-300">
                Process thousands of events per second with sub-second latency
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
                Enterprise Scale
              </h3>
              <p className="text-sm text-slate-300">
                Handle millions of events with horizontal scaling and redundancy
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
                Security & Compliance
              </h3>
              <p className="text-sm text-slate-300">
                SOC 2 Type II, GDPR compliant with enterprise-grade encryption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Free vs Paid
            </h2>
            <p className="text-xl text-slate-400">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  Free Plan
                </h3>
                <p className="text-xl text-slate-400 mb-6">
                  Perfect for individuals and small teams
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {freeFeatures.map((feature) => (
                  <p key={feature} className="text-sm text-slate-300 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </p>
                ))}
              </div>
              <div className="text-center">
                <button className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all">
                  Get Started Free
                </button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                  Paid Plans
                </h3>
                <p className="text-xl text-slate-400 mb-6">
                  For organizations that need more power and features
                </p>
              </div>
              <div className="space-y-3 mb-8">
                {paidFeatures.map((feature) => (
                  <p key={feature} className="text-sm text-slate-300 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </p>
                ))}
              </div>
              <div className="text-center">
                <button className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all">
                  View Pricing Plans
                </button>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              How organizations use REDWOUD for strategic advantage
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
                    d="M19 11a7 7 0 01-9.769 6.858V17a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h3v-6a1 1 0 012-1h6a1 1 0 012 1v6h3a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Corporate Strategy
              </h3>
              <p className="text-sm text-slate-300">
                Monitor market shifts, competitive threats, and regulatory changes
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
                Risk Management
              </h3>
              <p className="text-sm text-slate-300">
                Identify and assess risks before they impact your operations
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
                Market Intelligence
              </h3>
              <p className="text-sm text-slate-300">
                Track market trends, consumer behavior, and economic indicators
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900">
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

function getModuleIconPath(icon: string): string {
  const icons: Record<string, string> = {
    lightning: 'M13 10V3L4 14h7v7l9-11h-7z',
    globe: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z',
    newspaper: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    'chart-line': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-3 0a3 3 0 110-6 3 3 0 010 6zm12 2a9 9 0 11-18 0 9 9 0 0118 0z',
    funnel: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    bell: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-3 0a3 3 0 110-6 3 3 0 010 6zm12 2a9 9 0 11-18 0 9 9 0 0118 0z',
    grid: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    users: 'M19 11a7 7 0 01-9.769 6.858V17a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h3v-6a1 1 0 012-1h6a1 1 0 012 1v6h3a1 1 0 011 1v4a1 1 0 01-1 1h-2z',
  }
  return icons[icon] || icons.lightning
}
