import { Button } from '@/shared/ui';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Main() {
  return (
    <Box sx={{ bgcolor: 'secondary.light' }}>
      <main style={{ padding: '30px' }}>
        {[...new Array(30)].map((_, i) => (
          <Typography key={i} variant="h1" color="primary" sx={{}}>
            Home
          </Typography>
        ))}

        <Button>Contact</Button>
      </main>
    </Box>
  );
}
