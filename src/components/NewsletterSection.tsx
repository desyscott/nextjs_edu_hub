import Image from "next/image";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-[#F4F6F8]">
      <div className="container mx-auto px-4 md:px-20 lg:px-32">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">Latest Newsletter</h2>
          <p className="text-gray-600">Stay up-to-date with the latest news and events at our school</p>
        </div>

        {/* Newsletter Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="relative h-[350px]">
            <Image
              src="/Assets/images/newletterImage1.jpeg"
              alt="Newsletter Image 1"
              fill
              className="rounded-lg object-cover"
              style={{ filter: 'brightness(1.2)' }} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 rounded-lg">
              <p className="text-white text-lg font-semibold">
                New school fees release ahead of next academic year
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative h-[350px]">
            <Image
              src="/Assets/images/newletterImage2.jpeg"
              alt="Newsletter Image 2"
               fill
              className="rounded-lg object-cover"
              style={{ filter: 'brightness(1.2)' }} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 rounded-lg">
              <p className="text-white text-lg font-semibold">
                New school fees release ahead of next academic year
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative h-[350px]">
            <Image
              src="/Assets/images/newletterImage3.jpeg"
              alt="Newsletter Image 3"
              fill
              className="rounded-lg object-cover"
              style={{ filter: 'brightness(1.2)' }} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4 rounded-lg">
              <p className="text-white text-lg font-semibold">
                New school fees release ahead of next academic year
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-black text-white py-3 px-6 rounded-md font-bold hover:bg-gray-800 transition-colors"
            style={{ boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            Read More &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
