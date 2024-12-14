"use client";

import { LogoEditor } from '@/components/logo-editor';
import { Features } from '@/components/sections/features';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Home() {
  const scrollToTemplates = () => {
    document.getElementById('templates')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Create Professional Logos in Minutes
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Design stunning logos for your business with our free online logo maker. 
            Choose from 1000+ icons, customize colors, and download in high quality.
          </p>
          <LogoEditor />
        </section>
        
        <Features />
        <HowItWorks />
      </main>
      <Footer />
    </ThemeProvider>
  );
}