import Image from "next/image";
import NavigationBar from "@/components/navigation-bar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Clock, Mail, MapPin, Phone, Users } from "lucide-react";
import Footer from "@/components/footer";
import TextType from "@/components/TextType";

export default function Home() {
    return (
        <div className="font-sans min-h-screen bg-gradient-to-b from-purple-50 to-white">
            <NavigationBar />

            {/* Hero Section */}
            <section className="relative py-80 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    {/*<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                        Welcome to St. Mary's Anglican Church
                    </h1>*/}
                    <div className="text-white-100">
                        <TextType className="text-4xl md:text-6xl font-bold mb-6 text-balance"
                                  text={["Welcome to St. Mary's Anglican Church"]} typingSpeed={75} pauseDuration={1500}
                                  showCursor={true} cursorCharacter="|"
                        />
                    </div>

                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
                        A place where faith, hope, and love come together. Join our community as we grow in Christ and serve others
                        with open hearts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg">
                            Join Us This Sunday
                        </Button>
                        <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3 bg-transparent text-lg">
                            Learn More About Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Service Times */}
            <section id="services" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Times</h2>
                        <p className="text-lg text-gray-600">Join us for worship and fellowship</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="text-center p-6 border-2 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Sunday Worship</h3>
                                <p className="text-gray-600 mb-2 font-medium">11:30 AM</p>
                                <p className="text-sm text-gray-500">Holy Communion Services</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 border-2 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <BookOpen className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Bible Study</h3>
                                <p className="text-gray-600 mb-2 font-medium">Thursday 7:00 PM</p>
                                <p className="text-sm text-gray-500">All ages welcome</p>
                            </CardContent>
                        </Card>
                        <Card className="text-center p-6 border-2 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                            <CardContent className="pt-6">
                                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">Youth Group</h3>
                                <p className="text-gray-600 mb-2 font-medium">Friday 6:30 PM</p>
                                <p className="text-sm text-gray-500">Ages 12-18</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Welcome Message */}
            <section className="py-16 bg-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">A Message from Our Priest</h2>
                    <div className="bg-white rounded-lg p-8 shadow-lg border border-purple-100">
                        <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                            "Welcome to St. Mary's Anglican Church! Whether you're new to faith or have been walking with Christ for
                            years, you'll find a warm, welcoming community here. We believe that everyone has a place in God's family,
                            and we're excited to journey alongside you as we discover God's love together."
                        </p>
                        <p className="font-semibold text-gray-900 text-lg">- Reverend Robin Fox</p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section id="contact" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
                        <p className="text-lg text-gray-600">We'd love to meet you in person</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="flex justify-center mb-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <MapPin className="h-8 w-8 text-purple-600" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Address</h3>
                            <p className="text-gray-600">
                                Makedonska 23
                                <br />
                                Belgrade, Serbia
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="flex justify-center mb-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <Phone className="h-8 w-8 text-purple-600" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Phone</h3>
                            <p className="text-gray-600">+ 381 (0) 60 123 456</p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:bg-purple-50 transition-colors">
                            <div className="flex justify-center mb-4">
                                <div className="bg-purple-100 p-3 rounded-full">
                                    <Mail className="h-8 w-8 text-purple-600" />
                                </div>
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-lg">Email</h3>
                            <p className="text-gray-600">info@stmarysanglicanchurch.org</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
