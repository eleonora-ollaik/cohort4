#  1. define attributes / variables
# numbers
def dayslived():
    years = 45
    days = 365

    result = years*days
    return(result)

# string 
def catname():
    name = 'Dymok'
    return (f'Cat name is {name}')

# boolean

print (7==7) #true
# Comparisons: ==, !=, >, <, >=, <=
def boolean(): 
    friends = ["Rolf", "Bob"]
    abroad = ["Rolf", "Bob"]
    print(friends == abroad)  # True
    print(friends is abroad)  # False because they are not the same lists
    return
# Lists, tuples and sets

l = ["Bob", "Rolf", "Anne"]
t = ("Bob", "Rolf", "Anne")
s = {"Bob", "Rolf", "Anne"}

# Access individual items in lists and tuples using the index.

print(l[0])
print(t[0])
# print(s[0])  # This gives an error because sets are unordered, so accessing element 0 of something without order doesn't make sense.

# Modify individual items in lists using the index.

l[0] = "Smith"
# t[0] = "Smith"  # This gives an error because tuples are "immutable".

# print(l)
# print(t)

# Add to a list by using `.append`

l.append("Jen")
print(l)
# remove item from list
l.remove("Rolf")
print(l)
# remove the last item
l.pop()
print(l)
# reverse the list
l.reverse()
print(l)
# Tuples cannot be appended to because they are immutable.

# Add to sets by using `.add`

s.add("Jen")
print(s)

# Sets can't have the same element twice.

s.add("Bob")
print(s)
 

