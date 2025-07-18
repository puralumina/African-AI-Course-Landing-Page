import React from 'react';
import { CheckCircle, TrendingUp, Clock, Users, Shield, Zap } from 'lucide-react';

const ValueProposition = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
      title: "Step-by-step guidance for beginners",
      description: "No prior experience needed. We start from the very basics and guide you through every step."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-500" />,
      title: "Proven strategies for ₦1,500,000 monthly",
      description: "Battle-tested methods that have helped thousands of Nigerians achieve financial freedom."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-500" />,
      title: "Work just a few hours per week",
      description: "Spend more time with family while AI handles the heavy lifting of website creation."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "No prior experience needed",
      description: "Whether you're a student, parent, or professional, this course is designed for complete beginners."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-500" />,
      title: "Lifetime access and support",
      description: "Get lifetime access to all course materials plus ongoing support from our community."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "AI-powered automation",
      description: "Leverage cutting-edge AI tools to build professional websites in minutes, not months."
    }
  ];

  const scrollToFinalCTA = () => {
    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Life with 
            <span className="text-orange-500"> AI Website Building</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Nigerians who have already transformed their lives using our proven AI website building system.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Story Showcase */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Success Story Spotlight</h3>
              <p className="text-xl mb-6 opacity-90">
                "I went from earning ₦50,000 monthly as a teacher to making ₦1.8M monthly with AI websites. 
                This course literally changed my family's entire future."
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                  alt="Success Story"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-lg">Kemi Adebayo</div>
                  <div className="opacity-75">Former Teacher, Lagos</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">₦1.8M</div>
                <div className="text-sm opacity-75">Monthly Revenue</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">3600%</div>
                <div className="text-sm opacity-75">Income Increase</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">15</div>
                <div className="text-sm opacity-75">Hours/Week</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold">6</div>
                <div className="text-sm opacity-75">Months to Success</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToFinalCTA}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Start Your Transformation Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;