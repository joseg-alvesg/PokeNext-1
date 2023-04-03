import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '@/components/Card'

export async function getStaticProps() {
  const maxPkn = 151
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const req = await fetch(`${api}/?limit=${maxPkn}`)
  const data = await req.json()

  //add pokemon index
  data.results.forEach((item, i) => {
    item.id = i + 1
  })
  //return de objeto como sempre em getstaticprops
  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default function Home({ pokemons }) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image
          src='/images/pokeball.png'
          width='50'
          height='50'
          alt='PokeNext'
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pkn) => (
          <Card pokemon={pkn} key={pkn.id}/>
        ))}
      </div>
    </>
  )
}
