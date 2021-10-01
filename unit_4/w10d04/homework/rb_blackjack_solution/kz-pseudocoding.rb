=begin
  This is how you do multi-line comments in Ruby files
=end

=begin
  Pseudocode it! What is the problem you're trying to solve here? Are you familiar with the way BlackJack works? And what can you breakdown into digestible steps that you've previously encountered with JavaScript? This hw didn't ask for a full BlackJack game, so how can we get an MVP?

  1. A card game can be broken down into 3 aspects:
    a) Players
    b) Type of game material (Cards)
    c) Basic game progress as its rules dictate

  2. With the main parts broken down, what does the hw README suggest for each aspect to our game?
    a) Each player has a name, bank, and a hand (BlackJack requires at least 2 cards).
    b) Need a simple way of making a card and then the full deck (which also needs to be shuffled for game usage).
    c) Basic game progression requires: two players, two cards to each player, and check who has the highest pair for winning (starting with just 2 cards, don't jump ahead for the full game).

  3. Notice my pseudocoding is more abstract to focus on the objective of an MVP blackjack game. This isn't even incorporating the finer details such as what happens when there are no more cards, or deducting bank from the players, and etc. This is the best basic roadmap I can think of for a weeknight time window that will get the game working with the basic features, while also laying the groundwork to polish up the gameplay later. Check the kz-blackjack.rb file for my code.

=end