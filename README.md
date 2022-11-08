Produce Sticker Micro-Service

To start this service, run npm start. 
To request data, send requests to localhost:3005/sticker with the query parameter of success. If success is a non-zero value, the string “Produce sticker detected” will be returned, otherwise, the string “Sticker not detected, please try again.” will be returned. 

Example call: 

axios.get(`http://localhost:3005/sticker?success=1`)

Example receiving data:

.then(res => {

            const sticker_alert = res.data;
            
            // using useState to reset sticker alert
            
            setAlert(sticker_alert)
            
          })

<img src="/produce_micro.jpeg" title="Produce Sticker Microservice">
