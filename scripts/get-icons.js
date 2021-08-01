const fs = require('fs')
const path = require('path')

function getIconFileList() {
  const iconFile = path.resolve('src/assets/icons')
  fs.readdir(iconFile, (err, files) => {
    if (err) {
      console.log(err)
    } else {
      const impFiles = files.map(
        (item) => `import ${item.slice(0, -4)} from '@/assets/icons/${item}'`
      )
      const filesMap = files.map((item) => item.slice(0, -4))
      console.log(impFiles, filesMap)
    }
  })
}

getIconFileList()
