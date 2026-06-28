import { Button } from "@mui/material";

type Props = {
  text: string;
  onClick: () => void;
};

const CustomButton = ({ text, onClick }: Props) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={onClick}
      sx={{
        mt: 3,
        py: 1.4,
        borderRadius: 2,
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;