import Link from "next/link";
import ClassData from "@/data.json"

export default async function StudentDetail({ params }) {
  const {id} = params;

  const ogrenci = ClassData.find(x => x.id == id);
  console.log(ogrenci);

  return (
    <div className="studentDetail">
      <Link href="/Students">Geri</Link>
      <h1>{ogrenci.name}</h1>
      <p>Öğrenci Numarası: {ogrenci.studentNumber}</p>
      <p>Sınıf: {ogrenci.class}</p>

      <div className="student-details">
        <h2>Detaylar</h2>
        <p>Not: {ogrenci.details.grade}</p>
        <p>Devamlılık: {ogrenci.details.attendance}</p>
        <p>Açıklamalar: {ogrenci.details.notes}</p>

        <h3>İletişim Bilgileri</h3>
        <p>Email: {ogrenci.details.contact.email}</p>
        <p>Telefon: {ogrenci.details.contact.phone}</p>
        <p>Adres: {ogrenci.details.contact.address}</p>

        <h3>Ekstradan Katıldığı Aktiviteler</h3>
        <ul>
          {ogrenci.details.extraActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}