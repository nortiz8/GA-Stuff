const contacts = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "Casa del McDonalds" },
  { name: "Jem", address: "Starlight Music" }
];

const populateData = () => {
  const $infoTable = $('<table>').addClass('info-table')
  $infoTable.html(`
    <thead>
      <tr>
        <th>Name</th>
        <th>Location</th>
      </tr>
    </thead>
    `)
  $('.container').append($infoTable)

  for (let contact of contacts) {
    const $infoRow = $('<tr>')
    const $nameCell = $('<td>')
      .addClass('name')
      .text(contact.name)
    const $addressCell  = $('<td>')
      .addClass('address')
      .text(contact.address)
    $infoRow.append($nameCell, $addressCell)
    $infoTable.append($infoRow)
  }
}

const addData = (name, address) => {
  contacts.push({name: name, address: address})
  $('.container').empty()
  populateData()
}


// document on ready
$(() => {
  populateData()
  addData('Karolin', 'NY')
  addData('Donovan', 'NY')
})
