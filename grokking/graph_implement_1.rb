class Person
  attr_reader :name, :seller
  def initialize(name, seller = false)
    @name = name
    @seller = seller
  end
end

bob = Person.new('bob')
alice = Person.new('alice')
claire = Person.new('claire')
jimmy = Person.new('jimmy')
walt =  Person.new('walt')
tom = Person.new('tom')
bill = Person.new('bill')
kevin = Person.new('kevin', true)

graph = {}

graph[bob] = [alice, claire, jimmy]
graph[alice] = [walt, tom]
graph[claire] = [bill, bob]
graph[tom] = [kevin]
graph[jimmy] = []
graph[walt] = []
graph[bill] =[]
graph[kevin] = []
