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
    <section className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-[#8a6243] text-center mb-10">Nosso Cardápio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-transparent transition-all duration-300 hover:-translate-y-2 hover:border-[#8a6243]"
            >
              <img src={produto.imagem} alt={produto.titulo} className="w-full h-[260px] object-cover" />

              <article className="p-4 text-center">
                <h2 className="text-xl text-[#8a6243] uppercase mb-2 font-bold">{produto.titulo}</h2>
                <p className="text-gray-600 text-sm mb-3">{produto.descricao}</p>
                <p className="text-[#8a6243] text-2xl font-bold mb-4">{produto.preco}</p>

                <button className="bg-[#8a6243] w-1/2 py-3 px-4 text-white rounded-2xl border-none cursor-pointer hover:scale-105">
                  Pedir
                </button>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProdutoCard