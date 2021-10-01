class Person 
    attr_accessor :name, :nickname, :catchphrase, :age

    def initialize(name, nickname, catchphrase, age)
      @name = name
      @nickname = nickname
      @catchphrase = catchphrase
      @age = age
    end
    
    def introduce
      "Hello, there!"
    end
end

class Programmer < Person
    attr_accessor :name, :nickname, :catchphrase, :age, :languages

    def initialize(name, nickname, catchphrase, age, languages) # values passed when creating a new instance of Programmer
        super(name, nickname, catchphrase, age) # uses the initialize from Parent, so it passes the values that Parent needs
        @languages = languages # uses the additional field not used by Person but used by Progammer
    end

end

peter = Person.new("Peter", "Pete", "I like to sing", 23)

puts peter.name
puts peter.nickname
puts peter.catchphrase
puts peter.age
puts peter.introduce

puts "--------" # divider for readability when logging
bell = Programmer.new("John", "Bell", "Ruby is better than Javascript", 34, ["python", "golang"])
puts bell.name
puts bell.nickname
puts bell.catchphrase
puts bell.age
puts bell.introduce  # introduce can be used as Programmer will inherit methods from Parent!
puts bell.languages
