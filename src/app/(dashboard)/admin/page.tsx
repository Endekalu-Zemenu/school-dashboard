import Announcements from "@/components/ui/Announcements"
import AttendanceChart from "@/components/ui/AttendanceChart"
import CountChart from "@/components/ui/CountChart"
import EventCalendar from "@/components/ui/EventCalendar"
import FinanceChart from "@/components/ui/FinanceChart"
import UserCard from "@/components/ui/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 gap-4 flex flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user-cards */}
        <div className="flex justify-between gap-4 flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
          {/* attendance chart */}
        </div>
        {/* bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  )
}

export default AdminPage
