import { useNavigate } from "react-router-dom";
import { StyleCenterDiv } from "./CenterDiv.style";

interface Props {
  heading: string;
  desc: string;
  button: string;
  path: string;
}

export const CenterDiv = ({ heading, desc, button, path }: Props) => {
  const navigate = useNavigate();

  return (
    <StyleCenterDiv>
      <h1>{heading}</h1>
      <h2>{desc}</h2>
      <button className="glow-on-hover" onClick={() => navigate(path)}>
        {button}
      </button>
    </StyleCenterDiv>
  );
};
