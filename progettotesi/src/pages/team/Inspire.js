import React from 'react'
import '../css/Inspire.css'

const Inspire = () => {
    return (
        <div className='teaminspire'>

            <div key={'foto'} className='carousel slide' data-ride='carousel'>

                {/* INDICATORI BASE */}
                <ul className='carousel-indicators'>
                    <li data-target='#foto' data-slide-to='0' className='active'> </li>
                    <li data-target='#foto' data-slide-to='1'> </li>
                    <li data-target='#foto' data-slide-to='2'> </li>
                    <li data-target='#foto' data-slide-to='3'> </li>
                    <li data-target='#foto' data-slide-to='4'> </li>
                    <li data-target='#foto' data-slide-to='5'> </li>
                    <li data-target='#foto' data-slide-to='6'> </li>
                    <li data-target='#foto' data-slide-to='7'> </li>
                    <li data-target='#foto' data-slide-to='8'> </li>
                    <li data-target='#foto' data-slide-to='9'> </li>
                </ul>

                {/* IMMAGINI */}
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src='/inspireimg/01.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/02.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/03.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/04.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/05.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/06.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/07.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/08.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/09.jpg' alt='Foto'/>
                    </div>
                    <div className='carousel-item'>
                        <img src='/inspireimg/00.jpg' alt='Foto'/>
                    </div>
                </div>

            </div>


        </div>
    )
};

export default Inspire;