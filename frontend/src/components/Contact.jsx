
function Contact() {
  return (
    <section id="contato" className="bg-white">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-16 text-center">

          <span className="font-montserrat text-sm uppercase tracking-[0.2em] text-[#36454F]/60">
            Contato
          </span>

          <h2 className="font-playfair mt-4 text-4xl text-[#36454F] md:text-5xl">
            Vamos conversar?
          </h2>

          <p className="font-montserrat mx-auto mt-4 max-w-2xl leading-7 text-[#36454F]/70">
            Entre em contato para saber mais sobre os atendimentos
            e tirar suas dúvidas.
          </p>

        </div>


        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-[#FAF8F6] p-8 text-center">

            <h3 className="font-playfair text-2xl text-[#36454F]">
              WhatsApp
            </h3>

            <p className="font-montserrat mt-4 text-sm text-[#36454F]/70">
              (00) 00000-0000
            </p>

          </div>


          <div className="rounded-3xl bg-[#FAF8F6] p-8 text-center">

            <h3 className="font-playfair text-2xl text-[#36454F]">
              E-mail
            </h3>

            <p className="font-montserrat mt-4 text-sm text-[#36454F]/70">
              contato@email.com
            </p>

          </div>


          <div className="rounded-3xl bg-[#FAF8F6] p-8 text-center">

            <h3 className="font-playfair text-2xl text-[#36454F]">
              Instagram
            </h3>

            <p className="font-montserrat mt-4 text-sm text-[#36454F]/70">
              @vanessasouza.psi
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Contact