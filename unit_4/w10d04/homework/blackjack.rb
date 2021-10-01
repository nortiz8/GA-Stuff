class Player
    attr_accessor :name, :bankroll, :hand
    def initialize(name, bankroll)
        @name = name
        @bankroll = bankroll
        @hand = []
    end
end
class Card
    def initialize(val)
        @val = val
    end
end

def buildDeck
    deck = []
    suit = 0
    val = 2
    while suit < 4
      deck.push(Card.new(val))
     val +=1
    if val == 12
        deck.push(Card.new(10))
        deck.push(Card.new(10))
        deck.push(Card.new(10))
        suit +=1
        val = 2
        end
    end
    return deck.shuffle!
end

class Game
    attr_accessor :players, :deck, 
    def initialize(name)
        @player = Player.new(name, 100)
        @house = Player.new("The House", 10000)
        @deck = buildDeck()
    end
end



# p house.name






# p deck
# puts "======="
# puts "======="
# p deck.shuffle!
puts "Welcome to Blackjack! Please enter your name:"
name = gets.chomp
player = Player.new(name, 100)
puts "Hi #{player.name}, this is your hand:"
player.hand.push(deck.pop, deck.pop)
# player.printHand
puts $deck[0].val