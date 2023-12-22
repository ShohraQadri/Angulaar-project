for (let i = 2; i <= 2; i++) {
    for (let j = 1; j <= 10; j++) {
        // console.log(i + "*" + j + "=" + i * j)

    }


}
// for off loop
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //  console.log(`the number value is ${arr}`);   
}

const greeting = "Good morning."
for (const great of greeting) {
    // console.log(great);
}

// map

const map = new Map()
map.set('IN', "India")
map.set('USA', "Unittied kingdom")
map.set('UK', "Uttara khand")
// map.set('UK', "Uttara khand") duplicate are not repeat

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, '=', value);
}

// for in loop

const programming = ["Shohra", "qadri"]
for (const key in programming) {
    // console.log(key);  sirf index vlue print hoti hai 
    // console.log(programming[key]); brakets me lene se value aati hai
}

const language = ["c", "cpp", "java", "python"]
// language.forEach(function (item) {
//     console.log(item);
// })

// language.forEach((value, index, array) => {
//     console.log(value, index, array);
// })

const languages = [
    {
        languageName: "java",
        shortcutName: "java",
    },
    {
        languageName: "python",
        shortcutName: "py",
    },
    {
        languageName: "java-script",
        shortcutName: "js",
    }
]

languages.forEach((items) => {
    // console.log(items.languageName);
    // console.log(items.shortcutName);
})
