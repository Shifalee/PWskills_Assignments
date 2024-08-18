/*3. Object Extensibility and Sealing
a) Use the Object.preventExtensions method to prevent and further additions of properties to the student object.
b) Use the Object.isExtensible method to check if the student object is extensible. Store the result in a variable
called extensibleStatus.
c) Create a new object called teacher with a 'subject' property set to 'Math'.
d) Use the Object.seal method to seal the teacher object, preventing any additions or deletions of properties.
e) Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
sealedStatus.
f) Print the extensibleStatus and sealedStatus to the console.*/

// a) Create a student object and prevent further additions of properties
const student = {
    name: 'John',
    age: 21
};

Object.preventExtensions(student);

// b) Check if the student object is extensible and store the result in a variable
const extensibleStatus = Object.isExtensible(student);

// c) Create a new object called teacher with a 'subject' property set to 'Math'
const teacher = {
    subject: 'Math'
};

// d) Seal the teacher object to prevent any additions or deletions of properties
Object.seal(teacher);

// e) Check if the teacher object is sealed and store the result in a variable
const sealedStatus = Object.isSealed(teacher);

// f) Print the extensibleStatus and sealedStatus to the console
console.log("Is student object extensible?", extensibleStatus); // Expected output: false
console.log("Is teacher object sealed?", sealedStatus); // Expected output: true
