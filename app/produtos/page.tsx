'use client'

import {Container}  from "@/components/Container";
import ListaProdutos from "@/components/Produtos/GridProdutos/GridProdutos";
import React from "react";
import GenerosProdutos from "@/components/Produtos/GenerosProdutos/GenerosProdutos";
import { useState } from "react";
import Breadcrumb2 from "@/components/Breadcrumb2/Breadcrumb2";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";
import { ProdutosSection } from "@/components/ProdutosSection";
export default function Page(){
    const [selectedGenre, setSelectedGenre] = useState("");
    return (
      <section className="bg-blue-600">

        <TransitionEffect/>
        <Breadcrumb2 props='Produtos'/>

       <ProdutosSection/>

    </section>

    )
}