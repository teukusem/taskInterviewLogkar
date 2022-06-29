let data = {
  'address.street': 'jalan sakura',
  'address.provice': 'banten',
  'address.city': 'tangerang',
  'person.name': 'john',
  'person.email': 'john@doe.com',
  'userType': 'admin',
  'accessLevel': 'QA'
}

const obj = {}
let tempKey = ''

const filteredData = Object.entries(data).forEach(([key, value]) => {
  const splittedKey = key.split('.')

  if (tempKey != splittedKey[0]) {
    tempKey = splittedKey[0]

    if (splittedKey[1]) {
      obj[tempKey] = {}
      obj[tempKey][splittedKey[1]] = value
    } else {
      obj[tempKey] = value
    }
  } else {
    obj[tempKey][splittedKey[1]] = value
  }

})

console.log(obj)