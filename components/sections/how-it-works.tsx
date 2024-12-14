import { 
  LayoutTemplate, 
  Paintbrush, 
  PaintBucket, 
  Download,
  Wand2
} from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Wand2 className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-center">
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <LayoutTemplate className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Choose Template</h3>
            <p className="text-muted-foreground">
              Select from our curated collection of professional logo templates
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Paintbrush className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customize Icon</h3>
            <p className="text-muted-foreground">
              Pick your perfect icon and adjust its size, rotation, and color
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PaintBucket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Style Background</h3>
            <p className="text-muted-foreground">
              Choose colors, add gradients, and adjust padding and shadows
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Export Logo</h3>
            <p className="text-muted-foreground">
              Download your logo in high quality for any use
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}