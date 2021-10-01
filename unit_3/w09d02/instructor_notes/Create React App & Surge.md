# Surge Deployment of Create React App

#### Deploying the frontend to surge:
​
1. Install surge `npm install -g surge`
​
1. Run the Create React App Build
`cd` into your react app
`npm run build`
​
1. Switch to the `build` directory 
`cd build`
​
1. Rename the `index.html` file to `200.html`
For more info on why click [here](https://surge.sh/help/adding-a-200-page-for-client-side-routing)
​
1. Run Surge, and follow the prompts. All it needs is an email and a password, and you can optionally specify a different domain name.
`surge`
​
1. Go to the URL it prints out.
​
You did it! Your app is now deployed and ready for the world to see.
