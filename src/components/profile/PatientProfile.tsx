import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { ScrollArea } from "../ui/scroll-area";
import { Eye, Calendar, FileText, AlertCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface Appointment {
  id: string;
  date: string;
  type: "consultation" | "test";
  doctorName: string;
  status: "upcoming" | "completed" | "cancelled";
}

interface TestResult {
  id: string;
  date: string;
  testName: string;
  result: string;
  doctorName: string;
}

interface PatientProfileProps {
  name?: string;
  email?: string;
  dateOfBirth?: string;
  appointments?: Appointment[];
  testResults?: TestResult[];
  medicalHistory?: string[];
}

const PatientProfile = ({
  name = "John Doe",
  email = "john.doe@example.com",
  dateOfBirth = "1990-01-01",
  appointments = [
    {
      id: "1",
      date: "2024-04-15 10:00 AM",
      type: "consultation",
      doctorName: "Dr. Sarah Smith",
      status: "upcoming",
    },
    {
      id: "2",
      date: "2024-03-20 2:30 PM",
      type: "test",
      doctorName: "Dr. John Davis",
      status: "completed",
    },
  ],
  testResults = [
    {
      id: "1",
      date: "2024-03-20",
      testName: "Visual Field Test",
      result: "Normal",
      doctorName: "Dr. John Davis",
    },
    {
      id: "2",
      date: "2024-02-15",
      testName: "Comprehensive Eye Exam",
      result: "Mild myopia",
      doctorName: "Dr. Sarah Smith",
    },
  ],
  medicalHistory = [
    "Mild myopia (-2.00D both eyes)",
    "Family history of glaucoma",
    "No known allergies",
  ],
}: PatientProfileProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/booking" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </Link>
      </Button>
      <Card className="p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-2xl font-semibold text-blue-600">
              {name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500">{email}</p>
            <p className="text-sm text-gray-500">Born {dateOfBirth}</p>
          </div>
        </div>
      </Card>

      <Tabs defaultValue="appointments" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="appointments" className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            Appointments
          </TabsTrigger>
          <TabsTrigger value="test-results" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Test Results
          </TabsTrigger>
          <TabsTrigger
            value="medical-history"
            className="flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Medical History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="appointments">
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge
                        variant="secondary"
                        className={`${appointment.type === "consultation" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}
                      >
                        {appointment.type}
                      </Badge>
                      <h3 className="mt-2 font-medium">
                        {appointment.doctorName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {appointment.date}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${appointment.status === "upcoming" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="test-results">
          <ScrollArea className="h-[400px]">
            <div className="space-y-4">
              {testResults.map((result) => (
                <Card key={result.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{result.testName}</h3>
                      <p className="text-sm text-gray-500">
                        {result.date} • {result.doctorName}
                      </p>
                      <p className="mt-2">{result.result}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="medical-history">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold">Medical History</h2>
            </div>
            <ul className="space-y-3">
              {medicalHistory.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientProfile;
