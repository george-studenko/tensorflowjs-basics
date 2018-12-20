// Tensors with shape (3,2)
const tensor = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], [3,2]);
const tensor2 = tf.tensor([1,1,1,1,1,1], [3,2]);

// Print results with toString
console.log(tensor.toString());

// Tensorflow variable
const var1 = tf.variable(tensor2);

// Print results with toString and dataSync
console.log(var1.dataSync());

console.log(var1.toString());

// Add tensor to the transposed values of tensor2
console.log(tf.matMul(tensor,tensor2.transpose()).toString())
