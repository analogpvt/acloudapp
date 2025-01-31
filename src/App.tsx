import React, { useState } from 'react';
import { Brain, Zap, Clock, Database, Sparkles, Target, Gauge } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('real-time');
  
  const pricingData = {
    'real-time': [
      { size: '8B', prices: ['$0.18', '$0.50', '$0.58', '$0.57', '$0.56', '$0.55'] },
      { size: '70B', prices: ['$0.70', '$0.59', '$0.33', '$0.30', '$0.28', '$0.25'] },
      { size: '40GB', prices: ['$3.50', '$0.75', '$0.60', '$0.45', '$0.00', '$0.59'] },
      { size: 'Deepseek-R1', prices: ['$2.00', '$1.00', '$0.50', '$0.30', '$0.70', '$0.80'] },
    ]
  };

  const timeWindows = ['Real time', '1 hour', '3 hours', '6 hours', '12 hours', '24 hours'];

  const codeExamples = {
    'real-time': `from openai import OpenAI
# OpenAI compatible API
client = OpenAI(
    base_url="https://api.acloudapp.ai/v1",
    api_key="my_acloudapp_api_key"
)
response = client.chat.completions.create(
    model="acloudapp/Meta-Llama-3.1-405B-Instruct-Turbo",
    messages=[
        {
            "role": "user",
            "content": "Provide an analysis of market trends in AI."
        }
    ]
)
print(response.choices[0].message.content)`,
    'async': `from openai import OpenAI
# OpenAI compatible API
client = OpenAI(
    base_url="https://api.acloudapp.ai/v1",
    api_key="my_acloudapp_api_key"
)
response = client.chat.completions.create(
    model="acloudapp/Meta-Llama-3.1-405B-Instruct-Turbo",
    messages=[{"role": "user", "content": "Analyze market trends."}],
    metadata={
        "@acloudapp.ai": {
            "callback_url": "https://my-webhook-receiver/callback",
            "async": True,
            "completion_window": "24h"
        }
    }
)`,
    'batch': `from openai import OpenAI
# OpenAI compatible API
client = OpenAI(
    base_url="https://api.acloudapp.ai/v1",
    api_key="your_acloudapp_api_key"
)
# Upload LLM requests
batch_input_file = client.files.create(
    file=open("batch_llm_requests.json", "rb"),
    purpose="batch"
)
# Start adaptive inference
batch_request = client.batches.create(
    input_file_id=batch_input_file.id,
    endpoint="v1/chat/completions",
    completion_window="24h"
)`
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-white" />
              <span className="font-bold text-xl text-white">acloudapp</span>
            </div>
            <button className="bg-[#6D28D9] text-white px-6 py-2 rounded-full font-medium hover:bg-[#5b21b6] transition-colors">
              Start building
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://framerusercontent.com/images/ZNJCADOlbYVQiJSME03HIUf4ms.jpg?scale-down-to=2048"
            alt="Background"
            className="w-full h-full object-cover animate-scale"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl font-bold mb-6 text-white animate-fade-in">
              Large scale<br />inference at small<br />scale cost
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              The developer platform that revolutionizes inference at scale
            </p>
            <button className="bg-[#6D28D9] text-white px-8 py-3 rounded-full font-medium hover:bg-[#5b21b6] transition-all transform hover:scale-105 animate-fade-in" style={{animationDelay: '0.4s'}}>
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Built for developers */}
      <div className="bg-[#6D28D9] text-white py-4 text-center">
        <p className="text-sm font-medium">Built for developers by developers</p>
      </div>

      {/* Rate Limits Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">We hate rate limits, too.</h2>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
          If you're investing in a premium service, it should unlock faster growth for you, not slow you down with unexpected limits and hidden fees.
        </p>
        <p className="text-gray-600 mt-4 animate-fade-in" style={{animationDelay: '0.4s'}}>It's time for a smarter solution.</p>
      </div>

      {/* Adaptive Inference Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-12 animate-fade-in">
              Introducing<br />
              <span className="text-[#6D28D9]">Adaptive Inference</span>
            </h2>
            <div className="space-y-8">
              <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
                <Zap className="w-8 h-8 text-[#6D28D9]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real-time</h3>
                  <p className="text-gray-600">Sub-second latency for live demands</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Clock className="w-8 h-8 text-[#6D28D9]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Asynchronous</h3>
                  <p className="text-gray-600">Low-cost for flexible timing, one-off requests</p>
                </div>
              </div>
              <div className="flex items-center gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
                <Database className="w-8 h-8 text-[#6D28D9]" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Batch</h3>
                  <p className="text-gray-600">Low-cost for high-volume, bulk processing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 animate-fade-in shadow-lg" style={{animationDelay: '0.4s'}}>
            <div className="flex gap-4 mb-4">
              {['real-time', 'async', 'batch'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded-full transition-all ${
                    activeTab === tab 
                      ? 'bg-[#6D28D9] text-white transform scale-105' 
                      : 'text-gray-600 hover:text-black'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="relative">
              {Object.entries(codeExamples).map(([tab, code]) => (
                <pre
                  key={tab}
                  className={`bg-gray-900 text-gray-300 p-4 rounded-lg font-mono text-sm tab-content ${
                    activeTab === tab ? 'active' : ''
                  }`}
                >
                  {code}
                </pre>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Models Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-2 animate-fade-in">
          LLAMA 3.3, LLAMA 3.1, and<br />DEEPSEEK-R1 MODELS
        </h2>
        <p className="text-center text-gray-600 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          Prices are per million input/output tokens
        </p>
        
        <div className="overflow-x-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4">MODEL SIZE</th>
                {timeWindows.map((window, i) => (
                  <th key={i} className="text-center py-4">{window}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData['real-time'].map((row, i) => (
                <tr key={i} className="border-t border-gray-200">
                  <td className="py-4 font-medium">{row.size}</td>
                  {row.prices.map((price, j) => (
                    <td key={j} className="text-center py-4 text-[#6D28D9]">{price}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-600 mt-4">Same terms and restrictions may apply</p>
      </div>

      {/* Why developers love section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          Why developers love <span className="text-[#6D28D9]">acloudapp</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-12 h-12 bg-[#6D28D9] rounded-full mx-auto mb-6 flex items-center justify-center">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">High volume by design</h3>
            <p className="text-gray-600">
              Experience seamless scalability and best-in-class rate limits, ensuring uninterrupted performance.
            </p>
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="w-12 h-12 bg-[#6D28D9] rounded-full mx-auto mb-6 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Predictable completion windows</h3>
            <p className="text-gray-600">
              Choose a timeframe that suits your needs—whether it's an hour or a full day, we've got you covered.
            </p>
          </div>
          <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="w-12 h-12 bg-[#6D28D9] rounded-full mx-auto mb-6 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">Unmatched value</h3>
            <p className="text-gray-600">
              Achieve top-tier performance and reliability at half the cost of leading providers.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2025 acloudapp technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
