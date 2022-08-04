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
        'gray', 'dark', 'light', 'dark', 'gray',   //row 1
        'dark', 'dark', 'dark', 'dark',             
        'dark', 'gray', 'dark', 'gray', 'dark',     //row 3
        'dark', 'dark', 'dark', 'dark', 
        'light', 'dark', 'gray', 'dark', 'light',   //row 5
        'dark', 'dark', 'dark', 'dark', 
        'dark', 'gray', 'dark', 'gray', 'dark',     //row 7
        'dark', 'dark', 'dark', 'dark', 
        'gray', 'dark', 'light', 'dark', 'gray'     //row 9
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

    // var diamondStartArray = [
    //     // row 1 of large diamonds
    //     {
    //         shade: 'gray',
    //         start: [0, -16]
    //     },{
    //         shade: 'dark',
    //         start: [32, -16]
    //     },{
    //         shade: 'light',
    //         start: [64, -16]
    //     },{
    //         shade: 'dark',
    //         start: [96, -16]
    //     },{
    //         shade: 'gray',
    //         start: [128, -16]
    //     },
    //     // row 2 of large diamonds
    //     {
    //         shade: 'dark',
    //         start: [16, 0]
    //     },{
    //         shade: 'dark',
    //         start: [48, 0]
    //     },{
    //         shade: 'dark',
    //         start: [80, 0]
    //     },{
    //         shade: 'dark',
    //         start: [112, 0]
    //     },
    //     // row 3 of large diamonds
    //     {
    //         shade: 'dark',
    //         start: [0, 16]
    //     },{
    //         shade: 'gray',
    //         start: [32, 16]
    //     },{
    //         shade: 'dark',
    //         start: [64, 16]
    //     },{
    //         shade: 'gray',
    //         start: [96, 16]
    //     },{
    //         shade: 'dark',
    //         start: [128, 16]
    //     },
    //     // row 4 of large diamonds
    //     {
    //         shade: 'dark',
    //         start: [16, 32]
    //     },{
    //         shade: 'dark',
    //         start: [48, 32]
    //     },{
    //         shade: 'dark',
    //         start: [80, 32]
    //     },{
    //         shade: 'dark',
    //         start: [112, 32]
    //     },
    //     // row 5 of large diamonds
    //     {
    //         shade: 'light',
    //         start: [0, 48]
    //     },{
    //         shade: 'dark',
    //         start: [32, 48]
    //     },{
    //         shade: 'gray',
    //         start: [64, 48]
    //     },{
    //         shade: 'dark',
    //         start: [96, 48]
    //     },{
    //         shade: 'light',
    //         start: [128, 48]
    //     },
    //     // row 6 of large diamonds  -  left off here
    //     {
    //         shade: 'dark',
    //         start: [16, 64]
    //     },{
    //         shade: 'dark',
    //         start: [48, 64]
    //     },{
    //         shade: 'dark',
    //         start: [80, 64]
    //     },{
    //         shade: 'dark',
    //         start: [112, 64]
    //     },
    //     // row 7 of large diamonds
    //     {
    //         shade: 'dark',
    //         start: [0, 80]
    //     },{
    //         shade: 'gray',
    //         start: [32, 80]
    //     },{
    //         shade: 'dark',
    //         start: [64, 80]
    //     },{
    //         shade: 'gray',
    //         start: [96, 80]
    //     },{
    //         shade: 'dark',
    //         start: [128, 80]
    //     },
    //     // row 8 of large diamonds
    //     {
    //         shade: 'dark',
    //         start: [16, 96]
    //     },{
    //         shade: 'dark',
    //         start: [48, 96]
    //     },{
    //         shade: 'dark',
    //         start: [80, 96]
    //     },{
    //         shade: 'dark',
    //         start: [112, 96]
    //     },
    //     // row 9 of large diamonds
    //     {
    //         shade: 'gray',
    //         start: [0, 112]
    //     },{
    //         shade: 'dark',
    //         start: [32, 112]
    //     },{
    //         shade: 'light',
    //         start: [64, 112]
    //     },{
    //         shade: 'dark',
    //         start: [96, 112]
    //     },{
    //         shade: 'gray',
    //         start: [128, 112]
    //     }
    // ];
    
    // startArray.forEach(element => {
    //     CreateSmallDiamonds(element['start'], element['shade']);
    // });
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