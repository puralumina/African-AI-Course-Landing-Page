import React from 'react';
import { Star, MapPin } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: "Blessing Okoro",
      location: "Port Harcourt",
      earnings: "₦900,000/month",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      text: "I was skeptical at first, but Emmanuel's course exceeded all my expectations. The AI tools are incredible and the support is amazing. I'm now earning ₦900,000 monthly!",
      rating: 5
    },
    {
      name: "Ahmed Musa",
      location: "Kaduna",
      earnings: "₦1,100,000/month",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      text: "The step-by-step approach made everything so clear. Even as someone with zero tech background, I was able to build profitable websites. Highly recommended!",
      rating: 5
    },
    {
      name: "Chioma Nkem",
      location: "Enugu",
      earnings: "₦600,000/month",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      text: "As a single mother, this course gave me the financial freedom I desperately needed. The community support is incredible and the results speak for themselves.",
      rating: 5
    },
    {
      name: "Tunde Adebayo",
      location: "Ibadan",
      earnings: "₦1,800,000/month",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      text: "This is the best investment I've ever made. The AI strategies are cutting-edge and the earning potential is unlimited. I've already recovered my investment 100x over.",
      rating: 5
    },
    {
      name: "Grace Okafor",
      location: "Calabar",
      earnings: "₦750,000/month",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      text: "The course content is top-notch and very practical. I love how everything is explained in simple terms. My websites are now generating consistent income every month.",
      rating: 5
    },
    {
      name: "Emeka Okonkwo",
      location: "Onitsha",
      earnings: "₦1,300,000/month",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      text: "Emmanuel is a genius! The AI tools and strategies in this course are game-changers. I went from struggling businessman to earning over ₦1.3M monthly. Thank you!",
      rating: 5
    }
  ];

  return (
    <section id="success-stories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real Success Stories from 
            <span className="text-orange-500"> Nigerian Students</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what our students are saying about their transformation
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-gray-50 rounded-xl p-6">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-gray-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Student Reviews</div>
          </div>
          <div className="text-center bg-gray-50 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">2000+</div>
            <div className="text-gray-600">Active Students</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-4">
                {/* Rating */}
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Student Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">{testimonial.earnings}</div>
                    <div className="text-xs text-gray-500">Monthly</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Social Proof */}
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join the Success Community</h3>
          <p className="text-xl opacity-90 mb-6">
            Over 2000 Nigerians have already transformed their lives. You could be next!
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold">₦50M+</div>
              <div className="text-sm opacity-75">Total Student Earnings</div>
            </div>
            <div>
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm opacity-75">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-75">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;