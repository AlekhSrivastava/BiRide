// all pillion variables
var pillname = document.getElementById('pname');
var pillpic = document.getElementById('ppic');
var pilldes = document.getElementById('pdes');
var pillcon = document.getElementById('pcon');

const pen = document.getElementById('penlist');

// all rider variables
var ridname = document.getElementById('rname');
var ridpic = document.getElementById('rpic');
var riddes = document.getElementById('rdes');
var ridcon = document.getElementById('rcon');

const ren = document.getElementById('renlist');

var pillinfohead = document.getElementById('pillinfohead');
var riderinfohead = document.getElementById('riderinfohead');

var pillioninfo = document.getElementById('pillioninfo');
var riderinfo = document.getElementById('riderinfo');

function addPillion() {
    let mod = {
        name: pillname.value,
        pick: pillpic.value,
        drop: pilldes.value,
        contact: pillcon.value
    }
    let counterP = "R" + pillpic.value + pilldes.value;

    if (localStorage.getItem(counterP) != null) {
        var r_arr = JSON.parse(localStorage.getItem(counterP));
        var rider_return = r_arr.shift(); // has to show on pillion screen
        document.getElementById('riderhead').style.backgroundColor = 'GreenYellow';
        riderinfohead.innerHTML = "MATCH **";
        var riderStr = "Name : "+rider_return.name+"<br><br>"+"Pick : "+rider_return.pick+"<br><br>"+"Drop : "+rider_return.drop+"<br><br>"+"Contact : "+rider_return.contact;
        riderinfo.innerHTML = riderStr;
        ////
        if (r_arr.length == 0) {
            localStorage.removeItem(counterP);
        }
        else {
            localStorage.setItem(counterP, JSON.stringify(r_arr));
        }
    }
    else {
        let address = "P" + pillpic.value + pilldes.value;

        if (localStorage.getItem(address) != null) {
            var p_arr = JSON.parse(localStorage.getItem(address));
            p_arr.push(mod);
            localStorage.setItem(address, JSON.stringify(p_arr));
        }
        else {
            var p_arr = [];
            p_arr.push(mod);
            localStorage.setItem(address, JSON.stringify(p_arr));
        }
    }

    alert("Pillion added succesfully !!");


}
function addRider() {
    let mod = {
        name: ridname.value,
        pick: ridpic.value,
        drop: riddes.value,
        contact: ridcon.value
    }
    let counterR = "P" + ridpic.value + riddes.value;

    if (localStorage.getItem(counterR) != null) {
        var p_arr = JSON.parse(localStorage.getItem(counterR));
        var pillion_return = p_arr.shift(); // has to show on pillion screen
        document.getElementById('pillionhead').style.backgroundColor = 'GreenYellow';
        pillinfohead.innerHTML = "MATCH **";
        var pillStr = "Name : "+pillion_return.name+"<br><br>"+"Pick : "+pillion_return.pick+"<br><br>"+"Drop : "+pillion_return.drop+"<br><br>"+"Contact : "+pillion_return.contact;
        pillioninfo.innerHTML = pillStr;
        //console.log(pillStr);
        if (p_arr.length == 0) {
            localStorage.removeItem(counterR);
        }
        else {
            localStorage.setItem(counterR, JSON.stringify(p_arr));
        }
    }
    else {
        let address = "R" + ridpic.value + riddes.value;

        if (localStorage.getItem(address) != null) {
            var r_arr = JSON.parse(localStorage.getItem(address));
            r_arr.push(mod);
            localStorage.setItem(address, JSON.stringify(r_arr));
        }
        else {
            var r_arr = [];
            r_arr.push(mod);
            localStorage.setItem(address, JSON.stringify(r_arr));
        }
    }
    alert("Rider added succesfully !!");
}
pen.addEventListener('click', addPillion);
ren.addEventListener('click', addRider);