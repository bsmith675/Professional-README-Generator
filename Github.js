const axios = require("axios");

const githubAPI = {
    License: (License) => {
        const licenseURL = `https://api.github.com/licenses/${license}`;
        console.log(license);
        if (license === "None") {
            return;
        }

        return axios
            .get(licenseURL)
            .then(function (response) {
                const { body } = response.data;
                return body;
            })
            .catch(function (err) {
                console.log(err);
            });
    },

Data: (username) => {
}