import React, { useState } from 'react';
import { Mail, Phone, Copy, Check } from 'lucide-react';
import { Reveal } from './Reveal';


export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "Ikramhamdan204@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative py-24 bg-brand-charcoal text-white overflow-hidden">
      {/* Decorative Blueprint or Vector Details in Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none blueprint-grid"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-terracotta/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        
        {/* Narrative Closing */}
        <Reveal className="max-w-2xl mx-auto mb-16 space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-pink font-semibold">
            Let's Keep it Going
          </span>
          
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            "Not every story ends.<br/>Some just change form."
          </h2>
          
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
            Maybe this is not a portfolio. Maybe it is a story or a conversation. Either way—if it sparked something, let's connect and build the next chapter together.
          </p>
        </Reveal>

        {/* Contact Actions Grid */}
        <Reveal delay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto mb-16">
          
          {/* Email Card */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-between group hover:border-brand-pink/30 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-1">
              Direct Mail
            </h4>
            <a 
              href={`mailto:${email}`} 
              className="text-base font-serif text-white hover:text-brand-pink mb-4 break-all block"
            >
              {email}
            </a>
            
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white bg-white/5 px-3 py-1.5 rounded-full border border-white/5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Call Card */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center justify-between group hover:border-brand-pink/30 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-gray-400 mb-1">
              Call / WhatsApp
            </h4>
            <a 
              href="tel:+971553176841" 
              className="text-lg font-serif text-white hover:text-brand-pink mb-4 block"
            >
              +971 55 317 6841
            </a>
            <span className="text-xs text-gray-500 font-sans">
              Available based in Dubai, UAE
            </span>
          </div>

        </Reveal>

        {/* Footer Notes */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <p>© {new Date().getFullYear()} Ikram Hamdan. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors">Dubai, UAE</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Architect (B.Arch) & Art Director</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
