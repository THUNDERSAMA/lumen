
from flask import Flask, jsonify, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/scrape_price', methods=['POST'])
def scrape_price():
    
    url = request.json.get('url')

    if not url:
        return jsonify({'error': 'URL not provided.'}), 400
    fullurl="https://pharmeasy.in/search/all?name="+url
    response = requests.get(fullurl)
    soup = BeautifulSoup(response.text, 'html.parser')

  
    discount_container = soup.find('div', class_='ProductCard_gcdDiscountContainer__CCi51')

 
    if discount_container:
        price = discount_container.find('span').text.strip()
        return jsonify({'price': price})
    else:
        return jsonify({'error': 'Discount container not found.'}), 404

if __name__ == '__main__':
    app.run(debug=True)
