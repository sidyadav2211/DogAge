function dog() {
    var ageNo;
    var ageDog = prompt('Enter your dog age :');
    if (ageDog === null || ageDog === "") {
        ageNo = 'User Cancelled the prompt';
    }
    else {

        ageNo = "Hello,Dog Human age is " + (((ageDog - 2) * 4) + 21) + " years old!"
    }
    document.getElementById('demo').innerHTML = ageNo;
}


