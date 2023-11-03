import { Container } from "../Container"

export default function Teste1(){
    return(
        <Container>

        <div className="grid grid-cols-1 gap-y-[10px] md:grid-cols-2">
            <div className="w-full max-w-[350px] h-[80px] bg-blue-500 "></div>
            <div className="w-full max-w-[350px] h-[80px] bg-blue-500"></div>
            <div className="w-full max-w-[350px] h-[80px] bg-blue-500"></div>
            <div className="w-full max-w-[350px] h-[80px] bg-blue-500"></div>
        </div>
        </Container>
    )
}