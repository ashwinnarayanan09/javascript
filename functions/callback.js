function doHomework(subject,callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

//doHomework('math',function(){console.log('Finished my homework')});

doHomework('math',alertFinished);

function alertFinished(){
  console.log('Finished my homework');
}
