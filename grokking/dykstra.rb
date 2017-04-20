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
costs["fin"] = 8

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["fin"] = "unknown"

processed = []

def find_lowest_cost_node(costs, processed)
  lowest_cost = Float::INFINITY
  lowest_cost_node = nil
  costs.each do |node, cost|
    if cost < lowest_cost && !processed.include?(node)
      lowest_cost = cost
      lowest_cost_node = node
    end
  end
  lowest_cost_node
end

p costs
def dijkstra_costs(costs, processed, graph, parents, infinity = Float::INFINITY)
  node = find_lowest_cost_node(costs, processed)
  while node != nil
    cost = costs[node]
    neighbors = graph[node]
    neighbors.each do |n_node, n_cost|
      new_cost = cost + neighbors[n_node]
      if costs[n_node] > new_cost
        costs[n_node] = new_cost
        parents[n_node] = node
      end
    end
    processed.push(node)
    node = find_lowest_cost_node(costs, processed)
  end
  costs
end

dijkstra_costs(costs, processed, graph, parents)
p costs

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
