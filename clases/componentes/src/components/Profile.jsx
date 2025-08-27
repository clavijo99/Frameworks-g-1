export default function Profile({ name, lastName, id, img, comments }) {
    return (
        <div className="flex flex-col bg-cyan-300 p-2 max-w-32 rounded text-black shadow-2xs">
            <img className="rounded-full mb-2" src={img} alt="" />
            <h4 className="mr-2">{name}</h4>
            <p>{lastName}</p>
            <p>{id}</p>
            {/* {
                comments.length > 0 ?
                    (

                        <div className="flex flex-col w-full min-h-11 bg-white">
                            {
                                comments.map((comment, i) => (
                                    <h4 key={i} >{comment}</h4>
                                ))
                            }
                        </div>

                    )
                    : <h1>No hay comnetarios</h1>
            } */}

            {
                comments.length > 0 &&  (

                        <div className="flex flex-col w-full min-h-11 bg-white">
                            {
                                comments.map((comment, i) => (
                                    <h4 key={i} >{comment}</h4>
                                ))
                            }
                        </div>

                    )
            }

        </div>
    )
}