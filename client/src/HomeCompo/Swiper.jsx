import React from 'react'

const Swiper = () => {
  return (
    <>
      <section className="section section-testimonial">
        <div className="container">
          <h2 className="common-heading">Happy Client</h2>
        </div>

        <div className="swiper mySwiper container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, dolorum? Quos tempora mollitia dignissimos
                  voluptatem.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src="./Img/img1.webp" alt="img" />
                </figure>
                <div className="client-data-details">
                  <p>T</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, dolorum? Quos tempora mollitia dignissimos
                  voluptatem.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src="./Img/img2.png" alt="img" />
                </figure>
                <div className="client-data-details">
                  <p>T</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, dolorum? Quos tempora mollitia dignissimos
                  voluptatem.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src="./Img/img2.png" alt="img" />
                </figure>
                <div className="client-data-details">
                  <p>T</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="swiper-client-msg">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Repellendus, dolorum? Quos tempora mollitia dignissimos
                  voluptatem.
                </p>
              </div>
              <div className="swiper-client-data grid grid-two-column">
                <figure>
                  <img src="./Img/img1.webp" alt="img" />
                </figure>
                <div className="client-data-details">
                  <p>T</p>
                  <p>Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
    </>
  );
}

export default Swiper
