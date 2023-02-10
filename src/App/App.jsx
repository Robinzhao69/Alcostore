import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Homepage from "../pages/Homepage"
import ProductPage from "../pages/ProductPage"

import "./App.css"


const App = () => {

  const [collectionForProductPage, setCollectionForProductPage] = useState([])

  const onGalleryCardClicked = (collection) => {
    setCollectionForProductPage(collection)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage onGalleryCardClicked={onGalleryCardClicked}/>} />
        <Route path="/product/:type" element={<ProductPage collection={collectionForProductPage}/>} />
      </Routes>
    </>

  )
}

export default App
