import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-black-500 p-2 head">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                <img className="h-10" src="/logo.svg" alt="" />
                </div>
                <div className="space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
