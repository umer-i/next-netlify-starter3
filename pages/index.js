import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Muhammad Umer Imran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Muhammad Imran" />
        <p className="description">
          Funded Trader <code>umerbtc@protonmail.com</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
