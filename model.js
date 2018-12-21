const model  = tf.sequential()

const config_hidden = {
  inputShape: [3],
  activation: 'relu',
  units:4
}

const config_output = {
  units = 2,
  activation = 'sigmoid'
}

const hidden_layer = tf.layers.dense(config_hidden);
const output_layer = tf.layers.dense(config_output);

model.add(hidden_layer);
model.add(output_layer);

const lr = 0.1;
const sgd = tf.train.sgd(lr);

const model_config = {
  optimizer: sgd,
  loss : 'meanSquaredError'
}

model.compile(model_config);
