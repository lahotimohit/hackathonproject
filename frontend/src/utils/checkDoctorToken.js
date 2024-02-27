import axios from "axios";

const checkToken = async (token, userId) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/doctor/checkToken", {
      token: token,
      doctorId: userId,
    });
    if (response.data.user) {
      return response.data.user;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default checkToken;
