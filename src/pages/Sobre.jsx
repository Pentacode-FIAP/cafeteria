import { Link } from "react-router-dom"

const Sobre = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center">
      <h2 className="text-[#8a6243] text-5xl font-bold mb-6">Sobre Nós</h2>
      <p className="text-2xl font-semibold mb-4 text-[#8a6243]">Tudo começou na FIAP</p>
      <p className="text-gray-600 mb-4 max-w-2xl">Eu e meus amigos achávamos os bolos da lanchonete da FIAP muito caros. Um de nós sabia fazer bolos e cafés muito bons, e do nada surgiu a ideia: por que não criar uma cafeteria?</p>
      <p className="text-gray-600 mb-8 max-w-2xl">Assim nasceu a nossa cafeteria, com preço acessível para a galera da FIAP, feita por estudantes para estudantes.</p>
      <Link to="/cardapio" className="text-white py-3 px-20 bg-[#8a6243] rounded-2xl">Ver o Cardápio</Link>
    </main>
  )
}

export default Sobre
