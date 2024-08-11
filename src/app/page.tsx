import { FadeScreen } from '@/shared/ui';
import { About, Contacts, Experience, Header, Portfolio, Skills } from '@/widgets';

export default function Main() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contacts />
      <FadeScreen />
    </>
  );
}
