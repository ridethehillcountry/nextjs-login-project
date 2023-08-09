import Link from "next/link"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className='text-center bg-slate-800 p-8 my-6 rounded-md'>
       
        <Link href='/'>
          <h1 className='text-2xl text-white font-bold mt-4'>
            Ride the Hill Country
          </h1>
        </Link>
        <p className='text-slate-300'>Welcome</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='border-t border-slate-400 mt-12 py-6 text-center text-slate-400'>
        <h3>Designed by Jeff</h3>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        <div className='mx-auto  max-w-7xl'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
