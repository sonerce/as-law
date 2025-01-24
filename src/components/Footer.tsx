export default function Footer() {
  const offices = [
    {
      city: 'İstanbul',
      address: 'Flora Residence, Küçükbakkalköy Mah. Vedat Günyol Cad. Defne Sok. No: 1 K: 13 D: 1305 Ataşehir - İstanbul',
      email: 'istanbul@aslaw.com',
      phone: '+90 212 XXX XX XX',
    },
    {
      city: 'Londra',
      address: '6 Falkirk Court, 141 Asfield Road, London N147PF',
      email: 'london@aslaw.com',
      phone: '+44 XXX XXX XXXX',
    },
    {
      city: 'Lizbon',
      address: 'Avenida 5 de Outubro 102 R/C, 1050-051 Lisboa',
      email: 'lisbon@aslaw.com',
      phone: '+351 XXX XXX XXX',
    },
  ]

  return (
    <footer className="bg-primary-dark py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div key={office.city} className="text-center">
              <h3 className="text-2xl font-raleway font-bold text-accent-gold mb-4">
                {office.city}
              </h3>
              <div className="space-y-2 text-text-light">
                <p>
                  <span className="font-semibold">Adres:</span> {office.address}
                </p>
                <p>
                  <span className="font-semibold">E-posta:</span> {office.email}
                </p>
                <p>
                  <span className="font-semibold">Telefon:</span> {office.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-text-gray">
          <p>&copy; {new Date().getFullYear()} AS Law. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
