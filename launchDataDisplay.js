//a class to set up data
class InputData{
	constructor(
	//Names of all of the properties in the data table
		time_seconds,
		latitude,
		longitude,
		gps_altitude,
		bmpSensor_altitude,
		bmpSensor_pressure,
		bmpSensor_temperature,
		digitalSensor_temperature,
		cssSensor_temperature,
		cssSensor_eco2,
		cssSensor_tvoc,
		uv,
		accelX,
		accelY,
		accelZ,
		magneticX,
		magnetciY,
		magneticZ,
		gyroX,
		gyroY,
		gyroZ
	){
	//makes time_seconds real
		this.time_seconds = time_seconds;
	//makes latitude real
		this.latitude = latitude;
	//makes longitude real
		this.longitude = longitude;
	//makes gps_altitude real
		this.gps_altitude = gps_altitude;
	//makes bmpSensor_altitude real
		this.bmpSensor_altitude = bmpSensor_altitude;
	//makes bmpSensor_pressure real
		this.bmpSensor_pressure = bmpSensor_pressure;
	//makes bmpSensor_temperature real
		this.bmpSensor_temperature = bmpSensor_temperature;
	//makes digitalSensor_temperature real
		this.digitalSensor_temperature = digitalSensor_temperature;
	//makes cssSensor_temperature real
		this.cssSensor_temperature = cssSensor_temperature;
	//makes cssSensor_eC02 real
		this.cssSensor_eco2 = cssSensor_eco2;
	//makes cssSensor_tvoc real
		this.cssSensor_tvoc = cssSensor_tvoc;
	//makes uv real
		this.uv = uv;
	//makes accelX real
		this.accelX = accelX;
	//makes accelY real
		this.accelY = accelY;
	//makes accelZ real
		this.accelZ = accelZ;
	//makes magneticX real
		this.magneticX = magneticX;
	//makes magnetciY real
		this.magnetciY = magnetciY;
	//makes magneticZ real
		this.magneticZ = magneticZ;
	//makes gyroX real
		this.gyroX = gyroX;
	//makes gyroY real
		this.gyroY = gyroY;
	//makes gyroZ real
		this.gyroZ = gyroZ;
	}
}

//a getdata function to load data from the data file 
function getData(){
	var loadedData = loadData();
	return loadedData;
}

//a datarow function to setup the data
	function dataRow(legend, value, units){
	//messages for the function
		msg="<td>";
		msg += legend;
		msg += ":</td><td>";
		msg += value;
		msg += "" + units;
		msg += "</td>";
		return msg;
	}
	
//updateDisplay to tie it all together

	function updateDisplay(){
		
		var timeRead = data[index].time_seconds;
		//update table......
		if(timeRead >= 10){
			document.getElementById("data").rows["seconds"].innerHTML = 
				dataRow("time Elapsed", data[index].time_seconds, "seconds");
				
			document.getElementById("data").rows["latitude"].innerHTML = 
				dataRow("latitude", data[index].latitude, "");
				
			document.getElementById("data").rows["longitude"].innerHTML = 
				dataRow("longitude", data[index].longitude, "");
				
			document.getElementById("data").rows["gps_altitude"].innerHTML = 
				dataRow("gps_altitude", data[index].gps_altitude, "");
				
			document.getElementById("data").rows["bmpSensor_altitude"].innerHTML = 
				dataRow("bmpSensor_altitude", data[index].bmpSensor_altitude, "");
				
			document.getElementById("data").rows["bmpSensor_temperature"].innerHTML = 
				dataRow("bmpSensor_temperature", data[index].bmpSensor_temperature, "");
				
			document.getElementById("data").rows["digitalSensor_temperature"].innerHTML = 
				dataRow("digitalSensor_temperature,", data[index].digitalSensor_temperature,"");
				
			document.getElementById("data").rows["cssSensor_temperature"].innerHTML = 
				dataRow("cssSensor_temperature,", data[index].cssSensor_temperature, "");
				
			document.getElementById("data").rows["cssSensor_eco2"].innerHTML = 
				dataRow("cssSensor_eco2,", data[index].cssSensor_eco2, "");
				
			document.getElementById("data").rows["cssSensor_tvoc"].innerHTML = 
				dataRow("cssSensor_tvoc,", data[index].cssSensor_tvoc, "");
				
			document.getElementById("data").rows["uv"].innerHTML = 
				dataRow("uv,", data[index].uv, "");
				
			document.getElementById("data").rows["accelX"].innerHTML = 
				dataRow("accelX,", data[index].accelX, "");
				
			document.getElementById("data").rows["accelY"].innerHTML = 
				dataRow(" accelY,", data[index].accelY, "");
				
			document.getElementById("data").rows["accelZ"].innerHTML = 
				dataRow(" accelZ,", data[index].accelZ, "");
				
			document.getElementById("data").rows["magneticX"].innerHTML = 
				dataRow(" magneticX,", data[index].magneticX, "");
				
			document.getElementById("data").rows["magneticY"].innerHTML = 
				dataRow(" magneticY,", data[index].magneticY, "");
				
			document.getElementById("data").rows["magneticZ"].innerHTML = 
				dataRow(" magneticZ,", data[index].magneticZ, "");
				
			document.getElementById("data").rows["gyroX"].innerHTML = 
				dataRow(" gyroX,", data[index].gyroX, "");
				
			document.getElementById("data").rows["gyroY"].innerHTML = 
				dataRow(" gyroY,", data[index].gyroY, "");
				
			document.getElementById("data").rows["gyroZ"].innerHTML = 
				dataRow(" gyroZ,", data[index].gyroZ, "");
		}
		
		if(index < 500){
			index++;
		}else{
			index = 0;
		}
	}