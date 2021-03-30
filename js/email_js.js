function sendMail(params) {
        var tempParams={
            from_name:document.getElementById('toName').value,
            user_email:document.getElementById('fromName').value,
            message:document.getElementById('message').value,
        };


    emailjs.send('service_p539bai', 'template_5u9phok', tempParams)
    .then(function(res) {
                        console.log('SUCCESS!', res.status);
                        $("#success_message").show();
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
}
