import React from 'react'
import { Container } from './Container'
import Servicos from '@/data/services.json'
import CardServico2 from './CardServico/CardServico2'

export default function ServicosSection(){


  return (
    <section id='servicos' className='py-10'>

    <Container>
      <h1 className='text-3xl  font-bold text-center w-full'>Nossos serviços</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5'>
            <CardServico2 title='Desenvolvimento de layouts'
            url='/servicos/desenvolvimento-de-layouts'
            icon='/icons/id-icon.svg' 
            text='Destaque-se da concorrência com um design que cativa e encanta. Sua marca merece um cartão que transmita profissionalismo e criatividade.'/>
            
            <CardServico2 title='Consertamos sua impressora!' 
            url='/servicos/consertamos-sua-impressora'
            icon='/icons/chave-icon.svg' 
            text='Nos dedicamos a oferecer soluções de manutenção que garantem o máximo desempenho e eficiência de seus equipamentos.'/>
            
            <CardServico2 title='Desvendando Oportunidades'
            icon='/icons/grow-icon.svg'  
            url='/servicos/desvendando-oportunidades'
             text='Se você busca soluções precisas e inovadoras no ramo de identificação, está no lugar certo! Nossa consultoria é especializada em ajudar empresas e organizações a aprimorar seus processos de identificação e segurança.'/>

            
            <CardServico2 title='Garantia Total!'
            icon='/icons/trofeu-icon.svg' 
            url='/servicos/garantia-total'
            text='Se você busca soluções precisas e inovadoras no ramo de identificação, está no lugar certo! Nossa consultoria é especializada em ajudar empresas e organizações a aprimorar seus processos de identificação e segurança.'/>
            
            <CardServico2 title='Entregas para Todo o Brasil'
            icon='/icons/caminhao-icon.svg'             
            url='/servicos/entregas-para-todo-o-brasil'
            text='Agora você pode desfrutar da comodidade de adquirir nossos produtos, não importa onde esteja no Brasil. Faça seu pedido hoje mesmo e aguarde a chegada dos nossos itens de qualidade!'/>
            
            <CardServico2 title='Orçamentos Rápidos'
            icon='/icons/orcamento-icon.svg' 
            url='/servicos/orcamentos-rapidos'
             text='Não perca tempo buscando por suprimentos em vários lugares. Com nosso atendimento ágil, você economiza tempo e foca no crescimento do seu negócio.'/>
          </div>
      
    </Container>
    </section>
  )
}
