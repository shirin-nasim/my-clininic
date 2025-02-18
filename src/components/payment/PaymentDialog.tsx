import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check, CreditCard } from "lucide-react";

interface PaymentDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount?: number;
  serviceType?: string;
}

const PaymentDialog = ({
  open,
  onClose,
  onSuccess,
  amount = 1,
  serviceType = "Consultation",
}: PaymentDialogProps) => {
  const handlePayment = async () => {
    // Simulate payment processing
    setTimeout(() => {
      onSuccess();
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Card className="p-4 bg-blue-50">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Service</p>
                <p className="font-medium">{serviceType}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Amount</p>
                <p className="font-medium">₹{amount}</p>
              </div>
            </div>
          </Card>

          <div className="mt-6">
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={handlePayment}
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Pay ₹{amount}
            </Button>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-600" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Check className="h-4 w-4 text-green-600" />
              <span>Instant confirmation</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
