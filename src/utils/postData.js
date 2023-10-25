import Cookies from "js-cookie";

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      return {
        success: false,
        errorCode: 0,
        message: "HTTP Request Failed",
      };
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    return {
      success: false,
      errorCode: 0,
      message: "HTTP Request Failed",
    };
    throw error; // Rethrow the error to handle it further if needed
  }
}

export default postData;
