const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const ejs = require('ejs');

const app = express();
app.set('port', process.env.PORT || 80);
// app.set('view engine', 'html');
// app.set('views', __dirname + 'public');

if (process.env.NODE_ENV === 'production') {
    app.enable('trust proxy');
    app.use(morgan('combined'));
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(hpp());
} else {
    app.use(morgan('dev'));
}

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname + 'uploads')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
// const sessionOption = {
//     resave: false,
//     saveUninitialized: false,
//     secret: process.env.COOKIE_SECRET,
//     cookie: {
//         httpOnly: true,
//         secure: false,
//     },
//     store: new RedisStore({ client: redisClient }),
//     };
//     if (process.env.NODE_ENV === 'production') {
//     sessionOption.proxy = true;
//     // sessionOption.cookie.secure = true;
// }
// app.use(session(sessionOption));

app.get('/', (req, res) => {
    res.redirect('/main');
});
app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});
app.get("/main/jp", (req, res) => {
    res.sendFile(__dirname + '/views/indexjp.html');
});
app.get('/news', (req, res) => {
    res.sendFile(__dirname + '/views/news.html');
})
app.get('/news_detail', (req, res) => {
    res.sendFile(__dirname + '/views/news_detail.html');
})

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;