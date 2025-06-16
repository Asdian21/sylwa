import { Card3D } from "../../components/Card3D/Card3D";
import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";
import { StyleGalleryPage } from "./GalleryPage.style";

export const GalleryPage = () => {
  return (
    <StyleGalleryPage>
      <HeaderForPages />
      <h1>Каталоги</h1>
      <div className="container">
        <Card3D />
      </div>
    </StyleGalleryPage>
  );
};
