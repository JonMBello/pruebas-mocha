function isAlive(ping) {
    try {
        var pingOneSucces = ping();
        var pingTwoSucces = ping();
        var pingThreeSucces = ping();
    } catch (error) {
        return new Error('Ping throw exception');
    }

    if(pingOneSucces && pingTwoSucces && pingThreeSucces) return true;
    return false;
}

module.exports = isAlive;