const arguments = process.argv.slice(2);

function circle(r){
    circleArea=Math.PI*r*r;
    fixedCircleArea = circleArea.toFixed(2);
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${fixedCircleArea}`);
}

circle(arguments[0]*1);

