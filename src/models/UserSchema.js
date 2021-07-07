const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
}, {
  timestamps: true,
});

UserSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

module.exports = model('User', UserSchema);
