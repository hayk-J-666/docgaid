import React from 'react';
import './../scss/weniger.scss';
import paperImg from "./../assets/images/pp.svg"
import { ReactComponent as MessageCircle } from './../assets/images/message-circle.svg';
import { ReactComponent as Compass } from './../assets/images/compass.svg';
import Texty from 'rc-texty';


let {SparkScroll} = require('react-spark-scroll-gsap')({
    invalidateAutomatically: true
  });

function Weniger() {
    return (
    <>
    <section id='dein' className="hero section">
            <div className='wenigercolor'>
                <Texty className="weniger__Title" type="mask-bottom" duration={(e) => {
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
                   Weniger vergessen, mehr schaffen
                </Texty>
                <div className='wenigerContainer'>
                    <SparkScroll
                        timeline={{
                            'topTop -80':{ opacity: '0',  transition: '0.1s' },
                            'centerCenter -80':{opacity:'1', transition: '0.1s' },
                            BottomBottom:{ opacity: '0', transition: '0.1s' }
                        }}>
                        <div className='wenigerContainerblock'>
                            <div className='wenigerText'>
                                <h2 className='wenigerTitle'> Halte deine Leistungen Transparent für deine Patienten </h2>
                                <div className='iconLine'>
                                    <Compass className='wenigerContainerblockIcon'/>
                                    <span className='wenigerTitleLine'/>
                                </div>
                                <p className='wenigerParagraph'>Während deine Patienten die Anamnese in der gewünschten Sprache ausfüllen, haben sie deine Angebote und Leistungen im Überblick</p>
                                <p className='wenigerParagraph'>Die Interessen werden getrackt un in Anamnese dokumentiert</p>
                                <img src={paperImg} alt=''/>
                            </div>
                        </div>
                    </SparkScroll>
                    <SparkScroll
                        timeline={{
                            topTop:{ opacity: '1',  transition: '0.1s' },
                            centerCenter:{opacity:'1', transition: '0.1s' },
                            topBottom:{ opacity: '0', transition: '0.1s' }
                        }}>
                            <div className='wenigerContainerblock2' >                                <div className='wenigerText item2'>
                                    <h2 className='wenigerTitle'>Hello wenigerisery</h2>
                                    <div className='iconLine'>
                                        <MessageCircle className='wenigerContainerblockIcon'/>
                                        <span className='wenigerTitleLine'/>
                                    </div>
                                    <p className='wenigerParagraph'>dsaasd das dsa d asdasd </p>
                                    <img src={paperImg} alt=''/>
                                </div>
                            </div>
                    </SparkScroll>
                </div>
            </div>
            </section>
    </>
  );
}

export default Weniger;



