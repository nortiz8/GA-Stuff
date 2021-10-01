=begin
puts "foo".length
puts "foo".include?('o')

puts "I have #{13 * 4} cards "

puts "foo" + "bar"


arr = [:Maurice, :cool, :Hello, :What]
print arr
puts arr[-1]

arr = (1..10).to_a
print arr
gustave = {'name' => 'Gustave', 'age' => 2.5}
puts gustave['age']

3.times {|i| puts i}
arr = [10, 20, 30]
arr.each {|num| puts num}
arr.map {|num| puts num/10}

arr = [10, 20, 30]

arr.map do |num|
    puts "#{num / 10} is great!"
end

hash = {a: 1, b:2, c:3}
hash.each do |key, val|
    puts "The value of #{key} is #{val}"
end

def add(a, b)
    puts a + b
end
add(6, 2)

def add(*nums)
    puts 0 if nums.empty?
    puts nums.reduce {|sum, n| sum + n }
end

add(2,3,2,4,4,5,53,2)

def number_message(num)
    if num < 10
        puts "what a small number"
    elsif num > 10
        puts "thats a big number"
    else
        puts "that number is just right"
    end
end
number_message(19)
number_message(4)
number_message(10)

age = 102
puts 'you are old' if age >=100
puts 'you are old' unless age < 100


num = 10
puts num.even? ? "#{num} is even" : "#{num} is odd"

a = 10
while a.positive?
    puts a
    a -=1
end


puts 1 && 2
puts nil && 2
puts 1 || nil
puts 2 || 1 
=end