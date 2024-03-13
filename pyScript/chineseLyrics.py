import os

pinyin = open("pinyin.txt", "r")
english = open("english.txt", "r")
chinese = open("chinese.txt", "r")

pinyinLines = pinyin.readlines()
englishLines = english.readlines()
chineseLines = chinese.readlines()

if (len(pinyinLines) == len(englishLines) == len(chineseLines)):
    titleInput = str(input())
    title = titleInput + ".txt"
    output = open(title, "a")

    for i in range(len(pinyinLines)):
        output.write("[" + "\n")
        output.write('"' + chineseLines[i][:-1] + '"' + "," + "\n")
        output.write('"' + pinyinLines[i].lower()[:-1] + '"' + "," + "\n")
        output.write('"' + englishLines[i].lower()[:-1] + '"' + "\n")
        output.write("]," + "\n")
    pass
else:
    print("Mismatched lines")

pinyin.close()
english.close()
chinese.close()
