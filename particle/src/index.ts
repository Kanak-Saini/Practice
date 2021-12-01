import { Application, Container, ParticleContainer, Graphics } from "pixi.js";
import { Loader } from "./Loader";
import { Emitter } from "./Emitter";
const app = new Application({
  width: 1500,
  height: 800,
  view: document.getElementById("my-canvas") as HTMLCanvasElement,
  backgroundColor: 0x202020,
  antialias: true,
});
const loader = new Loader();
loader.start((l, r) => {
  // console.log(r);

  const container = new ParticleContainer(10000, {
    scale: true,
    position: true,
    rotation: true,
    uvs: true,
    alpha: true,
  });
  container.x = app.screen.width / 2;
  container.y = app.screen.height;
  // console.log(container);
  app.stage.addChild(container);
  const emitter3 = new Emitter(container, {
  behaviors: [
    {
      "type": "alpha",
      "config": {
        "alpha": {
          "list": [
            {
              "time": 0,
              "value": 1
            },
            {
              "time": 1,
              "value": 0.31
            }
          ]
        }
      }
    },
    {
      "type": "moveSpeed",
      "config": {
        "speed": {
          "list": [
            {
              "time": 0,
              "value": 1000
            },
            {
              "time": 1,
              "value": 200
            }
          ]
        }
      }
    },
    {
      "type": "scale",
      "config": {
        "scale": {
          "list": [
            {
              "time": 0,
              "value": 0.5
            },
            {
              "time": 1,
              "value": 1
            }
          ]
        },
        "minMult": 1
      }
    },
    {
      "type": "color",
      "config": {
        "color": {
          "list": [
            {
              "time": 0,
              "value": "ffffff"
            },
            {
              "time": 1,
              "value": "9ff3ff"
            }
          ]
        }
      }
    },
    {
      "type": "rotation",
      "config": {
        "accel": 0,
        "minSpeed": 0,
        "maxSpeed": 20,
        "minStart": 225,
        "maxStart": 320
      }
    },
    {
      "type": "textureRandom",
      "config": {
        "textures": [
          "https://pixijs.io/particle-emitter/examples/images/Sparks.png"
        ]
      }
    },
    {
      "type": "spawnShape",
      "config": {
        "type": "torus",
        "data": {
          "x": 0,
          "y": 0,
          "radius": 0,
          "innerRadius": 0,
          "affectRotation": false
        }
      }
    }
  ]
});
  const emitter = new Emitter(container, {
    behaviors: [
      {
        type: "alpha",
        config: {
          alpha: {
            list: [
              {
                time: 0,
                value: 1,
              },
              {
                time: 1,
                value: 0.5,
              },
            ],
          },
        },
      },
      {
        type: "moveAcceleration",
        config: {
          accel: {
            x: 0,
            y: 750,
          },
          minStart: 900,
          maxStart: 1000,
          rotate: true,
        },
      },
      {
        type: "scale",
        config: {
          scale: {
            list: [
              {
                time: 0,
                value: 0.25,
              },
              {
                time: 1,
                value: 0.35,
              },
            ],
          },
          minMult: 1,
        },
      },
      {
        type: "rotation",
        config: {
          accel: 0,
          minSpeed: 500,
          maxSpeed: 7000,
          minStart: -10,
          maxStart: 0,
        },
      },
      {
        type: "animatedRandom",
        config: {
          anims: [
            {
              framerate: 20,
              loop: true,
              textures: [
                "gold_1.png",
                "gold_2.png",
                "gold_3.png",
                "gold_4.png",
                "gold_5.png",
              ],
            },
            {
              framerate: 20,
              loop: true,
              textures: [
                "gold_6.png",
                "gold_5.png",
                "gold_4.png",
                "gold_3.png",
                "gold_2.png",
                "gold_1.png",
              ],
            },
          ],
        },
      },
      {
        type: "spawnShape",
        config: {
          type: "torus",
          data: {
            x: -750,
            y: -400,
            radius: 5,
            innerRadius: 0,
            affectRotation: false,
          },
        },
      },
    ],
  });
  const emitter2 = new Emitter(container, {
    behaviors: [
      {
        type: "alpha",
        config: {
          alpha: {
            list: [
              {
                time: 0,
                value: 1,
              },
              {
                time: 1,
                value: 0.5,
              },
            ],
          },
        },
      },
      {
        type: "moveAcceleration",
        config: {
          accel: {
            x: 0,
            y: 750,
          },
          minStart: 900,
          maxStart: 1000,
          rotate: true,
        },
      },
      {
        type: "scale",
        config: {
          scale: {
            list: [
              {
                time: 0,
                value: 0.25,
              },
              {
                time: 1,
                value: 0.35,
              },
            ],
          },
          minMult: 1,
        },
      },
      {
        type: "rotation",
        config: {
          accel: 0,
          minSpeed: 500,
          maxSpeed: 7000,
          minStart: -10,
          maxStart: 0,
        },
      },
      {
        type: "animatedRandom",
        config: {
          anims: [
            {
              framerate: 20,
              loop: true,
              textures: [
                "gold_1.png",
                "gold_2.png",
                "gold_3.png",
                "gold_4.png",
                "gold_5.png",
              ],
            },
            {
              framerate: 20,
              loop: true,
              textures: [
                "gold_6.png",
                "gold_5.png",
                "gold_4.png",
                "gold_3.png",
                "gold_2.png",
                "gold_1.png",
              ],
            },
          ],
        },
      },
      {
        type: "spawnShape",
        config: {
          type: "torus",
          data: {
            x: -850,
            y: -350,
            radius: 5,
            innerRadius: 0,
            affectRotation: false,
          },
        },
      },
    ],
  });
  const emitter4 = new Emitter(container, {
    behaviors: [
      {
        type: "alpha",
        config: {
          alpha: {
            list: [
              {
                time: 0,
                value: 1,
              },
              {
                time: 1,
                value: 0.5,
              },
            ],
          },
        },
      },
      {
        type: "moveAcceleration",
        config: {
          accel: {
            x: 100,
            y: 150,
          },
          minStart: 50,
          maxStart: 550,
          rotate: true,
        },
      },
      {
        type: "scale",
        config: {
          scale: {
            list: [
              {
                time: 0,
                value: 0.25,
              },
              {
                time: 1,
                value: 0.35,
              },
            ],
          },
          minMult: 1,
        },
      },
      {
        type: "rotation",
        config: {
          accel: 0,
          minSpeed: 50,
          maxSpeed: 700,
          minStart: 10,
          maxStart: 0,
        },
      },
      {
        type: "animatedRandom",
        config: {
          anims: [
            {
              framerate: 20,
              loop: true,
              textures: [ "L"
              // "  https://pixijs.io/particle-emitter/examples/images/pop_anim.png'"
                      ],
            },
            {
              framerate: 20,
              loop: true,
              textures: [ "L"
              //  " https://pixijs.io/particle-emitter/examples/images/pop_anim.png"
              ],
            },
          ],
        },
      },
      {
        type: "spawnShape",
        config: {
          type: "torus",
          data: {
            x: 900,
            y: -400,
            radius: 5,
            innerRadius: 0,
            affectRotation: false,
          },
        },
      },
    ],
  });
  // // console.log(emitter2);
  // emitter3.emit = true;
  emitter.emit = true;
  // emitter2.emit=true;
  // emitter4.rotate(1);
  // // const emitter1=emitter.rotate(1)
  // emitter.updateOwnerPos(window.innerWidth / 2, window.innerHeight / 2);
  // app.ticker.add((delta) => {
  //   emitter.update(delta * 0.01);

  // });
  app.ticker.add((delta) => {
   emitter4.update(delta * 0.01);
    // emitter3.update(delta * 0.01);
    // emitter2.update(delta * 0.01);
    // emitter.update(delta*0.005);
  });
  // window.onclick = () => {
  //   emitter.emit = emitter.emit ? false : true;
  // };
  window.onclick = () => {
     emitter4.emit = emitter3.emit ? false : true;
    emitter3.emit = emitter3.emit ? false : true;
    emitter2.emit = emitter2.emit ? false : true;
    emitter.emit = emitter.emit ? false : true;
  };
});
