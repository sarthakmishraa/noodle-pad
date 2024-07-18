import Link from "next/link";

export const Navbar = () => {
    return(
        <div className="Navbar">
            <Link href="/"><button>Home</button></Link>
            <Link href="/about"><button>About</button></Link>
        </div>
    )
}