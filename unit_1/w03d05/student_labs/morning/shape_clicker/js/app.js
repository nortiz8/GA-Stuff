console.log('shape clicker js file is connected');

$(() => {
  const shapeArray = [
    'triangle',
    'circle',
    'square',
    'triangle-down',
    'octagon',
    'heart'
  ];

  $('.triangle').addClass('shape');

  let curIndex = 0;
  let curShape = shapeArray[curIndex];
  const lastIndex = shapeArray.length - 1;

  $('.shape').on('click', event => {
    const $curItem = $(event.currentTarget);
    $curItem.removeClass();
    $curItem.addClass('shape');

    if (curIndex < lastIndex) {
      curIndex++;
      curShape = shapeArray[curIndex];
      $curItem.addClass(curShape);
    } else {
      curIndex = 0;
      curShape = shapeArray[curIndex];
      $curItem.addClass(curShape);
    }
  });
});

///// FOR SOME
///// REASON
///// THIS DOESNT
///// WORK
// $(() => {
//   const shapeArray = [
//     'triangle',
//     'circle',
//     'square',
//     'triangle-down',
//     'octagon',
//     'heart'
//   ];
//   let curIndex = 0;
//   let curShape = shapeArray[curIndex];
//   const lastIndex = shapeArray.length - 1;

//   $('.triangle').addClass('shape');

//   $('.shape').on('click', event => {
//     const $current = $(event.currentTartget);
//     $current.removeClass();
//     $current.addClass('shape');
//     if (curIndex < lastIndex) {
//       curIndex++;
//       curShape = shapeArray[curIndex];
//       console.log(curShape);
//       $current.addClass(curShape);
//     } else {
//       curIndex = 0;
//       curShape = shapeArray[curIndex];
//       $current.addClass(curShape);
//     }
//   });
// });
