import { useState, useEffect } from "react";

const AppHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 3 - 1;
    } else if (newIndex >= 3) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
    console.log(activeIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 10000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <header className="header">
        <h1 className="display-1">Video-posters</h1>
      </header>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            transform: `translateX(-${activeIndex})`,
            width: "100%",
            height: "500px"
          }}
        >
          <div
            style={{ backgroundColor: "gray" }}
            className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}
          >
            <img
              src={window.location.origin + `/img/1604248414_610x900_5457.jpg`}
              className=""
              alt="1"
            ></img>
          </div>
          <div
            style={{ backgroundColor: "gray" }}
            className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}
          >
            <img
              src={window.location.origin + `/img/1604314613_610x900_6358.jpg`}
              className=""
              alt="2"
            ></img>
          </div>
          <div
            style={{ backgroundColor: "gray" }}
            className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}
          >
            <img
              src={window.location.origin + `/img/1604353236_610x900_39771.jpg`}
              className=""
              alt="3"
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default AppHeader;
