
function Footer() {
  return (
    <footer className="bg-[#36454F]">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div className="text-center md:text-left">

            <h2 className="font-playfair text-2xl text-white">
              Vanessa Souza
            </h2>

            <p className="font-montserrat mt-2 text-sm text-white/60">
              Psicóloga • CRP xxxxx
            </p>

          </div>


          <div className="flex gap-6">

            <a
              href="#sobre"
              className="font-montserrat text-sm text-white/70 transition hover:text-[#E8C2C9]"
            >
              Sobre
            </a>

            <a
              href="#atendimento"
              className="font-montserrat text-sm text-white/70 transition hover:text-[#E8C2C9]"
            >
              Atendimento
            </a>

            <a
              href="#abordagem"
              className="font-montserrat text-sm text-white/70 transition hover:text-[#E8C2C9]"
            >
              Abordagem
            </a>

            <a
              href="#contato"
              className="font-montserrat text-sm text-white/70 transition hover:text-[#E8C2C9]"
            >
              Contato
            </a>

          </div>

        </div>


        <div className="mt-10 border-t border-white/10 pt-6 text-center">

          <p className="font-montserrat text-xs text-white/50">
            © 2026 Vanessa Souza. Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer;