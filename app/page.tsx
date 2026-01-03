// app/page.tsx
'use client';

import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen gradient-bg text-white flex flex-col antialiased">
          {/* Hero */}
          <section className="pt-32 pb-20 px-4 text-center flex-grow">
            <img
              src="/logo.jpg"
              alt="DenimForge Logo"
              className="mx-auto mb-10 h-40 md:h-48 glow"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Long Videos → Viral Clips<br /><span className="text-primary">That Actually Perform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Elevate your content with AI that predicts viral potential, handles multilingual dubbing flawlessly, and locks in your unique brand voice. Creators and agencies: Achieve higher engagement with less effort.
            </p>
            {/* Before / After */}
            <div className="w-full max-w-5xl mx-auto mb-10 grid md:grid-cols-2 gap-6">
              <div className="relative rounded-2xl overflow-hidden glow bg-gray-800">
                <img src="https://via.placeholder.com/800x450/1e1b4b/ffffff?text=Before%3A+Generic+Clip" alt="Before" className="w-full h-auto" />
                <div className="absolute bottom-4 left-4 bg-black/60 px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Before: Generic Clip
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden glow bg-gray-800">
                <img src="https://via.placeholder.com/800x450/6366f1/ffffff?text=After%3A+DenimForge+Optimized" alt="After" className="w-full h-auto" />
                <div className="absolute bottom-4 left-4 bg-primary/80 px-4 py-2 rounded-lg text-white text-sm font-medium">
                  After: DenimForge Optimized
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-8 text-center">See the difference: Viral hooks, perfect captions, and your brand voice.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#waitlist" className="bg-primary hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl text-lg glow transition-all duration-300">Join Waitlist Free</a>
            </div>
            <p className="text-sm text-gray-400 mt-6">Trusted by creators | Launching Q1 2026</p>
          </section>

          {/* Features */}
          <section id="features" className="py-16 px-4 bg-gray-800/50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">Why Creators Choose DenimForge</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 rounded-2xl bg-gray-900/50 hover:bg-primary/10 glow">
                  <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">🎯</div>
                  <h3 className="text-2xl font-semibold mb-4">Viral Score Predictor</h3>
                  <p className="text-gray-300 mb-6">AI analyzes trends to suggest hooks with high engagement potential.</p>
                  <ul className="text-left text-sm text-gray-400 space-y-1">
                    <li>• 85%+ engagement probability</li>
                    <li>• Trend-based recommendations</li>
                  </ul>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gray-900/50 hover:bg-primary/10 glow">
                  <div className="w-20 h-20 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">🌍</div>
                  <h3 className="text-2xl font-semibold mb-4">Multilingual Excellence</h3>
                  <p className="text-gray-300 mb-6">Accurate transcription and dubbing in 50+ languages and accents.</p>
                  <ul className="text-left text-sm text-gray-400 space-y-1">
                    <li>• 99% accuracy</li>
                    <li>• Natural translations</li>
                  </ul>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gray-900/50 hover:bg-primary/10 glow">
                  <div className="w-20 h-20 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">🗣️</div>
                  <h3 className="text-2xl font-semibold mb-4">Brand Voice Lock-In</h3>
                  <p className="text-gray-300 mb-6">AI adapts to your style and tone from sample uploads.</p>
                  <ul className="text-left text-sm text-gray-400 space-y-1">
                    <li>• Consistent custom output</li>
                    <li>• Built-in ROI tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section id="how-it-works" className="py-16 px-4 bg-gray-900">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-3xl">1</div>
                  <h3 className="text-xl font-semibold mb-2">Upload Your Video</h3>
                  <p className="text-gray-400">Drop in your long-form content — podcasts, interviews, or tutorials.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-3xl">2</div>
                  <h3 className="text-xl font-semibold mb-2">AI Analyzes & Optimizes</h3>
                  <p className="text-gray-400">Viral Score predicts best clips, multilingual dubbing, brand voice applied.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-3xl">3</div>
                  <h3 className="text-xl font-semibold mb-2">Preview & Export</h3>
                  <p className="text-gray-400">See unlimited previews, make final tweaks, export in HD for any platform.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center text-3xl">4</div>
                  <h3 className="text-xl font-semibold mb-2">Track Performance</h3>
                  <p className="text-gray-400">Built-in analytics show which clips drive real engagement and ROI.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Simple, Predictable Pricing</h2>
              <p className="text-xl text-gray-400 mb-12">No credit surprises. Unlimited previews. Agencies love flat tiers.</p>
              <div className="flex justify-center mb-12">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only" onchange="togglePricing()" />
                  <div className="w-20 h-10 bg-gray-700 rounded-full peer-checked:bg-primary peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:transition-all"></div>
                  <span className="ml-3 text-sm font-medium">Monthly / Yearly (Save 17%)</span>
                </label>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="border-2 border-gray-700 p-8 rounded-2xl hover:border-primary/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4">Free</h3>
                  <div className="text-4xl font-bold text-green-400 mb-6">$0</div>
                  <ul className="text-left space-y-3 mb-8 text-sm">
                    <li>• 5 low-res previews/mo</li>
                    <li>• Basic clipping</li>
                    <li>• Watermark</li>
                  </ul>
                  <button className="w-full bg-gray-800 hover:bg-gray-700 py-4 px-6 rounded-xl font-semibold">Get Started</button>
                </div>
                <div className="border-2 border-gray-700 p-8 rounded-2xl hover:border-primary/50 transition-all">
                  <h3 className="text-2xl font-bold mb-4">Starter</h3>
                  <div className="text-4xl font-bold text-primary mb-6 yearly-price"><span id="starter-mo">$15</span><span id="starter-yr" class="hidden text-sm">/mo ($180/yr)</span></div>
                  <ul class="text-left space-y-3 mb-8 text-sm">
                    <li>• 150 credits</li>
                    <li>• Multilingual</li>
                    <li>• HD exports</li>
                  </ul>
                  <button class="w-full bg-primary hover:bg-indigo-700 py-4 px-6 rounded-xl font-semibold text-white">Choose Starter</button>
                </div>
                <div class="border-2 border-primary p-8 rounded-2xl relative bg-primary/10 glow md:col-span-2 lg:col-span-1">
                  <span class="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black text-xs px-3 py-1 rounded-full font-bold">Most Popular</span>
                  <h3 class="text-2xl font-bold mb-4">Pro</h3>
                  <div class="text-4xl font-bold text-primary mb-6 yearly-price"><span id="pro-mo">$30</span><span id="pro-yr" class="hidden text-sm">/mo ($300/yr)</span></div>
                  <ul class="text-left space-y-3 mb-8 text-sm">
                    <li>• 300+ credits</li>
                    <li>• All features + Analytics</li>
                    <li>• Viral Score + Brand Lock</li>
                  </ul>
                  <button class="w-full bg-primary hover:bg-indigo-700 py-4 px-6 rounded-xl font-semibold text-white shadow-lg">Get Pro Now</button>
                </div>
                <div class="border-2 border-gray-700 p-8 rounded-2xl hover:border-primary/50 transition-all">
                  <h3 class="text-2xl font-bold mb-4">Agency</h3>
                  <div class="text-4xl font-bold text-primary mb-6 yearly-price"><span id="agency-mo">$70</span><span id="agency-yr" class="hidden text-sm">/mo ($700/yr)</span></div>
                  <ul class="text-left space-y-3 mb-8 text-sm">
                    <li>• Unlimited</li>
                    <li>• White-label + Teams</li>
                    <li>• Priority support</li>
                  </ul>
                  <button class="w-full border-2 border-primary hover:bg-indigo-900/20 py-4 px-6 rounded-xl font-semibold">Contact Sales</button>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section class="py-16 px-4 bg-gray-900">
            <div class="max-w-4xl mx-auto">
              <h2 class="text-4xl font-bold text-center mb-12">What Early Adopters Say</h2>
              <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-gray-800/50 p-8 rounded-2xl">
                  <p class="text-gray-300 mb-4">"The Viral Score helped my clips get 5x more views. Multilingual support is a game-changer for global reach!"</p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-primary rounded-full mr-4"></div>
                    <span class="font-semibold">Alex K., Agency Owner</span>
                  </div>
                </div>
                <div class="bg-gray-800/50 p-8 rounded-2xl">
                  <p class="text-gray-300 mb-4">"Brand voice consistency saves me hours of editing. Output feels truly custom."</p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-accent rounded-full mr-4"></div>
                    <span class="font-semibold">Maria L., Content Creator</span>
                  </div>
                </div>
                <div class="bg-gray-800/50 p-8 rounded-2xl">
                  <p class="text-gray-300 mb-4">"Unlimited previews and flat pricing make it perfect for high-volume production."</p>
                  <div class="flex items-center">
                    <div class="w-12 h-12 bg-blue-800 rounded-full mr-4"></div>
                    <span class="font-semibold">Raj P., Freelancer</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Waitlist Form */}
          <section id="waitlist" class="py-16 px-4 gradient-bg">
            <div class="max-w-md mx-auto text-center">
              <h2 class="text-4xl font-bold mb-6">Be First in Line</h2>
              <p class="text-xl text-gray-300 mb-12">Join 500+ waiting creators. Get early access, 50% off Pro first month, and viral clip templates.</p>
              <form name="waitlist" method="POST" data-netlify="true" netlify-honeypot="bot-field" class="space-y-4">
                <input type="hidden" name="form-name" value="waitlist">
                <div class="sr-only"><input name="bot-field"></div>
                <input type="email" name="email" placeholder="your@email.com" required class="w-full p-4 bg-white/10 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-primary focus:outline-none" autocomplete="email">
                <select name="pain-point" class="w-full p-4 bg-white/10 border border-gray-600 rounded-xl text-white focus:border-primary">
                  <option>What excites you most about DenimForge?</option>
                  <option>Viral prediction</option>
                  <option>Multilingual support</option>
                  <option>Brand consistency</option>
                  <option>Other</option>
                </select>
                <button type="submit" class="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-5 px-8 rounded-xl text-lg glow transition-all">Join Waitlist</button>
              </form>
              <p class="text-sm text-gray-400 mt-6">No spam. Unsubscribe anytime.</p>
            </div>
          </section>

          {/* Footer */}
          <footer class="py-12 px-4 bg-gray-950 border-t border-gray-800">
            <div class="max-w-6xl mx-auto text-center">
              <img src="/logo.jpg" alt="DenimForge Logo" class="mx-auto mb-6 h-12">
              <p class="text-gray-400 mb-6">&copy; 2025 DenimForge. Built for creators who value performance and consistency.</p>
              <div class="flex justify-center space-x-6 text-gray-500 mt-4">
                <a href="mailto:denimforgeai@outlook.com">Contact</a>
                <a href="/privacy.html">Privacy Policy</a>
                <a href="/terms.html">Terms of Service</a>
                <a href="https://x.com/denimforgeai" target="_blank">X</a>
                <a href="https://reddit.com/r/denimforgeai" target="_blank">Reddit</a>
              </div>
            </div>
          </footer>
        </SignedIn>

        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    );
  }
}