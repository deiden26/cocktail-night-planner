import { useEffect } from 'react';
import { useLocalStorage } from 'react-use';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export default function IngredientCard({ name }) {
  const [
    checked,
    setChecked,
    removeChecked
  ] = useLocalStorage(`ingredient-checked-${name}`, false);

  // Remove from local storage if the ingredient is removed from the list
  useEffect(() => {
    return removeChecked;
  }, [removeChecked]);

  return (
    <Card
      varient="outlined"
      elevation={3} sx={{ mb: 1 }}
    >
      <CardActionArea
        onClick={() => setChecked(!checked)}
      >
        <CardContent>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              {checked ? <strike>{name}</strike> : name}
            </Typography>
            <IconButton
              aria-label={checked ? 'Checked' : 'Unchecked'}
              color={checked ? 'success' : 'primary'}
              component="div"
            >
              {checked ?
                <CheckBoxIcon/> : <CheckBoxOutlineBlankIcon/>
              }
            </IconButton>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
