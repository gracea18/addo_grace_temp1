let tempF = 68
while (true) {
    console.log(" Current Room Temperature: " + input.temperature(TemperatureUnit.Fahrenheit) + input.temperature(TemperatureUnit.Celsius))
}
if (tempF > 60) {
    light.setPixelColor(5, light.rgb(255, 0, 0))
}

