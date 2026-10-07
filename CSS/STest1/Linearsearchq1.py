names = ["Sara", "Ahmed", "Zain", "Hina", "Bilal", "Fatima", "Omar", "Ayesha", "Danish", "Maryam"]

scores = [74, 42, 91, 42, 67, 88, 55, 91, 30, 79]

def Outputplayers(names, scores):
    
    
    for index in range(10):
         print(names[index] + ":", scores[index])

Outputplayers(names,scores)


def FindPlayer(names,nametofind):
     for index in range (10):
          if names[index] == nametofind:
               return index
   
          
     return -1

     
     
     
nametofind = input("Enter player's name: ")

index = FindPlayer(names, nametofind)

if index != -1:
    print(nametofind, "scored", scores[index])
else:
    print(nametofind, "is not in the list")




def HighestScorer(scores):
     highest = scores[0]
     highestindex = 0

     for index in range(1,10):
         if scores[index] > highest:
            highest = scores[index]
            highestindex = index

     return highestindex


highestindex = HighestScorer(scores)

print("The highest score is", scores[highestindex], "by", names[highestindex])

def CountAbove(scores, threshold):
    count = 0

    for index in range(10):
        if scores[index] > threshold:
            count = count + 1

    return count


threshold = int(input("Enter a score between 0 and 100: "))

while threshold < 0 or threshold > 100:
    threshold = int(input("Enter a score between 0 and 100: "))

count = CountAbove(scores, threshold)

print(count, "players scored more than", threshold)
          
                    



     
     

