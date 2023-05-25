const chargeLevel = document.getElementById("charge-level");
const charge = document.getElementById("charge");
const chargingTimeRef = document.getElementById("charging-time");

window.onload = () => {
  //for browsers that don't support the battery status API

  if(!navigator.getBattery){
    alert("aa");
    return false;
  }
};

navigator.getBattery().then((battery)=> {
  function updateAllBatteryInfo(){
    updateChargingInfo();
    updateLevelInfo();
  }

updateAllBatteryInfo();

//when the charging  status changes
battery.addEventListener("chargingchange",()=>{
  updateAllBatteryInfo();
})

//when the battery Level changes
battery.addEventListener("levelchange",()=>{
  updateAllBatteryInfo();
})

function updateChargingInfo(){
  if(battery.charging){
    charge.classList.add("active");
    chargingTimeRef.innerText = "";
  }
  else {
    charge.classList.remove("active");

    //display time left to discharge only when it is a integer value i.e not infinity

    if(parseInt(battery.dischargingTime)){
      let hr = parseInt(battery.dischargeTime/3600)
      let min = parseInt(battery.dischargeTime/60 -hr*60)
      chargingTimeRef.innerText =`${hr}hr ${min} mins remaining`
    }
  }
}

//updating battery level
function updateLevelInfo(){
  let batteryLevel = `${parseInt(batteryLevel*100)}%`;
  charge.style.width = batteryLevel;
  chargeLevel.textContent = batteryLevel;
}
})