import axios from "axios";

const checkToken = async (token, userId) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/checkToken", {
      token: token,
      userId: userId,
    });

    if (response.data.verified) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default checkToken;
