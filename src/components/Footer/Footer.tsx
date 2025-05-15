import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="bg-black text-gray-300 text-center px-2 py-10 fixed bottom-0 w-full font-euclid text-sm">
                <p>&copy; {new Date().getFullYear()} by Kerrtisy | Nstalgia Est. 2021.</p>
            </div>
        </footer>
    );
};

export default Footer;