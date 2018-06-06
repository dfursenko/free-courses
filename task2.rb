s = ARGV[0]
prefix = ''
(0...s.length).map { |i| prefix = s[0..i] if s[1, s.length].include? s[0..i] }
puts prefix