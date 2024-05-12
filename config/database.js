let connected = false;

const connectDB = async (username,password) => {

//Connect to FilemakerDB
        const url = `${process.env.NEXT_PUBLIC_FILEMAKERDB_URL}/sessions`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            },
        });
        
        const responseText = JSON.parse(await response.text());
        console.log(responseText)
        const token = responseText.response.token;
        return token;

        if (response.ok) { // Check if status code is 200-299
            console.log('FilemakerDB connected..');
            connected = true;
        } else {
            console.log('Failed to connect to FilemakerDB. Status:', response.status);
            connected = false;
        }
        


}

export default connectDB;