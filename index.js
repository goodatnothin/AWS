//import required packages
var AWS = require('aws-sdk');

//AWS access details
AWS.config.update({
    accessKeyId: KEY_ID,
    secretAccessKey: 'KEY_SECRET',
    region: 'us-east-2'
  });

  //input parameters
  var params = {
    Image: {
     S3Object: {
      Bucket: "akshayaawsrekognisation", 
      Name: "image-2.jpeg"
     }
    }
   };

   //Call AWS Rekognition Class
  const rekognition = new AWS.Rekognition();
  var detectedTXT;

  //Detect text
  rekognition.detectText(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
 //   else     console.log(data);           // successful response

     console.log(data.TextDetections);


    for(var i = 0; i < data.TextDetections.length;i++){

      //console.log(data.TextDetections[i].Type)

      if(data.TextDetections[i].Type === 'LINE')
      {
        detectedTXT = data.TextDetections[i].DetectedText;
      }
    }

   console.log(detectedTXT);

  });

    rekognition.recognizeCelebrities(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
   //   else     console.log(data);           // successful response
      });

   rekognition.detectFaces(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
  //  else     console.log(data);           // successful response
   })

 
   
   rekognition.indexFaces(params, function(err, data) {
 //   if (err) console.log(err, err.stack); // an error occurred
  //  else     console.log(data);           // successful response
   })
// end code
