import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { StyleCatalogCarousel } from "./CatalogCarousel.style";
import { useNavigate } from "react-router-dom";

export const CatalogCarousel = () => {
  const navigate = useNavigate();
  return (
    <StyleCatalogCarousel>
      <MDBCarousel showControls showIndicators fade>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp"
            className="d-block w-100"
            alt="Slide 1"
            style={{ height: "92.7vh" }}
          />
          <MDBCarouselCaption>
            <h5>Группа 230-22</h5>
            <button
              className="glow-on-hover"
              onClick={() => navigate("/first-page")}
            >
              Посмотреть фотографии
            </button>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp"
            className="d-block w-100"
            alt="Slide 2"
            style={{ height: "92.7vh" }}
          />
          <MDBCarouselCaption>
            <h5>Группа крови</h5>
            <button className="glow-on-hover">Посмотреть фотографии</button>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
    </StyleCatalogCarousel>
  );
};
