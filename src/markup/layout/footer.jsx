// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Footer extends Component {
//     render() {
//         return (
//             <>
//                 <footer class="main-footer">
//                     <div class="auto-container">

//                         <div class="widgets-section">
//                             <div class="row clearfix">


//                                 <div class="column col-lg-4">
//                                     <div class="footer-widget logo-widget">
//                                         <div class="widget-content">
//                                             <div class="footer-logo">
//                                                 <Link to="index.html"><img class="" src={require('../../assets/images/footer-logo.png')} alt="" /></Link>
//                                             </div>
//                                             <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div>
//                                             <ul class="social-links clearfix">
//                                                 <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
//                                                 <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
//                                                 <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
//                                                 <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div class="column col-lg-4">
//                                     <div class="footer-widget links-widget">
//                                         <div class="widget-content">
//                                             <h3>Links</h3>
//                                             <div class="row">
//                                                 <div class="col-md-6">
//                                                     <ul>
//                                                         <li><Link to={'/#'}>Home</Link></li>
//                                                         <li><Link to={'/#'}>About</Link></li>
//                                                         <li><Link to={'/#'}>Services</Link></li>
//                                                         <li><Link to={'/#'}>Portfolio</Link></li>
//                                                         <li><Link to={'/#'}>Pricing</Link></li>
//                                                         <li><Link to={'/#'}>Contact</Link></li>
//                                                     </ul>
//                                                 </div>
//                                                 <div class="col-md-6">
//                                                     <ul>
//                                                         <li><Link to={'/#'}>News</Link></li>
//                                                         <li><Link to={'/#'}>Press Release</Link></li>
//                                                         <li><Link to={'/#'}>Case Study</Link></li>
//                                                         <li><Link to={'/#'}>Terms</Link></li>
//                                                     </ul>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div class="column col-lg-4">
//                                     <div class="footer-widget instagram-widget">
//                                         <h3>Photo Showcase</h3>
//                                         <div class="inner-box">
//                                             <div class="wrapper-box">
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-1.jpg')} alt="" />

//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-2.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-3.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-4.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-5.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-6.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-7.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-8.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                                 <div class="image">
//                                                     <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-9.jpg')} alt="" />
//                                                     <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>

//                         </div>
//                     </div>

//                     <div class="auto-container">
//                         <div class="footer-bottom">
//                             <div class="copyright">Copyright By<Link to={'/#'}>Webtend</Link> - 2020</div>
//                         </div>
//                     </div>
//                 </footer>


//             </>
//         );
//     }
// }

// export default Footer;


import React from 'react';
import '../../../src/assets/css/footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import Cartoon from '../../assets/images/foot.png';

const Footer = () => {
    return (
        <>
            <div className='container my-5 pt-5'>
                <h4 className='paint'>Welcome To Pixie Parties & Face Painting!</h4>
                <h6 className='anims bids'>Pixie Parties and Face Painting is focused on providing affordable, high-quality entertainment for your child's party or event!!</h6>
                <p className='anims'>We specialize in face painting & balloon twisting. Parties at home, hired venues, parks & corporate events!</p>
                <p className='anims'>A birthday is a very special time of year, we believe in creating a magical day to remember! With our packages you can rest assured knowing the music, games and entertainment is already taken care of. We have a large variety of props we bring along- parachute games, egg and spoon race, sack races and many more!</p>
                <p className='anims'>Without the worry of keeping a group of very excited boys or girls entertained, you too can sit back and enjoy your child's birthday !! </p>
                <p className='anims'>We like to have a lot of fun but at the same time teach manners and appropriate behaviour, we take turns, use please and thank you and make sure the birthday girl/boy is always smiling!</p>
                <p className='anims'>Each of our entertainers are bright and bubbly and each holding their current Bluecard and police checks. Some our entertainers also hold their certificates in Disability, we are one of the few company's qualified & happy to work with special needs kids so feel free to let us know if you need anything specific!</p>
                <p className='anims'>With a variety of characters to choose from, we're sure you'll have one happy birthday girl or boy from the moment we arrive.</p>
                <p className='anims bids'>With a variety of characters to choose from, we're sure you'll have one happy birthday girl or boy from the moment we arrive.</p>
            </div>
            <div>
                <img src={Cartoon} className='carts' alt="Cartoons" />
            </div>
            <div className="board">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h4 className='pix'>Pixie Parties and face painting</h4>
                            <br />
                            <p className='face'> I leave a little sparkle wherever I go ..</p>
                            <p className='face'>Pohlman Street , Pohlman Street , Southport Queensland Australia 4215</p>
                        </Col>
                        <Col xs={12} md={6} className='mt-5 mt-md-0'>
                            <p className='face'>Kids Party host</p>
                            <p className='face'>Experienced Birthday entertainer & Face painting, Gold Coast Brisbane</p>
                            <p className='face'>Character Hire</p>
                            <p className='face'>Character Costume Hire</p>
                            <p className='face'>Children's entertainer, Gold Coast Brisbane</p>
                            <p className='face'>Quality Balloon Twisting & Face Painting, Gold Coast, Brisbane</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='downFooter'>
                <p className='rights'>© 2018 Pixie Parties and face painting . All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer;
