'use client'

import Profile from "@/components/Profile";

// importar un componente
import Saludar from "@/components/Saludar";


export default function Home() {

  const users = [
    {
      'name': 'juan',
      'lastName': 'perez',
      'active': true,
      'id': '123456',
      'img': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...', // base64 original
      'comentarios': ['hola', 'soy un comentario']
    },
    {
      'name': 'camilo',
      'lastName': 'clavijo',
      'id': '654321',
      'active': false,
      'img': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...', // base64 simulado
      'comentarios': ['me gusta programar', 'este es mi segundo comentario']
    },
    {
      'name': 'andrea',
      'lastName': 'ramirez',
      'id': '987654',
      'active': true,
      'img': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...', // base64 simulado
      'comentarios': ['hola a todos', 'comentando por aquí']
    },
    {
      'name': 'luis',
      'lastName': 'martinez',
      'id': '112233',
      'img': 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...', // base64 simulado
      'comentarios': ['hola']
    }
  ]



  return (
    <div className="flex justify-center items-center">
      {
        users.map((user) => (
          // user.active ? <Profile key={user.id} name={user.name} lastName={user.lastName} id={user.id} img={user.img} comments={user.comentarios} /> : <h2>no esta activo</h2>
          user.active && <Profile key={user.id} name={user.name} lastName={user.lastName} id={user.id} img={user.img} comments={user.comentarios} />

        ),)
      }

      { /* Llamar al componente saludar  */ }
      <Saludar />
    </div>
  );
}