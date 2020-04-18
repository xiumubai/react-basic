const fs = require('fs')

fs.writeFile('./Mask.js', '这是读取的文件', (err) => {
  if (err !== null) {
    console.log(err)
  } else {
    console.log('文件写入成功')
  }
})

fs.readFile('./Mask.js', 'utf-8', (err, doc) => {
  if (err !== null) {
    console.log(err)
  } else {
    console.log(doc)
  }
})
