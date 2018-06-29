"use strict";

const $tableElement = $('#pixel_canvas');
const $inputHeight = $('#input_height');
const $inputWidth = $('#input_width');
const $colorPicker = $('#colorPicker');

$('#sizePicker').submit( event => {
    event.preventDefault();

    let width = $inputWidth.val();
    let height = $inputHeight.val();
    $tableElement.html(''); //clear
    makeGrid(height, width);
    addCellClickListener();
})

/**
 * Make height x width grid
 * @param {Number} height
 * @param {Number} width
 */
function makeGrid(height, width) {
    for(let i=0; i < height; i++) {
        $tableElement.append('<tr></tr>');
    }    

    for(let i=0; i < width; i++) {
        $('tr').append('<td></td>');
    }
}

//Add Click Listener so that when we click cell in grid, the cell color changes
function addCellClickListener() {
    $('td').click( event => {
        let color = $colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    })    
}