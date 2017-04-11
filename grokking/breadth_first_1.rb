require_relative 'graph_implement_1'

bob = Person.new('bob')
alice = Person.new('alice')
claire = Person.new('claire')
jimmy = Person.new('jimmy')
walt =  Person.new('walt')
tom = Person.new('tom')
bill = Person.new('bill', true)
kevin = Person.new('kevin')

graph = {}

graph[bob] = [alice, claire, jimmy]
graph[alice] = [walt, tom]
graph[claire] = [bill, bob]
graph[tom] = [kevin]
graph[jimmy] = []
graph[walt] = []
graph[bill] =[]
graph[kevin] = []

def find_seller(you, graph)
  search_queue = []
  search_queue.push(you)
  searched_people = []
  until search_queue.empty?
    person = search_queue[0]
    # p person.name
    # search_queue
    searched_people.push(search_queue.shift)
    if person.seller
      return person.name
    else
      connections = graph[person]
      if !connections.empty?
        connections.each do |connection|
          if !searched_people.include?(connection)

            search_queue.push(connection)
          end
        end
      end
    end
  end
  return "don't know a seller"
end

p find_seller(bob, graph)
