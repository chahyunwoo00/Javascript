from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})  # 올바른 URL 형식

# 예제 데이터
data = {
    'items': [
        {'id': 1, 'name': 'Item 1'},
        {'id': 2, 'name': 'Item 2'},
        {'id': 3, 'name': 'Item 3'}
    ]
}

@app.route('/api/items', methods=['GET'])
def get_items():
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
