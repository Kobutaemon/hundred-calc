import "./Arithmetic.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface arithmeticProps {
  arithmetic: string,
  parentSetArithmetic: (value: string) => void, // 親へstateを渡すための関数(parentSetArithmeticに引数で渡した値がsetArithmeticに渡される)
}

function Arithmetic(props: arithmeticProps) {
  const handleChange = (event: SelectChangeEvent) => {
    props.parentSetArithmetic(event.target.value as string);
  };

  return (
    <div>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="choice-arithmetic">四則演算</InputLabel>
          <Select
            labelId="choice-arithmetic"
            id="arithmetic-select"
            value={props.arithmetic}
            label="arithmetic"
            onChange={handleChange}
          >
            <MenuItem value={"+"}>+</MenuItem>
            <MenuItem value={"ー"}>−</MenuItem>
            <MenuItem value={"×"}>×</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  )
}

export default Arithmetic