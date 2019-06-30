exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex("test")
    .truncate()
    .then(function() {
      return knex("test").insert([
        { name: "sam" },
        { name: "frodo" },
        { name: "pippin" },
        { name: "merry" }
      ]);
    });
};
