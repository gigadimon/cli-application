const getByIdHandler = (error, data, id) => {
  if (error) return console.error(error);
  const contacts = JSON.parse(data);
  console.table(contacts.reduce((acc, el) => (el.id === id ? el : acc), {}));
};

module.exports = { getByIdHandler };
