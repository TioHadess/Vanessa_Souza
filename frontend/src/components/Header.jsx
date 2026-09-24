
function Header(){
    return(
        <header className="sticky top-0 z-50 w-full bg-[#FAF8F6]/95 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="">
                    <h1 className="font-playfair  text-2xl font-semibold text-[#36454F]">Vanessa Souza</h1>
                </a>
                <nav className="flex items-center gap-8">
                    <a 
                        href="#sobre"
                        className="font-montserrat rounded-full px-3 py-1.5 text-sm text-[#36454F] transition-all duration-300 hover:bg-[#E8C2C9]/20 hover:text-[#E8C2C9]"
                    >Sobre</a>
                    <a 
                        href="#atendimento"
                        className="font-montserrat rounded-full px-3 py-1.5 text-sm text-[#36454F] transition-all duration-300 hover:bg-[#E8C2C9]/20 hover:text-[#E8C2C9]"
                    >Atendimento</a>
                    <a 
                        href="#abordagem"
                        className="font-montserrat rounded-full px-3 py-1.5 text-sm text-[#36454F] transition-all duration-300 hover:bg-[#E8C2C9]/20 hover:text-[#E8C2C9]"
                    >Abordagem</a>
                    <a 
                        href="#contato"
                        className="font-montserrat rounded-full px-3 py-1.5 text-sm text-[#36454F] transition-all duration-300 hover:bg-[#E8C2C9]/20 hover:text-[#E8C2C9]"
                    >Contato</a>
                    
                </nav>

                <a 
                    href="contato"
                    className="
                    font-montserrat
                    rounded-full
                    bg-[#E8C2C9]
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-[#36454F]
                    transition
                    hover:opacity-80
                    "
                >
                    Agendar atendimento
                </a>
            </div>
        </header>
    )
}

export default Header;