import Head from 'next/head';
// import Link from 'next/link';
import styles from '../styles/Doglist.module.css'
import React, { useState, useEffect } from "react";
import axios from 'axios';

export const getStaticProps = async () => {
    const res = await axios('https://dog.ceo/api/breeds/list/all');
    const { data } = res;

    return {
        props: {dogs: data}
    }
}

const DogList = ({ dogs }) => {
    const [dogImages, setDogImages] = useState([]);

    const dogList = Object.keys(dogs.message);

    const getDogImages = async (dogName) => {
        const res = await axios(`https://dog.ceo/api/breed/${dogName}/images`);
        const { data } = res;
        setDogImages(data.message);
    };

    const changeDog = async (e) => {
        try {
          const dogName = e.target.value;
          getDogImages(dogName);
        } catch (error) {
          console.log("Something went wrong");
        }
    };

    return (
        <>
            <Head>
                <title>Dog | List</title>
            </Head> 

            {/*dropdown with all breed names*/}
            <div className={styles.outerselect}>
                <select onChange={changeDog} className={styles.innerselect}>
                    {dogList.map((dog) => (
                        <option key={dog}>{dog}</option>
                    ))}
                </select>
            </div>
            

            {/*gallery*/}
            <div
                style={{
                // border: "2px solid red",
                margin: "2rem auto",
                width: "80%",
                maxWidth: "1270px",
                }}
            >
                <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridColumnGap: "8px",
                    gridRowGap: "8px",
                }}
                >
                    {dogImages.length > 0 ? (
                        dogImages.map((dogImage) => {
                        return (
                            <div
                            style={{
                                // border: "2px solid green",
                                height: "23rem",
                                objectFit: "contain",
                            }}
                            >
                            <img
                                style={{ width: "100%", height: "100%" }}
                                key={dogImage}
                                src={dogImage}
                            ></img>
                            </div>
                        );
                        })
                    ) : (
                        <h3>Select a breed</h3>
                    )}
                </div>
            </div>


        </>
     );
}
 
export default DogList;