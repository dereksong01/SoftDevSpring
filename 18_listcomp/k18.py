# Derek Song
# Softdev pd8
# K18 -
# 2019 - 4 - 15

# Q1 : pythagorean triples on range [1,n)
def task1(n):
    trip = [[x, y, z] for x in range(n) for y in range(n) for z in range(n) if x ** 2 == (y ** 2 + z ** 2)]
    return trip

task1(30)


# Q2: quicksort
