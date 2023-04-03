import Image from "next/image"
import styles from '../styles/About.module.css'

export default function about() {
  return (
    <div className={styles.about}>
        <h1>Sobre o projeto</h1>
        <p>O projeto da Pokedex em Next.js é um aplicativo web que permite aos usuários explorar informações sobre diversos Pokemons. O projeto foi desenvolvido com o objetivo de fornecer uma interface amigável para consulta de dados dos Pokemons. <br /><br />

O projeto conta com uma interface limpa e agradável, permitindo que os usuários possam facilmente buscar por informações sobre um determinado Pokemon.

Uma das principais vantagens do uso do Next.js é a sua escalabilidade, permitindo que o projeto possa ser facilmente expandido com a adição de novas funcionalidades e melhorias na interface. Além disso, o projeto também utiliza a tecnologia de Server-Side Rendering, o que torna a experiência do usuário mais rápida e suave.<br /><br />

Em resumo, o projeto da Pokedex em Next.js é uma aplicação web funcional e elegante que oferece aos usuários uma forma intuitiva de acessar informações sobre os Pokemons, além de ser uma excelente demonstração das possibilidades oferecidas pelo framework de desenvolvimento Next.js.</p>
        <Image 
        src='/images/charizard.png'
        height='300'
        width='300'
        alt='Charizerd kkk'
        />
    </div>
  )
}
