import Image from "next/image"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-2'>
      <div>
        <Image
          src='/cover.jpeg'
          width={1280}
          height={240}
          className='mx-auto'
          alt={"logo"}
        />
        <h1>Hello World</h1>
        <p className=''>This is a really good blog</p>
      </div>
    </main>
  )
}
