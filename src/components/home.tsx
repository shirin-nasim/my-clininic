import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import AppointmentCalendar from "./dashboard/AppointmentCalendar";
import ServiceSelector from "./dashboard/ServiceSelector";
import BookingFlow from "./booking/BookingFlow";
import { Dialog, DialogContent } from "./ui/dialog";

interface HomeProps {
  userName?: string;
  userEmail?: string;
  avatarUrl?: string;
}

const Home = ({
  userName = "John Doe",
  userEmail = "john.doe@example.com",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: HomeProps) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<
    "consultation" | "test"
  >("consultation");
  const [selectedDoctorName, setSelectedDoctorName] = useState("");
  const [selectedTestName, setSelectedTestName] = useState("");

  const handleDoctorSelect = (doctorId: string) => {
    const doctor = doctors.find((d) => d.id === doctorId);
    if (doctor) {
      setSelectedDoctorName(doctor.name);
      setSelectedService("consultation");
      setIsBookingOpen(true);
    }
  };

  const handleTestSelect = (testId: string) => {
    const test = tests.find((t) => t.id === testId);
    if (test) {
      setSelectedTestName(test.name);
      setSelectedService("test");
      setIsBookingOpen(true);
    }
  };

  const doctors = [
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
  ];

  const tests = [
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
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader
        userName={userName}
        userEmail={userEmail}
        avatarUrl={avatarUrl}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <AppointmentCalendar />
          </div>
          <div>
            <ServiceSelector
              doctors={doctors}
              tests={tests}
              onSelectDoctor={handleDoctorSelect}
              onSelectTest={handleTestSelect}
            />
          </div>
        </div>

        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="max-w-[520px] p-0">
            <BookingFlow
              serviceType={selectedService}
              doctorName={selectedDoctorName}
              testName={selectedTestName}
              onComplete={() => setIsBookingOpen(false)}
              onCancel={() => setIsBookingOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Home;
