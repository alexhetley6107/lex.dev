import { Button } from '@/shared/ui';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <main style={{ padding: '30px' }}>
        <Typography variant="h1" color="primary" sx={{}}>
          Home
        </Typography>

        <Button>Contact</Button>
      </main>
    </>
  );
}
