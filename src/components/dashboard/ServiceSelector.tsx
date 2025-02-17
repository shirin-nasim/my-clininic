import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { UserRound, TestTube, Clock } from "lucide-react";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  availability: string;
}

interface Test {
  id: string;
  name: string;
  duration: string;
  price: number;
  description: string;
}

interface ServiceSelectorProps {
  doctors?: Doctor[];
  tests?: Test[];
  onSelectDoctor?: (doctorId: string) => void;
  onSelectTest?: (testId: string) => void;
  selectedService?: "consultation" | "test";
  selectedId?: string;
}

const ServiceSelector = ({
  doctors = [
    {
      id: "1",
      name: "Dr. Sarah Smith",
      specialty: "General Ophthalmologist",
      availability: "Mon, Wed, Fri",
    },
    {
      id: "2",
      name: "Dr. John Davis",
      specialty: "Retina Specialist",
      availability: "Tue, Thu",
    },
  ],
  tests = [
    {
      id: "1",
      name: "Comprehensive Eye Exam",
      duration: "45 mins",
      price: 150,
      description: "Complete evaluation of eye health and vision",
    },
    {
      id: "2",
      name: "Visual Field Test",
      duration: "30 mins",
      price: 100,
      description: "Measures peripheral vision and detects blind spots",
    },
  ],
  onSelectDoctor = () => {},
  onSelectTest = () => {},
  selectedService = "consultation",
  selectedId = "",
}: ServiceSelectorProps) => {
  return (
    <Card className="w-full max-w-[320px] h-[600px] bg-white p-4">
      <Tabs defaultValue={selectedService} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="consultation" className="flex items-center gap-2">
            <UserRound className="w-4 h-4" />
            Consultation
          </TabsTrigger>
          <TabsTrigger value="test" className="flex items-center gap-2">
            <TestTube className="w-4 h-4" />
            Tests
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consultation" className="mt-4">
          <h3 className="text-lg font-semibold mb-4">Available Doctors</h3>
          <ScrollArea className="h-[480px] pr-4">
            <div className="space-y-4">
              {doctors.map((doctor) => (
                <Card
                  key={doctor.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedId === doctor.id
                      ? "border-primary border-2"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => onSelectDoctor(doctor.id)}
                >
                  <h4 className="font-medium">{doctor.name}</h4>
                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                  <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.availability}</span>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="test" className="mt-4">
          <h3 className="text-lg font-semibold mb-4">Available Tests</h3>
          <ScrollArea className="h-[480px] pr-4">
            <div className="space-y-4">
              {tests.map((test) => (
                <Card
                  key={test.id}
                  className={`p-4 cursor-pointer transition-colors ${
                    selectedId === test.id
                      ? "border-primary border-2"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => onSelectTest(test.id)}
                >
                  <h4 className="font-medium">{test.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {test.description}
                  </p>
                  <Separator className="my-2" />
                  <div className="flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{test.duration}</span>
                    </div>
                    <span className="font-medium">${test.price}</span>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ServiceSelector;
