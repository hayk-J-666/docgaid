import React from 'react';
import './../scss/boxes.scss';
import Texty from 'rc-texty';
// --------- icons
import { ReactComponent as MessageCircle } from './../assets/images/message-circle.svg';
import { ReactComponent as Shield } from './../assets/images/shield.svg';
import { ReactComponent as Shuffle } from './../assets/images/shuffle.svg';
import { ReactComponent as FilePlus } from './../assets/images/file-plus.svg';
import { ReactComponent as Ffeather } from './../assets/images/feather.svg';
import { ReactComponent as Compass } from './../assets/images/compass.svg';
import { ReactComponent as Coffee } from './../assets/images/coffee.svg';
import { ReactComponent as Cast } from './../assets/images/cast.svg';
import { ReactComponent as Archive } from './../assets/images/archive.svg';
import { ReactComponent as Anchor } from './../assets/images/anchor.svg';
import { ReactComponent as Activity } from './../assets/images/activity.svg';
import { ReactComponent as Path2 } from './../assets/images/H2.svg';


let {SparkScroll} = require('react-spark-scroll-gsap')({
  invalidateAutomatically: true
});


function Boxes() {

  return (
    <>
      <section className='box' id='klar'>
        <Path2 className='shape2'/>
      <div className='wrapper'>
            <Texty className="box__title" type="mask-bottom" duration={(e) => {
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
                KLAR DURCH DEN PRAXISALLTAG
            </Texty>
            <div class="boxes">
            <SparkScroll
                timeline={{
                  'topTop -60':{ opacity: '0',  transition: '0.1s', width: '100%'},
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
                <div className='box__item box__item3'>
                  <MessageCircle className='box-item-icon'/>
                  <div className='box-item-text'>
                    <h1>E-Mailing mit Vorlagen</h1>
                    <span  className='box-item-text-line'></span>
                    <p>direkt am iPad</p>
                  </div>
                </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                  'topTop -60':{ opacity: '0',  transition: '0.1s', width: '100%' },
                    'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div  className='box__item box__item1'>
                <Shield className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Automatisierte Audio und Schrift-protokollierung</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>  
            <SparkScroll
                timeline={{
                  'topTop -60':{ opacity: '0',  transition: '0.1s', width: '100%' },
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div className='box__item box__item2'>
                <Shuffle className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                  'topTop-60':{ opacity: '0',  transition: '0.1s', width: '100%' },
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div className='box__item box__item3'>
                <FilePlus className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                  'topTop-60':{ opacity: '0',  transition: '0.1s', width: '100%' },
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div className='box__item box__item1'>
                <Ffeather className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                  'topTop-60':{ opacity: '0',  transition: '0.1s', width: '100%'},
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%'},
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%'}
                }}>
              <div className='box__item box__item2'>
                <Cast className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                  'topTop-60':{ opacity: '0',  transition: '0.1s' , width: '100%'},
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div className='box__item box__item3'>
                <FilePlus className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                  'topTop-60':{ opacity: '0',  transition: '0.1s' , width: '100%'},
                  'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div className='box__item box__item1'>
                <Ffeather className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            <SparkScroll
                timeline={{
                    'topTop-60':{ opacity: '1',  transition: '0.1s', width: '100%' },
                    'centerCenter -60':{opacity:'1', transition: '0.1s', width: '100%' },
                    bottomBottom:{ opacity: '0', transition: '0.1s', width: '100%' }
                }}>
              <div className='box__item box__item2'>
                <Cast className='box-item-icon'/>
                <div className='box-item-text'>
                  <h1>Scannan</h1>
                  <span  className='box-item-text-line'></span>
                  <p>direkt am iPad</p>
                </div>
              </div>
            </SparkScroll>
            </div>
          </div>
      </section>
    </>
  );
}

export default Boxes;