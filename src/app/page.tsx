import { ANCHOR } from '@/shared';
import { Button, Container } from '@/shared/ui';
import { About, Contacts, Experience, Portfolio, Skills } from '@/widgets';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Main() {
  return (
    <Box sx={{ bgcolor: 'secondary.light' }}>
      <Container>
        <main>
          <About />
          <Skills />
          <Experience />
          <Portfolio />
          <Contacts />
          <Button>Contact</Button>
        </main>
      </Container>
    </Box>
  );
}
