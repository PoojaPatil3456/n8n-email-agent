// Get the category from classifier node
const category = $node["Classify"].json.category;
console.log(category);
const users = $items().map(item => item.json);

// Filter users based on role
const matchedUsers = users.filter(user => {
  const role = (user.role || '').toLowerCase();
  return role === category;
});

// Return filtered results
return [{
  json: {
    message: matchedUsers.length > 0
      ? `Matched ${matchedUsers.length} users for role '${category}'`
      : `No users matched for role '${category}'`,
    category,
    users: matchedUsers
  }
}];
