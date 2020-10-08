// offline data
db.enablePersistence()
    .catch(err => {
        if(err.code == 'failed-precondition'){
            // probably multiple tabs open at once
            console.log('persistance failed');
        } else if (err.code == 'unimplemented'){
            // lack of browser support
            console.log('persistance is not available');
        }
    });

//real-time listener
db.collection('locations').onSnapshot((snapshot) => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        //console.log(change, change.doc.data(), change.doc.id);
        if(change.type === 'added') {
            // add the document data to the web page
            renderLocation(change.doc.data(), change.doc.id);
        }
        if (change.type === 'removed'){
            //remove the document data from the web page
        }
    });
});

// add new location
const form = document.querySelector('form');
form.addEventListener('submit', evt => {
    evt.preventDefault();

    const location = {
        location: form.titlelocation.value,
        description: form.titledescription.value,
        latitude: form.position.coords.latitude,
        longitude: form.position.coords.longitude
    };

    db.collection('locations').add(location)
    .catch(err => console.log(err));

    form.titlelocation.value = '';
    form.titledescription.value = '';
    form.position.coords.latitude.value = '';
    form.position.coords.latitude.value = '';
});