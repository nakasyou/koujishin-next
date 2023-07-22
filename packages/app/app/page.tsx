import Image from 'next/image'
import publicFile from "../utils/public-file"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="text-center">
        <Image
          src={publicFile`/koujishin.svg`}
          alt="Logo"
          className=""
        />
      </div>
      <div className="mx-10">
        <div>
          広辞深は、オープンソースのWebをベースにした電子辞書です。
        </div>
      </div>
    </main>
  )
}
