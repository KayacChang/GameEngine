import { Container } from "pixi.js";

function LoadingUI() {
  return (
    <div>
      <h2 className="text-white">loading</h2>
    </div>
  );
}

const LoadingScene = {
  game: new Container(),
  ui: <LoadingUI />,
};

export default LoadingScene;
