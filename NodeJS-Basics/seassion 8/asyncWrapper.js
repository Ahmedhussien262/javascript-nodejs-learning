module.exports = (asyncfn) => {
    return (req, res, next) => {
        Promise.resolve(asyncfn(req, res, next)).catch(next);
    };
};