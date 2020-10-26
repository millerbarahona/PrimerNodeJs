const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', {title: 'Primer webSite'}); // le mada una variable llamada title al html

});

router.get('/contact', (req, res) => {
    res.render('contact.html', {title: 'Contacto'}); // le mada una variable llamada title al html

});

module.exports = router;
