from selenium import webdriver
import time
import os
import requests
from bs4 import BeautifulSoup
dir_list = ["Book_a_meeting.html", "Cooling.html",
            "Maintaince_Repair.html", "quoteform.html", "Ventilation.html"]

for i in dir_list:
    if ".html" in i and "index" not in i:
        with open(i, 'w+') as newfile:
            browser = webdriver.Chrome()
            namoftab = i.split(".")[0]

            browser.get(os.getcwd()+'\index.html#'+'/' + namoftab)
            time.sleep(0.1)
            html = browser.page_source
            soup = BeautifulSoup(html)

            newfile.write(soup.prettify())

            print(f"Done With: {namoftab}")
print("files have Been created")

# close web browser
