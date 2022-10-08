body = $response.body.replace(/isSchoolAgeMember":\w+/g, 'isSchoolAgeMember":true').replace(/isPreschoolMember":\w+/g, 'isPreschoolMember":true').replace(/schoolAgeMember":\w+/g, 'schoolAgeMember":{
          "__typename": "schoolAgeMember",
          "expiresAt": "2077-07-07"
        }')
$done({body});
