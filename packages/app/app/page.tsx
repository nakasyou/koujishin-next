import Image from 'next/image'
import publicFile from "../utils/public-file"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Image src={publicFile("/koujisin.svg")} />
    </main>
  )
}
