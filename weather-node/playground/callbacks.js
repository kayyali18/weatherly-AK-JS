var getUser = (id, callback) => {
    var user = {
        id: id,
        name: 'Ahmad'
    };

    setTimeout(() => {
        callback (user);        
    }, 2000);
};

getUser (31, (userObject) => {
    console.log (userObject)
})

//https://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard st philadelphia

//API KEY 
//1682ab773bd1bd38