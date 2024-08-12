from flask import Flask, jsonify
import requests

app = Flask(__name__)

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

if __name__ == '__main__':
    app.run(debug=True)
