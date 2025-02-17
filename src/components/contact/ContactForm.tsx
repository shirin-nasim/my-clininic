import React from "react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Mail, Phone, Building, Send } from "lucide-react";
import BackButton from "../ui/back-button";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <BackButton />
      </div>

      <Card className="p-8">
        <h1 className="text-3xl font-bold mb-8">Professional Inquiries</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Organization Name</label>
              <div className="relative">
                <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10"
                  placeholder="Hospital or Institution"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Contact Person</label>
              <Input placeholder="Full Name" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10"
                  type="email"
                  placeholder="email@organization.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Phone</label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-10"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <Textarea
              placeholder="Please provide details about the opportunity..."
              className="min-h-[150px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
