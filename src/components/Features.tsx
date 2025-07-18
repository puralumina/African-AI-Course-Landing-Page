import React from 'react';
import { TrendingUp, Zap, MapPin, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <TrendingUp className="h-12 w-12 text-green-500" />,
      title: "Beat Poverty",
      description: "Break free from financial struggles with proven AI website strategies that generate consistent monthly income of $5,000+",
      stats: "95% of students see income increase within 1 week"
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Effortless Scaling",
      description: "Scale your website business automatically with free AI tools that work 24/7, allowing you to earn while you sleep",
      stats: "Students average 300% growth in first 2 months"
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-500" />,
      title: "For Africans, By an African",
      description: "Strategies specifically designed for the African market, with local payment methods, audience insights, and cultural understanding",
      stats: "Tailored for African economy and opportunities"
    },
    {
      icon: <Users className="h-12 w-12 text-purple-500" />,
      title: "Community Support",
      description: "Join a thriving community of 2000+ African entrepreneurs supporting each other's success journey",
      stats: "24/7 support from fellow African entrepreneurs"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our 
            <span className="text-orange-500"> AI Website Course</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for Africans who want to build a sustainable online income using the power of AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-center space-y-4">
                <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="bg-orange-100 text-orange-800 px-3 py-2 rounded-lg text-sm font-medium">
                  {feature.stats}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">
              Special Bonus
            </h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              You'll get exclusive access to the best free paid tools worth $4,999 including strategies to get every tools free forever. You'll receive all my best strategies that most courses keep secret and don't teach. Imagine the massive opportunity reaching people throughout the internet using lifetime free tools. Sky is the limit.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">$2.6 Trillion+</div>
                <div className="text-sm opacity-75">Africa's Total GDP</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">650M+</div>
                <div className="text-sm opacity-75">Internet Users in Africa</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm opacity-75">Mobile Internet Usage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;