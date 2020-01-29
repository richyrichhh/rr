import Character from './character';

export default class Player extends Character {
  constructor(game) {
    super(game, [600, 300]);
    this.animations = {
      stand: {
        frames: 2,
        frameData: {
          up: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/stand-up-0_oe6xna.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/stand-up-1_lnwpyx.png'],
          down: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/stand-down-0_u9rszx.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/stand-down-1_k2qpmc.png']
        }
      },
      move: {
        frames: 6,
        frameData: {
          up: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-0_jecrhm.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-1_gbjnsa.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-2_bya0jv.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-3_zyivo7.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-4_mairwr.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242508/charles/ref/walk-up-5_o3iyup.png'],
          down: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/walk-down-0_mk1idv.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-1_wthncz.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/walk-down-2_kbdx2z.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-3_pyorix.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-4_keystc.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242494/charles/ref/walk-down-5_bsw8y0.png']
        }
      },
      attack: {
        frames: 2,
        frameData: {
          up: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/attack-0_g0wue2.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/attack-1_pso6at.png'],
          down: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/attack-0_g0wue2.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/attack-1_pso6at.png']
        }
      },
      death: {
        frames: 6,
        frameData: {
          up: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-0_wwm73z.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-1_tkd6dj.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-2_wxhfjt.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-3_nnelcj.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-4_uzsbho.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-5_mkgvo4.png'],
          down: ['https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-0_wwm73z.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-1_tkd6dj.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-2_wxhfjt.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-3_nnelcj.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-4_uzsbho.png', 'https://res.cloudinary.com/fatrichie/image/upload/v1580242493/charles/ref/death-5_mkgvo4.png']
        }
      }
    }
    this.imageUrl = this.animations.stand.frameData.down[0]
  }

  die() {
    this.state = 'death';
    this.frame = 0;
    this.frameLength = 8;
    this.frameTime = 8;
    setTimeout(() => this.game.gameOver(), 3000);
  }
}