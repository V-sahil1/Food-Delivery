import React, { useState } from 'react'
import Header from '../../componet/Header'
import Exploremenu from '../../componet/explore menu/Exploremenu'
import FoodDisplay from '../../Context/FoodDisplay'
import AppDownload from '../../componet/Appdownload/AppDownload'

function Home() {
  const [category,setCategory] =useState("All")
  return (
    <>
     <div>
        <Header/>
        <Exploremenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}  />
        <AppDownload/>
     </div>
    </>
   
  )
}

export default Home