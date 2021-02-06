import { useRef, useEffect } from "react";
import { Container, Renderer, Ticker, UPDATE_PRIORITY } from "pixi.js";

const ticker = new Ticker();

type CanvasProps = {
  width?: number;
  height?: number;
  stage: Container;
};
export default function Canvas({
  width = 800,
  height = 600,
  stage,
}: CanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!ref.current) return () => {};

    const renderer = new Renderer({ width, height, view: ref.current });

    function update() {
      renderer.render(stage);
    }

    // mount
    ticker.add(update, UPDATE_PRIORITY.LOW);

    // unmount
    return () => ticker.remove(update);
  }, [ref, width, height, stage]);

  return <canvas ref={ref} />;
}
