import AddButton from "./AddButton";
import Header from "./Header"
import ListProducts from "./ListProducts";
import { Loading } from "./Loading";


const ProductLayout = () => {
  return( 
    <>
       <Header title="Product apps" />
       <AddButton />
       <ListProducts />
     </>
  )
}


export default ProductLayout;