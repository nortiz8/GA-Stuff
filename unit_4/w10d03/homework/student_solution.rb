=begin
puts "Hello World"
adjective= "Big Bad"
puts "Hello #{adjective} World"
hello = "Hello World"
puts hello.upcase!
=end

=begin
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]
# Use .uniq to print the array with all duplicate entries removed
#puts nums.uniq

# Next, use .push and .pop , .shift .unshift and .length on the array as you would with javaScript (if you need to add a number, add 5)
# nums.push(5)
# nums.pop(1)
# nums.shift()
# nums.unshift(5)
# puts nums.length
# print nums

# Use .include? to check if the array contains the number 8
# puts nums.include? 8


# Use .find_all to find all the numbers greater than 10
# puts nums.find_all {|num| num > 10}


# use .all? to check if all the numbers are greater than 0?
# puts nums.all? {|num| num > 0}


# use any? to check if there are any numbers that are divisible by 8
# puts nums.any? {|num| num % 8 == 0 unless num == 0 }


# use .count to let you know how many numbers are greater than 4
# puts nums.count {|num| num > 4}

# use .each_with_index to print each item times its index
# nums.each_with_index {|num, index| puts "#{num} times #{index} = #{num * index}"}

# .find the number that is divisible by 7 and 5 and is greater than 0
# puts nums.find {|num| num % 7== 0 && num %5 ==0 && num > 0}

# .find_index of the number that is divisible by 5 and 7 and is greater than 0
# puts nums.find_index {|num| num % 7== 0 && num %5 ==0 && num > 0}

# return the .first 3 numbers
# print nums.first(3)

# return the .last 5 numbers
# print nums.last(5)

# .group_by the modulo of 3 ( % 3 )
# puts nums.group_by {|num| num % 3}

# use minmax to return the smallest and largest number
# puts nums.minmax

# use .reject to return all the numbers that are NOT divisible by 3
# puts nums.reject {|num| num % 3 == 0}

# use .select to return all the numbers divisible by 5
puts nums.select {|num| num % 5 == 0}
=end

=begin
# colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# Print out a random color.
# puts colors[rand(colors.length)]
# puts colors.sample

# Print out the colors array in reverse order.
# print colors.reverse

# Print out all of the colors in the array with all capital letters.
# colors.each {|color| puts color.upcase}
=end

=begin
# Write a method named find_area that finds the area of a rectangle when given values for width and height
# REMEMBER: In Ruby, the keyword return is implied and can be omitted!
def find_area(height, width)
    puts height * width
end
find_area(2,10)
# Write a method named multiply_each_by_five that will loop over the given nums array below and print each number multiplied by 5
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]
def multiply_each_by_five (arr)
    arr.each {|num| puts num * 5}
end
multiply_each_by_five(nums)
=end

=begin
# Use the following given hashes to solve the problems below
# Hashes
book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}
lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}
table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}

# Write a method named print_price that will take in any hash and return the price of the item.
def print_price(item)
    puts item[:price]
end
print_price(book)
print_price(lamp)
print_price(table)
# Write a method named print_item_sums that will take in two hashes and will return the sum of the prices for the items in the hashes.
def print_item_sums(item1, item2)
    puts item1[:price] + item2[:price]
end
print_item_sums(book, lamp)
=end

=begin
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

arr = (1...1000).to_a
divisibleArray = arr.find_all {|num| num % 3 == 0 || num % 5 == 0 }
sum = 0
divisibleArray.each {|num| sum += num  }
puts sum
=end

=begin
# Primes
require 'prime'
# Write a method called check_prime? that will test whether a number is Prime. The method will return true if Prime, false if not.
def check_prime?(num)
    Prime.prime?(num)
end
# puts check_prime?(7)
# Write another method called get_primes that will print all the Primes up to an arbitrary limit. For example, if you invoke your method with get_primes 100, it will print all the Prime numbers up to and including 100.
# This method can call on the previous check_prime? method.
def get_primes(num)
    Prime.each(num) do |prime|
        puts prime
    end
end
get_primes(9)
=end