import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Check, MapPin } from "lucide-react";
import Image from "next/image";

export function About() {
    return(
        <div>
            <section className="bg-[#FDF6ec] py-16">
                <div className="container px -4 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                                <Image
                                    src="/about-1.png"
                                    alt="Foto do cachorro"
                                    fill
                                    quality={100}
                                    priority
                                    className="object-cover hover:scale-110 duration-300"
                                />
                            </div>
                            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
                                <Image
                                    src="/about-2.png"
                                    alt="Foto do cachorro2"
                                    fill
                                    quality={100}
                                    priority
                                />
                            </div>
                        </div>
                        <div className="space-y-6 mt-10">
                            <h2 className="text-4xl font-bold">SOBRE</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit earum similique veniam vero quam! Eveniet itaque animi, laboriosam ipsam sed quidem architecto obcaecati sit non quam, quibusdam numquam excepturi quis.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Aberto desde 2006.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Equipe com mais de 10 veterinários.
                                </li>
                                <li className="flex items-center gap-2">
                                    <Check className="text-red-500"/>
                                    Qualidade é nossa prioridade.
                                </li>
                            </ul>
                            <div className="flex gap-2">
                                <a 
                                href="#"
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                                >
                                    <WhatsappLogo className="w-5 h-5 text-white"/>
                                    Contato via Whatsapp
                                </a>
                                <a 
                                href="#"
                                className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
                                >
                                    <MapPin className="w-5 h-5 text-black"/>
                                    Endereço da loja
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}