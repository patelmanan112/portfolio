import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-primary py-8 border-t border-gray-200 dark:border-white/5 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-600 dark:text-gray-500 text-sm font-mono">
                        Designed & Built by Manan Patel
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/patelmanan112/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/manan-patel-557535390" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://x.com/man_an0112" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                        <FaXTwitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
