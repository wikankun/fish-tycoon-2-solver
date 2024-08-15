from collections import deque
from fish import Fish
from species import species_dict
from fin import fin_dict


def bfs_breeding_solver(target_fish, available_fish, species_dict, fin_dict):
    # Queue for BFS: each element is a tuple (current_fish, path)
    # queue = deque([(fish, []) for fish in available_fish])
    queue = deque([(target_fish, [])])
    
    # Set to track visited nodes
    visited = set()
    
    while queue:
        current_fish, path = queue.popleft()
        
        # Get potential parent pairs to breed the current fish
        possible_parents = current_fish.find_parents(species_dict, fin_dict)
        # for pair in possible_parents:
        #     print(current_fish, pair.fish1, pair.fish2)
        
        for pair in possible_parents:
            if pair.fish1 in available_fish and pair.fish2 in available_fish:
                # print(pair.fish1, pair.fish2)
                return [pair] + path

            if pair.fish1 not in visited and pair.fish2 not in visited:
                new_path = [pair] + path
                if pair.fish1 in available_fish:
                    queue.append((pair.fish2, new_path))
                    visited.add(pair.fish2)
                if pair.fish2 in available_fish:
                    queue.append((pair.fish1, new_path))
                    visited.add(pair.fish1)
    
    return None

def breed(f1: Fish, f2: Fish) -> Fish:
    species = species_dict[f1.species][f2.species]
    fin = fin_dict[f1.fin][f2.fin]
    result = Fish(species=species, fin=fin)
    return result

available_fish = [
    # Fish(fin="Razorback", species="Carp"),

    # Fish(fin="Silky", species="Stickfish"),
    # Fish(fin="Rusty", species="Stickfish"),

    # Fish(fin="Royal", species="Beta"),
    # Fish(fin="Silky", species="Beta"),

    # Fish(fin="Silky", species="Tigerfish"),
    # Fish(fin="Canary", species="Tigerfish"),
    # Fish(fin="Spined", species="Tigerfish"),

    # Fish(fin="Canary", species="Fatfish"),
    # Fish(fin="Daffodil", species="Fatfish"),
    # Fish(fin="Striped", species="Fatfish"),
    # Fish(fin="Spined", species="Fatfish"),
    # Fish(fin="Rusty", species="Fatfish"),

    # Fish(fin="Spined", species="Spotanus"),
    # Fish(fin="Rusty", species="Spotanus"),

    # Fish(fin="Silky", species="Shark"),
    # Fish(fin="Striped", species="Shark"),

    # Fish(fin="Royal", species="Arrowfish"),
    # Fish(fin="Daffodil", species="Arrowfish"),
    Fish(fin="Bluetip", species="Angelfish"),
    Fish(fin="Canary", species="Angelfish"),
]

# List magic fishes
f1 = Fish("Striped", "Tigerfish")
f2 = Fish("Sapphire", "Angelfish")
f3 = Fish("Canary", "Carp")
f4 = Fish("Peachy", "Goldshark")
f5 = Fish("Razorback", "Flashfish")
f6 = Fish("Tangerine", "Goldfish")
f7 = Fish("Imperial", "Foxface")

target_fish = f2

breeding_path = bfs_breeding_solver(target_fish, available_fish, species_dict, fin_dict)

print(f"Finding breeding path for: {target_fish}")
if breeding_path:
    for step, pair in enumerate(breeding_path, start=1):
        print(f"Step {step}: Breed {pair.fish1} with {pair.fish2} to create {fin_dict[pair.fish1.fin][pair.fish2.fin]} {species_dict[pair.fish1.species][pair.fish2.species]}")
else:
    print("No breeding path found.")
