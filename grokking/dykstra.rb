# weighted graph implementation

# trying their example

graph = {}

graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2
graph["a"] = {}
graph["a"]["fin"]= 1
graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["fin"] = 5
graph["fin"] = {}

p graph["start"]

infinity = Float::INFINITY

costs = {}
costs["a"] = 6
costs["b"] = 2
costs["fin"] = infinity

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = "unknown"


# class Item
#   attr_reader :name
#   attr_accessor :edges
#
#   def initialize(name)
#     @name = name
#     @edges =[]
#   end
#
# end
#
# class Edge
#   attr_reader :cost, :given, :gotten
#
#   def initialize(given, cost, gotten)
#     @given = given
#     @cost = cost
#     @gotten = gotten
#   end
# end
#
# book = Item.new("book")
# lp = Item.new("LP")
# poster = Item.new("poster")
# bass = Item.new("bass")
# drum = Item.new("drum")
# piano = Item.new("piano")
#
# book_lp = Edge.new()
