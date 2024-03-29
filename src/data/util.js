import React from "react";

const R = require('ramda');
const directions = [
    {
        from: 23,
        to: 37,
        dirName: "sv1"

    },
    {
        from: 38,
        to: 67,
        dirName: "sv2"

    },
    {
        from: 68,
        to: 82,
        dirName: "vostok1"

    },
    {
        from: 83,
        to: 112,
        dirName: "vostok23",
        caption: "СВ-2"
    },
    {
        from: 113,
        to: 127,
        dirName: "yv1",
        caption: "СВ-2"
    },
    {
        from: 128,
        to: 157,
        dirName: "yv23",
        caption: "СВ-2"
    },
    {
        from: 158,
        to: 172,
        dirName: "yug1",
        caption: "СВ-2"
    },
    {
        from: 173,
        to: 202,
        dirName: "yug23",
        caption: "Юг-23"
    },
    {
        from: 203,
        to: 217,
        dirName: "yz1",
        caption: "ЮЗ-1"
    },
    {
        from: 218,
        to: 247,
        dirName: "yz23",
        caption: "СВ-2"
    },
    {
        from: 248,
        to: 262,
        dirName: "zapad1",
        caption: "СВ-2"
    },
    {
        from: 263,
        to: 292,
        dirName: "zapad23",
        caption: "СВ-2"
    },
    {
        from: 293,
        to: 307,
        dirName: "sz1",
        caption: "СВ-2"
    },
    {
        from: 308,
        to: 337,
        dirName: "sz23",
        caption: "СВ-2"
    },
    {
        from: 338,
        to: 352,
        dirName: "sever1",
        caption: "СВ-2"
    },
    {
        from: 353,
        to: 360,
        dirName: "sever23",
        caption: "СВ-2"
    },
    {
        from: 0,
        to: 22,
        dirName: "sever23",
        caption: "СВ-2"
    }
];


const vg = {
    "outGua": {
        "489": [
            [342.5, 348],
            [354, 360],
            [0, 5.5],
            [168.5, 174],
            [147, 152.5],
            [90, 96],
            [135, 141],
            [157, 163]
        ],
        "123": [
            [302.5, 309],
            [50.5, 56.5],
            [141, 147],
            [96, 101.5],
            [117.5, 123],
            [107, 112.5],
            [129, 135],
            [292.5, 298]
        ],
        "468": [
            [253, 258],
            [101.5, 107],
            [11.5, 17],
            [56.5, 62],
            [78.5, 84],
            [67.5, 73],
            [45, 50.5],
            [264, 270]

        ],
        "127": [
            [202.5, 208],
            [152.5, 157.5],
            [62.5, 67.5],
            [17, 22.5],
            [39, 45],
            [27.5, 33],
            [6, 11.5],
            [213.5, 219]
        ],
        "689": [
            [22.5, 27.5],
            [332, 337.5],
            [242.5, 247.5],
            [197.5, 202.5],
            [219, 225],
            [206, 213.5],
            [186, 192],
            [33.5, 39]
        ],
        "237": [
            [72.5, 78],
            [281.5, 286.5],
            [192, 197.5],
            [236.5, 242],
            [258, 264],
            [247.5, 253],
            [225, 231],
            [84, 90]
        ],
        "469": [
            [123, 129],
            [231, 236, 5],
            [321, 326.5],
            [276, 281.5],
            [298, 302.5],
            [309, 316],
            [286.5, 292.5],
            [112.5, 118]
        ],
        "137": [
            [174, 180],
            [180, 186],
            [270, 276],
            [315, 321],
            [337, 342.5],
            [348, 354],
            [326.5, 332],
            [163, 168.5]
        ]
    }
};

const tt_489 = vg.outGua["489"]
const tt_123 = vg.outGua["123"];
const tt_468 = vg.outGua["468"];
const tt_127 = vg.outGua["127"];

const tt_689 = vg.outGua["689"];
const tt_237 = vg.outGua["237"];
const tt_469 = vg.outGua["469"];
const tt_137 = vg.outGua["137"];


const gradusOnTyl = (gradusOnFacade) => {
    const isMode1 = (gradusOnFacade < 180);
    const isMode2 = (gradusOnFacade > 180);

    if (isMode1)
        return 180 + gradusOnFacade;

    if (isMode2)
        return Math.abs(360 - (180 + gradusOnFacade));
}


const checkInInterval = (gradus, interval) => {


    let res = R.gte(gradus, interval[0]);
    let res2 = R.lte(gradus, interval[1]);

    return res && res2
}

const check = (gradus, vneGuaIntervals) => {

    for (const arr of vneGuaIntervals) {

        let isCheck = (checkInInterval(gradus, arr));

        if (isCheck) {

            return true
        }
    }
    return false

}

export const foolCheck = (gradusOnFasade) => {

    const gradus = gradusOnTyl(Number.parseFloat(gradusOnFasade))

    if (check(gradus, tt_489))
        return [4,8,9]

    if (check(gradus, tt_123))
        return [1,2,3]

    if (check(gradus, tt_468))
        return [4,6,8]


    if (check(gradus, tt_127))
        return [1,2,7]

    if (check(gradus, tt_689))
        return [6,8,9]

    if (check(gradus, tt_237))
        return [2,3,7]

    if (check(gradus, tt_469))
        return [4,6,9]

    if (check(gradus, tt_137))
        return [1,3,7]

}


const getDirectionByGradusEx = (gradus, directionsArray) => {
    for (const dir of directionsArray) {

       const res = checkInInterval(gradus, [dir.from, dir.to]);

        if (res)
          return dir.dirName
    }

    return ""
};

export const getDirectionByGradus =(gradus)=>getDirectionByGradusEx(gradus, directions)

