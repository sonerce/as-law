export default function Footer() {
  const offices = [
    {
      city: 'İSTANBUL',
      address: 'Örnek Mahallesi, Örnek Sokak No:1',
      email: 'istanbul@aslaw.com',
      phone: '+90 212 XXX XX XX',
    },
    {
      city: 'LİZBON',
      address: 'Sample Street No:1',
      email: 'lisbon@aslaw.com',
      phone: '+351 XXX XXX XXX',
    },
    {
      city: 'LONDON',
      address: 'Sample Road No:1',
      email: 'london@aslaw.com',
      phone: '+44 XXX XXX XXXX',
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
