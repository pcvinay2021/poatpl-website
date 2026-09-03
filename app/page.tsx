'use client';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  ['CCTV SURVEILLANCE','Cutting-edge security solutions for complete protection.','cctv.jpg','◉'],
  ['NETWORKING SOLUTIONS','Structured cabling, Wi-Fi solutions and network infrastructure.','network.jpg','⌘'],
  ['HOME AUTOMATION','Smart home solutions for lighting, security, AC & much more.','home.jpg','⌂'],
  ['IP EPABX SYSTEMS','Advanced communication systems for businesses of all sizes.','epabx.jpg','☎'],
  ['BOOM BARRIER SYSTEMS','Vehicle access control with boom barrier solutions.','boom.jpg','▱'],
  ['ACCESS CONTROL SYSTEMS','Secure your premises with biometric & card access control.','access.jpg','▣'],
  ['SOFTWARE SOLUTIONS','Customized software solutions for your business requirements.','software.jpg','⌘'],
];
const gallery=[['gallery-cctv.jpg','CCTV Surveillance'],['gallery-network.jpg','Data Networking'],['gallery-home.jpg','Home Automation'],['gallery-office.jpg','Conference & Office'],['gallery-boom.jpg','Boom Barrier'],['gallery-access.jpg','Access Control']];

function Arrow(){return <span className="arrow">→</span>}
function MenuIcon(){return <span className="hamb"><i/><i/><i/></span>}

export default function Home(){
 const [open,setOpen]=useState(false);
 const [sent,setSent]=useState(false);
 return <main>
  <div className="topbar"><div> <span>27A/19/2, M.G. Marg, Civil Lines, Prayagraj - 211001</span></div><div className="toplinks"><span>✉ manish@prasadautomation.in</span><span>☎ +91 9839047807</span><span>☎ +91 9307018121</span></div></div>
  <header className="nav"><a href="#home" className="brand"><Image src="/assets/logo.png" alt="Prasad Office Automation" width={205} height={48}/></a><button className="mobileMenu" onClick={()=>setOpen(!open)}><MenuIcon/></button><nav className={open?'open':''}><a className="active" href="#home">HOME</a><a href="#about">ABOUT US</a><a href="#services">SERVICES <small>⌄</small></a><a href="#gallery">GALLERY</a><a href="#projects">OUR PROJECTS</a><a href="#contact">CONTACT US</a></nav><a className="quote" href="#contact">GET A QUOTE <Arrow/></a></header>

  <section id="home" className="hero">
   <div className="heroBg"/>
   <div className="container heroInner"><div className="heroCopy"><div className="eyebrow">SECURE. AUTOMATE. CONNECT.</div><h1>Advanced Solutions<br/>for a <em>Smarter Tomorrow</em></h1><p>Your trusted partner for CCTV, Networking, Automation,<br/>Communication & Security Solutions.</p><div className="actions"><a className="btn primary" href="#services">OUR SERVICES <Arrow/></a><a className="btn outline" href="https://wa.me/919839047807" target="_blank">CONTACT US&nbsp; ◔</a></div></div>
   <div className="trust"><div><b>♙</b><strong>Premium Quality</strong><span>Products & Services</span></div><div><b>♧</b><strong>Expert Team</strong><span>Professional Support</span></div><div><b>▱</b><strong>On-Time Delivery</strong><span>Always Reliable</span></div><div><b>◉</b><strong>24/7 Support</strong><span>We are here</span></div></div></div>
  </section>

  <section id="services" className="services section"><div className="container"><div className="sectionHead"><div><div className="eyebrow purple">OUR SERVICES</div><h2>Complete <em>Solutions</em> Under One Roof</h2><div className="line"/></div><a className="btn small primary" href="#contact">VIEW ALL SERVICES <Arrow/></a></div><div className="serviceGrid">{services.map(([title,desc,img,icon])=><article className="card" key={title}><div className="cardImg"><Image src={'/assets/'+img} alt={title} fill sizes="(max-width:900px) 50vw, 14vw"/><span className="icon">{icon}</span></div><div className="cardBody"><h3>{title}</h3><p>{desc}</p><a href="#contact">READ MORE <Arrow/></a></div></article>)}</div></div></section>

  <section id="about" className="about">
    <div className="aboutText">
      <div className="eyebrow purple">ABOUT US</div><h2>Innovation. Quality.<br/>Trust.</h2>
      <div className="line"/>
      <p>Prasad Office Automation and Technologies Pvt. Ltd. is a leading provider of advanced automation, 
        security and communication solutions. 
        We deliver innovative and reliable solutions tailored to your business and home needs.</p>
        <a className="btn primary small" href="#contact">KNOW MORE ABOUT US <Arrow/></a>
        </div><div className="aboutImage"><Image src="/assets/1.jpg" alt="Prasad Office Automation office" fill sizes="35vw"/>
        </div><div className="stats"><div><b>30+</b><span>Years of<br/>Experience</span></div><div><b>1000+</b>
        <span>Happy<br/>Clients</span></div>
        <div><b>1200+</b><span>Projects<br/>Completed</span></div>
        <div><b>24/7</b><span>Support<br/>Available</span></div></div></section>

  <section id="gallery" className="gallery section">
    <div className="container"><div className="sectionHead">
      <div><div className="eyebrow purple">OUR GALLERY</div>
      <h2>Our Recent Projects</h2></div>
      <a className="btn small primary" href="#contact">VIEW ALL PROJECTS <Arrow/></a></div>
      <div className="galleryGrid">
        {gallery.map(([img,title])=><a className="galleryItem" href="#contact" key={title}>
          <Image src={'/assets/'+img} alt={title} fill sizes="16vw"/>
          <span>{title}<Arrow/></span></a>)}</div></div></section>

  <footer id="contact"><div className="container footerGrid">
    <div className="footerBrand">
      <Image src="/assets/logo.png" alt="Prasad" width={255} height={48}/>
      <p>Your trusted partner for CCTV, Networking, Automation, Communication & Security Solutions.</p>
      <div className="social">
        <span>f</span><span>◎</span>
        <span>in</span><span>◔</span></div></div>
        <div><h4>QUICK LINKS</h4><a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#projects">Our Projects</a>
        <a href="#contact">Contact Us</a></div>
        <div>
          <h4>OUR SERVICES</h4>{services.slice(0,6).map(s=><a href="#services" key={s[0]}>› {s[0]}</a>)}</div>
          <div><h4>CONTACT US</h4>
          <p>⌖ 27A/19/2, M.G. Marg,<br/>Civil Lines, Prayagraj - 211001</p><p>☎ +91 9839047807<br/>☎ +91 9307018121</p>
          <p>✉ manish@prasadautomation.in</p>
          <a className="wa" href="https://wa.me/919307018121" target="_blank">CHAT ON WHATSAPP ◔</a></div><div className="contactForm"><h4>GET IN TOUCH</h4><form onSubmit={e=>{e.preventDefault();setSent(true)}}><input required placeholder="Your Name"/><input required type="email" placeholder="Your Email"/><textarea required placeholder="Your Message"/><button className="btn primary" type="submit">{sent?'MESSAGE SENT ✓':'SEND MESSAGE'} <Arrow/></button></form></div></div><div className="copyright"><span>© 2026 Prasad Office Automation and Technologies Pvt. Ltd. All Rights Reserved.</span><span>Designed with ♥ by Prasad Office Automation</span></div></footer>
 </main>
}
