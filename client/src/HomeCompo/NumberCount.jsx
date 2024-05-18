import React from 'react'

const NumberCount = () => {
  return (
    <>
      <section className="section section-work-data">
        <div className="container grid grid-four-column">
          <div>
            <h2 className="counter-number" data-number="2000">
              0+
            </h2>
            <p>Projects Completed</p>
          </div>
          <div>
            <h2 className="counter-number" data-number="4000">
              0+
            </h2>
            <p>Happy Client</p>
          </div>
          <div>
            <h2 className="counter-number" data-number="6000">
              0+
            </h2>
            <p>Cups of Coffie</p>
          </div>
          <div>
            <h2 className="counter-number" data-number="8000">
              0+
            </h2>
            <p>Professionals</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default NumberCount
