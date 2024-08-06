import { InitialAnimation } from '@/shared/ui/InitialAnimation';
import { About, Contacts, Experience, Portfolio, Skills } from '@/widgets';

export default function Main() {
  return (
    <>
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contacts />
      {/* <InitialAnimation /> */}
    </>
  );
}
