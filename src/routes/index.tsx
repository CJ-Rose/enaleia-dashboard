import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useText } from '../hooks/useText'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})


function HomeComponent() {
  const { isPending, error, data, isFetching } = useText()
  
  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <>
      <div className="p-2 m-10">
        <h1 className='text-xl font-bold'>{data.title}</h1>
        <h3>{data.intro_info}</h3>
      </div>

      <div className="p-2 m-10">
        <h1 className='text-xl font-bold'>{data.subtitle}</h1>
        <h3>{data.material_info}</h3>
      </div>
    </>   
    
  );
}
