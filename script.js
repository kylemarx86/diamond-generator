// pattern arrays
var diamondPatternArrays = {
    // pattern 07
    '07': {
        'patternSize': '3x3',
        'colorArray': [
            'light', 'black', 'light',      //row 1
            'black', 'black',
            'black', 'dark', 'black',      //row 3
            'black', 'black',
            'light', 'black', 'light'      //row 5
        ]
    },
    // pattern 08
    '08': {'patternSize': '5x5',
    'colorArray': [
        'dark', 'black', 'light', 'black', 'dark',   //row 1
        'black', 'black', 'black', 'black',             
        'black', 'dark', 'black', 'dark', 'black',     //row 3
        'black', 'black', 'black', 'black', 
        'light', 'black', 'dark', 'black', 'light',   //row 5
        'black', 'black', 'black', 'black', 
        'black', 'dark', 'black', 'dark', 'black',     //row 7
        'black', 'black', 'black', 'black', 
        'dark', 'black', 'light', 'black', 'dark'     //row 9
    ]}
};

var diamondHeaderArrays = {
    '3x3': [
        [0, -16], [32, -16], [64, -16],     //row 1
        [16, 0], [48, 0], 
        [0, 16], [32, 16], [64, 16],        //row 3
        [16, 32], [48, 32],
        [0, 48], [32, 48], [64, 48]         //row 5
    ],
    '5x5': [
        [0, -16], [32, -16], [64, -16], [96, -16], [128, -16],  //row 1
        [16, 0], [48, 0], [80, 0], [112, 0],
        [0, 16], [32, 16], [64, 16], [96, 16], [128, 16],       //row 3
        [16, 32], [48, 32], [80, 32], [112, 32],
        [0, 48], [32, 48], [64, 48], [96, 48], [128, 48],       //row 5
        [16, 64], [48, 64], [80, 64], [112, 64],
        [0, 80], [32, 80], [64, 80], [96, 80], [128, 80],       //row 7
        [16, 96], [48, 96], [80, 96], [112, 96],
        [0, 112], [32, 112], [64, 112], [96, 112], [128, 112]   //row 9
    ]
};

// start of creation
// uncertain if the values 128, 128 are needed to be made dynamic based on the pattern
// will definitely need to adjust the static 128, 128 part to dynamically change the sized 
    // per the pattern size
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
    // declare which pattern is being used
        // idea bing this portion up to prior to GenerateDivArray implementation to
            // limit number of divs created and to limit size of drawing more effectively
    var diamondPattern = diamondPatternArrays['07'];
    // gather info on the color pattern chosen
    var diamondColorArray = diamondPattern['colorArray'];
    // create pattern sizes and gather info on starting positions of large diamonds
    var patternSize = diamondPattern['patternSize'];
    var diamondHeaderArray = diamondHeaderArrays[patternSize];

    // compile array of large diamonds color pattern and starting header locations
    var diamondStartArray = CreateLargeDiamondArray(diamondColorArray, diamondHeaderArray);
      
    // create the small diamonds within each large diamond
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