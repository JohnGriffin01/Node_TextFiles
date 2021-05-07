const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log(process.argv[2]);

// function userInput(){

// }

var filename = process.argv[2];

getInput(filename);

function getInput(fileName){
    fs.readFile("fileList.txt", function (err, data) {
        if (err) throw err;
        if(data.includes(filename)){
         console.log("File already exists");
         rl.question("Please enter a new filename: ", (answer) => {
             AddToList(answer);
         })
        }
        else{
            AddToList(fileName);
        }
})
}


    
       
        
        
function AddToList(name){
    fs.appendFile("fileList.txt", name+"\n", (err)=> {
        if(err){
            throw(err);
        }
        else{
            CreateFile(name);
        }
    })
}
    
function CreateFile(name){
    fs.writeFile(name+".txt", "You are awesome", (err)=> {
        if(err){
            throw(err)
        }
        else{
            console.log("Data written succesfully");
        }
    })

}

