def hello(num)
  num.times do 
    puts "Hello"
  end
end

# hello(3)

def personal_greeting(name)
  puts "Why hello there #{name}, how are you today?"
end

# personal_greeting("Kenny")

def has_vowel?(word)
  word.each_char do |letter|
    
    case (letter)
    when !"a", !"e", !"i", !"o", !"u"
      puts "no"
    else
      puts "yes"
    end
  end
end

has_vowel?("nope")

students = %w(you all y'all)

def hash_roll_call(roster)
  arr = []
  roster.map do |person|
    info = {:first_name => person, :last_name => ""}
    arr.push(info)
  end

  arr.each do |person|
    puts "Calling: #{person[:first_name]}, #{person[:last_name]}!"
  end
end

# hash_roll_call(students)

classy_students = []

class Student
  attr_reader :name
  def initialize(name)
    @name = name
  end
end

me = Student.new("Me")
myself = Student.new("Myself")
i = Student.new("I")
# p classy_students.push(me, myself, i)

def class_roll_call(students)
  students.each do |student|
    puts "Welcome, #{student.name}"
  end
end

# class_roll_call(classy_students)

def triangle_of_hash(num)
  str = ""
  num.times do
    num.times do 
      puts str += "#"
    end
  end
  puts ""
end

# triangle_of_hash(5)
