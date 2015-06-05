

// Gate : all gates take one or two inputs and produce a single output value.

// f(x,y) = xy

var forwardMultipleGate = function( x, y ){
    
    return x * y;
};

var output = forwardMultipleGate(3,-2);

console.log(output);


