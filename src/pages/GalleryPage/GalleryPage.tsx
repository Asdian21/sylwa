// import Card3D from "../../components/Card3D/Card3D";
import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";
import { CatalogCarousel } from "../../components/CatalogCarousel/CatalogCarousel";
import { StyleGalleryPage } from "./GalleryPage.style";
// import { MDBCarousel } from "mdb-react-ui-kit";

export const GalleryPage = () => {
  return (
    <StyleGalleryPage>
      <HeaderForPages />
      <CatalogCarousel />
    </StyleGalleryPage>
  );
};
