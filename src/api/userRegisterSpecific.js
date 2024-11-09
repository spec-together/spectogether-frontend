import meet from "./checkAuthorized";
import { USER_REGISTER_SPECIFIC } from "./config";

export const userRegisterSpecific = async (
  nickname,
  mbti,
  hashtags,
  introduction,
  areas
) => {
  try {
    const response = await meet.post(USER_REGISTER_SPECIFIC, {
      nickname,
      mbti,
      hashtags,
      introduction,
      areas,
    });

    console.log("User Register Specific Response:", response);

    if (response.status === 200) {
      console.log("User registered!");
      return true;
    }
  } catch (error) {
    console.error(
      "Error registering user specific info:",
      error.response ? error.response.data : error.message
    );
    return false;
  }
};
