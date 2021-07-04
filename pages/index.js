import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias eligendi aspernatur velit? Animi, unde. Cum, est officiis. Labore eius maxime dolor, rerum odit perspiciatis? Modi, molestiae dicta. Omnis, nisi natus!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, impedit vel. Quas error repudiandae ullam laboriosam? Optio consequatur ullam repellat ipsum est. Eveniet alias iste natus earum officiis iusto! Consequuntur totam esse, ea doloribus vero similique quibusdam. Harum quaerat alias inventore facere accusantium! Molestias, magni sed. Praesentium cupiditate aperiam odit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos soluta, molestiae deleniti a nobis magni iusto vero minima eos.</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
