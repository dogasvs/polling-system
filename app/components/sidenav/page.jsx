import Link from "next/link";
import Students from "../svgs/student";
import Attendance from "../svgs/attendance";
import Homepage from "../svgs/homepage";

export default function Sidenav() {
  return (
    <div className="sidenav">
      <h3>Attendify</h3>
      <div className="sidenavElements">
        <Link href="/"> <Homepage /> Anasayfa</Link>
        <Link href="/Students"> <Students /> Öğrenci listesi</Link>
        <Link href="/attendance"> <Attendance /> Yoklama</Link>
      </div>
    </div>
  )
}