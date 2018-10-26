export const isValidEmailAddress = (email) => {
  try { //first check if email argument provided and of type string
    if (!email || typeof email !== 'string') throw "you must provide an email of type string";
  }
  catch(err) {
    return err
  }
  const pattern = email.match(/\D+@\D+\.\D/) // if email is truthy check regex pattern
  return pattern ? email : null // if pattern is truthy return email, or else return null 
};
