//Check if the number is actually a valid number

var app = angular.module('app', []);

//The converter
app.controller('MainCtrl', function($scope) {

    $scope.type = 'Length';

    $scope.typeArray = ['Length', 'Temperature', 'Area', 'Computer Storage', 'Energy', 'Speed',
                        'Time', 'Volume', 'Weight'];

    $scope.areaArray = ['Square Mile', 'Square Yard', 'Square Foot',
                      'Square Inch', 'Hectarea', 'Acre', 'Square Kilometer',
                      'Square Meter', 'Square Centimeter', 'Square Millimeter'];

    $scope.computerStorageArray = ['Bit', 'Byte', 'Kilobyte', 'Megabyte',
                                  'Gigabyte', 'Terabyte'];

    $scope.energyArray = ['BTU', 'Calorie', 'Erg', 'Foot-Pound', 'Joule',
                         'Kilogram-Calorie', 'Kilogram-Meter', 'Kilowatt-Hour', 
                         'Newton-Meter', 'Watt-Hour'];

    $scope.lengthArray = ['Inche', 'Millimeter', 'Centimeter', 'Meter','Kilometer', 'Mile', 'Yard', 'Foot'];

    $scope.weightArray = ['Short Ton (US)', 'Pound (US)', 'Ounce (US)', 'Stone',
                         'Long Ton (UK)', 'Metric Ton', 'Kilogram', 'Gram'];

    $scope.speedArray = ['Knots', 'Miles/Hour', 'Miles/Minute', 'Feet/Minute',
                        'Feet/Second', 'Kilometers/Hour', 'Kilometers/Minute',
                        'Meters/Second'];

    $scope.temperatureArray = ['Celsius', 'Fahrenheit', 'Kelvin'];

    $scope.timeArray = ['Years', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds',
                       'Milliseconds', 'Microseconds', 'Nanoseconds'];

    $scope.volumeArray = ['Cubic Feet', 'Gallon (Imperial)', 'Gallon (US)',
                          'Quart (US)', 'Pint (US)', 'Fluid Ounce (US)', 'Cup',
                          'Tablespoon', 'Dram (US)', 'Cubic Centimeter',
                          'Cubic Meter', 'Liter', 'Mililiter'];

    $scope.convert = function(type, inputType, outputType, inputQuantity) {

        if (inputType === outputType) {
          $scope.outputUnit = inputQuantity;
          return inputQuantity;
        }

        /* Here goes a huge switch cecking every case for the input*/

        switch (type) {
        case 'Area':
          $scope.outputUnit = $scope.areaConvert(inputType, outputType, inputQuantity);
          return $scope.areaConvert(inputType, outputType, inputQuantity);
        case 'Computer Storage':
          $scope.outputUnit = $scope.computerStorageConvert(inputType, outputType, inputQuantity);
          return $scope.computerStorageConvert(inputType, outputType, inputQuantity);
        case 'Energy':
          $scope.outputUnit = $scope.energyConvert(inputType, outputType, inputQuantity);
          return $scope.energyConvert(inputType, outputType, inputQuantity);
        case 'Length':
          $scope.outputUnit = $scope.lengthConvert(inputType, outputType, inputQuantity);
          return $scope.lengthConvert(inputType, outputType, inputQuantity);
        case 'Weight':
          $scope.outputUnit = $scope.weightConvert(inputType, outputType, inputQuantity);
          return $scope.weightConvert(inputType, outputType, inputQuantity);
        case 'Speed':
          $scope.outputUnit = $scope.speedConvert(inputType, outputType, inputQuantity);
          return $scope.speedConvert(inputType, outputType, inputQuantity);
        case 'Temperature':
          $scope.outputUnit = $scope.temperatureConvert(inputType, outputType, inputQuantity);
          return $scope.temperatureConvert(inputType, outputType, inputQuantity);
        case 'Time':
          $scope.outputUnit = $scope.timeConvert(inputType, outputType, inputQuantity);
          return $scope.timeConvert(inputType, outputType, inputQuantity);
        case 'Volume':
          $scope.outputUnit = $scope.volumeConvert(inputType, outputType, inputQuantity);
          return $scope.volumeConvert(inputType, outputType, inputQuantity);
        default:
          return 0;
      }
        return 0;
      };

    $scope.invert = function(type, inputType, outputType, inputQuantity) {
        var temp = inputType;
        inputType = outputType;
        outputType = temp;

        var second = $scope.from;
        $scope.from = $scope.to;
        $scope.to = second;

        $scope.convert(type, inputType, outputType, inputQuantity);

      };

    $scope.areaConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Square Mile':
          var cms = squaremilesToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Yard':

          var cms = squareyardsToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Foot':

          var cms = squarefeetToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Inch':

          var cms = squareinchesToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Hectarea':

          var cms = hectareasToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Acre':

          var cms = acresToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Kilometer':

          var cms = squarekilometersToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Meter':

          var cms = squaremetersToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Centimeter':

          var cms = squarecmsToCms(magnitud);
          return revertFromSquareCms(cms, to);

        case 'Square Millimeter':

          var cms = squaremilimetersToCms(magnitud);
          return revertFromSquareCms(cms, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromSquareCms(cms, to) {
      switch (to) {
      case 'Square Mile':
        return cmsToSquaremiles(cms);
      case 'Square Yard':
        return cmsToSquareyards(cms);
      case 'Square Foot':
        return cmsToSquarefeet(cms);
      case 'Square Inch':
        return cmsToSquareinches(cms);
      case 'Hectarea':
        return cmsToHectareas(cms);
      case 'Acre':
        return cmsToAcres(cms);
      case 'Square Kilometer':
        return cmsToSquarekilometers(cms);
      case 'Square Meter':
        return cmsToSquaremeters(cms);
      case 'Square Centimeter':
        return cms;
      case 'Square Millimeter':
        return cmsToSquaremilimeters(cms);
    }
    }

    $scope.computerStorageConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Bit':

          var bits = bitsToBits(magnitud);
          return revertFromBits(bits, to);

        case 'Byte':

          var bits = bytesToBits(magnitud);
          return revertFromBits(bits, to);

        case 'Kilobyte':

          var bits = kilobytesToBits(magnitud);
          return revertFromBits(bits, to);

        case 'Megabyte':

          var bits = megabytesToBits(magnitud);
          return revertFromBits(bits, to);

        case 'Gigabyte':

          var bits = gigabytesToBits(magnitud);
          return revertFromBits(bits, to);

        case 'Terabyte':

          var bits = terabytesToBits(magnitud);
          return revertFromBits(bits, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromBits(bits, to) {
      switch (to) {
      case 'Bit':
        return bits;
      case 'Byte':
        return bitsToBytes(bits);
      case 'Kilobyte':
        return bitsToKilobytes(bits);
      case 'Megabyte':
        return bitsToMegabytes(bits);
      case 'Gigabyte':
        return bitsToGigabytes(bits);
      case 'Terabyte':
        return bitsToTerabytes(bits);
    }
    }

    $scope.energyConvert = function(from, to, magnitud) {

        switch (from) {

        case 'BTU':

          var calories = btusTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Calorie':

          var calories = caloriesTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Erg':

          var calories = ergsTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Foot-Pound':

          var calories = footPoundsTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Joule':

          var calories = joulesTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Kilogram-Calorie':

          var calories = kilogramCaloriesTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Kilogram-Meter':

          var calories = kilogramMetersTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Kilowatt-Hour':

          var calories = kilowattHoursTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Newton-Meter':

          var calories = newtonMetersTocalories(magnitud);
          return revertFromCalories(calories, to);

        case 'Watt-Hour':

          var calories = wattHoursTocalories(magnitud);
          return revertFromCalories(calories, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromCalories(calories, to) {
      switch (to) {
      case 'Calorie':
        return calories;
      case 'BTU':
        return caloriesToBtus(calories);
      case 'Erg':
        return caloriesToErgs(calories);
      case 'Foot-Pound':
        return caloriesToFootPounds(calories);
      case 'Joule':
        return caloriesToJoules(calories);
      case 'Kilogram-Calorie':
        return caloriesToKilogramCalories(calories);
      case 'Kilogram-Meter':
        return caloriesToKilogramMeters(calories);
      case 'Kilowatt-Hour':
        return caloriesKToilowattHours(calories);
      case 'Newton-Meter':
        return caloriesToNewtonMeters(calories);
      case 'Watt-Hour':
        return caloriesToWattHours(calories);
    }
    }

    $scope.lengthConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Mile':

          var centimeters = milesToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        case 'Yard':

          var centimeters = yardsToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        case 'Foot':

          var centimeters = feetToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        case 'Inche':

          var centimeters = inchesToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        case 'Kilometer':

          var centimeters = kilometersToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        case 'Meter':

          var centimeters = metersToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        case 'Centimeter':

          return revertFromCentimeters(magnitud, to);

        case 'Millimeter':

          var centimeters = mmToCm(magnitud);
          return revertFromCentimeters(centimeters, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromCentimeters(centimeters, to) {
      switch (to) {
      case 'Mile':
        return cmToMiles(centimeters);
      case 'Yard':
        return cmToYards(centimeters);
      case 'Foot':
        return cmToFeet(centimeters);
      case 'Inch':
        return cmToInches(centimeters);
      case 'Kilometer':
        return cmToKilometers(centimeters);
      case 'Meter':
        return cmToMeters(centimeters);
      case 'Centimeter':
        return centimeters;
      case 'Millimeter':
        return cmToMm(centimeters);
    }
    }

    $scope.weightConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Short Ton (US)':

          var grams = shortTonstoGrams(magnitud);
          return revertFromGrams(grams, to);

        case 'Pound (US)':

          var grams = poundstoGrams(magnitud);
          return revertFromGrams(grams, to);

        case 'Ounce (US)':

          var grams = ouncetoGrams(magnitud);
          return revertFromGrams(grams, to);

        case 'Stone':

          var grams = stonetoGrams(magnitud);
          return revertFromGrams(grams, to);

        case 'Long Ton (UK)':

          var grams = longTontoGrams(magnitud);
          return revertFromGrams(grams, to);

        case 'Metric Ton':

          var grams = metricTontoGrams(magnitud);
          return revertFromGrams(grams, to);

        case 'Kilogram':
          var grams = kilogramtoGrams(magnitud);
          return revertFromGrams(magnitud, to);

        case 'Gram':

          var grams = gramstoGrams(magnitud);
          return revertFromGrams(grams, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromGrams(grams, to) {
      switch (to) {
      case 'Short Ton (US)':
        return gramsToShortTons(grams);
      case 'Pound (US)':
        return gramsToPounds(grams);
      case 'Ounce (US)':
        return gramsToOunce(grams);
      case 'Stone':
        return gramsToStone(grams);
      case 'Long Ton (UK)':
        return gramsToLongTon(grams);
      case 'Metric Ton':
        return gramsToMetricTon(grams);
      case 'Kilogram':
        return gramsToKilogram(grams);
      case 'Gram':
        return grams;
    }
    }

    $scope.speedConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Knots':

          var metersPerSecond = knotsToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Miles/Hour':

          var metersPerSecond = milesPerHourToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Miles/Minute':

          var metersPerSecond = milesPerMinuteToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Feet/Minute':

          var metersPerSecond = feetPerMinuteToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Feet/Second':

          var metersPerSecond = feetPerSecondToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Kilometers/Hour':

          var metersPerSecond = kilometersPerHourToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Kilometers/Minute':
          var metersPerSecond = kilometersPerMinuteToMeterPerSecond(magnitud, to);
          return revertFromMeterPerSecond(metersPerSecond, to);

        case 'Meters/Second':

          var metersPerSecond = metersPerSecondToMeterPerSecond(magnitud);
          return revertFromMeterPerSecond(grams, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromMeterPerSecond(metersPerSecond, to) {
      switch (to) {
      case 'Knots':
        return meterPerSecondKnots(metersPerSecond);
      case 'Miles/Hour':
        return meterPerSecondMilesPerHour(metersPerSecond);
      case 'Miles/Minute':
        return meterPerSecondMilesPerMinute(metersPerSecond);
      case 'Feet/Minute':
        return meterPerSecondFeetPerMinutes(metersPerSecond);
      case 'Feet/Second':
        return meterPerSecondFeetPerSecond(metersPerSecond);
      case 'Kilometers/Hour':
        return meterPerSecondToKilometersPerHour(metersPerSecond);
      case 'Kilometers/Minute':
        return meterPerSecondToKilometersPerMinute(metersPerSecond);
      case 'Meters/Second':
        return metersPerSecond;
    }
    }

    $scope.temperatureConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Celsius':

          switch (to) {
          case 'Fahrenheit':
            return celciusToFarenheit(magnitud);
          case 'Kelvin':
            return celciusToKelvin(magnitud);
        }

        case 'Fahrenheit':

          switch (to) {
          case 'Celsius':
            return farenheitToCelcius(magnitud);
          case 'Kelvin':
            return farenheitToKelvin(magnitud);
        }

        case 'Kelvin':

          switch (to) {
          case 'Celsius':
            return kelvinToCelsius(magnitud);
          case 'Fahrenheit':
            return kelvinToFarenheit(magnitud);
        }

        default:
          return 0;

      }

        return 0;
      };

    $scope.timeConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Years':

          var nanoseconds = yearsToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Weeks':

          var nanoseconds = weeksToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Days':

          var nanoseconds = daysToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Hours':

          var nanoseconds = hoursToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Minutes':

          var nanoseconds = minutesToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Seconds':
          var nanoseconds = secondsToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Milliseconds':
          var nanoseconds = millisecondsToNanoseconds(magnitud, to);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Microseconds':
          var nanoseconds = microsecondsToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        case 'Nanoseconds':

          var nanoseconds = nanosecondsToNanoseconds(magnitud);
          return revertFromNanoSeconds(nanoseconds, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromNanoSeconds(nanoseconds, to) {
      switch (to) {
      case 'Years':
        return nanosecondsToYears(nanoseconds);
      case 'Weeks':
        return nanosecondsToWeeks(nanoseconds);
      case 'Days':
        return nanosecondsToDays(nanoseconds);
      case 'Hours':
        return nanosecondsToHours(nanoseconds);
      case 'Minutes':
        return nanosecondsToMinutes(nanoseconds);
      case 'Seconds':
        return nanosecondsToSeconds(nanoseconds);
      case 'Milliseconds':
        return nanosecondsToMilliseconds(nanoseconds);
      case 'Microseconds':
        return nanosecondsToMicroseconds(nanoseconds);
      case 'Nanoseconds':
        return nanoseconds;

    }
    }

    $scope.volumeConvert = function(from, to, magnitud) {

        switch (from) {

        case 'Cubic Feet':
          var mililiters = cubicFeetToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Gallon (Imperial)':
          var mililiters = gallonImperialToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Gallon (US)':
          var mililiters = gallonUSToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Quart (US)':

          var mililiters = quartUSToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Pint (US)':

          var mililiters = pintUSToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Fluid Ounce (US)':
          var mililiters = fluidOunceUSToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Cup':
          var mililiters = cupToMililiters(magnitud, to);
          return revertFromMililiters(mililiters, to);

        case 'Tablespoon':
          var mililiters = tableSpoonToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Dram (US)':
          var mililiters = dramUSToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Cubic Centimeter':
          var mililiters = cubicCentimeterToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Cubic Meter':
          var mililiters = cubicMeterToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Liter':
          var mililiters = literToMililiters(magnitud);
          return revertFromMililiters(mililiters, to);

        case 'Mililiter':
          return revertFromMililiters(magnitud, to);

        default:
          return 0;
      }

        return 0;
      };

    function revertFromMililiters(mililiters, to) {
      switch (to) {
      case 'Cubic Feet':
        return mililitersToCubicFeet(mililiters);
      case 'Gallon (Imperial)':
        return mililitersToGallonImperial(mililiters);
      case 'Gallon (US)':
        return mililitersToGallonUS(mililiters);
      case 'Quart (US)':
        return mililitersToQuartUS(mililiters);
      case 'Pint (US)':
        return mililitersToPintUS(mililiters);
      case 'Fluid Ounce (US)':
        return mililitersToFluidOunceUS(mililiters);
      case 'Cup':
        return mililitersToCup(mililiters);
      case 'Tablespoon':
        return mililitersToTablespoon(mililiters);
      case 'Dram (US)':
        return mililitersToDramUS(mililiters);
      case 'Cubic Centimeter':
        return mililitersToCubicCentimeter(mililiters);
      case 'Cubic Meter':
        return mililitersToCubicMeter(mililiters);
      case 'Liter':
        return MililitersToLiter(mililiters);
      case 'Mililiter':
        return mililiters;

    }
    }

  });

app.directive('validNumber', function() {
    return {
        require: '?ngModel',
        link: function(scope, element, attrs, ngModelCtrl) {
            if (!ngModelCtrl) {
              return;
            }

            ngModelCtrl.$parsers.push(function(val) {
                if (angular.isUndefined(val)) {
                  var val = '';
                }
		if (val == undefined) { val = document.getElementsByClassName("inputUnitField")[0].children[0].value.toString(); }
		if (val == undefined) { val=''; }
                var clean = val.toString().replace(/[^-0-9\.]/g, '');
                var negativeCheck = clean.split('-');
                var decimalCheck = clean.split('.');
                if (!angular.isUndefined(negativeCheck[1])) {
                  negativeCheck[1] = negativeCheck[1].
                                     slice(0, negativeCheck[1].length);
                  clean = negativeCheck[0] + '-' + negativeCheck[1];
                  if (negativeCheck[0].length > 0) {
                    clean = negativeCheck[0];
                  }

                }

                if (!angular.isUndefined(decimalCheck[1])) {
                  decimalCheck[1] = decimalCheck[1].slice(0, 5);
                  clean = decimalCheck[0] + '.' + decimalCheck[1];
                }

                if (val !== clean) {
                  ngModelCtrl.$setViewValue(clean);
                  ngModelCtrl.$render();
                }
                return clean;
              });

            element.bind('keypress', function(event) {
                if (event.keyCode === 32) {
                  event.preventDefault();
                }
              });
          }
      };
  });
