import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className = "" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="ghost"
      className={`group relative overflow-hidden transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white ${className}`}
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      Back
    </Button>
  );
};

export default BackButton;
