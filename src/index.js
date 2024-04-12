import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  return res.json({ message: 'hello world' });
});

app.listen(4000, () => {
  console.log('jalan 4000');
});
