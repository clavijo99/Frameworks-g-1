import Link from "next/link"
import Image from "next/image"


const banner = '/banner.webp'


export default function Header() {
    return (
        <header className=" flex flex-col w-full h-[500px] bg-white relative ">

            <Image src={banner} fill />

            <nav className="flex justify-between text-black mx-4 mt-6 relative">
                <div className="flex justify-between">
                    <Link className="mr-10" href='/' > Logo de la tienda </Link>
                    <div className="hidden sm:flex">
                        <Link className="mr-2" href='/'>Home</Link>
                        <Link className="mr-2" href='/products' >Productos</Link>
                        <Link className="mr-2" href='/contact' >Contacto</Link>
                    </div>
                </div>
                <div>
                    <Link href='/login' >Iniciar Sesion</Link>
                </div>

            </nav>

        </header>
    )
}