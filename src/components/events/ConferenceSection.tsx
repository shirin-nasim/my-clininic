import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

interface Conference {
  title: string;
  date: string;
  location: string;
  type: "speaking" | "attending";
  description: string;
  link?: string;
}

const conferences: Conference[] = [
  {
    title: "International Ophthalmology Summit 2024",
    date: "June 15-17, 2024",
    location: "London, UK",
    type: "speaking",
    description: "Keynote speaker on 'Advanced Techniques in Retinal Surgery'",
    link: "#",
  },
  {
    title: "Eye Care Innovation Conference",
    date: "August 22-24, 2024",
    location: "New York, USA",
    type: "speaking",
    description: "Panel discussion on 'Future of Ophthalmology'",
    link: "#",
  },
  {
    title: "Global Retina Forum",
    date: "September 10-12, 2024",
    location: "Tokyo, Japan",
    type: "attending",
    description:
      "Participating in workshops on latest retinal treatment techniques",
    link: "#",
  },
];

const ConferenceSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Upcoming Conferences & Events</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {conferences.map((conference, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <Badge
              variant="secondary"
              className={
                conference.type === "speaking"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              }
            >
              {conference.type === "speaking" ? "Speaking" : "Attending"}
            </Badge>

            <h3 className="text-xl font-semibold mt-4">{conference.title}</h3>

            <div className="space-y-2 mt-4 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{conference.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{conference.location}</span>
              </div>
            </div>

            <p className="mt-4 text-gray-600">{conference.description}</p>

            {conference.link && (
              <Button variant="link" className="mt-4 p-0" asChild>
                <a
                  href={conference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConferenceSection;
