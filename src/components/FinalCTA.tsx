import React from 'react';
import { Gift, Clock, CheckCircle, Shield } from 'lucide-react';

const FinalCTA = () => {
  const benefits = [
    "Complete 26-lesson AI website building course",
    "Private community",
    "Weekly live Q&A sessions",
    "30-day money-back guarantee",
    "Lifetime access to all course materials and future updates"
  ];

  return (
    <section id="final-cta" className="py-16 bg-gradient-to-br from-black to-orange-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Limited Time Offer Badge */}
          <div className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-full mb-8 animate-pulse">
            <Gift className="h-5 w-5 mr-2" />
            <span className="font-bold">LIMITED TIME OFFER</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Life Today
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Join thousands of Africans earning $5,000+ monthly with AI websites
          </p>

          {/* Urgency Message */}
          <div className="mt-8 bg-red-500 bg-opacity-20 border border-red-400 rounded-lg p-4">
            <p className="text-lg font-semibold">
              ⚠️ Only 13/100 spots remaining at this special price of $49!
            </p>
            <p className="text-sm opacity-90 mt-2">
              Price increases to $399 after this promotion ends
            </p>
          </div><br></br>

          {/* Main CTA Button */}
          <a 
            href="https://buy.stripe.com/28E4gzeKH1x1dyB2TM8Zq05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all duration-200 transform hover:scale-105 shadow-2xl mb-6 w-full sm:w-auto text-center"
          >
            Get Instant Access Now
          </a>

          {/* Security Badges */}
          <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div><br></br><br></br>

          {/* Pricing */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 mr-2 text-yellow-400" />
              <span className="text-lg font-semibold">Offer expires in 48 hours</span>
            </div>
            
            <div className="text-center mb-6">
              <div className="text-lg opacity-75 line-through">Regular Price: $399</div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">$49</div>
              <div className="text-lg opacity-90">One-time payment • Lifetime access</div>
            </div>

            <div className="bg-green-500 text-white px-4 py-2 rounded-lg inline-block font-semibold">
              Save $350 Today (90% OFF)
            </div>
          </div>

          {/* Benefits Checklist */}
          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-left text-left">
                <CheckCircle className="h-6 w-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Main CTA Button */}
          <a 
            href="https://buy.stripe.com/28E4gzeKH1x1dyB2TM8Zq05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-xl font-bold text-2xl transition-all duration-200 transform hover:scale-105 shadow-2xl mb-6 w-full sm:w-auto text-center"
          >
            Get Instant Access Now
          </a>

          {/* Security Badges */}
          <div className="flex items-center justify-center space-x-6 text-sm opacity-75">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>30-Day Money-Back Guarantee</span>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="mt-8 bg-red-500 bg-opacity-20 border border-red-400 rounded-lg p-4">
            <p className="text-lg font-semibold">
              ⚠️ Only 13/100 spots remaining at this special price of $49!
            </p>
            <p className="text-sm opacity-90 mt-2">
              Price increases to $399 after this promotion ends
            </p>
          </div>

          {/* Final Social Proof */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">2000+</div>
              <div className="text-sm opacity-75">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl font-bold">$250M+</div>
              <div className="text-sm opacity-75">Student Earnings</div>
            </div>
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-sm opacity-75">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;