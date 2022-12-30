# open both files
import os
dir_list = ["Book_a_meeting.html", "Cooling.html",
            "Maintaince_Repair.html", "quoteform.html", "Ventilation.html"]
print("file Has Been created")
for i in dir_list:
    if ".html" in i and "index" not in i:
        with open('index.html', 'r') as firstfile, open(i, 'w+') as secondfile:

           # read content from first file
            for line in firstfile:

             # append content to second file
                secondfile.write(line)
