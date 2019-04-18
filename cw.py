# class work

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
    if word not in d:
        return "none"
    return d[word]

print(freq("and"))
print(freq("vincent"))
print(freq("brown"))

def totfreq(lst):
    out = [1 for x in range(len(lst)) if lst[x] == lst[0]]
def mostfreq():
    x = ""
    y = 0
    for i in d:
        if d[i] > y:
            y = d[i]
            x = i
    return x

print(mostfreq())
