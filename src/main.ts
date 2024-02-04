import { k } from "./kaboomctx";

async function gameSetup() {
  k.loadSprite("assets", "/game.png", {
    sliceX: 9,
    sliceY: 10,
    anims: {
      kirIdle: 0,
      kirInhale: 1,
      kirFull: 2,
      kirInhanleEfect: { from: 3, to: 8, speed: 8, loop: true },
      shootingStar: 9,
      flame: { from: 36, to: 37, speed: 4, loop: true },
      guyIdle: 18,
      guyWalk: { from: 18, to: 19, speed: 4, loop: true },
      bird: { from: 27, to: 28, speed: 4, loop: true },
    },
  });

  k.loadSprite("lv1", "/bg.png");

  k.scene("lv1", () => {
    k.setGravity(2100);
    k.add([
      k.rect(k.width(), k.height()),
      k.color(k.Color.fromHex("#000000")),
      k.fixed(),
    ]);
  });

  k.go("lv1");
}

gameSetup();
