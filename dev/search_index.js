var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = C25OptimizationChallenge","category":"page"},{"location":"#C25OptimizationChallenge","page":"Home","title":"C25OptimizationChallenge","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for C25OptimizationChallenge.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [C25OptimizationChallenge]","category":"page"},{"location":"#C25OptimizationChallenge.C25OptimizationChallenge","page":"Home","title":"C25OptimizationChallenge.C25OptimizationChallenge","text":"C25OptimizationChallenge\n\nThis is a package for the Optimization Challenge for the C25 course at MIT.\n\n\n\n\n\n","category":"module"},{"location":"#C25OptimizationChallenge.breadth_first-Tuple{HashCode2014.City}","page":"Home","title":"C25OptimizationChallenge.breadth_first","text":"breadth_first(city)\n\nThis function tries to find a good solution to the problem using something similar to a breadth-first search.\n\nThe algorithm used here is based on the random walk algorithm presented in class. There are two key differences:\n\nThere is a preference to take streets that have not been visited yet.\nFor a street that has not been visited yet, if there are multiple streets that have not been visited yet, the street with the highest speed is chosen.\n\nThe first of these prevents the algorithm from backtracking too much. The second of these is simply a heuristic that results in favorable behavior; it is generally better to travel faster.\n\n\n\n\n\n","category":"method"},{"location":"#C25OptimizationChallenge.speed-Tuple{HashCode2014.Street}","page":"Home","title":"C25OptimizationChallenge.speed","text":"speed(street)\n\nReturns the speed of a street.\n\n\n\n\n\n","category":"method"}]
}