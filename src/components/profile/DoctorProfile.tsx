import React from "react";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Download,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Stethoscope,
} from "lucide-react";

interface Experience {
  role: string;
  hospital: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface DoctorProfileProps {
  name?: string;
  title?: string;
  specialization?: string;
  about?: string;
  experience?: Experience[];
  education?: Education[];
  skills?: string[];
  certifications?: string[];
  email?: string;
  phone?: string;
  location?: string;
  avatarUrl?: string;
}

const DoctorProfile = ({
  name = "Dr. Sarah Smith",
  title = "Senior Ophthalmologist",
  specialization = "Retina Specialist",
  about = "Dedicated ophthalmologist with over 10 years of experience in diagnosing and treating various eye conditions. Specialized in retinal diseases and surgical procedures.",
  experience = [
    {
      role: "Senior Ophthalmologist",
      hospital: "City Eye Hospital",
      period: "2018 - Present",
      description:
        "Lead ophthalmologist specializing in retinal surgeries and complex eye procedures.",
    },
    {
      role: "Ophthalmologist",
      hospital: "Central Medical Center",
      period: "2015 - 2018",
      description:
        "Conducted comprehensive eye examinations and treated various eye conditions.",
    },
  ],
  education = [
    {
      degree: "Fellowship in Retina Surgery",
      institution: "Advanced Eye Institute",
      year: "2015",
    },
    {
      degree: "MD in Ophthalmology",
      institution: "Medical University",
      year: "2013",
    },
  ],
  skills = [
    "Retinal Surgery",
    "Cataract Surgery",
    "Laser Treatment",
    "Glaucoma Management",
  ],
  certifications = [
    "Board Certified Ophthalmologist",
    "Advanced Surgical Techniques Certificate",
  ],
  email = "dr.sarah@eyecare.com",
  phone = "+1 234 567 8900",
  location = "New York, NY",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
}: DoctorProfileProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="mb-6">
        <BackButton />
      </div>
      <Card className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100">
            <img
              src={avatarUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-xl text-gray-600">{title}</p>
            <p className="text-blue-600 font-medium">{specialization}</p>

            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            </div>
          </div>

          <Button className="w-full md:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Stethoscope className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">About Me</h2>
        </div>
        <p className="text-gray-600">{about}</p>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-600 pl-4">
              <h3 className="font-semibold">{exp.role}</h3>
              <p className="text-blue-600">{exp.hospital}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2 text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Education</h2>
        </div>
        <div className="space-y-4">
          {education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.year}</p>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-800"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Certifications</h2>
          <div className="space-y-2">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <Award className="w-4 h-4 text-blue-600" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Publications Section */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Publications & Research</h2>
        <div className="space-y-4">
          {[
            {
              title:
                "Advanced Techniques in Retinal Surgery: A Comprehensive Review",
              journal: "Journal of Ophthalmology",
              year: "2023",
              link: "#",
            },
            {
              title:
                "Long-term Outcomes of Laser Treatment in Diabetic Retinopathy",
              journal: "Clinical Eye Research",
              year: "2022",
              link: "#",
            },
            {
              title: "Novel Approaches in Glaucoma Management",
              journal: "International Journal of Eye Surgery",
              year: "2021",
              link: "#",
            },
          ].map((pub, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-semibold text-blue-600">{pub.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {pub.journal} • {pub.year}
              </p>
              <Button variant="link" className="mt-2 h-auto p-0">
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  Read Publication
                </a>
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Professional Memberships */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Professional Memberships</h2>
        <div className="space-y-3">
          {[
            "American Academy of Ophthalmology",
            "American Society of Retina Specialists",
            "International Council of Ophthalmology",
          ].map((membership, index) => (
            <div key={index} className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-600" />
              <span>{membership}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DoctorProfile;
