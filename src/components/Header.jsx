const Header = () => {
  return (
    <header className="flex justify-between items-center px-[5%] bg-[#735945]">
      <h1 className='logo p-2 text-[1.5rem] text-white cursor-pointer transition-all'>CAFETERIA</h1>
      <nav>
        <ul className='flex list-none items-center gap-8' >
          <li>
            <a href="#" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Inicio</a>
          </li>
          <li>
            <a href="/produtos" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Cardápio</a>
          </li>
          <li>
            <a href="/contatos" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Contatos</a>
          </li>
          <li>
            <a href="/sobre" className='text-white text-lg no-underline hover:text-[#fffaf1] hover:no-underline transition-all'>Sobre</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header