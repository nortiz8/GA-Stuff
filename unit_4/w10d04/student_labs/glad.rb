class Gladiator
    attr_accessor :name, :weapon
    def initialize(name, weapon)
        @name = name
        @weapon = weapon
    end
end

class Arena
    attr_accessor :name, :gladiators
    def initialize(name)
        @name = name.capitalize
        @gladiators = []
    end
    def addGladiator(glad)
        if(gladiators.length < 2)
            gladiators.push(glad)
        else
            puts "The arena is already full! Fight to find a winner!"
        end
    end
    def fight
        puts "Tonights fight: #{gladiators[0].name} using their #{gladiators[0].weapon} VS #{gladiators[1].name} and their trusty #{gladiators[1].weapon}! Fight!"
        if gladiators[0].weapon == gladiators[1].weapon 
            puts "Both fighters gone?!?! WHAT A FIGHT. WE NEED 2 MORE CHALLENGERS"
            gladiators.clear
        elsif gladiators[0].weapon == "Spear" && gladiators[1].weapon == "Club"
            puts "#{gladiators[0].name}'s Spear makes a clean cut! #{gladiators[1].name} is eliminated!"
            gladiators.pop
        elsif gladiators[0].weapon == "Trident" && gladiators[1].weapon == "Spear"
            puts "#{gladiators[0].name}'s Trident strikes true! #{gladiators[1].name} eliminated"
            gladiators.pop
        elsif gladiators[0].weapon == "Club" && gladiators[1].weapon == "Trident"
            puts "#{gladiators[0].name}'s club hits hard! #{gladiators[1].name} has been knocked out!"
            gladiators.pop
        else 
            puts "#{gladiators[1].name} is amazing with their #{gladiators[1].weapon}! #{gladiators[1].name} has been eliminated!"
            gladiators.shift
        end
    end
end

otherWinner = Gladiator.new("The New Kid", "Trident")
winner = Gladiator.new("Best Fighter Ever", "Trident")
colosseum = Arena.new("colosseum")

puts winner.weapon
puts colosseum.name
colosseum.addGladiator(winner)
colosseum.addGladiator(otherWinner)
colosseum.addGladiator(winner)
colosseum.fight
puts colosseum.gladiators