
// Create the student object with a name property
const student = {
  name: 'John Doe'
};

// Add a getKeys method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Usage
console.log(student.getKeys()); // Output: ['name']
