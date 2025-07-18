import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need any prior experience with AI or website development?",
      answer: "No prior experience is required! This course is designed for absolute beginners from across Africa. You’ll learn step-by-step how to use AI tools to build fully functional websites—no coding, no design skills, and no tech background needed."
    },
    {
      question: "How much time do I need to dedicate daily?",
      answer: "You only need 30-45 minutes per day to complete the lessons. The course is structured to fit into your busy schedule, and you can learn at your own pace whether you're in Ghana, Kenya, South Africa, Nigeria, or anywhere else in Africa."
    },
    {
      question: "Is this course specifically for Africans?",
      answer: "Yes! This course is created by Africans for Africans , with a focus on tools, platforms, and opportunities that are accessible and relevant to the African context. However, the skills you'll learn can be applied globally."
    },
    {
      question: "How soon can I start building websites with AI?",
      answer: "You’ll start building simple websites within the first few lessons . By the end of the course, you’ll be able to create professional, fully functional websites in just 5 minutes using AI tools"
    },
    {
      question: "Do i need money to invest in AI tools?",
      answer: "The course teaches you how to use free tools and platforms to build and launch websites. No fee."
    },
    {
      question: "Is there ongoing support after I purchase?",
      answer: "Yes! You’ll get lifetime access to the course , plus a private community where you can ask questions, share your progress, and get support from instructors and fellow students."
    },
    {
      question: "Can I really earn ₦1,500,000 or more monthly with this?",
      answer: "95% of our students from across Africa are already earning $2,500 to over $10,000 monthly by building websites for clients, starting their own AI-powered agencies, or selling digital products. Your results depend on your effort and consistency."
    },
    {
      question: "What equipment do I need?",
      answer: "Just a computer or smartphone with internet access. All the AI tools we use are web-based, so you don't need expensive software or equipment. A reliable internet connection is the most important requirement."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked 
            <span className="text-orange-500"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our AI website building course
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 text-orange-500" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help you succeed. Get in touch with us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:puraluminaofficial@gmail.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Email Support
            </a>
            <a
              href="tel:+2348001234567"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Call Us: +234 800 123 4567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;