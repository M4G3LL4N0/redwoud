"use client";

import React from "react";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-amber-500 mb-4">
            Investor Presentation
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Redefining Global Intelligence
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
            REDWOUD is building the operating system for strategic intelligence—transforming how organizations anticipate, interpret, and act on global signals.
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Market Opportunity</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              The global intelligence and risk analytics market exceeds $50B and is growing at 15% annually. Yet incumbent solutions remain fragmented, reactive, and inaccessible to all but the largest institutions.
            </p>
            <p>
              Organizations across government, finance, and enterprise face an explosion of data sources—from news and social media to satellite imagery and financial flows—with no unified layer to extract signal from noise.
            </p>
            <p>
              REDWOUD captures this $15B addressable segment by delivering an integrated platform that combines real-time data ingestion, AI-powered analysis, and intuitive visualization—democratizing capabilities once reserved for nation-states.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Now</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-3">Data Proliferation</h3>
              <p className="text-gray-400">
                The volume of unstructured global data doubles every 18 months. Traditional tools cannot scale to this velocity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-3">AI Maturity</h3>
              <p className="text-gray-400">
                Advances in multimodal AI now enable reliable extraction of insights from text, imagery, and numerical data at unprecedented speed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-500 mb-3">Geopolitical Volatility</h3>
              <p className="text-gray-400">
                Supply chain disruptions, regulatory shifts, and climate events have made proactive intelligence a board-level priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Business Model</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              REDWOUD operates a SaaS subscription model with tiered pricing based on data volume, user seats, and advanced feature access. Our core offering is a cloud-based platform accessible via web and API.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Subscription Revenue</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Enterprise contracts: $100K–$1M+ annually</li>
                  <li>• Mid-market tiers: $25K–$100K annually</li>
                  <li>• API usage-based add-ons</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Unit Economics</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Gross margin: 85%+ (cloud-native)</li>
                  <li>• LTV:CAC ratio: 5.2x (current cohort)</li>
                  <li>• Net revenue retention: 138%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Ladder */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Expansion Ladder</h2>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Core Intelligence Platform</h3>
                <p className="text-gray-400">
                  Unified dashboard for monitoring, analysis, and alerting across global risk domains. Initial focus on government and financial services.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vertical Solutions</h3>
                <p className="text-gray-400">
                  Industry-specific modules for supply chain, energy, cybersecurity, and climate risk—each with tailored data feeds and workflows.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Ecosystem & Integrations</h3>
                <p className="text-gray-400">
                  Marketplace for third-party data providers and analytics, plus native integrations with ERP, GRC, and workflow systems.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Autonomous Intelligence</h3>
                <p className="text-gray-400">
                  AI agents that not only inform but execute recommended actions—automating risk mitigation and opportunity capture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Competitive Moat</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Data Network Effects</h3>
              <p className="text-gray-400">
                Each customer interaction refines our models. As coverage expands, the platform becomes more accurate and valuable for all users—creating a self-reinforcing advantage.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Proprietary Pipelines</h3>
              <p className="text-gray-400">
                We own and operate direct ingest relationships with hundreds of data sources, many exclusive, that cannot be replicated by pure software competitors.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Domain Expertise</h3>
              <p className="text-gray-400">
                Our team combines former intelligence analysts, data scientists, and domain experts—enabling us to build models that understand context, not just correlation.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-amber-500 mb-4">Enterprise Trust</h3>
              <p className="text-gray-400">
                Security certifications, compliance frameworks, and a track record of reliability make REDWOUD the safe choice for regulated institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-term Roadmap */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Long-term Roadmap</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>
            <div className="space-y-12">
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0a0a0a]"></div>
                <h3 className="text-xl font-semibold mb-2">2024–2025: Foundation</h3>
                <p className="text-gray-400">
                  Scale core platform to 100+ enterprise customers; achieve SOC 2 Type II; expand data coverage to 150+ countries; build out vertical-specific modules.
                </p>
              </div>
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0a0a0a]"></div>
                <h3 className="text-xl font-semibold mb-2">2026–2027: Expansion</h3>
                <p className="text-gray-400">
                  Launch marketplace ecosystem; enter APAC and EMEA markets; achieve $50M ARR; develop autonomous agent capabilities.
                </p>
              </div>
              <div className="relative pl-20">
                <div className="absolute left-6 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#0a0a0a]"></div>
                <h3 className="text-xl font-semibold mb-2">2028+: Transformation</h3>
                <p className="text-gray-400">
                  Become the default intelligence layer for global business; enable predictive decision-making at scale; explore IPO or strategic partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potential Outcomes / Scale */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-gray-800">
        <div className="max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Potential Outcomes & Scale</h2>
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 md:p-12 rounded-2xl border border-gray-800 mb-10">
            <h3 className="text-2xl font-semibold mb-6 text-amber-500">Financial Projections (Base Case)</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">$50M</p>
                <p className="text-gray-400 text-sm uppercase tracking-wide">ARR by 2027</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">35%</p>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Gross Margin</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">$500M</p>
                <p className="text-gray-400 text-sm uppercase tracking-wide">Enterprise Value (Exit)</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              With continued execution, REDWOUD can achieve $100M+ ARR within five years and position itself as a foundational layer in the global risk intelligence stack. The total addressable market extends beyond $50B when considering adjacent verticals and international expansion.
            </p>
            <p>
              Our vision is not merely to build a profitable company, but to establish a new category—one where strategic intelligence is accessible, actionable, and essential for every organization that operates in an increasingly complex world.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} REDWOUD. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Confidential and for investor review only.
          </p>
        </div>
      </footer>
    </div>
  );
}
