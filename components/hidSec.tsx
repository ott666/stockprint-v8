import Container from "@/components/update/container";
import SquareSub from "./update/decoText/squareSub";
import CheckSub from "./update/decoText/checkSub";
import {CheckIcon} from 'lucide-react'
import Link from "next/link";
import Image from "next/image";
export default function HidSect(){
    return(
        <div className="relative">
      <div className="absolute right-[50%] -z-10 h-full w-[50%] bg-[#0085FF]" />
      <div className="absolute left-[50%] -z-10 h-full w-[50%] bg-white" />
      <Container className="px-0">
        <div className="flex flex-col bg-white mdc:flex-row-reverse lg:gap-[60px]">
          <div className="bg-white py-[35px]  lg:w-full  lg:py-[45px]">
            <Container>
              <div className="flex flex-col gap-[20px] lg:max-w-[620px]">
                <div className="flex flex-col gap-[16px]">
                  <SquareSub
                    className=" text-[18px] font-medium text-[#37393F] xs:text-[24px] mdc:text-[20px]"
                    text="Aqui você economiza"
                  />
                  <h1 className="font-poppins text-[30px] font-bold leading-[121%] tracking-[-1.2px] text-[#37393F] android:text-[40px] xs:text-[44px] mdc:text-[36px] lg:text-[40px] lg:tracking-[-2.2px]">
                    Oferecemos as melhores{' '}
                    <span className="text-[#0085FF]">soluções</span> para
                    identificação
                  </h1>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <p className="text-[18px] leading-[146%] text-primary-gray xs:text-[22px] mdc:text-[16px] lg:text-[20px]">
                    Stockprint é a sua solução confiável em impressão.
                    Oferecemos qualidade, rapidez e versatilidade para
                    suprimentos de identificação.
                  </p>
                  <p className="text-[18px] leading-[146%] text-primary-gray xs:text-[22px] mdc:text-[16px] lg:text-[20px]">
                    É fácil achar a impressora que você precisa, nós trabalhamos
                    com os produtos das 4 maiores fabricantes do ramo
                  </p>
                </div>
                <div className="flex flex-col items-center gap-[44px] lg:items-start ">
                  <div className="flex flex-col gap-[18px]">
                    <CheckSub
                      className="font-poppins text-[16px] text-[#37393F] android:text-[20px] xs:text-[24px] mdc:text-[16px] lg:text-[20px]"
                      text="Excelente pós venda"
                    />
                    <CheckSub
                      className="font-poppins text-[16px] text-[#37393F] android:text-[20px] xs:text-[24px] mdc:text-[16px] lg:text-[20px]"
                      text="Cotações rápidas"
                    />
                  </div>

                  <div className="flex flex-col items-center  gap-[22px] lg:flex-row ">
                    <div className="flex max-w-[350px]  items-center gap-[20px] border  border-[#0085FF] py-[30px] pl-[32px] pr-[20px] mdc:py-[15px]">
                      <CheckIcon size={40} color="blue" />
                      <h1 className=" font-poppins text-[20px] font-bold text-[#37393F] mdc:text-[16px] ">
                        Oferecemos Garantia Total
                      </h1>
                    </div>

                    <div className="flex max-w-[350px] items-center gap-[20px] border border-[#0085FF] py-[30px] pl-[32px] pr-[20px] mdc:py-[15px]">
                      <CheckIcon size={40} color="blue" />
                      <h1 className=" font-poppins text-[20px] font-bold text-[#37393F] mdc:text-[16px] ">
                        Emitimos Nota Fiscal
                      </h1>
                    </div>
                  </div>

                  <Link
                    href={'/produtos'}
                    className="mx-auto flex w-full max-w-[350px] items-center justify-center bg-[#0085FF] py-[30px] font-poppins text-[18px] font-medium text-white lg:mx-0"
                  >
                    Ver produtos
                  </Link>
                </div>
              </div>
            </Container>
          </div>
          <div className="bg-[#0085FF] py-[35px] mdc:max-w-[464px] lg:py-[45px]">
            <Container>
              <div className="flex flex-col gap-[13px]">
                <h1 className="font-poppins text-[30px] font-semibold leading-[121%] tracking-[0.3px] text-white android:text-[36px] xs:text-center xs:text-[46px] mdc:text-start mdc:text-[40px]">
                  Somos parceiros HID{' '}
                  <span className="font-bold text-yellow-400">GOLD</span>
                </h1>
                <div className="relative h-[350px] mdc:order-first mdc:h-[525px]">
                  <Image
                    src={'/hid.jpeg'}
                    fill
                    alt="hid"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <p className="text-[18px] leading-[146%] text-white xs:text-[22px] mdc:text-[18px]">
                  Oferecemos os melhores preços em nossa linha de produtos,
                  graças à nossa parceria com a HID Global. Confira nosso
                  catálogo.
                </p>
                <Link
                  href={'https://www.hidglobal.com/partners/stockprint-2913'}
                  className="text-[20px] font-bold text-white underline xs:text-[24px]"
                >
                  Saiba mais
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </Container>
        </div>
    )
}