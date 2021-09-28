import React from 'react'
import Head from "next/head";
import Store from '../../components/BookTemplate';

export const getStaticProps=async()=>{
    const data=await fetch(`https://www.googleapis.com/books/v1/volumes?q=fiction&key=AIzaSyC-UwBZdPlCgTU3aSJD2RpfgPYJIcbcnWU`)
    const jsonData=await data.json()

    return{
      props:{
        books:jsonData
      }
    }
  }

  
export default function index({books}) {
    return (
      <>
      <Head>
        <title>Books| Fiction</title>
      </Head>
        <Store books={books} />
      </>
    )
}