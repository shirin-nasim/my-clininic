import React from "react";
import { Calendar } from "../ui/calendar";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Clock, Calendar as CalendarIcon } from "lucide-react";

interface Appointment {
  id: string;
  time: string;
  patientName: string;
  type: "consultation" | "test";
  status: "upcoming" | "completed" | "cancelled";
}

interface AppointmentCalendarProps {
  appointments?: Appointment[];
  selectedDate?: Date;
  onDateSelect?: (date: Date | undefined) => void;
  onAppointmentClick?: (appointment: Appointment) => void;
}

const AppointmentCalendar = ({
  appointments = [
    {
      id: "1",
      time: "09:00 AM",
      patientName: "John Doe",
      type: "consultation",
      status: "upcoming",
    },
    {
      id: "2",
      time: "11:30 AM",
      patientName: "Jane Smith",
      type: "test",
      status: "upcoming",
    },
    {
      id: "3",
      time: "02:00 PM",
      patientName: "Mike Johnson",
      type: "consultation",
      status: "upcoming",
    },
  ] as Appointment[],
  selectedDate = new Date(),
  onDateSelect = () => {},
  onAppointmentClick = () => {},
}: AppointmentCalendarProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: string) => {
    return type === "consultation"
      ? "bg-purple-100 text-purple-800"
      : "bg-amber-100 text-amber-800";
  };

  return (
    <Card className="w-full max-w-[800px] p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CalendarIcon className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Calendar</h2>
          </div>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={onDateSelect}
            className="rounded-md border"
          />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">Appointments</h2>
          </div>
          <ScrollArea className="h-[350px] w-full rounded-md border p-4">
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="p-4 rounded-lg border hover:border-blue-500 cursor-pointer transition-colors"
                  onClick={() => onAppointmentClick(appointment)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{appointment.patientName}</p>
                      <p className="text-sm text-gray-500">
                        {appointment.time}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={getStatusColor(appointment.status)}
                    >
                      {appointment.status}
                    </Badge>
                  </div>
                  <Badge
                    variant="secondary"
                    className={getTypeColor(appointment.type)}
                  >
                    {appointment.type}
                  </Badge>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="flex gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-600" />
          <span className="text-sm">Upcoming</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-600" />
          <span className="text-sm">Completed</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-600" />
          <span className="text-sm">Cancelled</span>
        </div>
      </div>
    </Card>
  );
};

export default AppointmentCalendar;
