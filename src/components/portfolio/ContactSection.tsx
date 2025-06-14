"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simuler une requête API pour envoyer l'email (remplacez par votre endpoint réel)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        toast({
          title: "Error!",
          description: "Failed to send email. Please try again later.!",
          variant: "destructive"
        });
        throw new Error('Failed to send email');
      }

      // Réinitialiser le formulaire et afficher une notification de succès
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",        
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "An error occurred while sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-violet-400" size={20} />,
      title: "Email",
      details: "haingonirina301@gmail.com",
      link: "mailto:haingonirina301@gmail.com",
    },
    {
      icon: <Phone className="text-purple-400" size={20} />,
      title: "Phone",
      details: "+261 38 71 110 11",
      link: "tel:+261387111011",
    },
    {
      icon: <Github className="text-slate-300" size={20} />,
      title: "GitHub",
      details: "@neon-rah",
      link: "https://www.github.com/neon-rah",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://www.github.com/neon-rah",
      color: "hover:text-slate-300 hover:bg-slate-700/50",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/haingonirina-raharisoa-69594b367",
      color: "hover:text-blue-400 hover:bg-blue-500/10",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-slate-900 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto w-full"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              I&#39;m always excited to connect with fellow developers, potential
              collaborators, or anyone interested in discussing technology and
              projects.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 w-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  Let&#39;s Connect
                </h3>
                <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-8 leading-relaxed">
                  Whether you want to discuss a project, collaborate on
                  something exciting, or just want to say hello, I&#39;d love to
                  hear from you. As a student, I&#39;m always eager to learn and
                  contribute to meaningful projects.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 w-full">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="w-full border-violet-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-violet-400/40 hover:bg-slate-700/50 transition-all duration-300">
                      <CardContent className="p-2 sm:p-3 flex items-center space-x-2 sm:space-x-3">
                        <motion.div
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {info.icon}
                        </motion.div>
                        <div className="text-sm sm:text-base">
                          <h4 className="font-medium text-white">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              target={
                                info.title === "GitHub" ? "_blank" : undefined
                              }
                              rel={
                                info.title === "GitHub"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="text-slate-300 text-wrap hover:text-violet-400 transition-colors duration-200"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-slate-300 text-wrap">{info.details}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-4 sm:pt-6">
                <h4 className="text-base sm:text-lg font-medium text-white mb-3 sm:mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 sm:p-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-violet-500/20 hover:border-violet-400/50 transition-all duration-300 text-slate-300 ${social.color} shadow-lg`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="w-full">
              <Card className="w-full border-violet-500/20 bg-slate-800/50 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-white">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or just say hello!"
                        rows={4}
                        required
                        className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20 resize-none"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-2 sm:py-3 border-0 shadow-lg shadow-violet-500/25"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="mr-2"
                          >
                            <Send size={18} />
                          </motion.div>
                        ) : (
                          <Send className="mr-2" size={18} />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;