import { Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Link from "next/link"
import { navBarItems } from "@/constants";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Church Info */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <Heart className="h-8 w-8 text-blue-400 mr-3"/>
                            <span className="text-xl font-bold">St. Mary's Anglican Church</span>
                        </div>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            A place where faith, hope, and love come together. Join our community as we grow in Christ and serve
                            others with open hearts.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navBarItems.map((item) => (
                                <li>
                                    <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                                <div className="text-gray-300 text-sm">
                                    123 Faith Street
                                    <br/>
                                    Hometown, ST 12345
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">info@gracecommunity.org</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">© 2025 St. Mary's Anglican Church. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
