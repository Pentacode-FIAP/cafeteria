const Home = () => {
  return (
    <main className="flex min-h-[80vh] items-center justify-center box-border bg-[#f8f1e7] px-[8%] py-[60px] text-[#735945]">
      <section className="w-full max-w-[850px] text-center">
        <h1 className="mb-[25px] text-[clamp(32px,5vw,56px)] font-bold leading-[1.2]">
          Sabor sofisticado,
          <br />
          preço que combina com você.
        </h1>

        <p className="mx-auto mb-5 max-w-[700px] text-[15px] leading-[1.9] text-[#735945]">
          Descubra uma nova forma de apreciar café!
          Unimos a qualidade dos cafés especiais, o charme de uma
          cafeteria gourmet e preços justos para transformar cada
          pausa em um momento único.
        </p>

        <p className="mb-[30px] text-[17px] font-semibold leading-[1.6]">
          Seu café favorito, uma experiência extraordinária,
          um preço que vale a pena.
        </p>

        <a
          href="/cardapio"
          className="inline-block rounded-lg bg-[#735945] px-8 py-4 text-base font-semibold text-white shadow-md transition duration-300 hover:bg-[#5d4634] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#735945] focus:ring-offset-2"
        >
          Conheça nosso cardápio
        </a>
      </section>
    </main>



  );
};

export default Home
