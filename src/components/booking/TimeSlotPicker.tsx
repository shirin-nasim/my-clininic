import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface TimeSlotPickerProps {
  date?: Date;
  slots?: TimeSlot[];
  onSelectSlot?: (time: string) => void;
  selectedSlot?: string;
  onDateSelect?: (date: Date | undefined) => void;
}

const TimeSlotPicker = ({
  date = new Date(),
  slots = [
    { time: "09:00", available: true },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: false },
    { time: "11:30", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: true },
    { time: "15:00", available: false },
    { time: "15:30", available: true },
  ],
  onSelectSlot = () => {},
  selectedSlot = "",
  onDateSelect = (date: Date | undefined) => {},
}: TimeSlotPickerProps) => {
  return (
    <Card className="p-6 bg-white w-full max-w-[440px]">
      <div className="mb-4 space-y-4">
        <h3 className="text-lg font-semibold">Select Date & Time</h3>
        <div className="p-3 border rounded-lg bg-gray-50">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateSelect}
            className="rounded-md border"
            disabled={(date) => date < new Date() || date.getDay() === 0}
          />
        </div>
        <h4 className="font-medium">
          Available Time Slots for {date.toLocaleDateString()}
        </h4>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <TooltipProvider>
          {slots.map((slot, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div>
                  <Button
                    variant={selectedSlot === slot.time ? "default" : "outline"}
                    className={`w-full ${!slot.available ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => slot.available && onSelectSlot(slot.time)}
                    disabled={!slot.available}
                  >
                    {slot.time}
                  </Button>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>
                  {slot.available
                    ? `Select ${slot.time} appointment`
                    : `Not available at ${slot.time}`}
                </p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>

      <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span>Selected</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border border-input rounded-full"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </Card>
  );
};

export default TimeSlotPicker;
