
 const selectedLibrary_reducer = (state=null,action) => {
    switch(action.type) {
        case 'select library':
             return action.payload;
        default:
        return state;
    }

};
export  default selectedLibrary_reducer;