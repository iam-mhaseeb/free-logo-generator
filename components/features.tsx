export function Features() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Our Logo Generator?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-background rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Free & Easy to Use</h3>
            <p className="text-muted-foreground">
              Create professional logos without any design experience. Our tool is completely free and intuitive.
            </p>
          </div>
          
          <div className="p-6 bg-background rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">1000+ Icons</h3>
            <p className="text-muted-foreground">
              Choose from our extensive library of professional icons to create the perfect logo for your brand.
            </p>
          </div>
          
          <div className="p-6 bg-background rounded-lg shadow-sm">
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