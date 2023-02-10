import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "./ProductPage.css"

const ProductPage = (props) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const addToCart = () => {
        setCounter(counter + 1)
    }

    const { type } = useParams("type")
    if (type === "wine"){
        document
        .getElementsByTagName('meta')
        .namedItem('description')
        .setAttribute('content','Add wine to cart')
    }

    const toBeRendered = props.collection.map(item => {
        return (
            <li key={item.name} className="productpage__listItem">
                <img src={item.image} alt={item.alt} />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <button onClick={() => addToCart()}>Add to Card</button>
            </li>
        )
    })

    return (
        <>
            <article className="productpage">
                <ul className="productpage__list">
                    <figure className="productCounter">{counter}</figure>
                    {toBeRendered}
                </ul>
            </article>
        </>
    )
}

export default ProductPage