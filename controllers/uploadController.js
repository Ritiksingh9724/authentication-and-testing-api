const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

exports.uploadImage = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    res.json({
      message: "Upload success",
      url: result.secure_url,
    });

  } catch (error) {
    console.log("Upload Error ❌:", error);
    res.status(500).json({ error: error.message });
  }
};