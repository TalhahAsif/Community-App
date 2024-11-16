"use server";

export async function UploadImage(data) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const secretKey = process.env.CLOUDINARY_SECRET_KEY;

  const timeStamp = Math.floor(Date.now() / 1000);
  const signature = generateSignature(timeStamp, secretKey);

  const formdata = new FormData();
  formdata.append("file", data.get("thumbnail"));
  formdata.append("api_key", apiKey);
  formdata.append("timestamp", timeStamp);
  formdata.append("signature", signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formdata,
    }
  );

  const cloudnaryData = await response.json();

  if (response.ok) {
    console.log("data=>", cloudnaryData.secure_url);
    return cloudnaryData.secure_url;
  } else {
    console.log("error==>", cloudnaryData.error.message);
    return cloudnaryData.error.message;
  }
}

function generateSignature(timeStamp, secretKey) {
  const crypto = require("crypto");
  const signature = crypto
    .createHash("sha256")
    .update(`timestamp=${timeStamp}${secretKey}`)
    .digest("hex");

  return signature;
}
