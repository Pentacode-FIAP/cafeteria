const Contato = () => {
  return (
    <main className="grow flex items-center justify-center px-4">
      <div className="bg-[#735945] p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-2xl border-2 border-[#fffaf1]">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#fffaf1] text-center mb-6 uppercase tracking-wider">
          Fale Conosco
        </h2>

        <p className="text-[#fffaf1] text-center mb-6">
          Entre em contato conosco através do e-mail:
        </p>

        <a
          href="mailto:suporte@cafeteria.com"
          className="block text-center text-[#fffaf1] font-semibold hover:underline transition-all"
        >
          suporte@cafeteria.com
        </a>

      </div>
    </main>
  )
}

export default Contato