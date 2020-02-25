let sample = [23,12,25];

function add() {
    let element =document.getElementById('content').value;
    sample.push(element);
    document.getElementById('p0').innerHTML = "Ban da them phan tu "+element+", neu muon them phan tu khac hay nhap lai o o input va nhan Add";
    document.getElementById('content').value = '';
}
function display() {
    for (i=0;i<sample.length;i++) {
        document.getElementById('p1').innerHTML+= "The number is "+sample[i]+"<br>";
    }
}