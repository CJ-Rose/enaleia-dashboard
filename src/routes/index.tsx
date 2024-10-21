import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { fetchHero, fetchMaterials } from '../lib/directus'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [opsHero, setOpsHero] = useState<{title: string, copy:string} | null>(null);
  const [materialsHero, setMaterialsHero] = useState<{title: string, copy:string} | null>(null);

  useEffect(() => {
    fetchHero().then(({ title, copy }) => setOpsHero({ title, copy }));
    fetchMaterials().then(({ title, copy }) => setMaterialsHero({ title, copy }));
  }, []);

  if (!opsHero || !materialsHero) return <div>Loading...</div>;

  return (
    <>
      <div className="p-2 m-10">
        <h1 className='text-xl font-bold'>{opsHero.title}</h1>
        <h3>{opsHero.copy}</h3>
      </div>

      <div className="p-2 m-10">
        <h1 className='text-xl font-bold'>{materialsHero.title}</h1>
        <h3>{materialsHero.copy}</h3>
      </div>
    </>   
    
  );
}
