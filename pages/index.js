import Head from "next/head";
import Store from '../components/BookTemplate'

export const getStaticProps=async()=>{
  const data=await fetch(`https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyC-UwBZdPlCgTU3aSJD2RpfgPYJIcbcnWU`)
  const jsonData=await data.json()
  return{
    props:{
      books:jsonData
    }
  }
}

export default function Home({books}) {
  return (
    <>
      <Head>
        <title>Next.js TailwindCSS</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <Store books={books}/>
    </>
  );
}