def hasRepeats? string
    lowercase = string.downcase
    arr = lowercase.split(" ")
    arr.each {|word| puts lowercase.include?word}
end

hasRepeats?("a b")