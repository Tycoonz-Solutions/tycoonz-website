import Hero from './components/Hero';
import Features from './components/Features';
import Statistics from './components/Statistics';
import Solutions from './components/Solutions';
import Team from './components/Team';
import Reach from './components/Reach';
import Clients from './components/Clients';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Statistics />
      <Team />
      <Solutions />
      <Reach />
      <Clients />
    </main>
  );
}
