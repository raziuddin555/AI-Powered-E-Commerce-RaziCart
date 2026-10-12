import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


const uploadOnCloudinary = async(filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });
    try {
        if (!filePath) {
            return null
        }

        console.log("Image path:", filePath);
        console.log("File exists:", fs.existsSync(filePath));
        const uploadResult = await cloudinary.uploader.upload(filePath)
        fs.unlinkSync(filePath)
        return uploadResult.secure_url



    } catch (error) {
        fs.unlinkSync(filePath)
        console.log(error)
    }

}
export default uploadOnCloudinary

// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

// const uploadOnCloudinary = async(filePath) => {
//     cloudinary.config({
//         cloud_name: process.env.CLOUDINARY_NAME,
//         api_key: process.env.CLOUDINARY_API_KEY,
//         api_secret: process.env.CLOUDINARY_API_SECRET,
//     });

//     if (!filePath) {
//         return null;
//     }

//     try {
//         const uploadResult = await cloudinary.uploader.upload(filePath);
//         return uploadResult.secure_url;
//     } catch (error) {
//         console.error("Cloudinary upload error:", error);
//         throw error;
//     } finally {
//         if (fs.existsSync(filePath)) {
//             fs.unlinkSync(filePath);
//         }
//     }
// };

// export default uploadOnCloudinary;