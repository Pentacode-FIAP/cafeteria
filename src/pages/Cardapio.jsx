import ProdutoCard from '../components/ProdutoCard'

const Cardapio = () => {
  return (
    <main>
      <header>
        <p>Cafeteria</p>
        <h2>Café & Companhia</h2>
        <p>
          Cafés especiais, bolos e salgados feitos todos os dias, do jeito que você gosta.
        </p>
      </header>

      <ProdutoCard />

      <footer>
        <div>
          <div>
            <h3>Horário</h3>
            <p>Seg a Sex: 7h às 19h</p>
            <p>Sáb e Dom: 8h às 17h</p>
          </div>
          <div>
            <h3>Endereço</h3>
            <p>Rua das Flores, 123</p>
            <p>São Paulo, SP</p>
          </div>
          <div>
            <h3>Contato</h3>
            <p>(11) 99999-9999</p>
            <p>contato@cafeecompanhia.com</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default Cardapio