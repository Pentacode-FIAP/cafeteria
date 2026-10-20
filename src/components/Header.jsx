import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[5%] bg-[#735945]">
      <h1 className='logo p-2 text-[1.5rem] text-white cursor-pointer transition-all'>CAFETERIA</h1>
      <nav>
        <ul className='flex list-none items-center gap-8' >
          <li>
            <Link to="/" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Inicio</Link>
          </li>
          <li>
            <Link to="/cardapio" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Cardápio</Link>
          </li>
          <li>
            <Link to="/contato" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Contato</Link>
          </li>
          <li>
            <Link to="/sobre" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header