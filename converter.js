function UnitConverter () {

// Declaration variables
    var Value = parseFloat(document.getElementById('inputValue').value);
	var e = document.getElementById("InputUnits");
	var InputUnits = e.options[e.selectedIndex].value;
	var f = document.getElementById("OutputUnits");
	var OutputUnits = f.options[f.selectedIndex].value;
    var outputValue = 0;
    var resultDIV = document.getElementById('result')

// Convert Units
	if (InputUnits == "Centimeters") {
		if (OutputUnits == "Centimeters") {
			outputValue = Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = Value/2.54;
		}
		if (OutputUnits == "Feet") {
			outputValue = Value/30.48;
		}
		if (OutputUnits == "Yards") {
			outputValue = Value/91.44;
		}
		if (OutputUnits == "Meters") {
			outputValue = Value/100;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = Value/100000;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value/160934;
		}
	}

	if (InputUnits == "Inches") {
		if (OutputUnits == "Centimeters") {
			outputValue = 2.54*Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = Value;
		}
		if (OutputUnits == "Feet") {
			outputValue = Value/12;
		}
		if (OutputUnits == "Yards") {
			outputValue = Value/36;
		}
		if (OutputUnits == "Meters") {
			outputValue = Value/39.3701;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = Value/39370.1;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value/63360;
		}
	}


	if (InputUnits == "Feet") {
		if (OutputUnits == "Centimeters") {
			outputValue = 30.48*Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = 12*Value;
		}
		if (OutputUnits == "Feet") {
			outputValue = Value;
		}
		if (OutputUnits == "Yards") {
			outputValue = Value/3;
		}
		if (OutputUnits == "Meters") {
			outputValue = Value/0.3048;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = Value/0.0003048;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value/5280;
		}
	}

	if (InputUnits == "Yards") {
		if (OutputUnits == "Centimeters") {
			outputValue = 91.44*Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = 36*Value;
		}
		if (OutputUnits == "Feet") {
			outputValue = 3*Value;
		}
		if (OutputUnits == "Yards") {
			outputValue = Value;
		}
		if (OutputUnits == "Meters") {
			outputValue = Value*0.9144;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = Value/0.0009144;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value/1760;
		}
	}

	if (InputUnits == "Meters") {
		if (OutputUnits == "Centimeters") {
			outputValue = 100*Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = Value/0.0254;
		}
		if (OutputUnits == "Feet") {
			outputValue = Value/0.3048;
		}
		if (OutputUnits == "Yards") {
			outputValue = Value/0.9144;
		}
		if (OutputUnits == "Meters") {
			outputValue = Value;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = Value*1000;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value/1609.34;
		}
	}

	if (InputUnits == "Kilometers") {
		if (OutputUnits == "Centimeters") {
			outputValue = 1000000*Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = Value/0.0000254;
		}
		if (OutputUnits == "Feet") {
			outputValue = Value/0.0003048;;
		}
		if (OutputUnits == "Yards") {
			outputValue = Value/0.0009144;;
		}
		if (OutputUnits == "Meters") {
			outputValue = 1000*Value;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = Value;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value/1.60934;
		}
	}


	if (InputUnits == "Miles") {
		if (OutputUnits == "Centimeters") {
			outputValue = 160934*Value;
		}
		if (OutputUnits == "Inches") {
			outputValue = 63360*Value;
		}
		if (OutputUnits == "Feet") {
			outputValue = 5280*Value;;
		}
		if (OutputUnits == "Yards") {
			outputValue = 1760*Value;;
		}
		if (OutputUnits == "Meters") {
			outputValue = 1609.34*Value;
		}
		if (OutputUnits == "Kilometers") {
			outputValue = 1.60934*Value;
		}
		if (OutputUnits == "Miles") {
			outputValue = Value;
		}
	}



//Print result
	resultDIV.innerHTML="<p>"+ Value + " " + InputUnits + " is equal to " + outputValue + " " + OutputUnits +"</p>"


}
