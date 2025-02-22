// import OurHistory from "@/components/about/ourhistory"
// import SchoolInfo from "@/components/about/ourschool"
import AdminSection from "../../components/about/administrators"
import Fees from "../../components/about/fees"
import LeaderSection from "../../components/about/heads"
import OurHistory from "../../components/about/ourhistory"
import OurSchool from "../../components/about/ourschool"
import VisionMission from "../../components/about/visionmission"

const index = () => {
  return (
    <main className="w-full">
        <OurSchool/>
        <OurHistory/>
        <VisionMission/>
        <AdminSection/>
        <LeaderSection/>
        <Fees/>
    </main>
  )
}

export default index