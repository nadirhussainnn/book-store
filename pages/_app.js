import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
//https://tailwindcss.com/docs/guides/nextjs

function MyApp({ Component, pageProps }) {

  return <Layout>
      <Component {...pageProps} />
  </Layout>
}

export default MyApp
