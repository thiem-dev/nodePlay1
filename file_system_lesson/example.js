const fs = require('fs')

fs.readFile('myfile.txt','utf8',function(error, data){
    if(error){
        console.log(error)
    } else {
        // console.log(data)
        additionalWords(data + ' more words that I have')
    }
})


function additionalWords(str){
    fs.writeFile('myfile.txt', str, function(error){
        if(error) {
            console.log(error)
        } else {
            console.log('it worked!')
        }
    })
}

