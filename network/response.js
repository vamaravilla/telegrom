exports.success = function(req, res,message,status){
    res.status(status || 200).send({
        error:'',
        message: message
    });
}

exports.error = function(req, res,error,status,details){
    console.log('[response error] ' + details);

    res.status(status || 500).send({
        error: error,
        message: ''
    });
}

