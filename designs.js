// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    'use strict';
    // Your code goes here!
    //declaring my variables.
    // Assigning values to my variables by using jQuery to  select the DOM
    const canvas = $('#pixelCanvas');
    const colorPicker = $('#colorPicker');
    const gridHeight = $('#inputHeight').val();
    const gridWidth = $('#inputWidth').val();
    // Using for loops to dynamically draw table cells
    // First loop tracks the table rows
    for (let i = 0; i < gridHeight; i++) {
        let tableRow = document.createElement('tr');
        canvas.append(tableRow);
        // Using another for loop to draw table cells
        for (let j = 1; j <= gridWidth; j++) {
            let tableCols = document.createElement('td');
            tableRow.append(tableCols);
        }
    }
    canvas.on('click', 'td', function () {
        let pickedColor = $(colorPicker).val();
        $(this).css('backgroundColor', pickedColor);
    })
    /*
        Now that I have a working grid that respond to the selected color, It will be neccesaray if the user can reset 
        the grid or a selected color.
    */
    // Got some issues here from line 36 to 39
    // Issues resolve

    $('td').dblclick(function () {
        $(this).addClass('default');
        $('.default').css('backgroundColor', '#fff');
    })
    // It will be important to guide the user know what each field asks for.
    /* 
    * The  below code was moved out of the function
    $('#colorPicker').hover(function () {
        $(this).css('cursor', 'pointer').attr('title', 'Click here  to select a color');
    });
*/
    // Creating the a reset button
    /*   let resetBtn = $('<input type="reset" value="Reset">');
       $('#sizePicker').append(resetBtn);
     */ //
    $("#colorPicker").hover(function () {
        $(this).css('cursor', 'pointer').attr('title', 'Hey dude! ... Pick a color of your choice');
    }, function () {
        $(this).css('cursor', 'auto');
    });
    // Reset the grid
    $('input:reset').on('click', function () {
        canvas.children().remove();
    })
    return;
}
// Creating the a reset button
resetBtn = $('<input type="reset" value="Reset">');
$('#sizePicker').append(resetBtn);
$("#colorPicker").hover(function () {
    $(this).css('cursor', 'pointer').attr('title', 'Hey dude! ... Click here and pick a color of your choice');
}, function () {
    $(this).css('cursor', 'auto');
});
$('#sizePicker').submit(function (e) {
    e.preventDefault();
    makeGrid();
    /*
     *  Preventing the program from printing more than one reset button.
     *   To achieve this, I'll collect an array of reset buttons and only print the first button.
     */
    let reset = $('input:reset');
    if (reset[0]) {
        reset.show();
    } else {
        reset.hide();
    }
});
