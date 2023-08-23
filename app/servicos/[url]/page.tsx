'use client'
import React from "react";
import Servicos from "@/data/services.json"
import {Container} from "@/components/Container";
import Breadcrumb3 from "@/components/Breadcrumb3/Breadcrumb3";
import Image from "next/image";
import ContentServico from "@/components/ContentServico/ContentServico";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";

export default function Page({params}:any){
    const servico = Servicos.find(({ url }) =>  url === params.url)
    console.log(servico,'aaaaa')
    return(
        <> 
        <TransitionEffect/>
            <Breadcrumb3 props={servico}/>
            
            <Container>
                <div className={`
                flex flex-col justify-start lg:flex-row 
                
                h-fit 
                py-5 
                gap-y-2
                lg:gap-x-5
                `}>
                 <ContentServico servico={servico}/>    
                    
                    </div>
            
            </Container>
        </>
    )
}