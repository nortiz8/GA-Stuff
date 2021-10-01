class Gladiator 
    attr_reader :name
    def initialize(name, weapon)
        @name = name
        @weapon = weapon
    end
end

class Arena
    def initialize(name)
        @name = name
        @gladiators = []
    end
end

max = Gladiator.new("Maximus", "sword")
puts max
puts max.inspect
