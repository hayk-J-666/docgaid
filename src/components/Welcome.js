import React , {useEffect} from 'react';
import './../scss/welcome.scss';
import Texty from 'rc-texty';
import ipadImg from "./../assets/images/ipad-png-211.png"
import { ReactComponent as Path2 } from './../assets/images/H1.svg';

function Welcome() {
   
    const [appearText, setAppearText] = React.useState(false)

    useEffect(() => {
                setTimeout(() => {
                    setAppearText(true)
                }, 4500)
        },[]);
    return (
    <>
      <section id='home'  className='welcomeContainer'>
          <Path2 className='shape'/>
      <div className='wrapper'>
                <div className='welcomeBlock'>
                    <img src={ipadImg} className='welcomeImage' alt=''/>
                    <div className='welcomeText'>
                        <h1 className='welcomeTtitle'>Hallo Digitalisierung</h1>
                        <div className='welcomeTitleText'>
                            { appearText && <p className='subTitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p>}
                            { appearText &&  <Texty className="welcomeParagraph" type="mask-bottom" duration={(e) => {
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
                            Lorem Ipsum is simply dummy text of theLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                        </Texty>}
                    </div>
                </div>
            </div>
            </div>
      </section>
    </>
  );
}

export default Welcome;
