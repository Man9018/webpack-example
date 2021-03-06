const express = require('express');
const config = require('./webpack.config');

const app = express();
const PORT = 8001;

// 将dist作为静态资源入口
app.use(express.static(config.output.path));

// 监听端口
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Server is running at http://localhost:${PORT} . Press Ctrl+C to stop.\n`);
})
