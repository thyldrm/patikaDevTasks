let circleArea = (r) => {
    circleArea=Math.PI*r*r;
    console.log(`Dairenin alanı: ${circleArea.toFixed(2)}`);
}

let circleCircumference = (r) => {
    circleCircumference=2*Math.PI*r;
    console.log(`Dairenin Çevresi : ${circleCircumference.toFixed(2)}`);
}


module.exports = {
    circleArea:circleArea,
    circleCircumference:circleCircumference
}