import os
import requests
import json
from bs4 import BeautifulSoup
from urllib.parse import urljoin

url = "https://astana.restoran.kz/dishes/sushi"

response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

data_list = []

cat_items = soup.find_all("div", {"class": "list-dish__about"})

for item in cat_items:
    data = {}

    title_block = item.find("div", {"class": "list-dish__text"})
    if title_block is not None:
        title = title_block.find("h3", {"class": "list-dish__title"}).text.strip()
        data["title"] = title
    
    data["category"] = 'Суши'

    price_block = item.find("div", {"class": "list-dish__price"})
    if price_block is not None:
        price = price_block.text.strip().replace("₸", "")
        data["price"] = int(price)

    photo_link = item.find("img", {"class": "img-responsive"})
    if photo_link is not None:
        photo_url = photo_link["src"]
        data["image"] = photo_url

    data_list.append(data)

output_file = "./parse/output.json"

# Сохраняем данные в файл JSON
with open(output_file, "w", encoding="UTF-8") as json_file:
    json.dump(data_list, json_file, ensure_ascii=False, indent=4)

# Получаем абсолютный путь к файлу output.json
output_path = os.path.abspath(output_file)
print("Путь к файлу output.json:", output_path)
