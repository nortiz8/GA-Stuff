console.log('working');
const contacts = [
  { name: 'Megatron', address: 'Cybertron' },
  { name: 'Some guy', address: 'Some street' },
  { name: 'Grace Hopper', address: 'Arlington, Virginia' },
  { name: 'Ching Shih', address: 'The High Seas' },
  { name: 'Slimer', address: 'The Library' },
  { name: 'Umbra', address: 'The Void' },
  { name: 'Hypatia', address: 'The Neoplatonic school at Alexandria' },
  { name: 'Matt Huntington', address: 'Remote' },
  { name: 'Ronald McDonald', address: 'Casa del McDonalds' },
  { name: 'Jem', address: 'Starlight Music' }
];

const buildTable = () => {
  const $infoTable = $('<table>').addClass('info-table');
  $infoTable.html(
    `<thead>
        <tr>
            <th>Name</th>
            <th>Location</th>
        </tr>
    </thead>`
  );
  for (let contact of contacts) {
    console.log(contact);
    const $infoRow = $('<tr>');
    const $nameCell = $('<td>')
      .addClass('name')
      .text(contact.name);
    const $addressCell = $('<td>')
      .addClass('address')
      .text(contact.address);
    $infoRow.append($nameCell, $addressCell);
    $infoTable.append($infoRow);
  }
  $('body').append($infoTable);
};

const addData = (name, address) => {
  contacts.push({ name: name, address: address });
  $('body').empty();
  buildTable();
};
$(() => {
  buildTable();
  addData('Amanda', 'Norwalk');
});
