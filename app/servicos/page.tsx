'use client'
import React from "react";
import Servicos from "@/components/ServicosSection";
import TransitionEffect from "@/components/layoutComponents/TransitionEffect/TransitionEffect";

export default function Page(){
    return(

        <>
        <TransitionEffect/>
        <div className='w-full flex flex-col'>
            
            
            <Servicos/>
        </div>
        </>
    )
}