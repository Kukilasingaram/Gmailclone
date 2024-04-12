import axios from "axios";

//const API_URL = "https://gmail-backend-8ssn.onrender.comg";
//const API_URL= "http://localhost:7000/"
const API_URL = "https://gmail-clone-backend-t8r7.onrender.com"
const API_GMAIL = async (urlObject, payload, type) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}/${type}`,
    data: payload,
  });
};

export default API_GMAIL;