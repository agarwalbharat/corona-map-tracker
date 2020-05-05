let baseUrl = "https://corona.lmao.ninja/v2";

let services = {
    getDataCountry: () => {
        return new Promise((resolve, reject) => {
            fetch(`${baseUrl}/countries`, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(doc => {
                    resolve({
                        success: true,
                        data: doc
                    });
                })
                .catch(e => {
                    reject({
                        success: false,
                        data: e
                    });
                    // console.log(e);
                });
        });
    },
    getIndiaData: () => {
        return new Promise((resolve, reject) => {
            fetch(`https://api.rootnet.in/covid19-in/stats/latest`)
                .then(res => res.json())
                .then(doc => {
                    resolve({
                        success: true,
                        data: doc
                    });
                })
                .catch(e => {
                    console.log(e);
                    reject({
                        success: false,
                        data: e
                    });
                });
        });
    },
};

export default services;