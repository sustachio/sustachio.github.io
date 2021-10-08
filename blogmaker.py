import json
import os

# Change the current working directory
os.chdir("C:\\Users\\Seth Mueller\\Documents\\programs\\blog maker")

f = open('blog.json',)
data = json.load(f)

page = data['pages']['home']

print(f'''<!DOCTYPE html>
<html>
<head>
<title>{page['header']}</title>
</head>
</html>
''')