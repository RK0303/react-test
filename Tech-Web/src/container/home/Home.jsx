import { Stack } from '@mui/joy'
import Button from '@mui/material/Button'
import ProductGrid from '../../component/productGrid/ProductGrid'
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '../../redux/products/ProductSlice';

const categories =[
  "All",
  "Graphic Cards",
  "Monitors",
  "Storage",
  "Motherboards",
  "RAM"
];

const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
    <Stack sx={{
      backgroundImage: 'url("/hero-bg.jpg")',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      height:'800px',
    }}>
      
    </Stack>
    <div className=' container mx-auto my-10 px-4'>
        <div className=' flex gap-4'>
          {categories.map((categorie)=>(
            <button className=' bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in' key={categorie}
            onClick={()=> dispatch(setSelectedCategory(categorie))}
            >{categorie}</button>
        
          ))}
          </div>
        <ProductGrid/>
      </div>
    </>
  )
}

export default Home