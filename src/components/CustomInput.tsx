import { TextField } from "@mui/material";

type Props = {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
};

const CustomInput = ({
  label,
  type = "text",
  value,
  onChange,
  error,
}: Props) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      error={error !== ""}
      helperText={error}
    />
  );
};

export default CustomInput;