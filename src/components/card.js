import React from 'react';
import ReactDOM from 'react-dom/client';
import react from '../images/spimage.jpg'
import Footer from './footer';


export default function Head()

{

    return(

        <div className='Nav'>
            <div className='block'>
            <div className='upcontent'>
            <img className='logo' src={react}></img>
<h2 className='name'>Surya Prakash </h2>
<h6 className='role'>java developer</h6>
<h6 className='mail'>surya@gmail.com</h6>

            </div>
            <div className='downcontent'>
                <h1 className='about'>About</h1>
                <p className='aboutp'>Passionate, determined, and creative individual with a love for technology, art, and exploring new opportunities for growth and learning.</p>
                <h1 className='interests'>Interests</h1>
                <p className='interestsp'>interested in Coding.</p>
            </div>
            
            </div>
            <Footer />
        </div>


    )
}