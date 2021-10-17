<<<<<<< HEAD
import jwt from 'jsonwebtoken'

const secret = 'iksde'

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const isCustomAuth = token.length < 500

    let decodedData
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret)

      req.userId = decodedData?.id
    } else {
      decodedData = jwt.decode(token)

      req.userId = decodedData?.sub
    }

    next()
  } catch (error) {
    console.log('Authentication middleware error')
    console.log(error)
  }
}

export default auth
=======
import jwt from "jsonwebtoken";

const secret = 'iksde';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {      
        decodedData = jwt.verify(token, secret);

        req.userId = decodedData?.id;
    } else {
        decodedData = jwt.decode(token);

        req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
        console.log("Authentication middleware error");
        console.log(error);
  }
};

export default auth;
>>>>>>> 3c0d56e80f4a68edd23a3ee0db13802d49cb4d50
