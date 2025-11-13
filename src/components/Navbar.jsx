import React from 'react'
import { navLinks } from '../constants/Index.js'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const Navbar = () => {
    useGSAP(()=>{
      const navTween = gsap.timeline({//timeline banaya jisme multiple animations ko sequence me run kar sakte hai
        scrollTrigger:{
            trigger:"nav",
            start:"bottom top",//navbar ka bottom jab viewport ke top se milega toh trigger hoga

        }
      })
      navTween.fromTo('nav',{ backgroundColor:"transparent"},{backgroundColor:"#00000050", backgroundFilter:"blur(10px)",duration: 1,ease:"power1.inOut"})
    })

  return (
    <nav>
      <div className='flex'>
        <a href="#home" className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
        </a>

        <ul >
          {navLinks.map((link)=>(
            <li key={link.id}>
                <a href={`#${link.id}`}>{link.title}</a>
{/* we used () instead of {} as the passing the argument to cb function so we don't have to use return(...)*/}
               
          </li>))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar