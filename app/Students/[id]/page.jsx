import Link from "next/link";
import ClassData from "@/data.json"

export default async function StudentDetail({ params }) {
  const { id } = params;

  const ogrenci = ClassData.find(x => x.id == id);
  console.log(ogrenci);

  return (
    <div className="studentDetail">
      <Link href="/Students">Geri</Link>
      <div className="studentImage">
        <img src="/img/user.jpeg" alt="Öğrenci Resmi" />
      </div>
      <div className="studentInfo">
        <div className="studentInfoGenel">
        <h1>{ogrenci.name}</h1>
        <p> <strong>Öğrenci Numarası:  </strong> {ogrenci.studentNumber}</p>
        <p>Sınıf: {ogrenci.class}</p>
        </div>

        <div className="studentInfoDetail">
          <h2>Detaylar</h2>
          <p> <strong>Not: </strong> {ogrenci.details.grade}</p>
          <p> <strong>Devamlılık:  </strong> {ogrenci.details.attendance}</p>
          <p> <strong>  Açıklamalar:</strong> {ogrenci.details.notes}</p>

          <h3>İletişim Bilgileri</h3>
          <p> <strong> Email:  </strong> {ogrenci.details.contact.email}</p>
          <p><strong>Telefon:  </strong> {ogrenci.details.contact.phone}</p>
          <p> <strong> Adres: </strong>{ogrenci.details.contact.address}</p>

          <h3>Ekstradan Katıldığı Aktiviteler</h3>
          <ul>
            {ogrenci.details.extraActivities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}