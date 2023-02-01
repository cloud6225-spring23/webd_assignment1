import badRequestException from "../error_handling/badRequest.js";

const emptyContent = async (req, res, next) => {
  const {first_name, last_name } = req.body;
  if( first_name == null && last_name == null )
  {
    throw new badRequestException("Enter user details correctly");
    
  }else {
    next();
  }  
};

export { emptyContent };


