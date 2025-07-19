import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Introduction = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Adunni Okafor",
      location: "Lagos",
      earnings: "₦800,000",
      text: "Emmanuel's course changed my life completely. I went from struggling to make ends meet to earning ₦800,000 monthly with AI websites!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Chukwuma Nwosu",
      location: "Abuja",
      earnings: "₦1.2M",
      text: "The step-by-step approach made it so easy. I'm now earning ₦1.2M monthly and have the freedom to spend time with my family.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Fatima Ibrahim",
      location: "Kano",
      earnings: "₦950,000",
      text: "As a mother of three, this course gave me the financial independence I never thought possible. ₦950,000 monthly working part-time!",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Creator Bio */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="../wise1.jpg"
                alt="Emmanuel - Course Creator"
                className="w-64 h-64 rounded-xl mx-auto lg:mx-0 object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold">
                5+ Years Experience
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Hi, I'm <span className="text-orange-500">Wise Stephen</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I've been helping Africans build successful online businesses for over 5 years. 
                After discovering the power of AI for website creation, I've helped thousands of 
                students earn life-changing income building website for their online presence or for businesses or even building to sell their products or services in 5 minutes using AI. All this using free tools. Yes your heard well, the secret hidden tools i will give you are free and revolutionary.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2000+</div>
                  <div className="text-sm text-gray-600">Students Taught</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$200M+</div>
                  <div className="text-sm text-gray-600">Student Earnings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">97%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Rotating Testimonials */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
                What Our Students Say
              </h3>
              
              <div className="relative h-80 overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 ${
                      index === currentTestimonial 
                        ? 'opacity-100 transform translate-x-0' 
                        : 'opacity-0 transform translate-x-full'
                    }`}
                  >
                    <div className="text-center space-y-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto object-cover"
                      />
                      
                      <div className="flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div>
                        <div className="font-bold text-xl text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.location}</div>
                        <div className="text-2xl font-bold text-green-600 mt-2">
                          {testimonial.earnings} monthly
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;