var facialData
var interval1, interval2

const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo)

var MediaStream
/* function startVideo() {
  var navigator.getUserMedia = navigator.getUserMedia ||

  navigator.webkitGetUserMedia ||
  
  navigator.mozGetUserMedia ||
  
  navigator.msGetUserMedia;

  navigator.getUserMedia(
    { video: {} },
    stream => {
      video.srcObject = stream
      MediaStream = stream.getTracks()[0];
    },
    err => console.error(err)
  )
} */

function startVideo(){
  var constraints = {audio: false, video: {width: 720, height: 560}};

  navigator.mediaDevices.getUserMedia(constraints).then(
    function(mediaStream){
      video.srcObject = mediaStream;
      MediaStream = mediaStream
    }
  ).catch(
    function(err){
      console.log(`${err.name}:${err.message}`)
    }
  )
}

function stopVideo(){
  MediaStream.stop()
}

video.addEventListener('play', () => {
  // const canvas = faceapi.createCanvasFromMedia(video)
  canvas = document.getElementById("canvas")
  displayCanvas = document.getElementById("displayCanvas")

  document.body.append(canvas)
  const displaySize = { width: video.videoWidth, height: video.videoHeight }
  faceapi.matchDimensions(canvas, displaySize)
  displayCanvas.width = video.videoWidth
  displayCanvas.height = video.videoHeight

  interval1 = setInterval(async () => {
    const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()//.withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    try{facialData = detections}
    catch{}
    //faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)

  interval2 = setInterval(()=>{
    displayCanvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    displayCanvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height)
    displayCanvas.getContext('2d').drawImage(canvas, 0, 0, canvas.width, canvas.height)
  },1)
})

function calEyesDis(facialData){
  const LX = facialData.landmarks._positions[40]._x
  const LY = facialData.landmarks._positions[40]._y
  const RX = facialData.landmarks._positions[43]._x
  const RY = facialData.landmarks._positions[43]._y

  return Math.abs(Math.sqrt((RX - LX)**2 + (RY - LY)**2))

}

function calEyeDis(facialData){
  const LX = facialData.landmarks._positions[46]._x
  const LY = facialData.landmarks._positions[46]._y
  const RX = facialData.landmarks._positions[43]._x
  const RY = facialData.landmarks._positions[43]._y

  return Math.abs(Math.sqrt((RX - LX)**2 + (RY - LY)**2))

}

function calLipsDis(facialData){
  const LX = facialData.landmarks._positions[52]._x
  const LY = facialData.landmarks._positions[52]._y
  const RX = facialData.landmarks._positions[58]._x
  const RY = facialData.landmarks._positions[58]._y

  return Math.abs(Math.sqrt((RX - LX)**2 + (RY - LY)**2))

}

function isMouthTooBig(facialData){
  var eyeDis = calEyeDis(facialData)
  var lipsDis = calLipsDis(facialData)

  if(eyeDis/lipsDis <= 0.25)
    return true
  else
    return false 
}

/* function isNeutral(facialData){
  if(facialData.expressions.neutral > 0.9)
    return true
  else
    return false
} */

function crop(facialData){
  var x = parseInt(facialData.alignedRect._box._x)
  var y = parseInt(facialData.alignedRect._box._y)
  var w = parseInt(facialData.alignedRect._box._width)
  var h = parseInt(facialData.alignedRect._box._height)

  croppedCanvas = document.getElementById("cropped")
  displayCanvas = document.getElementById("displayCanvas")
  croppedCanvas.width = w
  croppedCanvas.height = h

  croppedCanvas.getContext('2d').clearRect(0, 0, croppedCanvas.width, croppedCanvas.height)
  croppedCanvas.getContext('2d').drawImage(displayCanvas, x, y, w, h, 0 ,0, w, h)
}