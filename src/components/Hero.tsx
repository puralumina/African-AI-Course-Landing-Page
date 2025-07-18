import React, { useState } from 'react';
import { Play, Star, Eye, Users, Calendar } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToFinalCTA = () => {
    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-orange-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Build Fully Functional 
                <span className="text-orange-500"> Websites with AI </span> 
                in Just 5 Minutes
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Learn how to earn at least <span className="font-bold text-green-600">$2,000 every month</span> building websites for businesses in just 5 minutes. You can use the tools in this course to build your online presence and also sell your products and services. I show you everything. No coding. No design skills. Just AI-powered speed and simplicity in 5 minutes.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToFinalCTA}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start Your Journey Now
              </button>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">4.9/5 from 500+ reviews</span>
              </div>
            </div>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <Eye className="h-5 w-5" />
                  <span className="font-bold text-lg">6M+</span>
                </div>
                <p className="text-sm text-gray-600">Views</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
                  <Users className="h-5 w-5" />
                  <span className="font-bold text-lg">100K+</span>
                </div>
                <p className="text-sm text-gray-600">Subscribers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                  <Calendar className="h-5 w-5" />
                  <span className="font-bold text-lg">5+</span>
                </div>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Minimum Guaranteed Monthly Earnings</h3>
                <div className="text-5xl font-bold text-green-600">$4,000+</div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">This Month:</span>
                    <span className="font-semibold text-green-600">$6,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Last Month:</span>
                    <span className="font-semibold">$5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth:</span>
                    <span className="font-semibold text-green-600">+30%</span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg">
                  Start earning a minimum of $1000 in your 1st week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://d1yei2z3i6k35z.cloudfront.net/5640649/68794abced099_test.mp4"
      />
    </section>
  );
};

export default Hero;