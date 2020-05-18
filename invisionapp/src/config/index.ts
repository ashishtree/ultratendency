const { REACT_APP_API_HOST, NODE_ENV } = process.env;
console.log("sasdasdasd", process.env);

interface Config {
    environment: any;
    apihost: any;
    comments: any;
}

let configLoaded = false;
let config: Config;

const loadConfig = () => {
    config = {
        environment: NODE_ENV,
        apihost: REACT_APP_API_HOST,
        comments: [
            {
                "text": "Such a massive change in such a short time is extremely unusual",
                "date": "11/5/2020"
            }
        ],
    };
    configLoaded = true;
};

const getConfig = () => {
    if(!configLoaded) {loadConfig();}
    return config;
}

export default { getConfig };