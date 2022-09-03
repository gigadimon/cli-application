const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

function listContacts() {
  return JSON.parse(fs.readFileSync(contactsPath, "utf-8"));
}

function getContactById(contactId) {
  const contacts = listContacts();
  return contacts.reduce((acc, el) => (el.id === contactId ? el : acc), {});
}

function removeContact(contactId) {
  const contacts = listContacts();
  const newContacts = contacts.filter((contact) => contact.id !== contactId);
  fs.writeFileSync(contactsPath, JSON.stringify(newContacts), "utf-8");
  console.log(`Contact with id ${contactId} removed`);
}

function addContact(name, email, phone) {
  const contacts = listContacts();
  const id = String(Number(contacts[contacts.length - 1].id) + 1);
  const newContacts = [
    ...contacts,
    {
      id,
      name,
      email,
      phone,
    },
  ];
  fs.writeFileSync(contactsPath, JSON.stringify(newContacts), "utf-8");
  console.log("Contact added by id:", id);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
