function setup ()
{
canvas = createcanvas (300,300);
canvas.center();
video = createCapture (VIDEO);
video.hide();
classifier = ml5.imageCassifier('',modelLoaded);
classifier.classify(video, gotReslt);
}
function draw (){
    image(video, 0, 0, 300 , 300);
    classifier.classify(video,gotReult)
}
function modelLoaded()
{
console.log('Model Loaded !');
}
function gotReslt(error, results);
{
    if (error()
    {
        console.error(error);;
    }else{
        console.log(reslts);
        document.getElementById("result_object_name").innerHTML = results [0].label
        document.getElementById("result_object_accuracy").innerHTML = confidence .toFixed(3);
    }
}