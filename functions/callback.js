function doHomework(subject,namedcallback) {
  console.log(`Starting my ${subject} homework.`);
  namedcallback();
}

//doHomework('math',function(){console.log('Finished my homework')});

doHomework('math',alertFinished);

function alertFinished(){
  console.log('Finished my homework');
}

function doHomework2(subject,callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

//doHomework('math',function(){console.log('Finished my homework')});

doHomework2('science',function(){
    console.log("The paragraph is now hidden");
  });
