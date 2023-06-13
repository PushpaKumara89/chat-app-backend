const path = require("path");
const fs = require("fs");

const file_save =(file, filename)=> {

    if (file !== undefined){
        console.log(`File received: ${filename}`);
        const fileBuffer = Buffer.from(file, 'base64');
        const destination = path.join(__dirname, 'uploaded_files', filename);

        fs.writeFile(destination, fileBuffer, (err) => {
            if (err) {
                console.error('Error saving the file:', err);
                return null
            } else {
                console.log('File saved successfully.');
                return "http://localhost:3000/file/"+filename
            }
        });
    }
}

const getUser = (req, res) =>{
    const users = [
        {
            id: '001',
            name: 'John Smith',
            age: 30,
            email: 'john.smith@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar1.png',
        },
        {
            id: '002',
            name: 'Emily Johnson',
            age: 25,
            email: 'emily.johnson@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar2.png',
        },
        {
            id: '003',
            name: 'Michael Davis',
            age: 35,
            email: 'michael.davis@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar3.png',
        },
        {
            id: '004',
            name: 'Sarah Thompson',
            age: 28,
            email: 'sarah.thompson@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar4.png',
        },
        {
            id: '005',
            name: 'David Wilson',
            age: 32,
            email: 'david.wilson@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar5.png',
        },
        {
            id: '006',
            name: 'Olivia Brown',
            age: 27,
            email: 'olivia.brown@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar6.png',
        },
        {
            id: '007',
            name: 'Ethan Miller',
            age: 31,
            email: 'ethan.miller@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        },
        {
            id: '008',
            name: 'Sophia Martinez',
            age: 29,
            email: 'sophia.martinez@example.com',
            profilePictureURL: 'https://bootdey.com/img/Content/avatar/avatar8.png',
        },
        {
            id: '009',
            name: 'Benjamin Johnson',
            age: 33,
            email: 'benjamin.johnson@example.com',
            profilePictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2EED2nXP6HYCwz_3fxdfpn7eHB_E2-NwEhVrdxYTX1MkOW5sF3cft2g-wjBHffj-xMq0&usqp=CAU',
        },
        {
            id: '010',
            name: 'Ava Anderson',
            age: 26,
            email: 'ava.anderson@example.com',
            profilePictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYk1kCbgtcar9moaSJ9IFJDAm44rD9hBdirx9LhOQ8iNf1VzaQjui_lsOMxUhtl4w9cw&usqp=CAU',
        },
        {
            id: '011',
            name: 'James Wilson',
            age: 34,
            email: 'james.wilson@example.com',
            profilePictureURL: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200',
        },
        {
            id: '012',
            name: 'Mia Thompson',
            age: 30,
            email: 'mia.thompson@example.com',
            profilePictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_gC3si00OpsJ4MeoqG4aAnuyNYRXFrn_Nj7cml2_bWjeKodRp3pNhihHNIsOLYwfF8M&usqp=CAU',
        },
        {
            id: '013',
            name: 'Alexander Davis',
            age: 27,
            email: 'alexander.davis@example.com',
            profilePictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjb-Jsep9tAcYMGcwnDZl9MuXwtJ87LMh-KkFZT04M9XQRs6I0mWi4GJcUD7bTPEOAXRU&usqp=CAU',
        },
        {
            id: '014',
            name: 'Harper Smith',
            age: 29,
            email: 'harper.smith@example.com',
            profilePictureURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwleRUfpgxI1lkv4QADeBTChb42Bdw-u9gesXuVsmvaGnk0S03x0cf4I6ER5ZuN3XJBw&usqp=CAU',
        }]
    res.status(200).json(users)
}

module.exports = {
    file_save, getUser
}