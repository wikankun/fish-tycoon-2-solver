from dataclasses import dataclass
from itertools import product

class Fish:
    def __init__(self, fin, species) -> None:
        self.species = species
        self.fin = fin

    def __str__(self) -> str:
        return f"{self.fin} {self.species}"
    
    def __eq__(self, other) -> bool:
        return self.species == other.species and self.fin == other.fin
    
    def __hash__(self):
        return hash((self.species, self.fin))
    
    def find_parents(self, species_dict, fin_dict) -> list:
        species_list = []
        for s1 in species_dict:
            for s2 in species_dict:
                if species_dict[s1][s2] == self.species:
                    species_list.append([s1, s2])

        fin_list = []
        for s1 in fin_dict:
            for s2 in fin_dict:
                if fin_dict[s1][s2] == self.fin:
                    fin_list.append([s1, s2])

        result_list = []
        for comb in list(product(species_list, fin_list)):
            if (
                self == Fish(species=comb[0][0], fin=comb[1][0]) or
                self == Fish(species=comb[0][1], fin=comb[1][1])
            ):
                continue

            result_list.append(
                Pair(
                    Fish(species=comb[0][0], fin=comb[1][0]),
                    Fish(species=comb[0][1], fin=comb[1][1])
                )
            )
        # print(len(result_list))
        return result_list
    
@dataclass
class Pair:
    fish1: Fish
    fish2: Fish
