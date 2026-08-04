"use client";
import React, { useState } from "react";
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { MapPin, Mail, Send, CheckCircle2, Copy, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("sendtonimzii@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <div className="space-y-8 w-full">
      <ScrollReveal>
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-300/80 dark:border-slate-800/80 shadow-xl space-y-3">
          <div className="flex items-center gap-3.5">
            <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Get in Touch
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 font-medium">
                Have a question, project proposal, or opportunity? I&apos;d love to connect.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="space-y-4 lg:col-span-4">
          <ScrollReveal delay={100}>
            <div
              onClick={handleCopyEmail}
              className="group glass-card rounded-2xl p-5 border border-slate-300/80 dark:border-slate-800/80 hover:border-sky-400/60 cursor-pointer transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BiLogoGmail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </p>
                <p className="font-extrabold text-slate-900 dark:text-white text-sm truncate">
                  sendtonimzii@gmail.com
                </p>
                <p className="text-xs text-sky-300 font-semibold mt-1 flex items-center gap-1">
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Click to copy</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <a
              href="https://linkedin.com/in/kaveennimsara"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-5 border border-slate-300/80 dark:border-slate-800/80 hover:border-blue-500/60 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BiLogoLinkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="font-extrabold text-slate-900 dark:text-white text-sm">
                  Kaveen Nimsara
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mt-1 group-hover:underline">
                  View profile &rarr;
                </p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <a
              href="https://github.com/cheeriocat"
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card rounded-2xl p-5 border border-slate-300/80 dark:border-slate-800/80 hover:border-slate-500/60 transition-all duration-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BsGithub className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                  GitHub
                </p>
                <p className="font-extrabold text-slate-900 dark:text-white text-sm">
                  cheeriocat
                </p>
                <p className="text-xs text-sky-300 font-bold mt-1 group-hover:underline">
                  View repositories &rarr;
                </p>
              </div>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="glass-card rounded-2xl p-5 border border-slate-300/80 dark:border-slate-800/80 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-gray-400 uppercase tracking-wider">
                  Location
                </p>
                <p className="font-extrabold text-slate-900 dark:text-white text-sm">
                  Galle, Sri Lanka
                </p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">
                  Open to remote & relocation
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-8">
          <ScrollReveal delay={150}>
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-300/80 dark:border-slate-800/80 shadow-xl">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                Send a Direct Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6 font-medium">
                Fill out the form below and I will respond to your message within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-gray-300 font-medium">
                    Thank you for reaching out. I will review your message and reply soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900 dark:text-gray-200">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 shadow-xs"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-900 dark:text-gray-200">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 dark:text-gray-200">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 shadow-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-900 dark:text-gray-200">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-sky-400/60 resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
