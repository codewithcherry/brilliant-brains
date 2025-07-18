import React, { FC } from 'react'
import SEMHero from './SEM/SEMHero';
import SEMFaqs from './SEM/SEMFaqs';

const SEM :FC= () => {
  return (
    <div>
      <SEMHero />
      <SEMFaqs />
    </div>
  )
}

export default SEM;