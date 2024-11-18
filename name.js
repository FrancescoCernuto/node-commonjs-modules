console.log('server is running')

const fullName = (firstName, lastName) => {
    const userName = {
      name: firstName,
      surname: lastName,
    };
    return userName;
  };
  
  module.exports = fullName;
  