import kaboom from "kaboom";
import { scale } from "./constants";

export const k = kaboom({
  width: 800 * scale,
  height: 600 * scale,
  global: false,
  letterbox: true,
  scale,
});
