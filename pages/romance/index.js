import React from 'react'
import Store from '../../components/BookTemplate';

export const getStaticProps=async()=>{
    const data=await fetch(`https://www.googleapis.com/books/v1/volumes?q=romance&key=AIzaSyC-UwBZdPlCgTU3aSJD2RpfgPYJIcbcnWU`)
    const jsonData=await data.json()

    return{
      props:{
        books:jsonData
      }
    }
  }

  
export default function index({books}) {
    return (
        <Store books={books} />
    )
}