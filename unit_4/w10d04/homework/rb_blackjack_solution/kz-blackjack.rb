# Player class keeps track of player's name, bankroll, cards in hand, and card values
class Player
  attr_reader :name 
  attr_accessor :bankroll, :hand

  def initialize (name, bankroll)
    @name = name
    @bankroll = bankroll
    @hand = []
  end

  def pocket(card1, card2)
    hand.push(card1, card2)
  end

  def hand_value
    card1 = hand[0][:value]
    card2 = hand[1][:value]
    total = card1 + card2
  end

end


# Deck class builds the deck and has an instance method to shuffle itself
class Deck
  attr_reader :ranks, :suits, :value
  attr_accessor :deck

  def initialize
    @ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    @suits = ["Diamond", "Club", "Heart", "Spade"]
    @deck = []
  end

  def change_values(card)
    case card[:rank]
    when "J", "Q", "K"
      card[:value] = 10
    when "A"
      card[:value] = 11
    else
      card[:value] = card[:rank].to_i
    end
  end

  def build_deck
    puts "Deck is assembled"
    @ranks.each do |j|
      @suits.each do |i|
        card = {rank: j, suit: i}
        change_values(card)
        @deck.push(card)
      end
    end
  end

  def shuffle_now
    build_deck
    puts "Deck is shuffled"
    @deck.shuffle!
  end

end


# Game class keeps track of everything that makes basic BlackJack work
class Game
  attr_accessor :deck, :player1, :player2

  def initialize
    @gameDeck = []
    @player1 = {}
    @player2 = {}
  end

  def whos_playing(p1, p2)
    puts "Your players are:"

    @player1 = p1
    @player2 = p2

    puts "#{@player1.name} #{@player2.name}"
  end

  def use_deck(deck)
    puts "Deck is ready for use."
    @gameDeck = deck
  end

  def deal_cards
    puts "Dealing Cards..."

    cards_1_2 = @gameDeck.shift(2)
    @player1.pocket(*cards_1_2)

    cards_3_4 = @gameDeck.shift(2)
    @player2.pocket(*cards_3_4)
  end

  def announce_hands
    puts "#{@player1.name} has a #{@player1.hand[0][:rank]} of #{@player1.hand[0][:suit]}, and a #{@player1.hand[1][:rank]} of #{@player1.hand[1][:suit]}"
    puts "#{@player2.name} has a #{@player2.hand[0][:rank]} of #{@player2.hand[0][:suit]}, and a #{@player2.hand[1][:rank]} of #{@player2.hand[1][:suit]}"
  end

  def check_hands
    if (@player1.hand_value > @player2.hand_value)
      puts "#{@player1.name} Wins with #{@player1.hand_value}"
    elsif (@player2.hand_value > @player1.hand_value)
      puts "#{@player2.name} Wins with #{@player2.hand_value}"
    else
      puts "It's a Draw"
    end
  end

  def prompt_players
    puts "Welcome to BlackJack, #{@player1.name}! Please type D to deal cards, or Q to quit."
    
    playerInput = gets.chomp

    case playerInput.upcase
    when "D"
      puts "Let's begin"
      # First deal cards
      deal_cards
      # Announce each player's hand
      announce_hands
      # Check who has the higher hand
      check_hands
    when "Q"
      puts "Goodbye"
    else
      prompt_players
    end

  end

end


=begin 
  Set up the game below by creating new instances of each class:
=end

# 1. Prompt player for name input
puts "Please enter your name:"
myNameInput = gets.chomp

# 2. Instantiate two players with their bankrolls
me = Player.new(myNameInput, 100)
computer = Player.new("House", 10000)

# 3. Instantiate the deck and call its shuffle method
newDeck = Deck.new
shuffledDeck = newDeck.shuffle_now

# 4. Instantiate a game and call its class instance methods to invoke gameplay
round1 = Game.new
round1.whos_playing(me, computer)
round1.use_deck(shuffledDeck)
round1.prompt_players
