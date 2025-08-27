import Profile from '@/components/Profile'
import Category from './Category'

export default function Post({ post, }) {
    return (
        <div key={post.id} className=" flex flex-col bg-white rounded shadow p-10 mr-10 text-black">
            <h2 className=" border-b-2">{post.titulo}</h2>
            <Profile name={post.autor.name} pais={post.autor.pais} />
            <div className="flex">
                {
                    post.categorias.map((c) => (
                        <Category name={c} />
                    ))
                }
            </div>
            <div>
                {
                    post.comentarios.map((c, i) => (
                        <div key={c.usuario}>
                            <Profile name={c.usuario} text={c.text} />
                            <div>
                                {c.respuestas.map((r, i) => (
                                    <div key={r.texto}>
                                        <p>reacion -  {r.usuario}</p>
                                        <p>reaccion:  {r.texto}</p>
                                        <div>
                                            {r.reacciones.map((rP, i) => (
                                                <div key={rP.usuario}>
                            <Profile name={c.usuario} text={c.text} />

                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}