
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter((num) => num > 3)
// console.log(newNum);


const pagesets = [
    {
        "start": "10",
        "end": "11",
        "path": "contents/intro/page-10-11/",
        "file-name": "content.html"
    },
    {
        "start": "12",
        "end": "13",
        "path": "contents/intro/page-12-13/",
        "file-name": "content.html"
    },
    {
        "start": "14",
        "end": "15",
        "path": "contents/intro/page-14-15/",
        "file-name": "content.html"
    },
    {
        "start": "16",
        "end": "17",
        "path": "contents/intro/page-16-17/",
        "file-name": "content.html"
    },
    {
        "start": "18",
        "end": "19",
        "path": "contents/intro/page-18-19/",
        "file-name": "content.html"
    },
    {
        "start": "20",
        "end": "21",
        "path": "contents/intro/page-20-21/",
        "file-name": "content.html"
    },
    {
        "start": "22",
        "end": "23",
        "path": "contents/intro/page-22-23/",
        "file-name": "content.html"
    },
    {
        "start": "24",
        "end": "25",
        "path": "contents/intro/page-24-25/",
        "file-name": "content.html"
    },
    {
        "start": "26",
        "end": "27",
        "path": "contents/unit-1/page-26-27/",
        "file-name": "content.html"
    },
    {
        "start": "28",
        "end": "29",
        "path": "contents/unit-1/page-28-29/",
        "file-name": "content.html"
    },
    {
        "start": "30",
        "end": "31",
        "path": "contents/unit-1/page-30-31/",
        "file-name": "content.html"
    },
    {
        "start": "32",
        "end": "33",
        "path": "contents/unit-1/page-32-33/",
        "file-name": "content.html"
    },
    {
        "start": "34",
        "end": "35",
        "path": "contents/unit-1/page-34-35/",
        "file-name": "content.html"
    },
    {
        "start": "36",
        "end": "37",
        "path": "contents/unit-1/page-36-37/",
        "file-name": "content.html"
    },
    {
        "start": "38",
        "end": "39",
        "path": "contents/unit-1/page-38-39/",
        "file-name": "content.html"
    },
    {
        "start": "40",
        "end": "41",
        "path": "contents/unit-1/page-40-41/",
        "file-name": "content.html"
    },
    {
        "start": "42",
        "end": "43",
        "path": "contents/unit-1/page-42-43/",
        "file-name": "content.html"
    },
    {
        "start": "44",
        "end": "45",
        "path": "contents/unit-1/page-44-45/",
        "file-name": "content.html"
    },
    {
        "start": "46",
        "end": "47",
        "path": "contents/unit-1/page-46-47/",
        "file-name": "content.html"
    },
    {
        "start": "48",
        "end": "49",
        "path": "contents/unit-1/page-48-49/",
        "file-name": "content.html"
    },
    {
        "start": "50",
        "end": "51",
        "path": "contents/unit-1/page-50-51/",
        "file-name": "content.html"
    },
    {
        "start": "52",
        "end": "53",
        "path": "contents/unit-1/page-52-53/",
        "file-name": "content.html"
    },
    {
        "start": "54",
        "end": "55",
        "path": "contents/unit-1/page-54-55/",
        "file-name": "content.html"
    },
    {
        "start": "56",
        "end-page-no": "57",
        "path": "contents/unit-1/page-56-57/",
        "file-name": "content.html"
    },
    {
        "start": "58",
        "end-page-no": "59",
        "path": "contents/unit-1/page-58-59/",
        "file-name": "content.html"
    },
    {
        "start": "60",
        "end-page-no": "61",
        "path": "contents/unit-1/page-60-61/",
        "file-name": "content.html"
    }
];

let pages = pagesets.filter((pg) => pg.end <= 12)
console.log(pages);

pages = pagesets.filter((pg) => {
    return pg.start > 55

}) // hmne yaha sscope de dya h to ye return lega
console.log(pages);




