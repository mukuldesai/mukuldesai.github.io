"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus({ type: "success", message: "Thanks! Your message has been sent." });
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="rounded-lg border border-slate-200 bg-card text-card-foreground shadow-lg p-8 h-full">
      <CardContent className="p-0">
        <h3 className="text-xl font-semibold text-slate-900 mb-6">
          Send a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-shadow"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-shadow"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-slate-700">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or how we can work together..."
              className="min-h-[120px] bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-shadow"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          {status && (
            <p aria-live="polite" className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            disabled={submitting}
          >
            <Send className="mr-2 h-4 w-4" />
            {submitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to discuss your next data project? Let&apos;s connect and
            explore how we can work together.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Email</span>
                    <a
                      href="mailto:mukul.desai12@gmail.com"
                      className="block font-medium text-slate-800 hover:text-blue-600"
                    >
                      mukul.desai12@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Phone</span>
                    <a
                      href="tel:+18574659372"
                      className="block font-medium text-slate-800 hover:text-blue-600"
                    >
                      857-465-9372
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Location</span>
                    <p className="font-medium text-slate-800">USA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-slate-900">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mukuldesai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/mukuldesai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-900">Resume</h4>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  asChild
                  className="border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  <a
                    href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Mukul_Desai_Resume-1759092999721.pdf"
                    download
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <a
                    href="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Mukul_Desai_Resume-1759092999721.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;