import { ANCHOR } from '@/shared';
import { Button } from '@/shared/ui';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Main() {
  return (
    <Box sx={{ bgcolor: 'secondary.light' }}>
      <main style={{ padding: '30px' }}>
        <section id={ANCHOR.HOME}>
          <p>HOME</p>
          {[...new Array(10)].map((_, i) => (
            <Typography key={i} variant="h1" color="primary" sx={{}}>
              Home
            </Typography>
          ))}
        </section>
        <section id={ANCHOR.ABOUT}>
          <p>ABOUT</p>

          {[...new Array(10)].map((_, i) => (
            <Typography key={i} variant="h1" color="primary" sx={{}}>
              Home
            </Typography>
          ))}
        </section>
        <section id={ANCHOR.EXPERIENCE}>
          <p>HOME</p>

          {[...new Array(10)].map((_, i) => (
            <Typography key={i} variant="h1" color="primary" sx={{}}>
              Home
            </Typography>
          ))}
        </section>
        <section id={ANCHOR.PROJECTS}>
          <p>EXPERIENCE</p>

          {[...new Array(10)].map((_, i) => (
            <Typography key={i} variant="h1" color="primary" sx={{}}>
              Home
            </Typography>
          ))}
        </section>
        <section id={ANCHOR.CONTACTS}>
          <p>CONTACTS</p>

          {[...new Array(10)].map((_, i) => (
            <Typography key={i} variant="h1" color="primary" sx={{}}>
              Home
            </Typography>
          ))}
        </section>

        <Button>Contact</Button>
      </main>
    </Box>
  );
}
