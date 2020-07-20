import csv
import os
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, 'census.csv')

#reading directories
for x in os.listdir('.'):
    print (x)
#gitting size of each file
    size = os.path.getsize(x)
    print (size)
# getting file of all the files
def get_size(start_path = '.'):
    total_size = 0
    for dirpath, dirnames, filenames in os.walk(start_path): #Generate the file names in a directory tree by walking the tree either top-down or bottom-up. For each directory in the tree rooted at directory top (including top itself), it yields a 3-tuple (dirpath, dirnames, filenames).
        for f in filenames:
            fp = os.path.join(dirpath, f)
            # skip if it is symbolic link
            if not os.path.islink(fp): #returns true if directory exists
                total_size += os.path.getsize(fp)

    return total_size

print(get_size(), 'bytes')




with open(my_file, 'r') as csv_file:
    csv_reader = csv.reader(csv_file)

    # next(csv_reader)#starts running from second line
    line = 0
    for line in csv_reader:
        # print(line[3])
        line++
        # print(csv_reader.read())
        print(line)

