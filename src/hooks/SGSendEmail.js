// install axios, cors(?), dotenv, ...
require('dotenv').config();

const axios = require('axios');
const kcurl = process.env.REACT_APP_KOR_BASEURL;
const templateId = process.env.REACT_APP_TEMPLATEID;


async function sGSendEmail(senderName, senderTitle, senderPhone, senderEmail, senderPermission, senderMessage) {
    const assembledData = {
        "from": {
            "email": process.env.REACT_APP_SG_SENTFROM,
            "name": "Portfolio Site"
        },
        "personalizations": [{
            "to": [{ "email": process.env.REACT_APP_SG_SENDTO }],
            "dynamic_template_data": {
                "sentName": senderName,
                "sentTitle": senderTitle,
                "sentPhoneNum": senderPhone,
                "sentEmail": senderEmail,
                "sentPermissionUse": senderPermission,
                "sentMessage": senderMessage
            },
            "subject": "New Message from Portfolio Site",
        }],
        
        "template_id": templateId
    };

    const config = {
        method: 'post',
        url: kcurl,
        headers: {
            'x-api-key': process.env.REACT_APP_SG_PUBLIC_KEY, 
            'template_id': templateId, 
            'content-type': 'application/json'
        },
        data: assembledData
    };

    try {
        const response = await axios.request(config);
        console.log("response data & status: ", response.data);
    }
    catch( error ) {
        alert("There was an error sending your message. Please try again later or waiting a minute to re-submit. Thank you.");
        console.log("response ERROR returned: ", error.data);
    }
}

export default sGSendEmail;