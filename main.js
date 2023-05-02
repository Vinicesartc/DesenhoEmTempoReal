noseX = 0
noseY = 0
difference = 0
leftWristX = 0
rightWristX = 0

function setup(){
  video = createCapture(VIDEO)
  video.size(550, 500)
  canvas = createCanvas(550, 550)
  canvas.position(560, 150)
  posenet = ml5.poseNet(video, modelLoaded)
  posenet.on("pose", gotPoses)
}

function draw(){
  background("#969A97")
  fill("#F90093")
  stroke("#F90093")
  square(noseX, noseY, difference)
  document.getElementById("squareSide").innerHTML = "largura e altura serão: " + difference + "px"
}

function modelLoaded(){
  console.log("PoseNet inicializado!")
}

function gotPoses(resultado, error){
  if(resultado.length > 0){
    console.log(resultado)
    noseX = resultado[0].pose.nose.x
    noseY = resultado[0].pose.nose.y
    leftWristX = resultado[0].pose.leftWrist.x
    rightWristX = resultado[0].pose.rightWrist.x
    difference = floor(leftWristX - rightWristX)
    console.log(difference)
    console.log(noseX, noseY)
  }
  else{
    console.error(error)
  }
}