import Foto from '../assets/Vanessa_Souza.jfif'


function Hero(){
    return(
        <section className="min-h-[calc(100vh-80px)]">

            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2">
                
                <div>

                    <p className="font-montserrat mb-4 text-sm uppercase tracking-[0.2em] text-[#36454F]/70">
                        Pisicóloga • CRP xx/xxxxx
                    </p>

                    <h1 className="font-playfair text-5xl leading-tight font-medium text-[#36454F] md:text-6xl">
                        Um espaço para você
                        <br />
                        se ouvir e se cuidar.
                    </h1>

                    <p className="font-montserrat mt-6 max-w-xl text-base leading-7 text-[#36454f]/80 ">
                        A psicoterapia pode ser um espaço de acolhimento,
                        reflexão e autoconhecimento.
                    </p>

                    <a 
                        href="#contato"
                        className="
                        font-montserrat 
                        mt-8 
                        inline-block 
                        rounded-full 
                        bg-[#E8C2C9] 
                        px-7 
                        py-3 
                        text-sm 
                        font-medium 
                        text-[#36454F] 
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:opacity-85"
                    >
                        Agendar atendimento
                    </a>

                </div>

                <div className="flex justify-center">
                    
                    <div className="absolute h-112.5 w-112.5 translate-x-5 translate-y-5 rounded-full bg-[#E8C2C9]/50">
                        
                    </div>

                    <img 
                        src={Foto} 
                        alt="Vanessa Souza - Psicologa"
                        className="relative h-112.5 w-112.5 rounded-full object-cover" 
                    />

                </div>

            </div>

        </section>
    )
}

export default Hero;