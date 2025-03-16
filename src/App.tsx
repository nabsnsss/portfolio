import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/sections/Hero';
import { TechnicalArsenal } from './components/sections/TechnicalArsenal';
import { Projects } from './components/sections/Projects';
import { Career } from './components/sections/Career';
import { Contact } from './components/sections/Contact';
export function App() {
  return <Layout>
      <Hero />
      <TechnicalArsenal />
      <Projects />
      <Career />
      <Contact />
    </Layout>;
}