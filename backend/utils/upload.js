import multer from "multer";

const storage = multer.diskStorage({}); // Let Cloudinary handle filenames
const upload = multer({ storage });

export default upload;
