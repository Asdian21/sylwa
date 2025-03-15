import { StyleWelcomePage } from "./WelcomePage.style";

export const WelcomePage = () => {
  return (
    <StyleWelcomePage>
      <div className="greeting">Hello! What do you want to do?</div>
      <a href="/main-page">Let's start</a>
      <a href="test-page">Crazy test</a>
    </StyleWelcomePage>
  );
};
