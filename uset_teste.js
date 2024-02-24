async function criptografa() {
  const user = { password: 'wilson1234' };
  const bcrypt = require('bcrypt');
  const hashedPassword = await bcrypt.hash(user.password, 10);
  console.log(hashedPassword);
  return hashedPassword;
}
const resutaldo = criptografa();

console.log(resutaldo);
