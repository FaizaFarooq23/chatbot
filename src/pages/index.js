import Login from "@/components/login";
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin']  })

export default function Home() {
  return (
    <div className={`${inter.className}` }>
      <main className="">
        <Login />
      </main>
    </div>
  );
}
