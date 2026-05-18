'use client';

import React, { useRef } from 'react';

import SobreMim from '@/components/sobreMim/SobreMim';
import Skills from '@/components/habilidades/Skills';
import Projetos from '@/components/projetos/Projetos';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function Home() {
  const sobreRef = useRef<HTMLElement | null>(null);
  const habilidadesRef = useRef<HTMLElement | null>(null);
  const projetosRef = useRef<HTMLElement | null>(null);

  //Função que recebe uma ref, e se ela estiver disponível, executa scrollIntoView().
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        sobreRef={sobreRef}
        habilidadesRef={habilidadesRef}
        projetosRef={projetosRef}
      />

      <section ref={sobreRef}>
        <SobreMim />
      </section>

      <section ref={habilidadesRef}>
        <Skills />
      </section>

      <section ref={projetosRef}>
        <Projetos />
      </section>

      <Footer />
    </div>
  );
}
