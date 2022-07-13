import { useState, useEffect } from "react";
import "/src/carousel.css";
import { serialsData } from "/src/data.js";

const AppHeader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = serialsData.length - 1;
    } else if (newIndex >= serialsData.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const linkImg = () => {
    const key =
      serialsData[Math.floor(Math.random() * serialsData.length)].index;
    return serialsData[key].item_img;
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
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div
          className="carousel-inner"
          style={{
            height: "400px"
          }}
        >
          {serialsData.map((serialItem) => {
            return (
              <div
                key={serialItem.index}
                className={`carousel-item ${
                  activeIndex === +serialItem.index ? "active" : ""
                }`}
              >
                <div style={{ display: "flex" }} className="slide-box">
                  <img
                    src={window.location.origin + `/img/${linkImg()}`}
                    alt={serialItem.index}
                  ></img>
                  <img
                    src={window.location.origin + `/img/${linkImg()}`}
                    alt={serialItem.index}
                  ></img>
                  <img
                    src={window.location.origin + `/img/${linkImg()}`}
                    alt={serialItem.index}
                  ></img>
                  <img
                    src={window.location.origin + `/img/${linkImg()}`}
                    alt={serialItem.index}
                  ></img>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
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
