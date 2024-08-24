const StatsSection = () => {
    return (
      <section className="bg-[#006E90] py-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-20 lg:px-32">
          {/* Left Text */}
          <div className="text-white text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold">
              Join the winning<br />school now
            </h2>
          </div>
  
          {/* Right Stats */}
          <div className="flex space-x-12 text-white text-center">
            <div>
              <p className="text-4xl font-bold">3000+</p>
              <p className="text-sm">Enrolled Students</p>
            </div>
            <div>
              <p className="text-4xl font-bold">30</p>
              <p className="text-sm">Staff</p>
            </div>
            <div>
              <p className="text-4xl font-bold">10,000</p>
              <p className="text-sm">Global Alumni</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default StatsSection;
  