import json

# Открываем файл JSON
with open('./parse/output.json', 'r', encoding='UTF-8') as json_file:
    data = json.load(json_file)

# Функция для экранирования символов в строках, чтобы избежать SQL-инъекций
def escape_string(value):
    return value.replace("'", "''")

# Открытие файла SQL для записи
with open('./parse/output.sql', 'w', encoding='utf-8') as f:
    # Генерация запросов SQL INSERT
    for item in data:
        insert_query = "INSERT INTO place (title,  category, price, photo_url) VALUES ('{0}', '{1}', '{2}', '{3}');".format(
            escape_string(item["title"]),
            escape_string(item["category"]),
            (item["price"]),
            escape_string(item["photo_url"]),
        )
        f.write(insert_query + '\n')

print('SQL file generated successfully.')
