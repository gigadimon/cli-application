const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const { getAllHandler } = require("./handlers/getAllHandler");
const { getByIdHandler } = require("./handlers/getByIdHandler");
const { removeHandler } = require("./handlers/removeHandler");
const { addHandler } = require("./handlers/addHandler");

function listContacts() {
  fs.readFile(contactsPath, "utf-8", getAllHandler);
}

function getContactById(id) {
  fs.readFile(contactsPath, "utf-8", (error, data) =>
    getByIdHandler(error, data, id)
  );
}

function removeContact(id) {
  fs.readFile(contactsPath, "utf-8", (error, data) =>
    removeHandler(error, data, id)
  );
}

function addContact(contact) {
  fs.readFile(contactsPath, "utf-8", (error, data) =>
    addHandler(error, data, contact)
  );
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
