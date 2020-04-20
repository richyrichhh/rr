import Enemy from './enemy';

export default class Boss extends Enemy {
  constructor(game) {
    super(game);
    this.animations = {
      stand: {
        frames: 14,
        frameData: {
          up: ['../src/game/animations/shaq/stand/stand_0-0.png', '../src/game/animations/shaq/stand/stand_0-1.png', '../src/game/animations/shaq/stand/stand_0-2.png', '../src/game/animations/shaq/stand/stand_0-3.png', '../src/game/animations/shaq/stand/stand_0-4.png', '../src/game/animations/shaq/stand/stand_0-5.png', '../src/game/animations/shaq/stand/stand_0-6.png', '../src/game/animations/shaq/stand/stand_0-7.png', '../src/game/animations/shaq/stand/stand_0-8.png', '../src/game/animations/shaq/stand/stand_0-9.png', '../src/game/animations/shaq/stand/stand_0-10.png', '../src/game/animations/shaq/stand/stand_0-11.png', '../src/game/animations/shaq/stand/stand_0-12.png', '../src/game/animations/shaq/stand/stand_0-13.png'],
          down: ['../src/game/animations/shaq/stand/stand_0-0.png', '../src/game/animations/shaq/stand/stand_0-1.png', '../src/game/animations/shaq/stand/stand_0-2.png', '../src/game/animations/shaq/stand/stand_0-3.png', '../src/game/animations/shaq/stand/stand_0-4.png', '../src/game/animations/shaq/stand/stand_0-5.png', '../src/game/animations/shaq/stand/stand_0-6.png', '../src/game/animations/shaq/stand/stand_0-7.png', '../src/game/animations/shaq/stand/stand_0-8.png', '../src/game/animations/shaq/stand/stand_0-9.png', '../src/game/animations/shaq/stand/stand_0-10.png', '../src/game/animations/shaq/stand/stand_0-11.png', '../src/game/animations/shaq/stand/stand_0-12.png', '../src/game/animations/shaq/stand/stand_0-13.png']
        }
      },
      move: {
        frames: 23,
        frameData: {
          up: ['../src/game/animations/shaq/run/run_100-0.png', '../src/game/animations/shaq/run/run_100-1.png', '../src/game/animations/shaq/run/run_100-2.png', '../src/game/animations/shaq/run/run_100-3.png', '../src/game/animations/shaq/run/run_100-4.png', '../src/game/animations/shaq/run/run_100-5.png', '../src/game/animations/shaq/run/run_100-6.png', '../src/game/animations/shaq/run/run_100-7.png', '../src/game/animations/shaq/run/run_100-8.png', '../src/game/animations/shaq/run/run_100-9.png', '../src/game/animations/shaq/run/run_100-10.png', '../src/game/animations/shaq/run/run_100-11.png', '../src/game/animations/shaq/run/run_100-12.png', '../src/game/animations/shaq/run/run_100-13.png', '../src/game/animations/shaq/run/run_100-14.png', '../src/game/animations/shaq/run/run_100-15.png', '../src/game/animations/shaq/run/run_100-16.png', '../src/game/animations/shaq/run/run_100-17.png', '../src/game/animations/shaq/run/run_100-18.png', '../src/game/animations/shaq/run/run_100-19.png', '../src/game/animations/shaq/run/run_100-20.png', '../src/game/animations/shaq/run/run_100-21.png', '../src/game/animations/shaq/run/run_100-22.png'],
          down: ['../src/game/animations/shaq/run/run_100-0.png', '../src/game/animations/shaq/run/run_100-1.png', '../src/game/animations/shaq/run/run_100-2.png', '../src/game/animations/shaq/run/run_100-3.png', '../src/game/animations/shaq/run/run_100-4.png', '../src/game/animations/shaq/run/run_100-5.png', '../src/game/animations/shaq/run/run_100-6.png', '../src/game/animations/shaq/run/run_100-7.png', '../src/game/animations/shaq/run/run_100-8.png', '../src/game/animations/shaq/run/run_100-9.png', '../src/game/animations/shaq/run/run_100-10.png', '../src/game/animations/shaq/run/run_100-11.png', '../src/game/animations/shaq/run/run_100-12.png', '../src/game/animations/shaq/run/run_100-13.png', '../src/game/animations/shaq/run/run_100-14.png', '../src/game/animations/shaq/run/run_100-15.png', '../src/game/animations/shaq/run/run_100-16.png', '../src/game/animations/shaq/run/run_100-17.png', '../src/game/animations/shaq/run/run_100-18.png', '../src/game/animations/shaq/run/run_100-19.png', '../src/game/animations/shaq/run/run_100-20.png', '../src/game/animations/shaq/run/run_100-21.png', '../src/game/animations/shaq/run/run_100-22.png']
        }
      },
      attack: {
        frames: 19,
        frameData: {
          up: ['../src/game/animations/shaq/kick/kick_1000-0.png', '../src/game/animations/shaq/kick/kick_1000-1.png', '../src/game/animations/shaq/kick/kick_1000-2.png', '../src/game/animations/shaq/kick/kick_1000-3.png', '../src/game/animations/shaq/kick/kick_1000-4.png', '../src/game/animations/shaq/kick/kick_1000-5.png', '../src/game/animations/shaq/kick/kick_1000-6.png', '../src/game/animations/shaq/kick/kick_1000-7.png', '../src/game/animations/shaq/kick/kick_1000-8.png', '../src/game/animations/shaq/kick/kick_1000-9.png', '../src/game/animations/shaq/kick/kick_1000-10.png', '../src/game/animations/shaq/kick/kick_1000-11.png', '../src/game/animations/shaq/kick/kick_1000-12.png', '../src/game/animations/shaq/kick/kick_1000-13.png', '../src/game/animations/shaq/kick/kick_1000-14.png', '../src/game/animations/shaq/kick/kick_1000-15.png', '../src/game/animations/shaq/kick/kick_1000-16.png', '../src/game/animations/shaq/kick/kick_1000-17.png', '../src/game/animations/shaq/kick/kick_1000-18.png'],
          down: ['../src/game/animations/shaq/kick/kick_1000-0.png', '../src/game/animations/shaq/kick/kick_1000-1.png', '../src/game/animations/shaq/kick/kick_1000-2.png', '../src/game/animations/shaq/kick/kick_1000-3.png', '../src/game/animations/shaq/kick/kick_1000-4.png', '../src/game/animations/shaq/kick/kick_1000-5.png', '../src/game/animations/shaq/kick/kick_1000-6.png', '../src/game/animations/shaq/kick/kick_1000-7.png', '../src/game/animations/shaq/kick/kick_1000-8.png', '../src/game/animations/shaq/kick/kick_1000-9.png', '../src/game/animations/shaq/kick/kick_1000-10.png', '../src/game/animations/shaq/kick/kick_1000-11.png', '../src/game/animations/shaq/kick/kick_1000-12.png', '../src/game/animations/shaq/kick/kick_1000-13.png', '../src/game/animations/shaq/kick/kick_1000-14.png', '../src/game/animations/shaq/kick/kick_1000-15.png', '../src/game/animations/shaq/kick/kick_1000-16.png', '../src/game/animations/shaq/kick/kick_1000-17.png', '../src/game/animations/shaq/kick/kick_1000-18.png']
        }
      },
      death: {
        frames: 7,
        frameData: {
          up: ['../src/game/animations/shaq/death/death_170-0.png', '../src/game/animations/shaq/death/death_170-1.png', '../src/game/animations/shaq/death/death_170-2.png', '../src/game/animations/shaq/death/death_170-3.png', '../src/game/animations/shaq/death/death_170-4.png', '../src/game/animations/shaq/death/death_170-5.png', '../src/game/animations/shaq/death/death_170-6.png'],
          down: ['../src/game/animations/shaq/death/death_170-0.png', '../src/game/animations/shaq/death/death_170-1.png', '../src/game/animations/shaq/death/death_170-2.png', '../src/game/animations/shaq/death/death_170-3.png', '../src/game/animations/shaq/death/death_170-4.png', '../src/game/animations/shaq/death/death_170-5.png', '../src/game/animations/shaq/death/death_170-6.png']
        }
      }
    }
  
  
  }
}