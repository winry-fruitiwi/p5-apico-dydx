/*
@author Winry
@date 2022-01-11

Coding plan:
   .steal images
   .background
    switch cursor to the apico cursor
    generateBee, test
    switch cursor to bee
    scaleImage on single pixel graphics
    scaleImage on any small photo graphic, test on bee and cursor
    switch cursor to scaled apico cursor and bee cursor

    additional projects:
        bee particle
        inventory
        moving character
        design character sprite

in pixels[], the first pixel's red is pixels[0], alpha is
pixels[3]. The second pixel starts at pixels[4]. 

https://p5js.org/reference/#/p5/get
https://p5js.org/reference/#/p5/createGraphics
https://p5js.org/reference/#/p5/createImage


    // bees are always 3 pixels wide
    function generate_bee() {
        let yellow = color(42, 69, 84)
        let black = color(221, 66, 20)
        let wing = color(34, 3, 91)

        let pg = createGraphics(3, 2);
        pg.loadPixels()

        ?

        pg.updatePixels()
        return pg
    }

noSmooth()
noCursor()

// read a pixel art image and blow it up by n times in each dimension
function scale_image(img, factor) {
    let result = createImage(img.width*?, img.height*?)

    // use .get(x, y) and .set(x, y, c)
    // remember to result.loadPixels, result.updatePixels
    // draw on canvas first, then switch to createImage

    return result → in draw()/setup() image(result, width/2, height/2)
}


you're responsible for:
    photo thief
    coding plan
    loading background image of APICO
    generate_bee: use drawing pad to verify coordinates
    optional: generate cursor, but get your colors yourself
    scale_img: definitely use drawing pad.
        what is your createImage call?
    

 */
let font, environment, cursor

function preload() {
    font = loadFont('data/meiryo.ttf')
    environment = loadImage("data/environment-640x360.png")
    cursor = loadImage("data/apico-6x8-cursor.png")
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    noSmooth()
    noCursor()
}

function draw() {
    background(234, 34, 24)

    image(environment, 0, 0)

    // apico cursor
    image(cursor, mouseX, mouseY)
}