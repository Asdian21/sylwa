import { StyleLecturePage } from "./LecturePage.style";

export const LecturePage = () => {
  return (
    <StyleLecturePage>
      <div className="energetika">
        <img src="./lecture_1.jpg" />
        <div className="Info">
          <h1>ЭНЕРГЕТИКА</h1>
          <h2>
            Install the plugin and convert your designs to a responsive site.
          </h2>
          <button>Get started</button>
        </div>
      </div>
      <div className="smart-technology">
        <img src="./lecture_2.jpg" />
        <div className="Info">
          <h1>SMART TECHNOLOGY</h1>
          <h2>Browse dozens of templates. Click, duplicate, customize.</h2>
          <button>Get started</button>
        </div>
      </div>
      <div className="life-save">
        <img src="./image_3.jpg" />
        <div className="Info">
          <h1>БЕЗОПАСНОСТЬ ЖИЗНЕДЕЯТЕЛЬНОСТИ</h1>
          <h2>
            Install the plugin and convert your designs to a responsive site.
          </h2>
          <button>Get started</button>
        </div>
      </div>
    </StyleLecturePage>
  );
};
