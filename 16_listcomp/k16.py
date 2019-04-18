y# Derek Song
# Soft Dev - pd8
# K16 - Do You Even List?
# 2019 - 4 - 11

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
NUM = "1234567890"
SP_CHAR = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

def task1(pw):
    numUpper = len([x for x in pw if x in UC_LETTERS]) # gives # of uppercase letters
    numLower = len([x for x in pw if x in LC_LETTERS]) # gives # of lowercase letters
    numNum = len([x for x in pw if x in NUM]) # gives # of numbers
    if (len(pw) >= 6 and numNum >= 1 and numUpper >= 1 and numLower >= 1):
        return "Strong!"
    return "Weak... Make it stronger"

def task2(pw):
    numUpper = len([x for x in pw if x in UC_LETTERS]) # gives # of uppercase letters
    numLower = len([x for x in pw if x in LC_LETTERS]) # gives # of lowercase letters
    numSpec = len([x for x in pw if x in SP_CHAR]) # gives # of special characters
    numNum = len([x for x in pw if x in NUM]) # gives # of numbers

    print ("OUT OF 9")
    if (len(pw) <= 6):
        return len(pw)
    if (numNum >= 1 and numUpper >= 3 and numLower >= 3 and numSpec >= 1):
        return 9
    if (numNum >= 1 and numUpper >= 3 and numLower >= 3):
        return 8
    if (numUpper >= 3 and numLower >= 3):
        return 7
        
