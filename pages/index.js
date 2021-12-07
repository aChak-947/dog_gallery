import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
//import Image from 'next/image'
import React, { useState } from "react";



export async function getStaticProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  return {
    props: {dogs: data}
  }
}

export default function Home({ dogs }) {
  console.log(dogs);
  const [dogImage, setDogImage] = useState(dogs.message);

  const changeImageHandler = async () => {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    setDogImage(data.message);
  };

  return (
    <>
      <Head>
        <title>Dog | Home</title>
      </Head>
      <div>
        <h1 className={styles.title} >HomePage</h1>


        <div
        style={{
          // border: "2px solid red",
          display: "grid",
          placeItems: "center",
          minHeight: "60vh",
        }}
      >
        <div
          style={{
            // border: "2px solid green",
            height: "20rem",
            width: "22rem",
            margin: "0 auto",
            objectFit: "contain",
          }}
        >
          <img style={{ width: "100%", height: "100%" }} src={dogImage}></img>
        </div>
        <button className={styles.btn} onClick={changeImageHandler}>Change Image</button>
      </div>
        



        <Link href="/doglist" >
          <a className={styles.btn}>See Dog Listing!</a>
        </Link>
      </div>
    </>
  )
}
