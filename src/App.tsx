import Canvas from "components/Canvas";
import { Container } from "pixi.js";
import { PropsWithChildren } from "react";
import { StoreProvider, useScene } from "store";

import scenes from "scenes";

function getViewPort(ratio = 16 / 9) {
  return {
    width: window.innerHeight * ratio,
    height: window.innerHeight,
  };
}

function GameLayer() {
  const scene = useScene();

  return <Canvas {...getViewPort()} stage={scenes[scene].game} />;
}

function UserInterfaceLayer() {
  const scene = useScene();

  return (
    <main className="absolute top-0 w-full h-full">{scenes[scene].ui}</main>
  );
}

function System({ children }: PropsWithChildren<{}>) {
  return <StoreProvider>{children}</StoreProvider>;
}

export default function App() {
  return (
    <System>
      <GameLayer />

      <UserInterfaceLayer />
    </System>
  );
}
