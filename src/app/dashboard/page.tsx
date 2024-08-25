import Sidebar from '@/components/Dashboard/Sidebar';
import TopNav from '@/components/Dashboard/TopNav';
import NewsletterCard from '@/components/Dashboard/NewsletterCard';

export default function Dashboard() {
  return (
    <>
    <div className='flex'>
     <Sidebar /> 
   
    <div className="flex-grow">
     <TopNav/>
   
    <main className="font-gilroy p-4">
  
    <div className="flex justify-between items-center mb-4">
            <div>
              <button className="mr-4">Published</button>
              <button>Draft</button>
            </div>
            <button className="bg-[#582BE8] text-white p-2 rounded-md">New Post</button>
          </div>
          <NewsletterCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem ac..."
            imageSrc="/path/to/image1.jpg"
          />
          <NewsletterCard
            title="Lorem ipsum dolor sit amet consectetur."
            description="Lorem ipsum dolor sit amet consectetur. Pharetra enim cras lorem ac..."
            imageSrc="/path/to/image2.jpg"
          />
  
    </main>
    </div>
    </div>
    </>
  );
}
