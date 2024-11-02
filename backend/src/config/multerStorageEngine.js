import multer from 'multer';
import path from 'path';

// Image storage engine

const storage = multer.diskStorage({
    destination: path.join('src', 'uploads'),
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`); 
    }
});

export const upload = multer({ storage: storage });
