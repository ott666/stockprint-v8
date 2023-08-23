import { Container } from './Container';
import React, {useState} from 'react'
import GenerosProdutos from './Produtos/GenerosProdutos/GenerosProdutos'
import ListaProdutos from './Produtos/GridProdutos/GridProdutos';

export const ProdutosSection = () => {
    const [selectedGenre, setSelectedGenre] = useState("");

    return (
    <section id="Produtos" className='py-10'>
        <Container>
        
            <GenerosProdutos selectedGenre={selectedGenre}
                onSelect={setSelectedGenre}/>

        <ListaProdutos selectedGenre={selectedGenre} />
        </Container>
    </section>
    )
}
