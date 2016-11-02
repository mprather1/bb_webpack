require 'json'
require 'faker'

# Create Users seed
File.open('seeds/users.json', 'w') do |file|
file.puts('[')  
150.times do
  @first_name = Faker::Name.first_name
  @last_name = Faker::Name.last_name
  @phone_number = Faker::Number.number(10)
  @phone_id = @phone_number[0...3]

  my_hash = {
    firstName: @first_name.downcase,
    lastName: @last_name.downcase,
    email: @first_name.downcase + "-" + @last_name.downcase + "@example.com",
    phone: @phone_number,
    phone_sort_id: @phone_id
  }
  file.puts(JSON.generate(my_hash) + ",")
end
file.puts("]")
end

# Create facilities seed

File.open('seeds/facilities.json', 'w') do |file|
file.puts('[')  
150.times do
  @facilityName = Faker::Company.name
  @facilityNumber = Faker::Number.number(3)
  @phone_number = Faker::Number.number(10)
  @location = Faker::Address.city + ', ' + Faker::Address.state_abbr

  my_hash = {
    facilityName: @facilityName,
    facilityNumber: @facilityNumber,
    phone: @phone_number,
    facilityLocation: @location  
  }
  file.puts(JSON.generate(my_hash) + ",")
end
file.puts("]")
end

# Create devices seed

File.open('seeds/devices.json', 'a') do |file|
  
file.puts('[') 

50.times do
  @deviceType = 'iPad'
  @serialNumber = Faker::Number.number(10)
  @manufacturer = 'Apple'

  my_hash = {
    deviceType: @deviceType,
    serialNumber: @serialNumber,
    manufacturer: @manufacturer  
  }
  file.puts(JSON.generate(my_hash) + ",")
end
50.times do
  @deviceType = 'Samsung Galaxy Tab'
  @serialNumber = Faker::Number.number(10)
  @manufacturer = 'Samsung'

  my_hash = {
    deviceType: @deviceType,
    serialNumber: @serialNumber,
    manufacturer: @manufacturer  
  }
  file.puts(JSON.generate(my_hash) + ",")
end
50.times do
  @deviceType = 'Samsung Galaxy S7'
  @serialNumber = Faker::Number.number(10)
  @manufacturer = 'Samsung'

  my_hash = {
    deviceType: @deviceType,
    serialNumber: @serialNumber,
    manufacturer: @manufacturer  
  }
  file.puts(JSON.generate(my_hash) + ",")
end

file.puts("]")
end