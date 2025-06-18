// import { HeaderForPages } from "../../components/Header/HeaderForPages/HeaderForPages";
import { StyleAbout } from "./About.style";

export const About = () => {
  return (
    <StyleAbout>
      {/* <HeaderForPages /> */}
      <main>
        <div className="userInfo">
          <img
            src="./about/photo_2025-05-10_10-41-37 (3).jpg"
            alt="userPhoto"
            className="userImg"
          />
          <div className="userName_userJobTitle">
            <div className="userName">НАТАЛЬЯ ЮРЬЕВНА</div>
            <div className="userJobTitle">
              доктор философии по педагогически наукам
            </div>
          </div>
        </div>
      </main>
    </StyleAbout>
  );
};
