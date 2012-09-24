module.exports = probe;

function probe (server, options) {
    options = options || {};

    var path = options.path || '/probe';
    var uptime = options.uptime;
    
    server.get(path, function (req, res, next) {
        var data = {
            status: 'ok'
        };

        if (uptime) {
            data.uptime = process.uptime();
        }

        return res.send(200, data);
    });

    return function (req, res, next) {
        return next();
    };
}
