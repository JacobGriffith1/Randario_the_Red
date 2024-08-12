from flask import Flask, jsonify
import requests

app = Flask(__name__)

# RapidAPI key
RAPIDAPI_KEY = '7387755acemsh5ca89585b8ce843p114431jsn9b4903b4b38a'

@app.route('/wizard/fact', methods=['GET'])
def get_fun_fact():
    # Constructing the API request
    api_url = "https://api.fungenerators.com/fact/random"
    headers = {
        "X-RapidAPI-Key": RAPIDAPI_KEY,
        "X-RapidAPI-Host": "api.fungenerators.com"
    }

    # Fetch the data from the API
    response = requests.get(api_url, headers=headers)
    
    if response.status_code != 200:
        return jsonify({"error": "Failed to fetch data from the fun fact API"}), 500

    # Parse the response
    fun_fact_data = response.json()

    # Extracting the information
    fun_fact = fun_fact_data.get('contents', {}).get('fact', 'No fact available')

    # Return the fun fact as a JSON response
    return jsonify({"fact": fun_fact})

if __name__ == '__main__':
    app.run(debug=True)
