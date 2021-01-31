module.exports = function reverse (n) {
    let str = n.toString();
    if (str[0] === "-") {
        let str1 = str.slice(1);
        return Number(str1.split('').reverse().join(''));
    }
    else {
        return Number(str.split('').reverse().join(''));
    }
}