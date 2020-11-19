tempF=68
while True:
    print(" Current Room Temperature: " + input.temperature(TemperatureUnit.FAHRENHEIT) + input.temperature(TemperatureUnit.CELSIUS))

if tempF> 60:
    light.set_pixel_color(5, light.rgb (255, 0, 0))
