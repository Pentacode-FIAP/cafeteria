import paoDeQueijo from '../assets/pao-de-queijo.jpg'
import boloCenoura from '../assets/bolo-cenoura.jpg'
import cafeLatte from '../assets/cafe-latte.jpg'
import cappuccino from '../assets/cappuccino.jpg'

const produtos = [
  { id: 1, titulo: 'Pão de Queijo', descricao: 'Quentinho, saído do forno', preco: 'R$ 6,00', imagem: paoDeQueijo },
  { id: 2, titulo: 'Bolo de Cenoura', descricao: 'Com cobertura de chocolate', preco: 'R$ 11,00', imagem: boloCenoura },
  { id: 3, titulo: 'Café Latte', descricao: 'Espresso com leite vaporizado', preco: 'R$ 12,00', imagem: cafeLatte },
  { id: 4, titulo: 'Cappuccino', descricao: 'Com calda de chocolate', preco: 'R$ 14,00', imagem: cappuccino },
]

const ProdutoCard = () => {
  return (
    <section>
      <div>
        <h1>Nosso Cardápio</h1>

        <div>
          {produtos.map((produto) => (
            <div key={produto.id}>
              <img src={produto.imagem} alt={produto.titulo} />

              <article>
                <h2>{produto.titulo}</h2>
                <p>{produto.descricao}</p>
                <p>{produto.preco}</p>

                <button>Pedir</button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProdutoCard