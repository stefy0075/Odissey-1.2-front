import React from 'react'
import './faqsForm.css'
import image from '../../img/Carousel6.jpg'
import { useRef } from "react";
import { useDispatch } from "react-redux";
import alertActions from "../../Store/Alert/actions";
import axios from "axios";
const { open } = alertActions;

export default function FaqsForm() {
  let dispatch = useDispatch();
  let dataForm = useRef();


  async function handleFormSubmit(e) {
    e.preventDefault();

    let formInputs = Object.values(dataForm.current.elements).reduce(
      (acc, element) => {
        if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
          acc[element.name] = element.value;
        }
        return acc;
      },
      {}
    );

    let data = {
      name: formInputs.name,
      email: formInputs.email,
      question: formInputs.question,
    };

    let url = 'http://localhost:8080/consulta/queries'
    try {

      await axios.post(url, data)
      let dataAlert = {
        icon: "success",
        title: "Thank you for your inquiry!! You will soon receive an answer",
        type: "toast",
      };

      dispatch(open(dataAlert));

    } catch (error) {
      console.error('Error al enviar la consulta:', error);
      let errorMessage = "";
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        if (typeof error.response.data.message === "string") {
          errorMessage = error.response.data.message;
        } else {
          errorMessage = error.response.data.message.join(" ");
        }
      } else {
        errorMessage = "Se produjo un error al procesar la solicitud.";
      }
      console.log(errorMessage);

      let dataAlert = {
        icon: "error",
        title: "Error, please complete all the form fields and try again",
        text: errorMessage,
        type: "toast",
      };
      dispatch(open(dataAlert));
    }
  };
  return (
    <div className='formSection'>
      <div className='img-form'>
        <img src={image} alt="" />
      </div>
      <div className='form-faq'>
        <h3>Send your query</h3>
        <form action="" className='form-faqs' onSubmit={handleFormSubmit} ref={dataForm}>

          <label htmlFor="">Name</label>
          <input className='inputt' type="text" placeholder='Your name' name='name' id='name' style={{ color: 'white' }} />
          <label htmlFor="">Email</label>
          <input className='inputt' type="email" placeholder='Your email' name='email' id='email' style={{ color: 'white' }} />
          <textarea placeholder='Your Question' name='question' id='question' style={{ color: 'white' }}></textarea>

          <div className='enviar'>
            <input type='submit'></input>
          </div>
        </form>
      </div>


    </div >
  )
}
