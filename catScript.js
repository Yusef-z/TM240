var faceInput = document.getElementById("faceColor");
var outerInput = document.getElementById("outerColor");
var innerInput = document.getElementById("innerColor");
var bodyInput = document.getElementById("bodyColor");
var noseInput = document.getElementById("noseColor");
var tailInput = document.getElementById("tailColor");



var faceColor = hexToDec(faceInput.value.substring(1));
var outerColor = hexToDec(outerInput.value.substring(1));
var innerColor = hexToDec(innerInput.value.substring(1));
var bodyColor = hexToDec(bodyInput.value.substring(1));
var noseColor = hexToDec(noseInput.value.substring(1));
var tailColor = hexToDec(tailInput.value.substring(1));


var modal = document.getElementById("myModal");



var javaCodeElement = document.querySelector(".modal-body");
var javaCode;
var fillingButton = document.getElementById("filling");
var noFillingButton = document.getElementById("noFilling");

faceInput.addEventListener("change",()=>{
    faceColor = hexToDec(faceInput.value.substring(1))
})

outerInput.addEventListener("change",()=>{
    outerColor = hexToDec(outerInput.value.substring(1))
})

innerInput.addEventListener("change",()=>{
    innerColor = hexToDec(innerInput.value.substring(1))
})

bodyInput.addEventListener("change",()=>{
    bodyColor = hexToDec(bodyInput.value.substring(1))
})
noseInput.addEventListener("change",()=>{
    noseColor = hexToDec(noseInput.value.substring(1))
})
tailInput.addEventListener("change",()=>{
    tailColor = hexToDec(tailInput.value.substring(1))
})




fillingButton.addEventListener("click",(e) => {
    e.preventDefault();
    javaCode = `<pre>protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        g2d.setStroke(new BasicStroke(3,BasicStroke.JOIN_ROUND,BasicStroke.CAP_ROUND));
        g2d.translate(250,250);


        Ellipse2D catFace = new Ellipse2D.Double(34,29,196,106);
        Ellipse2D leftEye = new Ellipse2D.Double(84,55,96-84,72-55);
        Ellipse2D rightEye = new Ellipse2D.Double(170,55,96-84,72-55);
        GeneralPath mus = new GeneralPath();
        //left side
        mus.moveTo(90,83);
        mus.quadTo(50,74,11,75);
        mus.moveTo(88,91);
        mus.quadTo(34,90,16,91);
        mus.moveTo(91,99);
        mus.quadTo(48,107,25,105);

        AffineTransform x = new AffineTransform();
        x.scale(-1,1);
        x.translate(-269,0);


        GeneralPath nose = new GeneralPath();
        nose.moveTo(125,85);
        nose.lineTo(150,85);
        nose.lineTo(137,95);
        nose.lineTo(125,85);

        GeneralPath mouth = new GeneralPath();
        mouth.moveTo(137,95);
        mouth.lineTo(137,107);
        mouth.quadTo(122,113,107,107);
        mouth.moveTo(137,107);
        mouth.quadTo(152,113,167,107);


        AffineTransform flipEars = new AffineTransform();

        flipEars.scale(-1,1);
        flipEars.translate(-263,0);
        CubicCurve2D outerLeftEar = new CubicCurve2D.Double(60,45,50,8,85,0,108,29);
        CubicCurve2D innerLeftEar = new CubicCurve2D.Double(75,38,67,18,83,10,96,32);
        Shape outerRightEar = flipEars.createTransformedShape(outerLeftEar);
        Shape innerRightEar = flipEars.createTransformedShape(innerLeftEar);






        GeneralPath legs = new GeneralPath();
        legs.moveTo(195,245);
        legs.lineTo(207,338);
        legs.quadTo(180,343,154,338);
        legs.quadTo(175,257,167,250);
        legs.moveTo(169,327);
        legs.quadTo(164,329,164,337);
        legs.moveTo(180,328);
        legs.quadTo(183,333,182,338);
        legs.moveTo(193,327);
        legs.quadTo(198,330,198,338);
        legs.moveTo(113,250);
        legs.quadTo(109,265,121,337);
        legs.quadTo(95,346,70,336);
        legs.lineTo(85,242);
        legs.moveTo(82,325);
        legs.quadTo(77,331,78,338);
        legs.moveTo(94,327);
        legs.lineTo(94,341);
        legs.moveTo(107,327);
        legs.quadTo(112,329,110,341);

        GeneralPath body = new GeneralPath();
        body.moveTo(187,125);
        body.curveTo(194,165,275,250,249,305);
        body.quadTo(244,331,206,331);
        body.quadTo(138,333,121,329);
        body.quadTo(33,322,28,287);
        body.curveTo(17,235,89,154,85,127);
        body.lineTo(187,125);
        body.closePath();

        Area catBody = new Area(body);
        catBody.add(new Area(legs));
        catBody.subtract(new Area(catFace));




        GeneralPath tail = new GeneralPath();

        tail.moveTo(251,300);
        tail.quadTo(317,288,329,219);
        tail.curveTo(341,180,305,143,323,106);
        tail.curveTo(338,90,296,74,287,93);
        tail.curveTo(277,129,292,190,285,210);
        tail.quadTo(282,249,248,248);
        tail.closePath();

        Area catTail = new Area(tail);
        catTail.subtract(catBody);

        g2d.setColor(new Color(${faceColor}));
        g2d.fill(catFace);
`
        if (outerColor != faceColor){
            javaCode += `
            g2d.setColor(new Color(${outerColor}));`
        }
        javaCode += `
        g2d.fill(outerLeftEar);
        g2d.fill(outerRightEar);
`
        if (innerColor != outerColor){
            javaCode += `
            g2d.setColor(new Color(${innerColor}));`
        }
        javaCode += `        g2d.fill(innerLeftEar);
        g2d.fill(innerRightEar);`
        
        if (bodyColor != innerColor){
            javaCode += `
            g2d.setColor(new Color(${bodyColor}));`
        }
        javaCode += `
        g2d.fill(catBody);`

        if (noseColor != bodyColor){
            javaCode += `
            g2d.setColor(new Color(${noseColor}));`
        }
        javaCode += `
        g2d.fill(nose);`

        if (tailColor != noseColor){
            javaCode += `
            g2d.setColor(new Color(${tailColor}));`
        }
        javaCode += `
        g2d.fill(catTail);
        g2d.setColor(Color.black);

        g2d.draw(catBody);
        g2d.draw(legs);
        g2d.draw(catTail);
        g2d.draw(nose);
        g2d.draw(catFace);
        g2d.draw(mus);
        g2d.draw(x.createTransformedShape(mus));
        g2d.fill(leftEye);
        g2d.fill(rightEye);
        g2d.draw(mouth);
        g2d.draw(outerRightEar);
        g2d.draw(innerRightEar);
        g2d.draw(outerLeftEar);
        g2d.draw(innerLeftEar);
    }</pre>`
        javaCodeElement.innerHTML = javaCode;
        modal.style.display = "block";
})



noFillingButton.addEventListener("click", (e)=>{
    e.preventDefault();

    javaCode = `<pre>    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        Graphics2D g2d = (Graphics2D) g;
        g2d.setStroke(new BasicStroke(3,BasicStroke.JOIN_ROUND,BasicStroke.CAP_ROUND));
        g2d.translate(250,250);


        Ellipse2D catFace = new Ellipse2D.Double(34,29,196,106);
        Ellipse2D leftEye = new Ellipse2D.Double(84,55,96-84,72-55);
        Ellipse2D rightEye = new Ellipse2D.Double(170,55,96-84,72-55);
        GeneralPath mus = new GeneralPath();
        //left side
        mus.moveTo(90,83);
        mus.quadTo(50,74,11,75);
        mus.moveTo(88,91);
        mus.quadTo(34,90,16,91);
        mus.moveTo(91,99);
        mus.quadTo(48,107,25,105);

        AffineTransform x = new AffineTransform();
        x.scale(-1,1);
        x.translate(-269,0);


        GeneralPath nose = new GeneralPath();
        nose.moveTo(125,85);
        nose.lineTo(150,85);
        nose.lineTo(137,95);
        nose.lineTo(125,85);

        GeneralPath mouth = new GeneralPath();
        mouth.moveTo(137,95);
        mouth.lineTo(137,107);
        mouth.quadTo(122,113,107,107);
        mouth.moveTo(137,107);
        mouth.quadTo(152,113,167,107);


        AffineTransform flipEars = new AffineTransform();

        flipEars.scale(-1,1);
        flipEars.translate(-263,0);
        CubicCurve2D outerLeftEar = new CubicCurve2D.Double(60,45,50,8,85,0,108,29);
        CubicCurve2D innerLeftEar = new CubicCurve2D.Double(75,38,67,18,83,10,96,32);
        Shape outerRightEar = flipEars.createTransformedShape(outerLeftEar);
        Shape innerRightEar = flipEars.createTransformedShape(innerLeftEar);






        GeneralPath legs = new GeneralPath();
        legs.moveTo(195,245);
        legs.lineTo(207,338);
        legs.quadTo(180,343,154,338);
        legs.quadTo(175,257,167,250);
        legs.moveTo(169,327);
        legs.quadTo(164,329,164,337);
        legs.moveTo(180,328);
        legs.quadTo(183,333,182,338);
        legs.moveTo(193,327);
        legs.quadTo(198,330,198,338);
        legs.moveTo(113,250);
        legs.quadTo(109,265,121,337);
        legs.quadTo(95,346,70,336);
        legs.lineTo(85,242);
        legs.moveTo(82,325);
        legs.quadTo(77,331,78,338);
        legs.moveTo(94,327);
        legs.lineTo(94,341);
        legs.moveTo(107,327);
        legs.quadTo(112,329,110,341);

        GeneralPath body = new GeneralPath();
        body.moveTo(187,125);
        body.curveTo(194,165,275,250,249,305);
        body.quadTo(244,331,206,331);
        body.quadTo(138,333,121,329);
        body.quadTo(33,322,28,287);
        body.curveTo(17,235,89,154,85,127);
        body.lineTo(187,125);
        body.closePath();

        Area catBody = new Area(body);
        catBody.add(new Area(legs));
        catBody.subtract(new Area(catFace));




        GeneralPath tail = new GeneralPath();

        tail.moveTo(251,300);
        tail.quadTo(317,288,329,219);
        tail.curveTo(341,180,305,143,323,106);
        tail.curveTo(338,90,296,74,287,93);
        tail.curveTo(277,129,292,190,285,210);
        tail.quadTo(282,249,248,248);
        tail.closePath();

        Area catTail = new Area(tail);
        catTail.subtract(catBody);



        g2d.draw(catBody);
        g2d.draw(legs);
        g2d.draw(catTail);
        g2d.draw(nose);
        g2d.draw(catFace);
        g2d.draw(mus);
        g2d.draw(x.createTransformedShape(mus));
        g2d.fill(leftEye);
        g2d.fill(rightEye);
        g2d.draw(mouth);
        g2d.draw(outerRightEar);
        g2d.draw(innerRightEar);
        g2d.draw(outerLeftEar);
        g2d.draw(innerLeftEar);

    }</pre>`;
    javaCodeElement.innerHTML = javaCode;
    modal.style.display = "block";
})


function hexToDec(hexString){
    return parseInt(hexString, 16);
  }











// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

