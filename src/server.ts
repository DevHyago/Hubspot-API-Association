import 'dotenv/config';
import 'express-async-errors';
import errors from './middlewares/error';
import app from './app';

const PORT = process.env.PORT || 3000;

app.use(errors);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
