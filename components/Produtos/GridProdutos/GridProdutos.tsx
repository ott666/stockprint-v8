// import ListaProdutos

import produtosData from "@/data/products.json";
import Link from "next/link";
import Cardbundle from "@/components/Produtos/CardBundle/CardBundle";


type Props = {
  selectedGenre?: string;
};

const ListaProdutos = ({ selectedGenre }: Props) => {
  // Lines 9-11 if there's a selectedGenre we use the array.filter function to filter the product data
  // otherwise, return all the ListaProdutos.
  const filteredMoviesByGenre = selectedGenre
    ? produtosData.filter((product) => product.genre.includes(selectedGenre))
    : produtosData;
  return (
    <div className={`
    grid grid-cols-1
    md:grid-cols-2
    lg:grid-cols-3
    h-fit
    gap-5
    
    `}>
      {/* map through all the filtered ListaProdutos */}
      {filteredMoviesByGenre.map((product) => {
       
        return (
          <div className="flex relative items-center justify-center h-[230px] rounded-2xl">

            <Cardbundle 
            imgPath={`/${product.pseudo}/${product.pseudo}1.png`} 
            alt={product.title}
            title={product.title}
            subtitle={product.subt}
            subtitle2={product.subt2}
            bgColor="#ffffff"
            genre={product.genre}
            pseudo={product.pseudo}
            key={product.pseudo}
            url={product.url}
          / >
          </div>
          
        );
      })}
    </div>
  );
};
export default ListaProdutos;