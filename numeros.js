
module.exports = {
esPar:function(a) {
    const Logger = require("logplease");  //REQUIRED LINKS FOR THE MODUAL WE HAVE DOWNLOADED
    const logger = Logger.create("utils"); // NEEDS TO LOAD THIS TO PERFORM THE LOGGER THINGS
  const esPar = (a) => // FUNCTION INSIDE A FUNCTION
    a % 2 == 0 ? 
       logger.info(`El número es par`):
      logger.error(`El número no es par`);
    
    return esPar; // RETURN THE FUNCTION INSIDE THE FUNCTION
  }
}
