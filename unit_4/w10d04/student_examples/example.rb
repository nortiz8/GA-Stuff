class Person
    attr_accessor :name, :nickname, :catchphrase, :age
    def initialize(name, nickname, catchphrase, age)
        @name = name,
        @nickname = nickname,
        @catchphrase = catchphrase,
        @age = age
    end
    def introduce
       puts "Hello there!"
    end
end

nick = Person.new("Nicholas Ortiz", "Nick", "lol hey", 27)

# nick.introduce
# puts nick.age

class Programmer < Person
    attr_accessor :name, :nickname, :catchphrase, :age

    def initialize(name, nickname, catchphrase, age, languages)
        super(name, nickname, catchphrase, age)
        @languages = languages
    end
end

peter = Person.new("Peter", "Pete", "I like to sing", 23)
bell = Programmer.new("John", "Bell", "Ruby is better than Javascript", 34, ["python", "ruby", "javascript"])
# puts bell.name
# puts peter.is_a?(Person) # => true
# puts peter.is_a?(Programmer) # => false
# puts bell.is_a?(Person) # => true
# puts bell.is_a?(Programmer) # => true