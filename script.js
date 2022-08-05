$(document).ready(function(){
    GenerateDivArray(128, 128);
    
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

    // sample color array for 5 x 5 array of diamonds
    var diamondColorArray = [
        'dark', 'black', 'light', 'black', 'dark',   //row 1
        'black', 'black', 'black', 'black',             
        'black', 'dark', 'black', 'dark', 'black',     //row 3
        'black', 'black', 'black', 'black', 
        'light', 'black', 'dark', 'black', 'light',   //row 5
        'black', 'black', 'black', 'black', 
        'black', 'dark', 'black', 'dark', 'black',     //row 7
        'black', 'black', 'black', 'black', 
        'dark', 'black', 'light', 'black', 'dark'     //row 9
    ];

    // headers for 5 x 5 array of diamonds
    var diamondHeaderArray = [
        [0, -16], [32, -16], [64, -16], [96, -16], [128, -16],  //row 1
        [16, 0], [48, 0], [80, 0], [112, 0],
        [0, 16], [32, 16], [64, 16], [96, 16], [128, 16],       //row 3
        [16, 32], [48, 32], [80, 32], [112, 32],
        [0, 48], [32, 48], [64, 48], [96, 48], [128, 48],       //row 5
        [16, 64], [48, 64], [80, 64], [112, 64],
        [0, 80], [32, 80], [64, 80], [96, 80], [128, 80],       //row 7
        [16, 96], [48, 96], [80, 96], [112, 96],
        [0, 112], [32, 112], [64, 112], [96, 112], [128, 112]   //row 9
    ];

    var diamondStartArray = CreateLargeDiamondArray(diamondColorArray, diamondHeaderArray);
  
    diamondStartArray.forEach(element => {
        CreateSmallDiamonds(element['start'], element['shade']);
    });
}


// creates an array of start positions for large diamonds and the base color that will be associated with that large diamond.
function CreateLargeDiamondArray(colorArray, headerArray){
    if(colorArray.length != headerArray.length){
        console.log('error. Array lengths do not match')
    }

    var diamondStartArray = [];

    colorArray.forEach(element => {
        diamondStartArray.push({
            shade: element
        });
    });

    
    for(var i=0; i < headerArray.length; i++){
        diamondStartArray[i].start = headerArray[i];
    }

    console.log('diamondStartArray', diamondStartArray);

    return diamondStartArray;
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