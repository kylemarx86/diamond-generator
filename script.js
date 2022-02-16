$(document).ready(function(){
    GenerateDivArray(64, 64);
    
    CreateLargeDiamonds();
});

//create an array of divs with elements that contain their row and column position
// will list the 
function GenerateDivArray(rows, columns){
    for(var i = 0; i < rows; i++){
        $row = $('<div>').addClass(`row row_${i}`);
        for(var j = 0; j < columns; j++){
            $div = $('<div>').addClass(`pixel pixel_${j}_${i}`);
            $row.append($div);
        }
        $('.container').append($row);
    }
}

//add classes to divs to denote their color dependent on their
function CreateLargeDiamonds(){
    // should switch the start and shade position to be consistent with other methods
    var startArray = [
        {
            shade: 'light',
            start: [0, -16]
        },{
            shade: 'dark',
            start: [32, -16]
        },{
            shade: 'light',
            start: [64, -16]
        },{
            shade: 'dark',
            start: [16, 0]
        },{
            shade: 'dark',
            start: [48, 0]
        },{
            shade: 'dark',
            start: [0, 16]
        },{
            shade: 'light',
            start: [32, 16]
        },{
            shade: 'dark',
            start: [64, 16]
        },{
            shade: 'dark',
            start: [16, 32]
        },{
            shade: 'dark',
            start: [48, 32]
        },{
            shade: 'light',
            start: [0, 48]
        },{
            shade: 'dark',
            start: [32, 48]
        },{
            shade: 'light',
            start: [64, 48]
        }
    ];
    
    startArray.forEach(element => {
        CreateSmallDiamonds(element['start'], element['shade']);
    });
}


function CreateSmallDiamonds(headerDiamondLocation, shade){
    var addArray = [
        [0, 0],
        [-4, 4],
        [4, 4],
        [-8, 8],
        [0, 8],
        [8, 8],
        [-12, 12],
        [-4, 12],
        [4, 12],
        [12, 12],
        [-8, 16],
        [0, 16],
        [8, 16],
        [-4, 20],
        [4, 20],
        [0, 24]
    ]

    addArray.forEach(element => {
        
        // AddClasses(element['color']);
        var center = [headerDiamondLocation[0] + element[0], headerDiamondLocation[1] + element[1] + 3];
        CreateLayer1(center, shade);
        CreateLayer2(center, shade);
        CreateLayer3(center, shade);
        CreateLayer4(center, shade);
    });
}


// draw center of small diamond
function CreateLayer1(center, shade){
    var colorClass = 'step_1';
    AddClassToDiv(center[0], center[1], shade, colorClass);
}
// draw 2nd layer of diamond (layer just outside of diamond)
function CreateLayer2(center, shade){
    var addArray = [
        [0,-1],
        [1,0],
        [0,1],
        [-1,0]
    ]
    var colorClass = 'step_2';
    addArray.forEach(element => {
        AddClassToDiv(center[0] + element[0], center[1] + element[1], shade, colorClass);
    });
}

function CreateLayer3(center, shade){
    var addArray = [
        [0,-2],
        [1,-1],
        [2,0],
        [1,1],
        [0,2],
        [-1,1],
        [-2,0],
        [-1,-1]
    ]
    var colorClass = 'step_3';
    addArray.forEach(element => {
        AddClassToDiv(center[0] + element[0], center[1] + element[1], shade, colorClass);
    });
}

function CreateLayer4(center, shade){
    var addArray = [
        [0,-3],
        [1,-2],
        [2,-1],
        [3,0],
        [2,1],
        [1,2],
        [0,3],
        [-1,2],
        [-2,1],
        [-3,0],
        [-2,-1],
        [-1,-2]
    ]
    var colorClass = 'step_4';
    addArray.forEach(element => {
        AddClassToDiv(center[0] + element[0], center[1] + element[1], shade, colorClass);
    });
}


function AddClassToDiv(row, column, shade, colorClass){
    $(`.pixel_${row}_${column}`).addClass(`${shade} ${colorClass}`);
}