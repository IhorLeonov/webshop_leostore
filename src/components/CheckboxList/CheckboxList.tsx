import { List, ListItem, ListItemButton, Checkbox } from "@mui/material";
import { MuiLabel } from "./CheckboxList.styled";

interface CheckboxListProps {
  handleChange: (value: string) => void;
  valuesArray: string[];
  checkedInputs: string[];
}

export const CheckboxList = ({
  handleChange,
  valuesArray,
  checkedInputs,
}: CheckboxListProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange(e.target.value);
  };

  return (
    <List>
      {valuesArray.map((value) => (
        <ListItem key={value} disablePadding>
          <ListItemButton sx={{ p: 0 }}>
            <MuiLabel
              label={value}
              control={
                <Checkbox
                  value={value}
                  onChange={onChange}
                  checked={checkedInputs.includes(value)}
                />
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};
