'use client'

import { isAuthenticated } from '@/lib/auth';
import { publicRoutes } from '@/lib/route';
import { useRouter, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'



// paginas que no quiero mostrar el header y footer
const hiddenPaths = [];


export default function LayoutClient({ children }) {


    const [loading, setLoading] = useState(true)

    // creamos una constante para manejar el path
    const pathName = usePathname();
    const hidden = hiddenPaths.includes(pathName);

    const router = useRouter()


    useEffect(
        () => {
            setLoading(true)
            if (publicRoutes.includes(pathName)) {
                setLoading(false)
                return;
            }

            if (!isAuthenticated()) {
                router.push('/')
            }
        },
        [pathName, router]
    )



    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column"
        }}>

            {loading ? <p>Loading...</p> : <div>
                {/* {!hidden && <Header />} */}

                <main style={{ flex: 1 }}>
                    {children}
                </main>

                {/* {!hidden && <Footer />} */}
            </div>}

        </div>
    )
}