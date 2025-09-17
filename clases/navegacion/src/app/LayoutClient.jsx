'use client'

import { usePathname } from 'next/navigation'

import {
    Header,
    Footer
} from '@/components/index'


// paginas que no quiero mostrar el header y footer
const hiddenPaths = ['/login', '/register', '/vision', '/mision'];


export default function LayoutClient({ children }) {

    // creamos una constante para manejar el path
    const pathName = usePathname();

    const hidden = hiddenPaths.includes(pathName);

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>

            {!hidden && <Header />}

            <main style={{ flex: 1}}>
                {children}
            </main>

            {!hidden && <Footer />}

        </div>
    )
}