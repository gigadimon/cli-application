const fs = require("fs");
const path = require("path");
const contactsPath = path.resolve("./contacts.json");

const rewriteContacts = ({ data, message }) => {
  fs.writeFile(contactsPath, JSON.stringify(data), "utf-8", (error, _) => {
    if (error) return console.error(error);
    console.log(message);
  });
};

module.exports = {
  rewriteContacts,
};
