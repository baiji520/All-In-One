body = $response.body.replace(/isSchoolAgeMember":\w+/g, 'isSchoolAgeMember":true').replace(/isPreschoolMember":\w+/g, 'isPreschoolMember":true');
$done({body});
