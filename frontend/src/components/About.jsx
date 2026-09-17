
function About(){
    return(
        <section id="sobre" className="bg-white">

            <div className="mx-auto max-w-7xl px-6 py-24">

                <div className="mb-16 text-center">
                    <span className="font-playfair text-4xl text-[#36454F]">
                        Sobre mim
                    </span>
                </div>
                    
                <div className="grid items-center gap-16 md:grid-cols-2">

                    {/* Decoração */}
                    <div className="relative flex justify-center">

                        <div className="h-80 w-80 rounded-full bg-[#E8C2C9]/40">
                        </div>
                        
                        <div className="absolute top-1/2 left-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#36454F]/10">
                        </div>

                    </div>


                    {/* Texto */}
                    <div>

                        <h2 className="font-playfair text-4xl text-[#36454F]">
                            Olá, sou Vanessa Souza!
                        </h2>

                        <p className="font-montserrat mt-6 leading-7 text-[#36454F]/80">
                            Texto sobre ela...
                        </p>

                        <p className="font-montserrat mt-4 leading-7 text-[#36454F]/80">
                            Texto sobre a abordagem...
                        </p>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default About;