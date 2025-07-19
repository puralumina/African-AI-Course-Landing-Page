import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Introduction = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  
const testimonials = [
  {
    name: "Adunni Okafor",
    location: "Lagos, Nigeria",
    earnings: "₦800,000/month",
    text: "In just my first month, I made ₦800,000 building websites for local businesses. Having a professional portfolio instantly made clients trust me more and I started getting leads daily.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Kwame Boateng",
    location: "Accra, Ghana",
    earnings: "GH₵12,000/month",
    text: "I now earn GH₵12,000 monthly by building AI-powered websites for small businesses. My clients love how professional the sites look and trust me more than ever.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Sandile Khumalo",
    location: "East London, South Africa",
    earnings: "R13,200/month",
    text: "After being jobless for two years, I built my own online store and earned R13,200 in my first month selling handmade crafts. A professional website made all the difference.",
    image: "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Linet Chepkoech",
    location: "Eldoret, Kenya",
    earnings: "KSh95,000/month",
    text: "As a student, I never thought I'd earn KSh95,000 online. I now build websites for freelancers and they say my work makes them look more professional and trustworthy.",
    image: "https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Ugochukwu Mbadiwe",
    location: "Onitsha, Nigeria",
    earnings: "₦680,000/month",
    text: "I used to be a mechanic. Now I build websites for clients and earn ₦680,000 monthly. My professional website helped me attract better-paying clients.",
    image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Ama Serwaa",
    location: "Ho, Ghana",
    earnings: "GH₵7,500/month",
    text: "I learned AI from scratch and now earn GH₵7,500 monthly by selling digital courses online. A good website made my brand look credible and trustworthy.",
    image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Thandiwe Zulu",
    location: "Johannesburg, South Africa",
    earnings: "R35,000/month",
    text: "I was unemployed for a year before this. Now I earn R35,000 monthly building websites for local entrepreneurs. My site helped me win clients who trust my work.",
    image: "https://images.pexels.com/photos/4226257/pexels-photo-4226257.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Kevin Mutiso",
    location: "Kisumu, Kenya",
    earnings: "KSh85,000/month",
    text: "I dropped out of school but now I earn KSh85,000 monthly building websites for local startups. My website made people believe in me and my skills.",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Nana Yaa Boateng",
    location: "Suhum, Ghana",
    earnings: "GH₵7,500/month",
    text: "I started learning AI at 19 and now earn GH₵7,500 monthly by selling digital tools online. A clean, professional website gave me instant credibility.",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Chioma Nwankwo",
    location: "Enugu, Nigeria",
    earnings: "₦600,000/month",
    text: "I used to be a receptionist. Now I build websites for clients and earn ₦600,000 monthly. My site made people take me seriously as a web developer.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Yaw Mensah",
    location: "Takoradi, Ghana",
    earnings: "GH₵10,000/month",
    text: "This course gave me a new career. I now build websites for clients and earn GH₵10,000 monthly. A professional website helped me win trust and repeat business.",
    image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Zinhle Dlamini",
    location: "Pietermaritzburg, South Africa",
    earnings: "R25,000/month",
    text: "I used to sell crafts at the market. Now I earn R25,000 monthly from my own online store. A clean website made people trust me and buy more.",
    image: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Chinedu Eze",
    location: "Port Harcourt, Nigeria",
    earnings: "₦1,200,000/month",
    text: "I used to do odd jobs, but now I build websites for clients and earn ₦1.2M every month. My website made people see me as a real professional.",
    image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Esther Wambua",
    location: "Machakos, Kenya",
    earnings: "KSh78,000/month",
    text: "I used to work at a small kiosk. Now I run my own online store and earn KSh78,000 monthly. My website made customers trust me more and buy with confidence.",
    image: "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Bongani Dlamini",
    location: "Cape Town, South Africa",
    earnings: "R40,000/month",
    text: "I learned how to build websites and now I earn R40,000 per month. Clients trust me more now that I have a professional-looking site and portfolio.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Abena Mensah",
    location: "Tamale, Ghana",
    earnings: "GH₵8,000/month",
    text: "I'm a hairdresser by trade but now I earn GH₵8,000 a month by selling online courses. My website made my brand look professional and trustworthy.",
    image: "https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Chukwuma Nwosu",
    location: "Abuja, Nigeria",
    earnings: "₦1,200,000/month",
    text: "The step-by-step approach made it so easy. I now earn ₦1.2M monthly building websites for clients. My site gave me credibility and more leads.",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Thabo Mokoena",
    location: "Pretoria, South Africa",
    earnings: "R32,000/month",
    text: "I learned AI website development in just 3 months and now earn R32,000 monthly. Clients trust me more now that I have a professional-looking site.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Nia Wambua",
    location: "Nairobi, Kenya",
    earnings: "KSh150,000/month",
    text: "I used to work in a small shop. Now I make KSh150,000 a month with my own AI-powered website. It made me look credible and helped me gain loyal customers.",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Ify Okoro",
    location: "Benin City, Nigeria",
    earnings: "₦800,000/month",
    text: "I was stuck in a dead-end job. Now I earn ₦800,000 monthly from my own online store. My website gave me the credibility to start my own business.",
    image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Omondi Okello",
    location: "Mombasa, Kenya",
    earnings: "KSh110,000/month",
    text: "From driving a tuktuk to building AI-powered websites, I now earn KSh110,000 monthly. Clients trust me more because I have a professional website.",
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Wanjiru Kamau",
    location: "Nakuru, Kenya",
    earnings: "KSh100,000/month",
    text: "I used to teach part-time. Now I run my own AI business and earn KSh100,000 monthly. My website made clients trust me and pay more for my services.",
    image: "https://images.pexels.com/photos/2092709/pexels-photo-2092709.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Kwame Addo",
    location: "Cape Coast, Ghana",
    earnings: "GH₵6,800/month",
    text: "I'm a student but now I earn GH₵6,800 monthly by selling digital tools online. A professional website gave me the credibility I needed to grow.",
    image: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Fatima Ibrahim",
    location: "Kano, Nigeria",
    earnings: "₦950,000/month",
    text: "As a mother of three, this course gave me the financial independence I never thought possible. I now sell digital products online and earn ₦950,000 monthly.",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    name: "Nomvula Khumalo",
    location: "Durban, South Africa",
    earnings: "R28,000/month",
    text: "I'm a single mom and this course gave me the power to earn R28,000 monthly from my own online store. My website made customers trust me more.",
    image: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
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
                className="w-64 h-120 rounded-xl mx-auto lg:mx-0 object-cover shadow-2xl"
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