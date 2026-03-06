const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');
const cors = require('cors');


//SERVER SETUP
const app = express();
app.use(cors());
app.use(express.static('public')); 
app.use(express.json()); 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = './public/images';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
     
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get('/categories', (req, res) => {
    const jsonPath = './public/categories.json';
    
    if (!fs.existsSync(jsonPath)) {
        fs.writeFileSync(jsonPath, JSON.stringify([]));
        return res.send([]);
    }

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        if (err) return res.status(500).send('Error reading categories');
        try {
            res.send(JSON.parse(data));
        } catch (e) {
            res.send([]);
        }
    });
});


app.post('/add-category', (req, res) => {
    const { newCategory } = req.body;
    const jsonPath = './public/categories.json';

    if (!newCategory) return res.status(400).send({ message: 'Category name required' });


    if (!fs.existsSync(jsonPath)) {
        fs.writeFileSync(jsonPath, JSON.stringify([]));
    }

    fs.readFile(jsonPath, 'utf8', (err, data) => {
        let categories = [];
        if (!err && data) {
            try { categories = JSON.parse(data); } catch (e) {}
        }

        // Duplicate Check
        if (!categories.includes(newCategory)) {
            categories.push(newCategory);
            
            fs.writeFile(jsonPath, JSON.stringify(categories, null, 2), (err) => {
                if (err) return res.status(500).send({ message: 'Error saving category' });
                res.send({ message: 'Category Added!', categories });
            });
        } else {
            res.status(400).send({ message: 'Category already exists!' });
        }
    });
});

//PRODUCT MANAGEMENT
app.post('/add-product', upload.single('image'), (req, res) => {

    const { name, category, price, shipping, stock, description } = req.body;
    
    const imagePath = req.file ? '/images/' + req.file.filename : '';

    const newProduct = {
        id: Date.now(),
        name,
        category,
        price,
        shipping: parseFloat(shipping),
        stock: parseInt(stock),      
        description,
        image: imagePath
    };

    const jsonPath = './public/products.json';
    

    if (!fs.existsSync(jsonPath)) {
        fs.writeFileSync(jsonPath, JSON.stringify([]));
    }
    
    fs.readFile(jsonPath, 'utf8', (err, data) => {
        let products = [];
        if (!err && data) {
            try { products = JSON.parse(data); } catch (e) {}
        }
        
        products.push(newProduct);

        fs.writeFile(jsonPath, JSON.stringify(products, null, 2), (err) => {
            if (err) return res.status(500).send('Error saving data');
            res.send({ message: '✅ Product Added!', product: newProduct });
        });
    });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
