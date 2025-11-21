import { animate, stagger, onScroll, utils } from 'animejs';

// Блок "Обо мне"

animate('.about__info', {
  opacity: [0, 1],
  x: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -260px',
    leave: 'center top',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

// Блок с ценами

animate('.services__suptitle', {
  opacity: [0, 1],
  y: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -200px',
    leave: 'center -70px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.services__title', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -295px',
    leave: 'center -165px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.services__list').forEach(list => {
  animate(list, {
    opacity: [0, 1],
    scale: [0.4, 1],
    autoplay: onScroll({
      enter: 'center -375px',
      leave: 'center -250px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

animate('.services__booking-link', {
  opacity: [0, 1],
  y: ['40%', 0],
  autoplay: onScroll({
    enter: 'center -310px',
    leave: 'center -260px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

// Блок с описанием преимуществ

animate('.advantages__info', {
  opacity: [0, 1],
  x: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -270px',
    leave: 'center -80px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.advantages__list', {
  opacity: [0, 1],
  x: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -270px',
    leave: 'center -80px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

// const advanatgeItem = utils.$('.advantages__item');

// Скрытие преимуществ и описания

// animate('.advantages__item', { opacity: 0, y: '50%', });

// Появление/скрытие при скролле преимуществ

// animate('.advantages__block', {
//   autoplay: onScroll({
//     enter: 'center -50px',
//     onEnter: () => {
//       animate('.advantages__item', {
//         opacity: [0, 1],
//         y: ['50%', 0],
//         delay: stagger(850),
//       });
//     },
//     onLeave: () => {
//       animate('.advantages__item', {
//         opacity: [1, 0],
//         y: [0, '50%'],
//         delay: stagger(850),
//       });
//     },
//     // alternate: true,
//     debug: true,
//   }),
// });

// Блок с барберами

animate('.barbers__suptitle', {
  opacity: [0, 1],
  y: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -200px',
    leave: 'center -70px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.barbers__title', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -295px',
    leave: 'center -165px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.barbers__item').forEach(barber => {
  animate(barber, {
    opacity: [0, 1],
    autoplay: onScroll({
      enter: 'center -220px',
      leave: 'center -40px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

// Блок с галереей

animate('.gallery__suptitle', {
  opacity: [0, 1],
  y: ['-100%', 0],
  autoplay: onScroll({
    enter: 'center -200px',
    leave: 'center -70px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

utils.$('.gallery__item').forEach(item => {
  animate(item, {
    scale: [0.3, 1],
    y: ['100%', 0],
    autoplay: onScroll({
      enter: 'center -550px',
      leave: 'center -340px',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
});

// Блок с контактами

animate('.contacts__title', {
  opacity: [0, 1],
  y: ['100%', 0],
  autoplay: onScroll({
    enter: 'center -300px',
    leave: 'center -200px',
    alternate: true,
    sync: true,
    // debug: true,
  }),
});

animate('.contacts__info', {
  opacity: [0, 1],
  autoplay: onScroll({
    enter: 'center -250px',
    leave: 'center -150px',
    alternate: true,
    sync: true,
    // debug: true,
  })
});




// let infoA = animate('.about__info', {
//   opacity: [0, 1],
//   x: ['100%', 0],
//   autoplay: onScroll({
//     enter: 'center -230px',
//     leave: 'center top',
//     alternate: true,
//     sync: true,
//     debug: true,
//   }),
// });

if (window.matchMedia("(min-width: 768px)").matches) {
  // infoA = animate('.about__info', {
  //   opacity: [0, 1],
  //   x: ['100%', 0],
  //   autoplay: onScroll({
  //     enter: 'center -330px',
  //     leave: 'center top',
  //     alternate: true,
  //     sync: true,
  //     debug: true,
  //   }),
  // });

  animate('.about__images', {
    opacity: [0, 1],
    x: ['-100%', 0],
    autoplay: onScroll({
      enter: 'center -260px',
      leave: 'center top',
      alternate: true,
      sync: true,
      // debug: true,
    }),
  });
}







// if (window.matchMedia("(min-width: 375px)").matches) {

//   // Блок "Обо мне"

//   animate('.about__info', {
//     opacity: [0, 1],
//     x: ['100%', 0],
//     autoplay: onScroll({
//       enter: 'center -230px',
//       leave: 'center top',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   // Блок с ценами

//   animate('.services__suptitle', {
//     opacity: [0, 1],
//     y: ['-100%', 0],
//     autoplay: onScroll({
//       enter: 'center -130px',
//       leave: 'center -50px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   animate('.services__title', {
//     opacity: [0, 1],
//     y: ['100%', 0],
//     autoplay: onScroll({
//       enter: 'center -245px',
//       leave: 'center -165px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   // const priceLists = utils.$('.services__list');

//   animate('.services__list--one', {
//     opacity: [0, 1],
//     scale: [0.4, 1],
//     autoplay: onScroll({
//       enter: 'center -375px',
//       leave: 'center -250px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   animate('.services__booking-link', {
//     opacity: [0, 1],
//     y: ['40%', 0],
//     autoplay: onScroll({
//       enter: 'center -310px',
//       leave: 'center -260px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   animate('.advantages__info', {
//     opacity: [0, 1],
//     x: ['100%', 0],
//     autoplay: onScroll({
//       enter: 'center -200px',
//       leave: 'center -80px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   // Блок с описанием преимуществ

//   // const advanatgeItem = utils.$('.advantages__item');

//   // Скрытие преимуществ и описания

//   animate('.advantages__item', { opacity: 0, y: '50%', });
//   // animate('.advantages__info', { opacity: [1, 0], x: [0, '-20%'], });

//   // Появление/скрытие при скролле преимуществ

//   animate('.advantages__block', {
//     autoplay: onScroll({
//       enter: 'center -40px',
//       onEnter: () => {
//         animate('.advantages__item', {
//           opacity: [0, 1],
//           y: ['50%', 0],
//           delay: stagger(850),
//         });

//         // animate('.advantages__info', {
//         //   opacity: [0, 1],
//         //   x: ['-20%', 0],
//         //   delay: 3400,
//         // });
//       },
//       onLeave: () => {
//         animate('.advantages__item', {
//           opacity: [1, 0],
//           y: [0, '50%'],
//           delay: stagger(850),
//         });

//         // animate('.advantages__info', {
//         //   opacity: [1, 0],
//         //   x: [0, '-20%'],
//         //   delay: 3400,
//         // });
//       },
//       // alternate: true,
//       // debug: true,
//     }),
//   });

//   // Блок с барберами

//   animate('.barbers__suptitle', {
//     opacity: [0, 1],
//     y: ['-100%', 0],
//     autoplay: onScroll({
//       enter: 'center -160px',
//       leave: 'center -80px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   animate('.barbers__title', {
//     opacity: [0, 1],
//     y: ['100%', 0],
//     autoplay: onScroll({
//       enter: 'center -245px',
//       leave: 'center -165px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   const allBarbers = utils.$('.barbers__item');
//   allBarbers.forEach((barber, i) => {
//     animate(barber, {
//       opacity: [0, 1],
//       autoplay: onScroll({
//         enter: 'center -200px',
//         leave: 'center -50px',
//         alternate: true,
//         sync: true,
//         // debug: true,
//       }),
//     });
//   });

//   // Блок с галереей

//   animate('.gallery__suptitle', {
//     opacity: [0, 1],
//     y: ['-100%', 0],
//     autoplay: onScroll({
//       enter: 'center -160px',
//       leave: 'center -80px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   const galleryItems = utils.$('.gallery__item');
//   galleryItems.forEach((item, i) => {
//     animate(item, {
//       scale: [0.3, 1],
//       y: ['100%', 0],
//       autoplay: onScroll({
//         enter: 'center -550px',
//         leave: 'center -350px',
//         alternate: true,
//         sync: true,
//         // debug: true,
//       }),
//     });
//   });

//   // Блок с контактами

//   animate('.contacts__title', {
//     opacity: [0, 1],
//     y: ['100%', 0],
//     autoplay: onScroll({
//       enter: 'center -290px',
//       leave: 'center -200px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     }),
//   });

//   animate('.contacts__info', {
//     opacity: [0, 1],
//     autoplay: onScroll({
//       enter: 'center -240px',
//       leave: 'center -140px',
//       alternate: true,
//       sync: true,
//       // debug: true,
//     })
// });
// } else if (window.matchMedia("(min-width: 768px)").matches) {
  // animate('.about__images', {
  //   opacity: [0, 1],
  //   x: ['-100%', 0],
  //   autoplay: onScroll({
  //     enter: 'center -300px',
  //     leave: 'center top',
  //     alternate: true,
  //     sync: true,
  //     debug: true,
  //   }),
  // });

//   animate('.about__info', {
//     opacity: [0, 1],
//     x: ['100%', 0],
//     autoplay: onScroll({
//       enter: 'center -300px',
//       leave: 'center top',
//       alternate: true,
//       sync: true,
//       debug: true,
//     }),
//   });
// }
