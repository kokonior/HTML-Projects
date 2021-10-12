//https://github.com/keshavsingh4522/hacktoberfest2021
const inputOne =  document.getElementById('input-one')

const inputTwo =  document.getElementById('input-two')

const selectOne = document.getElementById('select-one')

const selectTwo = document.getElementById('select-two')

inputOne.addEventListener('focusout', function(){
  calculateTheTemperatureForFieldsOnTheLeftSide()
})

inputTwo.addEventListener('focusout', function(){
  calculateTheTemperatureForFieldsOnTheRightSide()
})

selectOne.addEventListener('change', function(){
  calculateTheTemperatureForFieldsOnTheLeftSide()
})

selectTwo.addEventListener('change', function(){
  calculateTheTemperatureForFieldsOnTheRightSide()
})

function calculateTheTemperature(temperature, metricFrom, metricTo) {
  console.log(temperature, metricFrom, metricTo)

  if(metricFrom === metricTo) return temperature

  if(metricFrom.toLocaleLowerCase() === 'celsius'){
    if(metricTo.toLocaleLowerCase() === 'fahrenheit'){
      return CelsiusToFahrenheit(Number(temperature))
    }

    if(metricTo.toLocaleLowerCase() === 'kelvin'){
      return CelsiusToKelvin(Number(temperature))
    }
  }


  if(metricFrom.toLocaleLowerCase() === 'fahrenheit'){
    if(metricTo.toLocaleLowerCase() === 'celsius'){
      return CelsiusToFahrenheit(Number(temperature))
    }

    if(metricTo.toLocaleLowerCase() === 'kelvin'){
      return FahrenheitToKelvin(Number(temperature))
    }
  }

  if(metricFrom.toLocaleLowerCase() === 'kelvin'){
    if(metricTo.toLocaleLowerCase() === 'celsius'){
      return KelvinToCelsius(Number(temperature))
    }

    if(metricTo.toLocaleLowerCase() === 'fahrenheit'){
      return KelvinToFahrenheit(Number(temperature))
    }
  }

}

const CelsiusToFahrenheit = tempC => ((tempC * 9) / 5 + 32)

const CelsiusToKelvin = tempC => tempC + 273.15

const FahrenheitToCelsius = tempF => (((tempF - 32) * 5) / 9)

const FahrenheitToKelvin = tempF => (((tempF - 32) * 5) / 9)+273.15

const KelvinToCelsius = tempK => tempK - 273.15

const KelvinToFahrenheit = tempK => (tempK - 273.15) * (9/5) + 32

const calculateTheTemperatureForFieldsOnTheLeftSide = () => {
  let temperature = calculateTheTemperature(inputOne.value, selectOne.value, selectTwo.value)

  inputTwo.value = temperature
}

const calculateTheTemperatureForFieldsOnTheRightSide = () => {
  let temperature = calculateTheTemperature(inputTwo.value, selectTwo.value, selectOne.value)

  inputOne.value = temperature
}