import { useState } from 'react'

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<'Free' | 'Pro' | 'Team' | 'Enterprise'>('Free')

  const plans = [
    {
      name: 'Free',
      price: '0',
      period: '/month',
      features: [
        'Basic intelligence feeds',
        'Limited event tracking',
        'Standard analysis',
        'Community support',
        'Up to 3 users',
      ],
      cta: 'Get Started',
      color: 'text-slate-400',
    },
    {
      name: 'Pro',
      price: '99',
      period: '/month',
      features: [
        'Advanced intelligence feeds',
        'Real-time event tracking',
        'AI-powered analysis',
        'Priority support',
        'Up to 10 users',
        'API access',
      ],
      cta: 'Upgrade to Pro',
      color: 'text-emerald-400',
    },
    {
      name: 'Team',
      price: '299',
      period: '/month',
      features: [
        'Everything in Pro',
        'Custom intelligence feeds',
        'Advanced analytics',
        'Dedicated support',
        'Up to 25 users',
        'White-label reports',
      ],
      cta: 'Upgrade to Team',
      color: 'text-amber-400',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Everything in Team',
        'Unlimited users',
        'Custom integrations',
        'On-premise deployment',
        '24/7 dedicated support',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      color: 'text-violet-400',
    },
  ]

  const featuresMatrix = [
    {
      feature: 'Real-time Intelligence',
      description: 'Live event tracking and analysis',
      available: ['Pro', 'Team', 'Enterprise'],
    },
    {
      feature: 'AI Analysis',
      description: 'Machine learning-powered insights',
      available: ['Pro', 'Team', 'Enterprise'],
    },
    {
      feature: 'Custom Feeds',
      description: 'Tailored intelligence sources',
      available: ['Team', 'Enterprise'],
    },
    {
      feature: 'Advanced Analytics',
      description: 'Deep-dive trend analysis',
      available: ['Team', 'Enterprise'],
    },
    {
      feature: 'White-label Reports',
      description: 'Branded intelligence reports',
      available: ['Team', 'Enterprise'],
    },
    {
      feature: 'API Access',
      description: 'Programmatic data access',
      available: ['Pro', 'Team', 'Enterprise'],
    },
    {
      feature: 'Priority Support',
      description: 'Fast-track issue resolution',
      available: ['Pro', 'Team', 'Enterprise'],
    },
    {
      feature: 'Dedicated Support',
      description: 'Account manager assigned',
      available: ['Team', 'Enterprise'],
    },
    {
      feature: 'On-premise Deployment',
      description: 'Self-hosted solution',
      available: ['Enterprise'],
    },
    {
      feature: 'SLA Guarantee',
      description: 'Service level agreement',
      available: ['Enterprise'],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Strategic Intelligence
              <br />
              <span className="text-emerald-400">For Decision Makers</span>
            </h1>
            <p className="text-xl text-slate-400 mb-12">
              Choose the plan that powers your organization's intelligence
              advantage. From startups to enterprises, REDWOUD scales with your
              strategic needs.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Find Your Perfect Plan
            </h2>
            <p className="text-xl text-slate-400">
              Transparent pricing for every stage of growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-2xl p-8 border-2 transition-all ${
                  selectedPlan === plan.name
                    ? 'border-emerald-400/30 ring-4 ring-emerald-400/20'
                    : 'border-slate-700'
                }`}
              >
                <div className="mb-6">
                  <h3
                    className={`text-2xl font-bold mb-2 ${plan.color}`}
                  >{`${plan.name}`}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-xl text-slate-400 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">
                    {plan.name === 'Enterprise'
                      ? 'Custom pricing for enterprise needs'
                      : 'Billed annually'}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-300">
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
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`w-full px-6 py-3 text-sm font-medium rounded-2xl transition-all ${
                    selectedPlan === plan.name
                      ? 'bg-emerald-400 text-slate-900 shadow-lg hover:shadow-emerald-400/50'
                      : 'bg-slate-700 text-white hover:bg-slate-600'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Feature Comparison Matrix */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              See exactly what you get with each plan
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full mb-12">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-sm font-semibold text-slate-400 py-4 px-6">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="text-center text-sm font-semibold text-slate-400 py-4 px-6"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {featuresMatrix.map((feature) => (
                  <tr
                    key={feature.feature}
                    className="border-b border-slate-700 last:border-b-0"
                  >
                    <td className="text-left text-sm text-slate-300 py-4 px-6">
                      <div className="flex items-center">
                        <svg
                          className="w-4 h-4 mr-3 text-emerald-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-white">
                            {feature.feature}
                          </p>
                          <p className="text-xs text-slate-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={plan.name}
                        className="text-center text-sm font-medium py-4 px-6"
                      >
                        {feature.available.includes(plan.name) ? (
                          <span className="text-emerald-400">✓</span>
                        ) : (
                          <span className="text-slate-500">✗</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enterprise Section */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Custom intelligence platforms for organizations with unique
              requirements
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-2xl p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Tailored for Your Organization
                </h3>
                <p className="text-lg text-slate-300 mb-6">
                  Enterprise plans include everything in Team plus custom
                  features designed around your specific intelligence needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-3 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">
                      Custom intelligence feeds and sources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-3 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">
                      On-premise deployment options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-3 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">
                      Dedicated account management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 mt-0.5 mr-3 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-slate-300">
                      24/7 priority support with SLA
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Enterprise Benefits
                </h3>
                <div className="space-y-6">
                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Unlimited Scale
                    </h4>
                    <p className="text-sm text-slate-300">
                      No user limits, no data caps, no restrictions
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Custom Integrations
                    </h4>
                    <p className="text-sm text-slate-300">
                      Connect REDWOUD with your existing systems
                    </p>
                  </div>
                  <div className="bg-slate-800 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Enhanced Security
                    </h4>
                    <p className="text-sm text-slate-300">
                      Enterprise-grade security and compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-4 text-lg font-medium bg-gradient-to-r from-emerald-400 to-emerald-500 text-white rounded-2xl hover:from-emerald-500 hover:to-emerald-600 transition-all">
                Contact Enterprise Sales
              </button>
              <p className="text-sm text-slate-400 mt-4">
                Our team will respond within 24 hours
              </p>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose REDWOUD
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              Strategic intelligence that drives better decisions
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Strategic Advantage
              </h3>
              <p className="text-sm text-slate-300">
                Stay ahead of market shifts and emerging risks with AI-powered
                insights
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
                Enterprise Grade
              </h3>
              <p className="text-sm text-slate-300">
                Built for scale with enterprise-grade security and compliance
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
                ROI Focused
              </h3>
              <p className="text-sm text-slate-300">
                Clear metrics and measurable impact on your decision-making
                process
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-400 mb-8">
              Join thousands of organizations making smarter decisions with
              REDWOUD
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
