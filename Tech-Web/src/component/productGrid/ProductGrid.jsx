import { useSelector } from 'react-redux';
import ProductCard from '../productCard/ProductCard';

const ProductGrid = () => {

  const Products = useSelector((state)=> state.products.filteredItem)

  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24'>
      {Products.map( (product)=>(
          <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid