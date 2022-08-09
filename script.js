// pattern arrays
var diamondPatternArrays = {
    // pattern 01
    '01': {
        'patternSize': '3x3',
        'colorArray': [
            'light', 'dark', 'light',      //row 1
            'dark', 'dark',
            'dark', 'light', 'dark',      //row 3
            'dark', 'dark',
            'light', 'dark', 'light'      //row 5
        ]
    },
    // pattern 02
    '02': {
        'patternSize': '3x3',
        'colorArray': [
            'light', 'black', 'light',      //row 1
            'black', 'black',
            'black', 'light', 'black',      //row 3
            'black', 'black',
            'light', 'black', 'light'      //row 5
        ]
    },
    // pattern 03
    '03': {
        'patternSize': '3x3',
        'colorArray': [
            'light', 'black', 'light',      //row 1
            'black', 'black',
            'black', 'gray', 'black',      //row 3
            'black', 'black',
            'light', 'black', 'light'      //row 5
        ]
    },
    // pattern 04
    '04': {'patternSize': '5x3',
    'colorArray': [
        'black', 'gray', 'black', 'gray', 'black',  //row 1
        'black', 'black', 'black', 'black',             
        'gray', 'black', 'light', 'black', 'gray',  //row 3
        'black', 'black', 'black', 'black',          
        'black', 'gray', 'black', 'gray', 'black'   //row 5
    ]},
    // pattern 05
    // pattern 06
    
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
    ],
    '5x3': [
        [0, -16], [32, -16], [64, -16], [96, -16], [128, -16],  //row 1
        [16, 0], [48, 0], [80, 0], [112, 0],
        [0, 16], [32, 16], [64, 16], [96, 16], [128, 16],       //row 3
        [16, 32], [48, 32], [80, 32], [112, 32],
        [0, 48], [32, 48], [64, 48], [96, 48], [128, 48]       //row 5
    ]
};

// start of creation
// uncertain if the values 128, 128 are needed to be made dynamic based on the pattern
// will definitely need to adjust the static 128, 128 part to dynamically change the sized 
    // per the pattern size
/**
 * Main running funciton.
 * Contains variable which changes the pattern
 */
$(document).ready(function(){
    var patternNumber = '04';

    var diamondPattern = diamondPatternArrays[patternNumber];

    var divArraySize = DetermineDivArraySize(diamondPattern['patternSize']);
    // need to declare pattern and determine array size 
    // recall: number of rows in array is determined by height and
        // number of columns in array is determined by width
    GenerateDivArray(divArraySize.height, divArraySize.width);
    
    CreateLargeDiamonds(diamondPattern);
});

/**
 * 
 * @param {*} patternSize 
 * @returns 
 */
function DetermineDivArraySize(patternSize){
    var divArraySize = {
        width: null,
        height: null
    }

    // varify these are correct. 
    if(patternSize == '3x3'){
        divArraySize.width = 64;
        divArraySize.height = 64;
        return divArraySize;
    }else if(patternSize == '5x5'){
        divArraySize.width = 128;
        divArraySize.height = 128;
        return divArraySize;
    }else if(patternSize == '5x3'){
        divArraySize.width = 128;   //determines number of columns
        divArraySize.height = 64;   //determines number of rows
        return divArraySize;
    }else{
        return divArraySize;
    }
}

/**
 * Create an array of divs with elements that contain their row and column position 
 * @param {*} rows 
 * @param {*} columns 
 */
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



/**
 * 
 * @param {*} diamondPattern 
 */
function CreateLargeDiamonds(diamondPattern){
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

/**
 * Creates an array of small diamonds
 * @param {*} headerDiamondLocation 
 * @param {*} shade 
 */
function CreateSmallDiamonds(headerDiamondLocation, shade){
    var addArray = [
        [0, 0],
        [-4, 4], [4, 4],
        [-8, 8], [0, 8], [8, 8],
        [-12, 12], [-4, 12], [4, 12], [12, 12],
        [-8, 16], [0, 16], [8, 16],
        [-4, 20], [4, 20],
        [0, 24]
    ]

    addArray.forEach(element => {
        // create 4 layers of the inner diamonds based around the center and given shade that will change
        var center = [headerDiamondLocation[0] + element[0], headerDiamondLocation[1] + element[1] + 3];
        CreateLayer1(center, shade);
        CreateLayer2(center, shade);
        CreateLayer3(center, shade);
        CreateLayer4(center, shade);
    });
}

/**
 * Draws center of small diamond
 * @param {*} center 
 * @param {*} shade 
 */
function CreateLayer1(center, shade){
    var colorClass = 'step_1';
    AddClassToDiv(center[0], center[1], shade, colorClass);
}

/**
 * Draw 2nd layer of diamond (layer just outside center of diamond)
 * @param {*} center 
 * @param {*} shade 
 */
function CreateLayer2(center, shade){
    var addArray = [
        // add array are points that move clockwise in the pattern starting from the top
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

/**
 * Draw 3rd layer of diamond (layer just outside of 2nd layer)
 * @param {*} center 
 * @param {*} shade 
 */
function CreateLayer3(center, shade){
    // add array are points that move clockwise in the pattern starting from the top
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

/**
 * Draw 4th layer of diamond (layer just outside of 3rd layer)
 * @param {*} center 
 * @param {*} shade 
 */
function CreateLayer4(center, shade){
    // add array are points that move clockwise in the pattern starting from the top
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

/**
 * Pinpoints div by identifying it by row and column in the divArray. Adds shade and color class to that specified div.
 * @param {*} row 
 * @param {*} column 
 * @param {*} shade 
 * @param {*} colorClass 
 */
function AddClassToDiv(row, column, shade, colorClass){
    $(`.pixel_${row}_${column}`).addClass(`${shade} ${colorClass}`);
}