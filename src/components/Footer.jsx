import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

function Footer(){
    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                {/* First Row - 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-12">
                    {/* First Column - Logo and Paragraph */}
                    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex-shrink-0">
                            <img src="/teps_logo.svg" alt="TEPS Logo" className="w-24 h-24" />
                        </div>
                        <div>
                            <p className="text-gray-300 text-[13px] leading-relaxed">
                                TEPS is short form for The Experience Plug systems. We are your platform for seamless events, designed by event professionals for everyone; novice or experienced event organizers & owners. Our features include: ticketing, event registration, custom email marketing to attendees, RSVP management, Multiple information stored in Attendee Unique QR Codes, Dashboard for analytics and insights, and lots more.
                            </p>
                        </div>
                    </div>

                    {/* Second Column - Resources and Terms */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-sm mx-auto">
                        {/* Resources Column */}
                        <div>
                            <h3 className="text-[16px] font-semibold text-white mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors text-[16px]">Blog</a></li>
                                <li><a href="/case-studies" className="text-gray-300 hover:text-white transition-colors text-[16px]">Case Studies</a></li>
                                {/* <li><a href="/documentation" className="text-gray-300 hover:text-white transition-colors text-[16px]">Documentation</a></li>
                                <li><a href="/support" className="text-gray-300 hover:text-white transition-colors text-[16px]">Support Center</a></li> */}
                            </ul>
                        </div>

                        {/* Terms & Conditions Column */}
                        <div>
                            <h3 className="text-[16px] font-semibold text-white mb-4">Terms & Conditions</h3>
                            <ul className="space-y-2">
                                <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors text-[16px]">Privacy Policy</a></li>
                                {/* <li><a href="/terms-of-service" className="text-gray-300 hover:text-white transition-colors text-[16px]">Terms of Service</a></li> */}
                                {/* <li><a href="/cookie-policy" className="text-gray-300 hover:text-white transition-colors text-[16px]">Cookie Policy</a></li>
                                <li><a href="/legal" className="text-gray-300 hover:text-white transition-colors text-[16px]">Legal Information</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Second Row - Follow Us and Social Icons */}
                <div className="border-t border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <span className="text-gray-300">Follow us |</span>
                            <div className="flex items-center space-x-4">
                                {/* <a href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                                    <Facebook size={20} />
                                </a>
                                {/* <a href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                                    <Twitter size={20} />
                                </a> */}
                                <a href="https://instagram.com/thepowerofteps" className="text-gray-300 hover:text-white transition-colors">
                                    <Instagram size={20} />
                                </a>
                                <a href="https://www.linkedin.com/company/thepowerofteps" className="text-gray-300 hover:text-white transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} TEPS. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;