"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Send, Github, Linkedin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/action-types";
import { useTranslation } from "@/hooks/useTranslation";


const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const { t } = useTranslation();

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
          title: t("contact.error"),
          description: t("contact.error"),
          variant: "destructive",
        });
        throw new Error('Failed to send email');
      }

      toast({
        title: t("contact.success"),
        description: t("contact.success"),
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t("contact.error"),
        description: t("contact.error"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-violet-400" size={20} />,
      title: t("contact.email"),
      details: "haingonirina301@gmail.com",
      link: "mailto:haingonirina301@gmail.com",
    },
    {
      icon: <Phone className="text-purple-400" size={20} />,
      title: t("contact.phone"),
      details: "+261 38 71 110 11",
      link: "tel:+261387111011",
    },
    {
      icon: <Github className="text-slate-300" size={20} />,
      title: t("contact.github"),
      details: "@neon-rah",
      link: "https://www.github.com/neon-rah",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: t("contact.github"),
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
              {t("contact.title")}
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 w-full">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 w-full">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                  {t("contact.subtitle")}
                </h3>
                <p className="text-base sm:text-lg text-slate-300 mb-4 sm:mb-8 leading-relaxed">
                  {t("contact.text")}
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
                                info.title === t("contact.github") ? "_blank" : undefined
                              }
                              rel={
                                info.title === t("contact.github")
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
                  {t("contact.followMe")}
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
                    {t("contact.sendMessage")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300">
                          {t("contact.name")}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contact.namePlaceholder")}
                          required
                          className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300">
                          {t("contact.email")}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contact.emailPlaceholder")}
                          required
                          className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-slate-300">
                        {t("contact.subject")}
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("contact.subjectPlaceholder")}
                        required
                        className="bg-slate-700/50 border-violet-500/30 text-white placeholder:text-slate-400 focus:border-violet-400 focus:ring-violet-400/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-300">
                        {t("contact.message")}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.messagePlaceholder")}
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
                        {isSubmitting ? t("contact.sending") : t("contact.send")}
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