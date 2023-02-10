import GalleryCard from "../Components/GalleryCard/GalleryCard"
import FilterBar from "../Components/FilterBar/FilterBar"
import {Link} from "react-router-dom"
import itemsFromDataFile from "../data/items"
import { useState, useEffect } from "react"


const Homepage = (props) => {

  const [items, setItems] = useState([])
  const [defaultItems, setDefaultItems] = useState([])

  const onGalleryCardClicked = (collection) => {
    props.onGalleryCardClicked(collection)
  }

  useEffect(() => {
    let i = 0
    let types = ["whiskey", "wine", "game"]

    const galleryCardToBeRendered = itemsFromDataFile.map(collection => {
      let temp = (
        <Link key={types[i]} type={types[i]} onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
          <GalleryCard items={collection} />
        </Link>
      )
      i = i + 1
      return temp
    })
    setItems(galleryCardToBeRendered)
    setDefaultItems(galleryCardToBeRendered)

  }, [])

  const onFilter = (typeToBeFiltered) => {
    const copy = [...defaultItems]
    const CardsToBeRendered = copy.filter(card => {
      if (card.props.type === typeToBeFiltered) {
        console.log(card)
        return card
      }
    })

    setItems([CardsToBeRendered])
  }




  return (
    <>
      <FilterBar onFilter={onFilter} />
      {items}
    </>

  )
}

export default Homepage