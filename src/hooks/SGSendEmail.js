// install axios, cors(?), dotenv, ...
require('dotenv').config();

const axios = require('axios');
const kburl = process.env.REACT_APP_KOR_BASEURL;
const templateId = process.env.REACT_APP_TEMPLATEID;


async function sGSendEmail(senderName, senderTitle, senderPhone, senderEmail, senderPermission, senderMessage) {
    const assembledData = JSON.stringify({
        "from":{
            "email": process.env.REACT_APP_SG_SENDTO
        },
        "personalizations": [{
            "to": [{ 
                "email": process.env.REACT_APP_SG_SENDTO 
            }],
            "dynamic_template_data": {
                "sentName": senderName,
                "sentTitle": senderTitle,
                "sentPhoneNum": senderPhone,
                "sentEmail": senderEmail,
                "sentPermissionUse": senderPermission,
                "sentMessage": senderMessage,
            }
        }],
        "template_id": templateId
    });

    const config = {
        method: 'post',
        url: kburl,
        headers: {
            'x-api-key': process.env.REACT_APP_SG_PUBLIC_KEY, 
            'template_id': templateId, 
            'Content-Type': 'application/json'
        },
        data: assembledData
    };

    axios(config)
        .then(function(res) {
            alert("Thank you for reaching out! I'll get back with you as soon as I can");
            console.log("response data status: ", res.status);
        })
        .catch(function(err) {
            alert("Hmm, something went wrong there. Please try again");
            console.log("response ERROR, BE returned: ", err.response.data);
        })
}

export default sGSendEmail;