import { useEffect, useState } from "react";
import { getProducts } from "../services/index";
import Loading from "./Loading";

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect( () => {
      
      async function loadProducts (){
        const response = await getProducts()
        
        if (response.stauts === 200) {
          setProducts(response.data.products)
        }

        setIsLoading(false)
      }

      loadProducts()
    }, [])

    if (isLoading){
      return <Loading/>
    }

    if (!products.length){
      return <h2 className="title has-text-centered">You dont'h have products</h2>
    }

    return (
      'Mostar listado'
  )
}

export default ListProducts
