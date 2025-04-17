import express from 'express';
import { projectRouter } from './routers';

const app = express();

app.use(express.json());
app.use('/api', projectRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
