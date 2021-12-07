import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>Dog Galley</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/doglist"><a>DogList</a></Link>
        </nav>
     );
}
 
export default Navbar;