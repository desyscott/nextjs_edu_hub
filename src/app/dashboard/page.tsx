import Sidebar from '@/components/Dashboard/Sidebar';
import TopNav from '@/components/Dashboard/TopNav';
import MainArea from '@/components/Dashboard/MainArea'; 

export default function Dashboard() {
  return (
    <>
    <div className='flex min-h-screen'>
    {/* the sidebar is position at the top in the layout because this can not be closeable */}
      <Sidebar />        

    <div className="flex-grow flex flex-col">
     <TopNav/>
   
    <main className=" flex-grow font-gilroy p-4  bg-gray-100 ">
      <MainArea/>
    </main>
    </div>
    </div>
    </>
  );
}
