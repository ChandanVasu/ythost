import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <p>&copy; {new Date().getFullYear()} Vasux</p>
                        <p>All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
