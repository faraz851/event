import { Container } from "react-bootstrap";
import { LightBox, Lightbox } from "react-lightbox-pack";
import "react-lightbox-pack/dist/index.css";
import React, { useState } from "react";
import Fun from '../../assets/images/fun.jpg';
import EyePaint from '../../assets/images/eyePaint.jpg';
import Girls from '../../assets/images/girls.jpg';
import MakeUp from '../../assets/images/makeUp.jpg';
import MakeupKit from '../../assets/images/makeupKit.jpg';
import Spider from '../../assets/images/spider.jpg';
import Parties from '../../assets/images/parties.jpg';
import Parashoot from '../../assets/images/parashoot.jpg';
import Fly from '../../assets/images/fly.jpg';
import Made from '../../assets/images/made.jpg';

import '../../assets/css/gallery.css';

const Images = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(8);
  const [images, setImages] = useState([
    {
      id: 1,
      image: Fun,
    },
    {
      id: 2,
      image: EyePaint,
    },
    {
      id: 3,
      image: Girls,
    },
    {
      id: 4,
      image: MakeUp,
    },
    {
      id: 5,
      image: MakeupKit,
    },
    {
      id: 6,
      image: Spider,
    },
    {
      id: 7,
      image: Parashoot,
    },
    {
      id: 8,
      image: Fly,
    }, {
      id: 9,
      image: Parties,
    }, {
      id: 10,
      image: Made,
    },
  ]);

  const [toggle, setToggle] = useState(false);
  const [sIndex, setSIndex] = useState(0);

  const lightBoxHandler = (state, sIndex) => {
    setToggle(state);
    setSIndex(sIndex);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleClick = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    let pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <a href="/" onClick={(e) => handleClick(e, i)} className="page-link">
            {i}
          </a>
        </li>
      );
    }

    return pages;
  };

  return (
    <>
      <Container
        style={{ maxWidth: "1200px !important", margin: "10px auto" }}
      >
        <div className="row" style={{ marginBottom: "70px" }}>
          {currentImages.map((value, index) => (
            <div className="col-md-3 mt-5">
              <img
                src={value.image}
                onClick={() => {
                  lightBoxHandler(true, index);
                }}
                alt=""
                className="imgs"
              />
            </div>
          ))}
        </div>
      </Container>
      <LightBox
        state={toggle}
        event={lightBoxHandler}
        data={currentImages}
        imageWidth="60vw"
        imageHeight="70vh"
        thumbnailHeight={50}
        thumbnailWidth={50}
        setImageIndex={setSIndex}
        imageIndex={sIndex}
      />
      <Container>
        <hr />
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-end">
            {renderPagination()}
          </ul>
        </nav>
      </Container>
    </>
  );
};

export default Images;
