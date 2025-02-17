import React, { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import TimeSlotPicker from "./TimeSlotPicker";
import BookingSummary from "./BookingSummary";

interface BookingFlowProps {
  serviceType?: "consultation" | "test";
  doctorName?: string;
  testName?: string;
  onComplete?: () => void;
  onCancel?: () => void;
  defaultOpen?: boolean;
}

const BookingFlow = ({
  serviceType = "consultation",
  doctorName = "Dr. Sarah Smith",
  testName = "Comprehensive Eye Examination",
  onComplete = () => {},
  onCancel = () => {},
  defaultOpen = true,
}: BookingFlowProps) => {
  const [currentStep, setCurrentStep] = useState<"slot" | "summary">("slot");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [selectedDate] = useState<Date>(new Date());

  const handleSlotSelect = (time: string) => {
    setSelectedSlot(time);
  };

  const handleNext = () => {
    if (selectedSlot) {
      setCurrentStep("summary");
    }
  };

  const handleBack = () => {
    setCurrentStep("slot");
  };

  const handleConfirm = () => {
    onComplete();
  };

  return (
    <Card className="w-full max-w-[480px] p-6 bg-white">
      <Tabs defaultValue={currentStep} value={currentStep}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="slot" disabled={currentStep === "summary"}>
            Select Time
          </TabsTrigger>
          <TabsTrigger value="summary" disabled={currentStep === "slot"}>
            Review & Confirm
          </TabsTrigger>
        </TabsList>

        <TabsContent value="slot" className="space-y-4">
          <TimeSlotPicker
            date={selectedDate}
            onSelectSlot={handleSlotSelect}
            selectedSlot={selectedSlot}
          />
          <div className="flex justify-between mt-4">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button
              onClick={handleNext}
              disabled={!selectedSlot}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Next
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="summary">
          <BookingSummary
            serviceType={serviceType}
            doctorName={doctorName}
            testName={testName}
            date={selectedDate.toLocaleDateString()}
            time={selectedSlot}
            onConfirm={handleConfirm}
            onCancel={handleBack}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default BookingFlow;
