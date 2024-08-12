from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/wizard/fact', methods=['GET'])
def get_fun_fact():
    # New API URL for random facts
    api_url = "https://uselessfacts.jsph.pl/api/v2/facts/random"

    try:
        # Fetch the data from the new API
        response = requests.get(api_url)
        print(f"API Response Status Code: {response.status_code}")  # Debugging statement
        print(f"API Response Text: {response.text}")  # Debugging statement

        if response.status_code != 200:
            return jsonify({"error": f"API request failed with status {response.status_code}: {response.text}"}), 500

        # Parse the response
        fun_fact_data = response.json()

        # Extracting the information
        fun_fact = fun_fact_data.get('text', 'No fact available')

        # Return the fun fact as a JSON response
        return jsonify({"fact": fun_fact})

    except Exception as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "An unexpected error occurred"}), 500


@app.route('/crystal-ball', methods=['GET'])
def get_fortune():
    api_url = "https://aphorismcookie.herokuapp.com"

    try:
        response = requests.get(api_url)
        print(f"API Response Status Code: {response.status_code}")  # Debugging statement
        print(f"API Response Text: {response.text}")  # Debugging statement

        if response.status_code != 200:
            return jsonify({"error": f"API request failed with status {response.status_code}: {response.text}"}), 500

        fortune_data = response.json()
        fortune_message = fortune_data.get('data', {}).get('message', 'No fortune available')

        return jsonify({"fortune": fortune_message})

    except Exception as e:
        print(f"Error occurred: {e}")  # Debugging statement
        return jsonify({"error": "An unexpected error occurred"}), 500


@app.route('/dad-joke', methods=['GET'])
def get_dad_joke():
    api_url = 'https://icanhazdadjoke.com/'
    headers = {
        'Accept': 'application/json',
        'User-Agent': 'MyApp (https://github.com/your-repo)'  # Replace with your own info
    }
    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()
        joke_data = response.json()
        joke = joke_data.get('joke', 'No joke available')
        return jsonify({"joke": joke})
    except requests.RequestException as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "Failed to fetch data from the dad joke API"}), 500


@app.route('/frog-love-advice', methods=['GET'])
def get_love_advice():
    api_url = "https://love-quote.p.rapidapi.com/lovequote"
    headers = {
        'x-rapidapi-key': '7387755acemsh5ca89585b8ce843p114431jsn9b4903b4b38a',
        'x-rapidapi-host': 'love-quote.p.rapidapi.com'
    }

    try:
        response = requests.get(api_url, headers=headers)
        response.raise_for_status()  # Raise an exception for HTTP errors
        advice_data = response.json()
        advice = advice_data.get('quote', 'No advice available')
        return jsonify({"advice": advice})
    except requests.RequestException as e:
        print(f"Error occurred: {e}")
        return jsonify({"error": "Failed to fetch data from the love advice API"}), 500

if __name__ == '__main__':
    app.run(debug=True)
