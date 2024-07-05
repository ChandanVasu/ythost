import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className="bg-black-500 p-2 head">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={120} // Adjust the width as per your design
                        height={30} // Adjust the height as per your design
                    />
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
