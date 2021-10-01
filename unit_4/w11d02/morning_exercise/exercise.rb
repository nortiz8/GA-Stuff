def hello (num)
    i = 0
    while i < num
        puts "hello"
        i += 1
    end
end

# hello(5)

def personal_greeting name
    puts "Why hello there #{name}, how are you today?"
end

# personal_greeting('Nick')

def has_vowel? word
    puts  word.downcase.include?("a") ||word.downcase.include?("e") || word.downcase.include?("i") || word.downcase.include?("o")|| word.downcase.include?("u")|| word.downcase.include?("y")
end

# has_vowel?("WHY")

students = ["Mike", "Carol", "Alice", "Greg", "Marcia", "Peter", "Jan", "Bobby", "Cindy"]
def roll_call students
    students.each {|student| puts "Welcome #{student}"}
end

# roll_call(students)

students_hash = [ {first_name: "Mike", last_name: "Jones"},{first_name: "Carol",last_name: "Carlson"},{first_name: "Alice", last_name: "Last"},{first_name: "Greg",last_name: "Bobovich"},{first_name: "Marcia",last_name: "Brady"},{first_name: "Peter",last_name: "Parker"},{first_name: "Jan",last_name: "Doe"},{first_name: "Bobby",last_name: "Hill"},{first_name: "Cindy",last_name: "Stratus"}]

def hash_roll_call students
    students.each {|student| puts "Welcome #{student[:first_name]} #{student[:last_name]}"}
end
# hash_roll_call(students_hash)

classy_students = []

class Student
    attr_accessor :first_name, :last_name
    def initialize (first_name, last_name)
        @first_name = first_name,
        @last_name = last_name
    end
end

classy_students.push(Student.new("Peter", "Jackson"), Student.new("Peter", "Parker"), Student.new("Peter", "Piper"), Student.new("Peter", "Dilenschneider"), Student.new("Peter", "Fuoco"))

def class_roll_call students
    students.each {|student| puts "Welcome #{student.first_name[0]} #{student.last_name}"}
end
# class_roll_call(classy_students)

def triangle num
    count = 0
    level = "#"
    while count < num
        puts level
        level += "#"
        count += 1
    end
end

triangle(7)

def upside_down_triangle num
    count = 0
    level = "#"
    while count < num
        level += "#"
    end
    nextcount = 0
    while num > nextcount
        puts level
        level -= "#"
        nextcount += 1
    end
end

upside_down_triangle(5)