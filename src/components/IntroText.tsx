const IntroText = () => {
  const fullScreenHeight = window.innerHeight - 65; //64px from header
  return (
    <div className="intro-text-container" style={{ height: fullScreenHeight }}>
      <div className="slogan-container">
        <h1>Crafting your ideas</h1>
        <h1>Designing your stories</h1>
      </div>

      <p style={{ maxWidth: "455px", position: "relative", left: "250px" }}>
        Hey there! I'm Jose Zuñiga, an independent creative developer. I create
        websites that are intuitive, visually striking, and tailored to achieve
        your objectives.
      </p>
    </div>
  );
};

export default IntroText;
