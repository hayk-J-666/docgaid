import React from 'react';
import './../scss/digital.scss';
import ipadImg from "./../assets/images/ipad-png-211.png"
import paperImg from "./../assets/images/pp.svg"
import flagENG from "./../assets/images/flagENG.jpg"
import Texty from 'rc-texty';

function Digital() {

  return (
    <>
      <section  className='digital'>
          <div className='wrapper digitalContainer'>
            <div className='digitalContainerblock'>
                <img src={ipadImg} alt=''/>
                <div className='digitalText'>
                    <h2 className='digitalTitle'>Hello Digitalisery</h2>
                    <p className='digitalSubtitle'>dsaasd das dsa d asdasd </p>
                    <p className='digitalParagraph'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
            </div>
            <div className='digitalContainerblock2'>
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
                <div className='digitalContainerblock2Cards'>
                    <div className='digitalText'>
                        <h2 className='digitalTitle'>Hello Digitalisery</h2>
                        <p className='digitalSubtitle'>dsaasd das dsa d asdasd </p>
                        <img src={paperImg} alt=''/>
                    </div>
                    <div className='digitalText item2'>
                        <h2 className='digitalTitle'>Hello Digitalisery</h2>
                        <p className='digitalSubtitle'>dsaasd das dsa d asdasd </p>
                        <img src={paperImg} alt=''/>
                    </div>
                </div>
                <div className='digitalLanguage'>
                    <h1>fsdfksgvsfgvfgv</h1>
                    <div className='digitalLanguageContainer'>
                        <div className='digitalLanguageCard'>
                            <img src={flagENG} className='flagENG' alt=''/>
                            <p className='digitalSubtitle'>dsdsdsdsdsd</p>
                        </div>
                        <div className='digitalLanguageCard'>
                            <img src={flagENG} className='flagENG' alt=''/>
                            <p className='digitalSubtitle'>dsdsdsdsdsd</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default Digital;
