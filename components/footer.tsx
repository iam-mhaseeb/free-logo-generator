"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useState } from "react";
import { Twitter } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Logo Generator</h3>
              <p className="text-muted-foreground">
                Create professional logos for your business, brand, or personal projects with our free online logo maker.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('templates')}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Templates
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    How It Works
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setShowPrivacy(true)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTerms(true)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <a 
                    href="https://lucide.dev/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                  >
                    Icons by Lucide
                  </a>
                </li>
                <li>
                  <a 
                    href="https://x.com/haseeb__tweets" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2"
                  >
                    Build with ❤️ by Haseeb
                    <Twitter className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Logo Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h4>Information Collection and Use</h4>
            <p>
              We do not collect any personal information. All logo creation and customization is done entirely in your browser.
              No data is sent to our servers.
            </p>
            <h4>Cookies</h4>
            <p>
              We use only essential cookies to remember your theme preference (light/dark mode).
              No tracking or analytics cookies are used.
            </p>
            <h4>Third Party Services</h4>
            <p>
              We do not use any third-party services that collect user data.
              The logo generator runs completely client-side in your browser.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h4>Usage Terms</h4>
            <p>
              The logos you create with our tool are yours to use freely for any purpose,
              commercial or non-commercial. No attribution is required.
            </p>
            <h4>Limitations</h4>
            <p>
              You may not resell or redistribute the logos created with our tool as part of a logo marketplace or similar service.
              The tool is intended for end-users creating logos for their own use.
            </p>
            <h4>Service Availability</h4>
            <p>
              We strive to maintain high availability but make no guarantees about the service's uptime or continued availability.
              The service is provided "as is" without warranty of any kind.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}