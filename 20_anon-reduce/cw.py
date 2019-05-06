# Team robustPirates - Vincent Lin & Derek Song
# Softdev pd8
# K20 - Reductio ad Absurdum
# 2019 - 4 - 18

from functools import *

with open("book.txt", "r") as f:
    #print(f)
    lst = f.read().strip().split(" ")

#print(lst)


d = {}

for x in lst:
    if x not in d:
        d[x] = 1
    else:
        d[x] += 1

#print(d)


def freq(word):
    return reduce(lambda x,y: x+1 if y==word else x, lst, 0)
'''
    if word not in d:
        return "none"
    return d[word]
'''

print(freq("the"))
print(freq("vincent"))
print(freq("brown"))

def totfreq(words):
    w = words.split(" ")
#    out = [1 for x in range(len(lst)) if lst[x] == lst[0]]
    return reduce(lambda x,y: x+1 if w == lst[y:y+len(w)] else x,\
                  range(len(lst)-len(w)), 0 )

print(totfreq("the man"))

def mostfreq():
    '''x = ""
    y = 0
    for i in d:
        if d[i] > y:
            y = d[i]
            x = i
    return x
'''
    return reduce(lambda x,y: x if d[x]>d[y] else y, d)

print(mostfreq())


