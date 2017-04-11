class Person
  def initialize(seller = false)
    @seller = seller
  end
end

bob = Person.new
alice = Person.new
claire = Person.new
jimmy = Peron.new
walt =  Person.new
tom = Person.new
bill = Person.new
kevin = Person.new(true)

graph = {}

graph[bob] = [alice, claire, jimmy]
graph[alice] = [walt, tom]
graph[claire] = [bill, bob]
graph[tom] = [kevn]
