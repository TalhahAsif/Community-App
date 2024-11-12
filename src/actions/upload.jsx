export async function UploadImage(data) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const secretKey = process.env.CLOUDINARY_SECRET_KEY;

  const timeStamp = Math.floor(Date.now() / 1000);
  const signature = generateSignature(timeStamp, secretKey);

  const formdata = new FormData();
  formdata.append("file", data.get("thumbnail"));
  formdata.append("apiKey", apiKey);
  formdata.append("timeStamp", timeStamp);
  formdata.append("signature", signature);

  const response = fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formdata,
    }
  );

  const cloudnaryData = response.json();
}

function generateSignature(timeStamp, secretKey) {
  const crypto = require("crypto");
  const signature = crypto
    .createHash("sha256")
    .update(`timestamp=${timestamp}${apiSecret}`)
    .digest("hex");

  return signature;
}
