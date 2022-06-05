import { useEffect, useState } from "react";
import Loading from "./Loading";

const ListProducts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

      const timeId = setInterval(() => {
        console.log("useEffect")
        setIsLoading(!isLoading)
      }, 2000)

      return () => clearInterval(timeId)
    }, []);

    useEffect(() => {
      console.log("Only once time")
    }, [isLoading]);

    return (
        isLoading
        ? <Loading />
        : 'Mostar listado'


  )
}
 
export default ListProducts;
