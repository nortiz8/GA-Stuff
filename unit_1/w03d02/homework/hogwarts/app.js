$(() => {
  //year 1
  const $container = $('#container');
  //   console.log($container);
  const $h1 = $('<h1>');
  //   console.log($h1);
  $h1.text('Hogwarts');
  $container.append($h1);

  //year 2
  const $h2 = $('<h2>');
  $h2.text('Nick');
  const $h3 = $('<h3>');
  $h3.text('Hufflepuff');
  const $pet = $('<h4>');
  $pet.text('Hoo-dini');
  $pet.addClass('owl');
  const $wand = $('<h4>');
  $wand.text('Holly Wand with Unicorn Hair Core');
  $container.append($h2, $h3, $pet, $wand);

  //year 3
  const $trunk = $('<ul>');
  $trunk.attr('storage', 'trunk');
  const $butterBeer = $('<li>');
  $butterBeer.text('Butter Beer');
  const $cloak = $('<li>');
  $cloak.text('Invisibility Cloak');
  $cloak.addClass('secret');
  const $map = $('<li>');
  $map.text("Marauder's Map");
  $map.addClass('secret');
  const $timeTurner = $('<li>');
  $timeTurner.text('Time Turner');
  $timeTurner.addClass('secret');
  const $leash = $('<li>');
  $leash.text("Hoo-dini's leash");
  $leash.addClass('owl');
  const $beans = $('<li>');
  $beans.text('Bertie Botts Every Flavor Jelly Beans');
  $trunk.append($butterBeer, $cloak, $map, $timeTurner, $leash, $beans);
  $container.append($trunk);

  //year 4
  const $year4 = $('<h5>');
  $year4.text('Spring 2019');
  const $table = $('<table>');
  const $thread = $('<thread>');
  $table.append($thread);
  const $day = $('<th>');
  $day.text('Day');
  const $classes = $('<th>');
  $classes.text('Classes');
  $thread.append($day, $classes);
  //mon
  const $rowMon = $('<tr>');
  const $monday = $('<td>');
  $monday.text('Monday');
  const $monClass = $('<td>');
  $monClass.text('Herbology, Charms');
  $rowMon.append($monday, $monClass);
  //tues
  const $rowTues = $('<tr>');
  const $tuesday = $('<td>');
  $tuesday.text('Tuesday');
  const $tuesClass = $('<td>');
  $tuesClass.text('Divination, Quidditch Practice');
  $rowTues.append($tuesday, $tuesClass);
  //wedn
  const $rowWedn = $('<tr>');
  const $wednesday = $('<td>');
  $wednesday.text('Wednesday');
  const $wednClass = $('<td>');
  $wednClass.text('History of Magic, Potions');
  $rowWedn.append($wednesday, $wednClass);
  // thurs
  const $rowThurs = $('<tr>');
  const $thursday = $('<td>');
  $thursday.text('Thursday');
  const $thursClass = $('<td>');
  $thursClass.text('Transfiguration, Quidditch Practice');
  $rowThurs.append($thursday, $thursClass);
  //fri
  const $rowFri = $('<tr>');
  const $friday = $('<td>');
  $friday.text('Friday');
  const $friClass = $('<td>');
  $friClass.text('Care of Magical Creatures, Defense Against the Dark Arts');
  $rowFri.append($friday, $friClass);
  $table.append($rowMon, $rowTues, $rowWedn, $rowThurs, $rowFri);
  $container.append($year4, $table);

  //year 5
  $wand.remove();
  $butterBeer.remove();
  $container.append($wand, $trunk, $year4, $table);
  $wand.css('color', 'deeppink');
  $pet.remove();
  $beans.append($pet);
  $pet.remove();
  $container.append($pet, $wand, $trunk, $year4, $table);

  //year 6
  const $hide = $('.secret');
  $hide
    .hide('slow')
    .delay(2000)
    .show(200);
  $leash.addClass('cabbage');
  $leash.removeClass('cabbage');

  //year 7
  $year4.text('Fall 2020');
  $trunk.append($butterBeer, $cloak, $map, $timeTurner, $leash, $beans);
  $trunk.attr('storage', 'chest');
});
