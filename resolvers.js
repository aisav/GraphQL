const user = {
  _id: 1,
  name: 'Artur',
  email: 'artur.isaverdyan@gmail.com',
  picture: 'https://cloudinary.com/gghfh'
}

module.exports = {
  Query: {
    me: () => user
  }
}
