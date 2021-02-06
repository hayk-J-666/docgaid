import React from 'react';
import './../scss/contacts.scss';
import { ReactComponent as Path3 } from './../assets/images/H3.svg';


function Contacts(props) {


  const handlePostMessage = (event) => {
    event.preventDefault();
    alert('Հետ զանգը պատվիրված է');
  };

  

  return (
    <>
      <section  className='contactsContainer'>
            <div className='contacts'>
                <div className='contactsText'>
                  <h2 className='contactsTitle'>Kontakt</h2>
                  {/* <p className='contactsSubtitle'>cdfsdfsdfdsfdsfsd</p> */}
                  <p className='contactsParagraph'> cdfsdfsdfdsfdsfsd halte dsds dsdsddsdshalte dsds dsdsddsds</p>
                </div>
                <form className='inputForm' 
                      onSubmit={(e) => handlePostMessage(e)}                
                      onClick={(e) => {
                      e.stopPropagation();
                }}>
                  <input type='email' placeholder='Email' required/>
                  <input type='number' placeholder='Phone' required/>
                  <textarea placeholder='Massage' required></textarea>
                  <input type='submit' className='contactBTN'/>
                </form>
            </div>
            <Path3 className='shape3'/>
      </section>
    </>
  );
}

export default Contacts;
