import { Zap, Shapes, Download, Palette } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-16 bg-muted/50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shapes className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">
            Why Choose Our Logo Generator?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-background rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Free & Easy to Use</h3>
            <p className="text-muted-foreground">
              Create professional logos without any design experience. Our tool is completely free and intuitive.
            </p>
          </div>
          
          <div className="p-6 bg-background rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shapes className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">1000+ Icons</h3>
            <p className="text-muted-foreground">
              Choose from our extensive library of professional icons to create the perfect logo for your brand.
            </p>
          </div>
          
          <div className="p-6 bg-background rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">High Quality Export</h3>
            <p className="text-muted-foreground">
              Download your logo in high resolution PNG format, perfect for both digital and print use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}