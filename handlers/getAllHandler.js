const getAllHandler = (error, data) => {
  if (error) return console.error(error);
  console.table(JSON.parse(data));
};

module.exports = { getAllHandler };
