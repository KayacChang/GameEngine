import Loading from "./Loading";

const scenes = {
  Loading,
};

export type TScene = typeof scenes;
export type TSceneName = keyof TScene;
export default scenes;
