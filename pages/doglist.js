import Head from 'next/head';

export const getStaticProps = async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await res.json();

    return {
        props: {dogs: data.message}
    }
}

const DogList = ({ dogs }) => {
    return (
        <>
            <Head>
                <title>Dog | List</title>
            </Head> 
            <div>
                <h1>All Dogs</h1>
                {
                    Object.keys(dogs).map(key => (
                         <li>{ key }</li>
                    ))
                }    
            </div>
        </>
     );
}
 
export default DogList;