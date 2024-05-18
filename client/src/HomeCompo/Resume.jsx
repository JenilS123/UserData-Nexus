import React from "react";

const Resume = () => {
  return (
    <>
      <section className="section section-resume">
        <div className="container grid grid-two-column">
          {/* <!-- resume left side  --> */}
          <div className="resume-img">
            <img
              className="lazy-img"
              src="./Img/hero Img.jpg"
              data-src="./Img/img1.webp"
              alt="resume image"
              loading="lazy"
            />
          </div>

          {/* <!-- resume right side  --> */}
          <div className="resume-data">
            <h2 className="common-heading">resume</h2>
            <p className="resume-para">My Work Experience</p>

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>Online Youtuber</h3>
                <div className="grid grid-two-column">
                  <p>
                    <ion-icon name="business-outline"></ion-icon>Technical, Inc.
                  </p>
                  <p>
                    <ion-icon name="location-outline"></ion-icon> India
                  </p>
                </div>
              </div>

              <div className="resume-data-right">
                <p className="resume-data-button">fulltime</p>
                <p>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>April 2019 - Present </span>
                </p>
              </div>
            </div>
            {/* <!-- end  --> */}

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>Online Youtuber</h3>
                <div className="grid grid-two-column">
                  <p>
                    <ion-icon name="business-outline"></ion-icon>Technical, Inc.
                  </p>
                  <p>
                    <ion-icon name="location-outline"></ion-icon> India
                  </p>
                </div>
              </div>

              <div className="resume-data-right">
                <p className="resume-data-button">fulltime</p>
                <p>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>April 2019 - Present </span>
                </p>
              </div>
            </div>
            {/* <!-- end  --> */}

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>Online Youtuber</h3>
                <div className="grid grid-two-column">
                  <p>
                    <ion-icon name="business-outline"></ion-icon>Technical, Inc.
                  </p>
                  <p>
                    <ion-icon name="location-outline"></ion-icon> India
                  </p>
                </div>
              </div>

              <div className="resume-data-right">
                <p className="resume-data-button">fulltime</p>
                <p>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>April 2019 - Present </span>
                </p>
              </div>
            </div>
            {/* <!-- end  --> */}

            <div className="resume-data-subsection">
              <div className="resume-data-left">
                <h3>Online Youtuber</h3>
                <div className="grid grid-two-column">
                  <p>
                    <ion-icon name="business-outline"></ion-icon>Technical, Inc.
                  </p>
                  <p>
                    <ion-icon name="location-outline"></ion-icon> India
                  </p>
                </div>
              </div>

              <div className="resume-data-right">
                <p className="resume-data-button">fulltime</p>
                <p>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>April 2019 - Present </span>
                </p>
              </div>
            </div>
            {/* end */}

            <div className="resume-data-bottom-subsection">
              <p className="resume-para">Education</p>
              <div className="resume-data-subsection margin-small">
                <div className="resume-data-left">
                  <h3>Online Youtuber</h3>
                  <div className="grid grid-two-column">
                    <p>
                      <ion-icon name="business-outline"></ion-icon>
                      Technical, Inc.
                    </p>
                    <p>
                      <ion-icon name="location-outline"></ion-icon> India
                    </p>
                  </div>
                </div>

                <div className="resume-data-right">
                  <p className="resume-data-button">Master</p>
                  <p>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>April 2019 - Present </span>
                  </p>
                </div>
              </div>
              {/* <!-- end --> */}
              <div className="resume-data-subsection margin-small">
                <div className="resume-data-left">
                  <h3>Online Youtuber</h3>
                  <div className="grid grid-two-column">
                    <p>
                      <ion-icon name="business-outline"></ion-icon>
                      Technical, Inc.
                    </p>
                    <p>
                      <ion-icon name="location-outline"></ion-icon> India
                    </p>
                  </div>
                </div>

                <div className="resume-data-right">
                  <p className="resume-data-button">Bachelor</p>
                  <p>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>April 2019 - Present </span>
                  </p>
                </div>
              </div>
              {/* <!-- end --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
