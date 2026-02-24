import { ArrowLeft, Home, Search, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Nav';
import Footer from '../components/Footer';

function NotFound() {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <>
            <Navbar />
            
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
                <div className="max-w-lg mx-auto text-center">
                    {/* 404 Illustration */}
                    <div className="mb-8">
                        <div className="relative mx-auto w-64 h-48">
                            {/* Large 404 Text */}
                            <h1 className="text-8xl font-bold text-[#1082df] opacity-20 absolute inset-0 flex items-center justify-center">
                                404
                            </h1>
                            
                            {/* TEPS Logo */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#1082df]">
                                    <img 
                                        src="/teps_logo.svg" 
                                        alt="TEPS Logo" 
                                        className="w-10 h-10 object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <div className="w-10 h-10 bg-[#1082df] rounded text-white flex items-center justify-center font-bold text-lg" style={{display: 'none'}}>
                                        T
                                    </div>
                                </div>
                            </div>
                            
                            {/* Floating Elements */}
                            <div className="absolute top-4 right-8 w-3 h-3 bg-[#35e9e9] rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                            <div className="absolute bottom-8 left-4 w-2 h-2 bg-[#4284f4] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                            <div className="absolute top-12 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Oops! Page Not Found
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            The page you're looking for seems to have wandered off into the digital maze. 
                            Don't worry, even the best event planners sometimes take a wrong turn!
                        </p>
                    </div>

                    {/* Helpful Suggestions */}
                    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 mb-8">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">What can you do?</h3>
                        <ul className="space-y-3 text-left">
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-[#1082df] rounded-full mr-3"></div>
                                Check the URL for any typos
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-[#1082df] rounded-full mr-3"></div>
                                Use the navigation menu to find what you need
                            </li>
                            <li className="flex items-center text-gray-700">
                                <div className="w-2 h-2 bg-[#1082df] rounded-full mr-3"></div>
                                Go back to the homepage and start fresh
                            </li>
                        </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={handleGoBack}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Go Back
                        </button>
                        
                        <button
                            onClick={handleGoHome}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1082df] text-white rounded-lg hover:bg-[#0d6ebd] transition-colors font-medium"
                        >
                            <Home className="w-5 h-5" />
                            Go Home
                        </button>
                    </div>

                    {/* Quick Links */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <h4 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">
                            Quick Links
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/" className="text-[#1082df] hover:text-[#0d6ebd] font-medium transition-colors">
                                Home
                            </a>
                            <a href="/about" className="text-[#1082df] hover:text-[#0d6ebd] font-medium transition-colors">
                                About
                            </a>
                            <a href="/blog" className="text-[#1082df] hover:text-[#0d6ebd] font-medium transition-colors">
                                Blog
                            </a>
                            <a href="/privacy" className="text-[#1082df] hover:text-[#0d6ebd] font-medium transition-colors">
                                Privacy
                            </a>
                        </div>
                    </div>

                    {/* Contact Support */}
                    <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="flex items-center justify-center gap-2 text-blue-700">
                            <Mail className="w-4 h-4" />
                            <span className="text-sm">
                                Still need help? Contact us at{' '}
                                <a href="mailto:power@eventeps.com" className="font-medium underline hover:no-underline">
                                    power@eventeps.com
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}

export default NotFound;