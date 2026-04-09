'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, ArrowLeft, ArrowRight, CheckCircle, Clock, AlertCircle, Smartphone } from 'lucide-react'

const NETWORKS = [
  { id: 'safaricom', name: 'Safaricom', color: 'bg-green-500', subscribers: '43M+' },
  { id: 'airtel', name: 'Airtel Kenya', color: 'bg-red-500', subscribers: '17M+' },
  { id: 'telkom', name: 'Telkom Kenya', color: 'bg-orange-500', subscribers: '5M+' },
  { id: 'faiba', name: 'Faiba 4G', color: 'bg-purple-500', subscribers: '1M+' },
]

const STEPS = [
  {
    step: 1,
    title: 'Check Eligibility',
    description: 'Ensure your number is at least 90 days old and has no outstanding bills',
    duration: '5 mins',
    icon: CheckCircle,
  },
  {
    step: 2,
    title: 'Request Porting Code',
    description: 'SMS "PORT" to 900 or visit current network\'s shop',
    duration: '10 mins',
    icon: Smartphone,
  },
  {
    step: 3,
    title: 'Visit New Network',
    description: 'Go to new network with ID and porting code',
    duration: '30 mins',
    icon: Phone,
  },
  {
    step: 4,
    title: 'Wait for Transfer',
    description: 'Transfer completes within 48 hours (usually same day)',
    duration: '24-48 hrs',
    icon: Clock,
  },
]

export default function MobilePortabilityPage() {
  const [currentNetwork, setCurrentNetwork] = useState('safaricom')
  const [targetNetwork, setTargetNetwork] = useState('airtel')

  const currentNetworkData = NETWORKS.find(n => n.id === currentNetwork) || NETWORKS[0]
  const targetNetworkData = NETWORKS.find(n => n.id === targetNetwork) || NETWORKS[1]

  return (
    <div className="min-h-screen bg-[#050505] py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#ccff00] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to all tools
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-space font-bold text-white mb-2">Mobile Number Portability</h1>
          <p className="text-zinc-400">Keep your number when switching networks in Kenya</p>
        </div>

        {/* Network Selection */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Network */}
            <div>
              <label className="block text-sm text-zinc-400 mb-3">Current Network</label>
              <div className="space-y-2">
                {NETWORKS.map((network) => (
                  <button
                    key={network.id}
                    onClick={() => {
                      setCurrentNetwork(network.id)
                      if (network.id === targetNetwork) {
                        setTargetNetwork(NETWORKS.find(n => n.id !== network.id)?.id || 'airtel')
                      }
                    }}
                    className={`w-full p-4 border transition-all flex items-center justify-between ${
                      currentNetwork === network.id
                        ? 'bg-teal-500/20 border-teal-500'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${network.color}`} />
                      <span className={currentNetwork === network.id ? 'text-teal-400 font-medium' : 'text-white'}>
                        {network.name}
                      </span>
                    </div>
                    <span className="text-zinc-500 text-sm">{network.subscribers}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-teal-400" />
              </div>
            </div>

            {/* Target Network */}
            <div className="md:-ml-16">
              <label className="block text-sm text-zinc-400 mb-3">Switch To</label>
              <div className="space-y-2">
                {NETWORKS.map((network) => (
                  <button
                    key={network.id}
                    onClick={() => setTargetNetwork(network.id)}
                    disabled={network.id === currentNetwork}
                    className={`w-full p-4 border transition-all flex items-center justify-between ${
                      targetNetwork === network.id
                        ? 'bg-[#ccff00]/20 border-[#ccff00]'
                        : network.id === currentNetwork
                        ? 'bg-white/5 border-white/5 text-zinc-600 cursor-not-allowed'
                        : 'bg-white/5 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full ${network.color}`} />
                      <span className={targetNetwork === network.id ? 'text-[#ccff00] font-medium' : network.id === currentNetwork ? 'text-zinc-600' : 'text-white'}>
                        {network.name}
                      </span>
                    </div>
                    <span className="text-zinc-500 text-sm">{network.subscribers}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Card */}
        <div className="backdrop-blur-xl  border border-teal-500/20 p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Your Port Request</h2>
          
          <div className="flex items-center justify-center gap-4 py-6">
            <div className="text-center">
              <div className={`w-16 h-16 ${currentNetworkData.color} flex items-center justify-center mx-auto mb-2`}>
                <Phone className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-medium">{currentNetworkData.name}</p>
              <p className="text-zinc-500 text-sm">Current</p>
            </div>
            
            <ArrowRight className="w-8 h-8 text-teal-400" />
            
            <div className="text-center">
              <div className={`w-16 h-16 ${targetNetworkData.color} flex items-center justify-center mx-auto mb-2`}>
                <Phone className="w-8 h-8 text-white" />
              </div>
              <p className="text-white font-medium">{targetNetworkData.name}</p>
              <p className="text-zinc-500 text-sm">New Network</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#ccff00]">FREE</p>
              <p className="text-zinc-400 text-sm">Porting Cost</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-space font-bold text-white">48hrs</p>
              <p className="text-zinc-400 text-sm">Max Time</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-space font-bold text-white">1</p>
              <p className="text-zinc-400 text-sm">Port per 90 days</p>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-white mb-6">How to Port Your Number</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {STEPS.map((step) => (
              <div key={step.step} className="bg-white/5 backdrop-blur-xl border border-white/10 p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-full flex items-center justify-center">
                    <span className="text-teal-400 font-bold text-sm">{step.step}</span>
                  </div>
                  <step.icon className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm mb-3">{step.description}</p>
                <p className="text-zinc-500 text-xs">⏱️ {step.duration}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">✅ Eligibility Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3">
              {[
                'Number must be at least 90 days old on current network',
                'No outstanding bills or debts',
                'Number must be active (not suspended)',
                'Valid national ID or passport',
              ].map((req) => (
                <li key={req} className="flex items-center gap-2 text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-[#ccff00] flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {[
                'Cannot port more than once in 90 days',
                'M-Pesa balance will remain (Safaricom)',
                'Some bundles may be lost during transfer',
                'You\'ll need to re-register for mobile money',
              ].map((note) => (
                <li key={note} className="flex items-center gap-2 text-sm text-zinc-300">
                  <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick SMS Guide */}
        <div className=" backdrop-blur-xl  border border-teal-500/20 p-6">
          <h2 className="text-lg font-semibold text-white mb-4">📱 Quick Port via SMS</h2>
          <div className="bg-zinc-900/50  p-4 font-mono text-center mb-4">
            <p className="text-zinc-400 text-sm mb-1">Send SMS to:</p>
            <p className="text-3xl text-white font-bold">PORT → 900</p>
          </div>
          <p className="text-zinc-400 text-sm text-center">
            You'll receive a unique porting code valid for 15 days. Take this code and your ID to any {targetNetworkData.name} shop.
          </p>
        </div>
      </div>
    </div>
  )
}
