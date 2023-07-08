import React from 'react'
import './Faqs.css'
import FaqsPage from '../../Components/Faqs/Faqs'
import FaqAccordeon from '../../Components/FaqAccordeon/FaqAccordeon'
import FaqImg from '../../Components/FaqImg/FaqImg'
import FaqsTitle from '../../Components/FaqsTitle/FaqsTitle'
import FaqsForm from '../../Components/FaqsForm/FaqsForm'

export default function Faqs() {
  return (
    <div className='FaqsPages'>
      <FaqsPage />
      <FaqsTitle />
      <div className='FaqsWelcome'>
        <FaqAccordeon />
        <FaqImg />
      </div>

      <div>
        <FaqsForm />
      </div>

    </div>
  )
}
