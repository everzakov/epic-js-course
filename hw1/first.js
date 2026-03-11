var console = {log : debug};

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz";
    }
    if (num % 3 == 0) {
        return "Fizz";
    }
    if (num % 5 == 0) {
        return "Buzz";
    }
    return num;
}

function isPalindrom(str) {
    for (let i = 0; i < str.length / 2; ++i) {
        if (str[i] != str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function quadraticEquation(a, b, c) {
    let d = b * b - 4 * a * c;
    if (Math.abs(a) == 0 && Math.abs(b) == 0) {
        return []
    }
    if (Math.abs(a) == 0) {
        return -c / b;
    }
    if (d < 0) {
        return [];
    }
    if (d == 0) {
        return [-b / (2 * a)];
    } else {
        d = Math.sqrt(d);
        return [(-b - d) / (2 * a), (-b + d) / (2 * a)];
    }
}

function drawCalendar(year, month) {
    ans = "\n S   M   T   W   T   F   S  \n";
    let map = new Map();
    map.set(1, 31);
    map.set(2, 28);
    map.set(3, 31);
    map.set(4, 30);
    map.set(5, 31);
    map.set(6, 30);
    map.set(7, 31);
    map.set(8, 31);
    map.set(9, 30);
    map.set(10, 31);
    map.set(11, 30);
    map.set(12, 31);
    let days = map.get(month);
    if (month == 2 && (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)) {
        days = 29
    }
    const d = new Date(year, month - 1, 1);
    for (let day = 0; day < d.getDay(); ++day) {
        ans += "    ";
    }
    for (let day = 1; day <= days; ++day) {
        if (day < 10) {
            ans += " ";
        }
        ans += day + "  ";
        if ((day + d.getDay()) % 7 == 0) {
            ans += "\n";
        }
    }
    return ans;
}

function isDeepEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return false;
        }
        if (a.length != b.length) {
            return false;
        }
        for (let i = 0; i < a.length; ++i) {
            if (!isDeepEqual(a[i], b[i])) {
                return false;
            }
        }
        return true;
    }
    if (Array.isArray(b)) {
        return false;
    }
    if (Object(a) !== a) {
        if (Object(b) !== b) {
            return a == b;
        } else {
            return false;
        }
    }
    if (Object(b) !== b) {
        return false;
    }
    if (Object.keys(a).length != Object.keys(b).length) {
        return false;
    }
    for (let key in a) {
        if (!Object.hasOwn(b, key)) {
            return false;
        }
        if (!isDeepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

function spiral(arr) {
    let ans = []
    let up = 0;
    let down = arr.length;
    let left = 0;
    let right = arr[0].length;
    while (up < down && left < right) {
        for (let k = left; k < right; ++k) {
            ans.push(arr[up][k]);
        }
        up++;
        
        for (let k = up; k < down; ++k) {
            ans.push(arr[k][right - 1]);
        }
        right--;

        for (let k = right - 1; k >= left; --k) {
            ans.push(arr[down - 1][k]);
        }
        down--

        for (let k = down - 1; k >= up; --k) {
            ans.push(arr[k][left]);
        }
        left++;
    }
    return ans;
}

console.log(fizzBuzz(15));
console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(7));

console.log(isPalindrom(""));
console.log(isPalindrom("a"));
console.log(isPalindrom("ab"));
console.log(isPalindrom("aba"));
console.log(isPalindrom("abacaba"));
console.log(isPalindrom("cccaba"));

console.log(drawCalendar(2000, 2));
console.log(drawCalendar(2001, 2));
console.log(drawCalendar(2002, 6));

const a = { prop1 : 1, list : [1, 2, 3], o: { x : 2 }} ;
const b = { list: [1, 2, 3], o: { x : 2 } };

console.log(isDeepEqual(a, b));
b.prop1 = 1;
console.log(isDeepEqual(a, b));

console.log(spiral([[4, 5], [6, 7]]))
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log(spiral([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]))
console.log(spiral([[1]]))
console.log(spiral([[1], [2]]))
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

console.log(quadraticEquation(0, 0, 1))
console.log(quadraticEquation(0, 1, 1))
console.log(quadraticEquation(1, -8, 72))
console.log(quadraticEquation(1, 12, 36))
console.log(quadraticEquation(1, 6, 1))
console.log(quadraticEquation(1, -5, 6))
