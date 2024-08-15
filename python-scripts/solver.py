from fish import Fish

class GraphNode:
    def __init__(self, fish: Fish, prev_node):
        self.fish = fish
        self.prev_node = prev_node
    
    def get_parents(self):
        parents = []
        for p in self.fish.find_parents():
            new_fish = self.fish.clone()
            
            parents.append(GraphNode(new_fish, self))
        return parents