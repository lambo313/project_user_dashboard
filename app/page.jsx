import Sidebar from "@/components/Sidebar"
import Header from "../components/Header"
import TopCards from "@/components/TopCards"
import BarChart from "@/components/BarChart"
import RecentOrders from "@/components/RecentOrders"

const Home = () => {
  return (
    <main className="max-w-full flex-top flex-col min-h-screen z-0 ml-20" >
      <Header/>
      <TopCards/>
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart/>
        <RecentOrders/>
      </div>
    </main>
  )
}

export default Home