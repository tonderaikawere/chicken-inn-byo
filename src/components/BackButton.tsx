import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "default" | "lg";
}

const BackButton = ({ className = "", variant = "outline", size = "default" }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // If no history, go to home page
      navigate('/');
    }
  };

  return (
    <Button
      onClick={handleBack}
      variant={variant}
      size={size}
      className={`flex items-center gap-2 ${className}`}
      aria-label="Go back"
    >
      <ArrowBackRounded className="!h-4 !w-4" />
      Back
    </Button>
  );
};

export default BackButton;
