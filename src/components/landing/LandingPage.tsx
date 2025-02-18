import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, User, Award, ArrowRight, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <Badge className="bg-blue-100 text-blue-800 mb-4">
              Board Certified Ophthalmologist
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold">Dr. Sarah Smith</h1>
            <p className="text-xl text-gray-600">
              Senior Ophthalmologist & Retina Specialist
            </p>
            <p className="text-gray-600 max-w-xl">
              Dedicated eye care professional with over 10 years of experience
              in advanced ophthalmology procedures and patient care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link to="/booking">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/profile" className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  View Full Profile
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Doctor"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">5000+</h3>
              <p className="text-gray-600">Patients Treated</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">15+</h3>
              <p className="text-gray-600">Years Experience</p>
            </Card>
            <Card className="p-6 text-center">
              <Star className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold">4.9/5</h3>
              <p className="text-gray-600">Patient Rating</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Specialized Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Comprehensive Eye Exams",
              description: "Complete evaluation of eye health and vision",
              price: "$150",
            },
            {
              title: "Retinal Surgery",
              description:
                "Advanced surgical procedures for retinal conditions",
              price: "Consultation Required",
            },
            {
              title: "Laser Treatment",
              description: "Modern laser procedures for various eye conditions",
              price: "From $500",
            },
          ].map((service, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-semibold">
                  {service.price}
                </span>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/booking" className="flex items-center">
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Patient Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "John Anderson",
                text: "Dr. Smith's expertise in retinal surgery gave me back my vision. Her caring approach made the whole process comfortable.",
                role: "Retinal Surgery Patient",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
              },
              {
                name: "Emily Parker",
                text: "The most thorough eye examination I've ever had. Dr. Smith explained everything clearly and addressed all my concerns.",
                role: "Regular Patient",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
              },
              {
                name: "Michael Chen",
                text: "After years of eye problems, Dr. Smith's treatment plan has made a remarkable difference. Highly recommended!",
                role: "Glaucoma Patient",
                image:
                  "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            For professional inquiries or to schedule a consultation, please
            don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/booking">Schedule Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:dr.sarah@eyecare.com">Professional Inquiries</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
