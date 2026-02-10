import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-8">
        <Mail className="w-6 h-6 text-[#87B1C1]" />
        <h2 className="text-[#181D1F]">Get In Touch</h2>
      </div>

      <div className="mb-8 bg-[#F5F5F5] p-6 rounded-sm border border-[#87B1C1]/10">
        <p className="text-[#6B7280] leading-relaxed">
          Open to research collaboration, consulting opportunities, speaking engagements, and 
          interesting conversations about data science, optimization, and software engineering.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-sm border border-[#87B1C1]/10">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#87B1C1]" />
            <h3 className="text-[#181D1F]">Email</h3>
          </div>
          <a
            href="mailto:jim@quayleapps.com"
            className="text-[#87B1C1] hover:underline"
          >
            jim@quayleapps.com
          </a>
          <p className="text-sm text-[#6B7280] mt-2">
            For research inquiries and professional opportunities
          </p>
        </div>

        <div className="bg-white p-6 rounded-sm border border-[#87B1C1]/10">
          <div className="flex items-center gap-3 mb-4">
            <Phone className="w-5 h-5 text-[#87B1C1]" />
            <h3 className="text-[#181D1F]">Phone</h3>
          </div>
          <a
            href="tel:+15551234567"
            className="text-[#87B1C1] hover:underline"
          >
            +1 (330) 858-6369
          </a>
          <p className="text-sm text-[#6B7280] mt-2">
            Available Monday-Friday, 9am-5pm PST
          </p>
        </div>

        <div className="bg-white p-6 rounded-sm border border-[#87B1C1]/10">
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-5 h-5 text-[#87B1C1]" />
            <h3 className="text-[#181D1F]">Location</h3>
          </div>
          <p className="text-[#181D1F]">Akron, OH</p>
          <p className="text-sm text-[#6B7280] mt-2">
            Open to remote collaboration worldwide
          </p>
        </div>

        <div className="bg-white p-6 rounded-sm border border-[#87B1C1]/10">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-[#87B1C1]" />
            <h3 className="text-[#181D1F]">Schedule Meeting</h3>
          </div>
          <a
            href="#"
            className="text-[#87B1C1] hover:underline"
          >
            Book a time on Calendly
          </a>
          <p className="text-sm text-[#6B7280] mt-2">
            30-minute intro calls available
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-sm border border-[#87B1C1]/10">
        <h3 className="text-[#181D1F] mb-6">Send a Message</h3>
        <form className="space-y-4" aria-label="Contact form">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm text-[#181D1F] mb-2">
                Name <span className="text-red-600" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-required="true"
                className="w-full px-4 py-2 border border-[#87B1C1]/20 rounded-sm focus:outline-none focus:border-[#87B1C1] focus:ring-2 focus:ring-[#87B1C1] focus:ring-offset-2 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-[#181D1F] mb-2">
                Email <span className="text-red-600" aria-label="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
                aria-describedby="email-hint"
                className="w-full px-4 py-2 border border-[#87B1C1]/20 rounded-sm focus:outline-none focus:border-[#87B1C1] focus:ring-2 focus:ring-[#87B1C1] focus:ring-offset-2 transition-colors"
                placeholder="your.email@example.com"
              />
              <p id="email-hint" className="sr-only">We'll never share your email</p>
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm text-[#181D1F] mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-[#87B1C1]/20 rounded-sm focus:outline-none focus:border-[#87B1C1] focus:ring-2 focus:ring-[#87B1C1] focus:ring-offset-2 transition-colors"
              placeholder="What would you like to discuss?"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-[#181D1F] mb-2">
              Message <span className="text-red-600" aria-label="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              aria-required="true"
              className="w-full px-4 py-2 border border-[#87B1C1]/20 rounded-sm focus:outline-none focus:border-[#87B1C1] focus:ring-2 focus:ring-[#87B1C1] focus:ring-offset-2 transition-colors resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#87B1C1] text-white rounded-sm hover:bg-[#6a8fa0] transition-colors"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
