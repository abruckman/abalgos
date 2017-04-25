#!/bin/ruby


t = gets.strip.to_i
#points = Array( 1 .. m.to_i )
#p points
for a0 in (0..t-1)
    graph = {}
    n,m = gets.strip.split(' ')
    n = n.to_i
    m = m.to_i
    points = Array( 1 .. n )
    #p points
    # p n
    # p m
    graph = {}
    points.each do |point|
      graph[point] = {}
    end

    for a1 in (0..m-1)
        x,y,r = gets.strip.split(' ')
        x = x.to_i
        y = y.to_i
        r = r.to_i


      graph[x][y] = r
      graph[y][x] = r
      # p "#{x} #{y} #{r}"
      # p graph[x]
    end
    graph
    infinity = Float::INFINITY
    s = gets.strip.to_i
    p s
    p graph[s]
    costs = {}

    points.each do |point|
      costs[point] = infinity
    end
    costs[s] = 0

    graph[s].each do |point, cost|
      costs[point] = cost
    end
    costs

    parents = {}

    points.each do |point|
      parents[point] = "unknown"
    end

    parents.delete(s)

    graph[s].each do |point, cost|
      parents[point] = s
    end
    #p parents
    processed = [1]

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

          #p "node is #{node} n_node is #{n_node} and costs #{costs[n_node]}"
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
    costs.delete(s)
    p costs
    answer = []
    costs.each do |node, cost|
      answer.push(cost)
    end
    puts answer.join(" ")
end
