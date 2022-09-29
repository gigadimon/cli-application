const { rewriteContacts } = require("../helpers/rewriteContacts");

const removeHandler = (error, data, id) => {
  if (error) return console.error(error);
  const contacts = JSON.parse(data);
  const newContacts = contacts.filter((contact) => contact.id !== id);

  rewriteContacts({
    data: newContacts,
    message: `Contact with id ${id} removed`,
  });
};

module.exports = { removeHandler };
