import { StyleCenterDiv } from "./CenterDiv.style";

interface Props {
  heading: string;
  desc: string;
  button: string;
}

export const CenterDiv = ({ heading, desc, button }: Props) => {
  return (
    <StyleCenterDiv>
      <h1>{heading}</h1>
      <h2>{desc}</h2>
      <button className="glow-on-hover">{button}</button>
    </StyleCenterDiv>
  );
};
