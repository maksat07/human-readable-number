
module.exports = function toReadable(num) {
    const NUMBERS = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    };
    const getFromObj = num => NUMBERS[num];
    const lessThen100 = num => (num <= 20 || num % 10 === 0) ? getFromObj(num) : `${getFromObj(Math.floor(num / 10) * 10)} ${getFromObj(num % 10)}`;
    const moreThen100 = num => `${getFromObj(Math.floor(num / 100))} hundred`;

    if (num <= 20) { return getFromObj(num); }

    if (num < 100) { return lessThen100(num); }

    if (num >= 100) { return num % 100 === 0 ? moreThen100(num) : `${moreThen100(num)} ${lessThen100(num % 100)}`; }
};