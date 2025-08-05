// summarizeFile.js
return {
  fileName: item.json.name,
  content: item.json.text.replace(/\s+/g, ' ').slice(0, 3000),
};

