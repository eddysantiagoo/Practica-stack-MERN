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
      }

      loadProducts()
    }, [])

    return (
      isLoading
      ? <Loading />
      : 'Mostar listado'
  )
}

export default ListProducts
