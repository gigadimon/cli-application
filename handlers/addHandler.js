const { v4: uuidv4 } = require("uuid");
const { rewriteContacts } = require("../helpers/rewriteContacts");

const addHandler = (error, data, contact) => {
  if (error) return console.error(error);
  const contacts = JSON.parse(data);
  const id = uuidv4();
  contacts.push({
    id,
    ...contact,
  });

  rewriteContacts({
    data: contacts,
    message: `Contact added by id: ${id}`,
  });
};
module.exports = { addHandler };
