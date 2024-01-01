
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// #ased on the following criteria"
// L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
// L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
// L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
// L If any other com#ination of colors is input, the program should print "Invalid color com#ination"Q

function mixColors(color1, color2) {
    let resultingColor;

    switch (color1.toLowerCase()) {
        case "red":
            switch (color2.toLowerCase()) {
                case "blue":
                    resultingColor = "purple";
                    break;
                case "yellow":
                    resultingColor = "orange";
                    break;
                default:
                    resultingColor = "Invalid color combination";
            }
            break;
        case "blue":
            switch (color2.toLowerCase()) {
                case "red":
                    resultingColor = "purple";
                    break;
                case "yellow":
                    resultingColor = "green";
                    break;
                default:
                    resultingColor = "Invalid color combination";
            }
            break;
        case "yellow":
            switch (color2.toLowerCase()) {
                case "red":
                    resultingColor = "orange";
                    break;
                case "blue":
                    resultingColor = "green";
                    break;
                default:
                    resultingColor = "Invalid color combination";
            }
            break;
        default:
            resultingColor = "Invalid color combination";
    }

    console.log(resultingColor);
}
//only Red green yellow color allow
mixColors("red", "blue"); // Output: purple
mixColors("blue", "yellow"); // Output: green
mixColors("YEllow", "Red")
mixColors("green", "red"); // Output: Invalid color combination