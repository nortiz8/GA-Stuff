class Dog
    attr_accessor :name, :legs

    def initialize(name)
        @legs = 4
        @name = name
    end

    def bark
        puts "bark!"
    end

    private 

    def code_word
        puts "Blitzkrieg..."
    end

end


# create instance
fido = Dog.new("Fido")
# call bark
fido.bark
# read name
puts fido.name
# write name
fido.name = "Lucky"
puts fido.name
# try to call secret method
fido.code_word # it doesn't run!
