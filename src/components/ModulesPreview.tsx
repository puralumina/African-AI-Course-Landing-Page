import React from 'react';
import { Play, FileText, Settings, BarChart, DollarSign, Lightbulb } from 'lucide-react';

const ModulesPreview = () => {
  const modules = [
    {
      icon: <Play className="h-8 w-8 text-blue-500" />,
      title: "Getting Started",
      lessons: 5,
      description: "Master the fundamentals of AI website building and set up your first profitable website",
      topics: ["AI Tools Overview", "Market Research", "Niche Selection", "Domain & Hosting", "First Website Setup"]
    },
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: "Content Strategy",
      lessons: 8,
      description: "Learn how to create compelling content that converts visitors into paying customers",
      topics: ["Content Planning", "AI Writing Tools", "SEO Optimization", "Visual Content", "Content Calendar"]
    },
    {
      icon: <Settings className="h-8 w-8 text-purple-500" />,
      title: "Automation Tools",
      lessons: 6,
      description: "Automate your website operations to work 24/7 without constant manual intervention",
      topics: ["Chatbots Setup", "Email Automation", "Social Media Integration", "Payment Processing", "Analytics"]
    },
    {
      icon: <BarChart className="h-8 w-8 text-orange-500" />,
      title: "Analytics & Growth",
      lessons: 7,
      description: "Track performance and scale your website business using data-driven strategies",
      topics: ["Google Analytics", "Conversion Tracking", "A/B Testing", "Performance Optimization", "Growth Hacking"]
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      title: "Monetization",
      lessons: 9,
      description: "Multiple revenue streams to maximize your earning potential from each website",
      topics: ["Affiliate Marketing", "Digital Products", "Service Offerings", "Subscription Models", "Ad Revenue"]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Advanced Strategies",
      lessons: 4,
      description: "Pro-level techniques to dominate your niche and achieve ₦1.5M+ monthly income",
      topics: ["Market Domination", "Scaling Systems", "Team Building", "Investment Strategies"]
    }
  ];

  const scrollToFinalCTA = () => {
    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="modules" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Course 
            <span className="text-orange-500"> Modules</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            39 comprehensive lessons covering everything you need to build a successful AI-powered website business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                      <p className="text-sm text-gray-500">{module.lessons} lessons</p>
                    </div>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Module {index + 1}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {module.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {module.topics.slice(0, 3).map((topic, topicIndex) => (
                      <li key={topicIndex} className="text-sm text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                        {topic}
                      </li>
                    ))}
                    {module.topics.length > 3 && (
                      <li className="text-sm text-gray-500 italic">
                        +{module.topics.length - 3} more topics...
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">39</div>
              <div className="text-gray-600">Total Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">12+</div>
              <div className="text-gray-600">Hours of Content</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">AI Tools Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600">Lifetime Access</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={scrollToFinalCTA}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Access All Modules Now
          </button>
          <p className="text-gray-600 mt-4">
            Join 2000+ students already building their AI website empire
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModulesPreview;