let inputQuery = $json.body?.query;

if (typeof inputQuery !== 'string') {
  console.log("Query is not a string, coercing...");
  inputQuery = JSON.stringify(inputQuery || '');
}

inputQuery = inputQuery.toLowerCase();

// Define flat keyword arrays
const customerKeywords = [
  'product', 'inquiry', 'support', 'sales', 'question',
  'billing', 'feature', 'refund', 'charged'
];

const adminKeywords = [
  'technical', 'escalation', 'system', 'issue',
  'security', 'concern', 'data', 'integration', 'api',
  'production', 'urgent'
];

// Tokenize query
const queryWords = inputQuery.split(/\W+/);

let category = 'unknown';

if (queryWords.some(word => customerKeywords.includes(word))) {
  category = 'customer';
} else if (queryWords.some(word => adminKeywords.includes(word))) {
  category = 'admin';
}

console.log("Query:", inputQuery);
console.log("Category:", category);

return [{
  json: {
    query: inputQuery,
    category
  }
}];
