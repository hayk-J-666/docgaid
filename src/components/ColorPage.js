import React from 'react';
import './../scss/colorPage.scss';
import paperImg from "./../assets/images/pp.svg"
import Texty from 'rc-texty';
import ipadImg from "./../assets/images/ipad-png-211.png"
import flagENG from "./../assets/images/flagENG.jpg"
import flagARM from "./../assets/images/flagARM.jpg"
import flagRUS from "./../assets/images/russia-flag.jpg"

function ColorPage() {
   
    window.addEventListener('scroll', event => {
        let scroll      = window.scrollY;
        let scrollEl    = document.getElementsByClassName('colorPage')[0];
        let scrollItem  = document.getElementsByClassName('color')[0];
        let scrollItemH = scrollItem.offsetHeight;
        let scrollElTop = scrollEl.offsetTop;
        let block1 = document.getElementsByClassName('digitalContainerblock')[0];
        let block2 = document.getElementsByClassName('digitalContainerblock2')[0];
        let block3 = document.getElementsByClassName('digitalContainerblock3')[0];
        
        if((scroll >= scrollElTop + (scrollItemH * 0.33)) && ( scroll < scrollElTop + (scrollItemH - 0.66))){
            scrollItem.classList.remove("red");
            scrollItem.classList.add("black");
            block1.classList.remove("showEffect")
            block2.classList.add("showEffect")
            block3.classList.remove("showEffect")
        }
        else if(scroll >= scrollElTop + (scrollItemH - 200)){
          scrollItem.classList.remove("red");
          scrollItem.classList.remove("black");
          block1.classList.remove("showEffect")
          block2.classList.remove("showEffect")
          block3.classList.add("showEffect")
        }

        else {
          scrollItem.classList.add("red");
          scrollItem.classList.remove("black");
          block2.classList.remove("showEffect")
          block1.classList.add("showEffect")
          block3.classList.remove("showEffect")

        }
    })

  return (
    <>
      <section  id='aboutUs' className="colorPage">
          <div className='color'>
                <Texty className="digital__title" type="mask-bottom" duration={(e) => {
                    if (e.index === 2) {
                                   return 50;
                                }
                                return 100;
                            }}
                           interval={(e) => {
                               if (e.index === 2) {
                                   return 50;
                               }
                               return e.index * 5;
                            }}   >
                    DEIN DIGITALER ASSISTENT
                </Texty>
            <div className='wrapper  digitalContainer'>
              <div className='digitalContainerblock' >
                  <div className='digitalText'>
                      <h2 className='digitalTitle'>Verzichte auf Papier!</h2>
                      <p className='digitalSubtitle'> Helfe der Umwelt! </p>
                      <img src={paperImg} alt=''/>
                  </div>
              </div>

              <div className='digitalContainerblock2' >
                <div className='digitalContainerblock2Cards'>
                    <div className='digitalText item2'>
                        <h2 className='digitalTitle'>Uprade deinen Arbeitsplatz!</h2>
                        <p className='digitalSubtitle'>Mit nahtloser Anbindung an deiner Praxissoftware</p>
                        <p className='digitalParagraph'>Mit nahtloser Anbindung an deiner Praxissoftware</p>
                        <img src={paperImg} alt=''/>
                    </div>
                </div>
                <div className='digitalLanguage'>
                    <h2>Anamnese neben Deutsch auch in anderen Sprachen</h2>
                    <div className='digitalLanguageContainer'>
                        <div className='digitalLanguageCard'>
                            <img src={flagENG} className='flagENG' alt=''/>
                            <p className='digitalSubtitle'>Englisch</p>
                        </div>
                        <div className='digitalLanguageCardCenter'>
                            <img src={flagARM} className='flagENG' alt=''/>
                            <p className='digitalSubtitle'>Armenisch</p>
                        </div>
                        <div className='digitalLanguageCard'>
                            <img src={flagRUS} className='flagENG' alt=''/>
                            <p className='digitalSubtitle'>Russisch</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className='digitalContainerblock3' >
                  <img src={ipadImg} alt=''/>
                  <div className='digitalText'>
                      <h2 className='digitalTitle'>Hello Digitalisery</h2>
                      <p className='digitalSubtitle'>dsaasd das dsa d asdasd </p>
                      <p className='digitalParagraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default ColorPage;