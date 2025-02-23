import React from 'react';
import { ArrowRight } from 'lucide-react';

function App() {
  React.useEffect(() => {
    // Load Senja widget script
    const script = document.createElement('script');
    script.src = "https://widget.senja.io/widget/3f5b78c1-5b68-45c9-a73d-b24ca6d58921/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-hero-gradient relative overflow-hidden">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="flex items-center space-x-2">
          <img 
            src="https://cognaite.co.uk/assets/images/image01.jpg?v=09c6d6d3" 
            alt="Cognaite Logo" 
            className="h-12 w-auto"
          />
        </div>
        <div className="flex space-x-12 text-lg">
          <a href="#blog" className="hover:text-cognaite-red transition-colors">Blog</a>
          <a href="#services" className="hover:text-cognaite-red transition-colors">Our Services</a>
          <a href="#contact" className="hover:text-cognaite-red transition-colors">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-cognaite-red font-medium">Automations</span>
            <a href="#learn" className="text-gray-600 hover:text-cognaite-red transition-colors inline-flex items-center space-x-1">
              <span>Find out more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <h1 className="font-display text-5xl lg:text-6xl font-bold leading-tight">
            Streamline Your Workflows and Save 20+ Hours Monthly
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl">
            Experience the power of AI-driven efficiency and reclaim your time effortlessly. By using cutting-edge technology, you can streamline your tasks and make every second count. Say goodbye to wasted hours and hello to a more productive life.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="#contact"
              className="bg-cognaite-red text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition-all transform hover:scale-105 hover:shadow-xl inline-flex items-center"
            >
              Let's Talk
            </a>
            <a
              href="#learn"
              className="text-gray-700 hover:text-cognaite-red transition-colors inline-flex items-center space-x-2"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right side - intentionally left empty for future content */}
        <div className="hidden lg:block">
        </div>
      </main>

      {/* Features Section */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
                <img src="https://cognaite.co.uk/assets/images/image01.jpg?v=09c6d6d3" alt="Cognaite" className="w-16 h-16 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Notion-logo.svg" alt="Notion" className="w-16 h-16 object-contain" />
                <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack" className="w-16 h-16 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Gmail_icon_%282020%29.svg" alt="Gmail" className="w-16 h-16 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram" className="w-16 h-16 object-contain" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="GitHub" className="w-16 h-16 object-contain" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="font-display text-4xl font-bold text-center lg:text-left text-cognaite-dark">
                Are you looking for more hours in the day?
              </h2>
              <p className="text-xl text-gray-600">
                As a business owner, you have a million things on your to-do list and time seems to just disappear.
              </p>
              <p className="text-xl text-gray-600">
                We can stop you always feeling one step behind by eliminating repetitive processes and connecting the different areas of your business.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-cognaite-red text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-red-600 transition-all transform hover:scale-105 hover:shadow-xl inline-flex items-center"
                >
                  I want to find out more <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-white/50 to-pink-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-6">Our Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to how we've helped lead gen and marketing agencies automate their most repetitive processes and directly increase their income
            </p>
          </div>
          
          <div className="senja-embed" data-id="3f5b78c1-5b68-45c9-a73d-b24ca6d58921" data-mode="shadow" data-lazyload="false" style={{ display: 'block' }}></div>

          <div className="mt-12 text-center">
            <a
              href="#case-studies"
              className="inline-flex items-center space-x-2 bg-white px-8 py-3 rounded-full text-lg font-medium text-cognaite-red hover:bg-gray-50 transition-all transform hover:scale-105 shadow-md"
            >
              <span>View More Case Studies</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer Banner */}
      <div className="bg-gradient-to-r from-cognaite-red to-red-500 text-white py-6 relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0">
          <p className="text-lg">
            Check out our Free Guide <span className="font-medium">"How to Perform Your Own AI Audit"</span>
          </p>
          <a
            href="#guide"
            className="bg-white text-cognaite-red px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all transform hover:scale-105 flex-shrink-0"
          >
            Get My Copy
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;