var array = ([1, 2, 3, 2, 1], 2);

removeElement = (a) => {
    
    for( var i = 0; i < a.length; i++){ 
                                   
        if ( a[i] === 2) { 
            a.splice(i, 1); 
        };
    };
};
removeElement(array);