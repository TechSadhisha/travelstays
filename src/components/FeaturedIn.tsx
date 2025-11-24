const FeaturedIn = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 tracking-wide">AS FEATURED IN</h2>
          <p className="text-sm sm:text-base text-primary-foreground/80">Our villas and homes have been featured in</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 opacity-70">
          <div className="text-lg sm:text-xl md:text-2xl font-serif tracking-wider">HONG KONG<br/><span className="text-base sm:text-lg md:text-xl">TATLER</span></div>
          <div className="text-lg sm:text-xl md:text-2xl font-serif italic">Luxury<br/><span className="text-xs sm:text-sm">LIFESTYLE AWARDS</span></div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary-foreground"></div>
            <div className="text-lg sm:text-xl font-bold">USA<br/>TODAY</div>
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-serif">Robb Report</div>
          <div className="text-2xl sm:text-3xl md:text-4xl font-serif italic tracking-wider">VOGUE</div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
