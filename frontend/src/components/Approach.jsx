
function Approach() {
    return (
        <section id="abordagem" className="bg-[#36454F]">

            <div className="mx-auto max-w-7xl px-6 py-24">

                <div className="grid items-center gap-16 md:grid-cols-2">

                {/* Texto */}
                <div>

                    <span className="font-montserrat text-sm uppercase tracking-[0.2em] text-[#E8C2C9]">
                    Abordagem
                    </span>

                    <h2 className="font-playfair mt-4 text-4xl text-white md:text-5xl">
                    Terapia Cognitivo-Comportamental
                    </h2>

                    <p className="font-montserrat mt-6 leading-7 text-white/80">
                    A Terapia Cognitivo-Comportamental, conhecida como TCC,
                    trabalha a relação entre pensamentos, emoções e comportamentos.
                    </p>

                    <p className="font-montserrat mt-4 leading-7 text-white/80">
                    O processo terapêutico busca compreender padrões e desenvolver
                    novas formas de lidar com diferentes situações.
                    </p>

                </div>

                {/* Elemento visual */}
                <div className="flex justify-center">

                    <div className="flex h-72 w-72 items-center justify-center rounded-full bg-[#E8C2C9]/20">

                        <div className="flex h-48 w-48 items-center justify-center rounded-full border border-[#E8C2C9]/40">

                            <span className="font-playfair text-5xl text-[#E8C2C9]">
                            TCC
                            </span>

                        </div>

                    </div>

                </div>

                </div>

            </div>

        </section>
    )
}

export default Approach;