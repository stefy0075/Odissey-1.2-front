import React from 'react'
import './faqAccordeon.css'
import Collapsible from 'react-collapsible'

export default function BasicExample() {
  return (
    <div className='collapsibleConteiner'>
    
    <Collapsible trigger='What is a digital nomad?' className='collapsibleText' open={false} transitionTime={200}>
    <div>Digital nomads are people with a high human capital profile, who work remotely. The growing trend of workers who chose to live as digital nomads has increased after the pandemic upon reconsidering and valuing the lifestyle that integrates work and enjoyment.</div>
    </Collapsible>

    <Collapsible trigger='Do I need a visa to stay in Argentina?' className='collapsibleText' open={false} transitionTime={200}>
    <div>You can stay in Argentina for 90 calendar days upon your arrival without doing any paperwork. If your three-month stay is finished, and you wish to stay longer, you can apply for a special visa for Digital Nomads on the Ministry of the Interior website.</div>
    </Collapsible>

    <Collapsible trigger='Do I have to pay taxes in Argentina?' className='collapsibleText' open={false} transitionTime={200}>
    <div>No. Digital nomads working remotely are not subject to paying local taxes as long as they do not do any work for Argentina.</div>
    </Collapsible>

    <Collapsible trigger='What kind of jobs can I do while staying in Argentina?' className='collapsibleText' open={false} transitionTime={200}>
    <div>Any job you can perform remotely for your country's market or another market, provided that it is not for the Argentinian market and/or for an Argentinian employer.</div>
    </Collapsible>

    <Collapsible trigger='Where can I find recommendations about Argentina?' className='collapsibleText' open={false} transitionTime={200}>
    <div>On the official website of Visit Argentina.</div>
    </Collapsible>

    </div>
    
  );
}

