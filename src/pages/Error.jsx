import { Link } from "react-router-dom"

const Error = () => {
    return (
        <main className=" min-h-screen bg-[#735945] px-[5%] my-20 grow text-center flex flex-col 
    items-center justify-center">
            <h2 className="text-[#fffaf1] text-6xl font-bold">404</h2>

            <p className="text-2xl font-semibold mb-2 text-[#fffaf1]">
                Página não encontrada!
            </p>

            <p className="text-[#fffaf1] mb-8 max-w-md">
                A página que você está procurando não existe ou foi removida.
            </p>

            
        </main>
    )
}

export default Error