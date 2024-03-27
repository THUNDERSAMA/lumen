# Thundersama code base
# author:- samadrit das
# email :-tsama209@gmail.com

import pandas as pd
import time
from selenium import webdriver
from bs4 import BeautifulSoup


def scrape_medicines(url):
    
    chrome_driver_path = 'path/to/chromedriver.exe'  

    
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(options=options)

    driver.get(url)
    time.sleep(5)  # Adding a delay of 5 seconds

    #  page source after waiting for dynamic content to load 😊
    page_source = driver.page_source
    driver.quit()

    soup = BeautifulSoup(page_source, 'html.parser')

    medicines = []
    # find all medicine blocks by my way or highway 😘
    medicine_blocks = soup.find_all('div', class_='style__product-card___1gbex')

    for i, block in enumerate(medicine_blocks):
        name_element = block.select_one('div.style__font-bold___1k9Dl.style__font-14px___YZZrf > div')
        price_element = block.select_one('div.style__font-bold___1k9Dl.style__font-14px___YZZrf > div')

        # Check if both name and price elements are found
        if name_element and price_element:
            name = name_element.text.strip()
            price = price_element.find_next_sibling().text.strip()

            x = price.split("₹")
            price = x[1]
            medicines.append({'Medicine Name': name, 'Price': price})

            # print each medicine name
            print(f"{i + 1}. {name} - {price}")
        else:
            # print a message if either name or price element is not found
            print(f"Skipping medicine block {i + 1} - Name or Price element not found.")

    return medicines

# function to export data to CSV
def export_to_csv(data, filename):
    with open('soup_debug_med.txt', 'w', encoding='utf-8') as file:
       file.write(str(data))
       print('Soup object exported to soup_debug.txt for debugging3.')
    df = pd.DataFrame(data)
    df.to_csv(filename, index=False)
    print(f'Data exported to {filename}')

def main():
    base_url = 'https://www.1mg.com/drugs-all-medicines?page={}&label={}'

    labels = [chr(i) for i in range(ord('a'), ord('g') + 1)]
    all_medicines = []

    for label in labels:
        for page in range(1, 335):  # Adjust the range based on the number of pages scrape 👌😜 
            url = base_url.format(page, label)
            medicines = scrape_medicines(url)
            all_medicines.extend(medicines)

    export_to_csv(all_medicines, 'medicines_data_all.csv')

if __name__ == "__main__":
    main()
