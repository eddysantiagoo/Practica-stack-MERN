import { useState } from "react";
import Loading from "./Loading";

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        isLoading
        ? <Loading />
        : 'Mostar listado'
  )
}
 
export default ListProducts;
