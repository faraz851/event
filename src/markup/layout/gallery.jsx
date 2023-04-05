// import React, { useEffect } from "react";
// import { Container } from "react-bootstrap";
// // import "../../pages/sidebar.css";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { LightBox, Lightbox } from "react-lightbox-pack";
// import "react-lightbox-pack/dist/index.css";
// import { useState } from "react";
// import SuperPack from '../../../src/assets/images/sup';
// import WigParty from '../../assets/images/'

// const Index = () => {
//   const data = [
//     {
//       id: 1,
//       image: ,
//     },
//     {
//       id: 2,
//       image: "assets/img/gallery/IMG_1243.jpeg",
//     },
//     {
//       id: 3,
//       image: "assets/img/gallery/IMG_8611.jpg",
//     },
//     {
//       id: 4,
//       image: "assets/img/gallery/IMG_9001.jpeg",
//     },
//   ];

//   const [toggle, setToggle] = useState(false);
//   const [sIndex, setSIndex] = useState(0);

//   const lightBoxHandler = (state, sIndex) => {
//     setToggle(state);
//     setSIndex(sIndex);
//   };
//   return (
//     <>
//       <Container style={{ maxWidth: "1200px !important", margin: "20px auto" }}>
//         <div
//           className="row"
//           style={{
//             marginBottom: "70px",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <div className="col-sm-4 tops">
//             <img
//               src="assets/img/gallery/IMG_1240.jpeg"
//               onClick={() => {
//                 lightBoxHandler(true, 0);
//               }}
//               alt=""
//               className="bef"
//               width="100% !important"
//             />
//           </div>
//           <div
//             className="col-sm-4 tops"
//           >
//             <img
//               style={{ height: "-webkit-fill-available" }}
//               src="assets/img/gallery/IMG_1243.jpeg"
//               onClick={() => {
//                 lightBoxHandler(true, 1);
//               }}
//               alt=""
//               // height="-webkit-fill-available"
//               className="bef"
//               width="100% !important"
//             />

//           </div>

//         </div>
//       </Container>
//       <LightBox
//         state={toggle}
//         event={lightBoxHandler}
//         data={data}
//         imageWidth="60vw"
//         imageHeight="70vh"
//         thumbnailHeight={50}
//         thumbnailWidth={50}
//         setImageIndex={setSIndex}
//         imageIndex={sIndex}
//       />
//     </>
//   );
// };

// export default Index;
