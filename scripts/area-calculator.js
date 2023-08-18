function getInputValurById(inputId) {
    const element = document.getElementById(inputId);
    const valueString = element.value;
    const value = parseFloat(valueString);
    element.value = '';
    return value;
}
function setElementById(name, value) {
    const displayData = document.getElementById('display-data');
    const div = document.createElement('div')
    let count = displayData.childElementCount;
    div.innerHTML = `
   ${count + 1}. ${name} ${value} cm <sup>2</sup> <button class="btn btn-light mb-2">convert cm to cm<sup>2</sup></button>
`
    displayData.appendChild(div);



}
function calculateTrinagleArea() {
    const triangleBaseValue = getInputValurById('triangle-base');
    const triangleHeightValue = getInputValurById('triangle-height');
    const triangleValue = 0.5 * triangleBaseValue * triangleHeightValue;
    setElementById('Triangle', triangleValue)
}

function calculateRectangleArea() {
    const rectangleWidthValue = getInputValurById('rectangle-width');
    const rectangleIdeaValue = getInputValurById('rectangle-idea');
    const rectangleValue = rectangleIdeaValue * rectangleWidthValue;
    setElementById('Rectangle', rectangleValue)
}