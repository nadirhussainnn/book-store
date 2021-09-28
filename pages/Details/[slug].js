import React from 'react'

export const getStaticPaths=async()=>{
    const data=await fetch(`https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyC-UwBZdPlCgTU3aSJD2RpfgPYJIcbcnWU`)
    const resp=await data.json()
    const paths=resp.items.map(book=>{
        return{
            params:{slug:book.id}
        }
    })
    return{
        paths,
        fallback:false
    }
}

export const getStaticProps=async(context)=>{
    const bookId=context.params.slug
    const data=await fetch(`https://www.googleapis.com/books/v1/volumes?q=java&key=AIzaSyC-UwBZdPlCgTU3aSJD2RpfgPYJIcbcnWU`)
    const book=await data.json()
    return{
        props:{
            book
        }
    }
}

export default function Details({book}) {
    return (
        <Book book={book[0]}/>
    )
}


function Book({book}) {
    return (
      <div className="bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          {/* Details section */}
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2 id="details-heading" className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {book.volumeInfo.description}
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                Our patented padded snack sleeve construction protects your favorite treats from getting smooshed during
                all-day adventures, long shifts at work, and tough travel schedules.
              </p>
            </div>
  
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220 standard gumballs, or any
                  combination of on-the-go treats that your heart desires. Yes, we did the math.
                </p>
              </div>
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                    alt="Front zipper pouch with included key ring."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  Up your snack organization game with multiple compartment options. The quick-access stash pouch is ready
                  for even the most unexpected snack attacks and sharing needs.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
  
