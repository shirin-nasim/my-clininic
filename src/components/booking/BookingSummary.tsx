import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Calendar, Clock, User, Stethoscope, CreditCard } from "lucide-react";

interface BookingSummaryProps {
  serviceType?: "consultation" | "test";
  doctorName?: string;
  testName?: string;
  date?: string;
  time?: string;
  price?: number;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const BookingSummary = ({
  serviceType = "consultation",
  doctorName = "Dr. Sarah Smith",
  testName = "Comprehensive Eye Examination",
  date = "2024-04-15",
  time = "10:00 AM",
  price = 150.0,
  onConfirm = () => {},
  onCancel = () => {},
}: BookingSummaryProps) => {
  return (
    <Card className="w-full max-w-[440px] p-6 bg-white">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
          <Separator className="my-4" />
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Stethoscope className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Service Type</p>
              <p className="font-medium">
                {serviceType === "consultation" ? "Consultation" : testName}
              </p>
            </div>
          </div>

          {serviceType === "consultation" && (
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm text-gray-500">Doctor</p>
                <p className="font-medium">{doctorName}</p>
              </div>
            </div>
          )}

          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Time</p>
              <p className="font-medium">{time}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="font-medium">${price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={onConfirm}
          >
            Confirm Booking
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BookingSummary;
