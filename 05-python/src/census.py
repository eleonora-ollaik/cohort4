import csv
import os
THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
my_file = os.path.join(THIS_FOLDER, 'census.csv')

#reading directories
for x in os.listdir('.'):
    # print (x)
#gitting size of each file
    size = os.path.getsize(x)
    # print (size)
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

# print(get_size(), 'bytes')


# working with Census data




with open(my_file, 'r') as csv_file:
    csv_reader = csv.reader(csv_file)
    classCount = 0
    total = 0
    # headerline = next(csv_reader)
    header = csv_file.readline().strip().split(',')
    # print(header)
    entries = []
    # sectors = ['NORTH', 'NORTHEAST', 'EAST', 'SOUTHEAST', 'SOUTH', 'SOUTHWEST', 'WEST', 'NORTHWEST', 'CENTRE']


    for line in csv_file:

        parts = line.strip().split(',')
        row = dict()
        for i, h in enumerate(header):
            row[h] = parts[i]
        # print(parts[3])
        entries.append(row)
        print(entries)
        # print(parts[9])
        # population = [int(i) for i in parts[9]]
        # print(population)
        # for i in population:
        #     classCount += int(population[i])
        # print (classCount)
    entries.sort(key = lambda r: -1*int(r['RES_CNT']))
    # for i in sectors:
    #     def function (lineName, count, total, sectors[i]):
    #         count +=1
    #                 # total += int(line['RES_CNT'])
    #         return (f"Count: {count}; total: {total}, sector: {sectors[i]}"

    for e in entries:
        classCount += int(e['RES_CNT'])

            
        print("Sector {0}, Population {1}".format(
            e['SECTOR'], (e['RES_CNT'])
        ))
    print (classCount)



    for line in csv_file:
        row = line.split(',')
        print(row[0])
        # for i in range(1, len(row)):
        #     print(row[i])

    #         def function (lineName, count, total, sectors[i]):
    #             count +=1
    #             # total += int(line['RES_CNT'])
    #             return (f"Count: {count}; total: {total}, sector: {sectors[i]}"

    #         cl = function(line[0], classCount, total)
            # print(cl)

        

