const flexagons = [
    [1, 8, 7, 14, 13, 12],
    [2, 13, 14, 7, 8, 9],
    [3, 10, 9, 16, 15, 14],
    [4, 15, 16, 9, 10, 11],
    [5, 12, 11, 18, 17, 16],
    [6, 17, 18, 11, 12, 13],
    [7, 14, 13, 2, 1, 18],
    [8, 1, 2, 13, 14, 15],
    [9, 16, 15, 4, 3, 2],
    [10, 3, 4, 15, 16, 17],
    [11, 18, 17, 6, 5, 4],
    [12, 5, 6, 17, 18, 1],
    [13, 2, 1, 8, 7, 6],
    [14, 7, 8, 1, 2, 3],
    [15, 4, 3, 10, 9, 8],
    [16, 9, 10, 3, 4, 5],
    [17, 6, 5, 12, 11, 10],
    [18, 11, 12, 5, 6, 7]
]

console.log("digraph Flexagon {")
for (let i = 0; i < flexagons.length; i++) {
    const flexagon = flexagons[i]
    const [a, b, c, d, e, f] = flexagon
    console.log(`    n${i}[label="${a}\\n${b},${c}\\n${d},${e},${f}"];`)
}
for (let i = 0; i < flexagons.length; i++) {
    const flexagon1 = flexagons[i]
    for (let k = i + 1; k < flexagons.length; k++) {
        const flexagon2 = flexagons[k]
        if (!intersect(flexagon1, flexagon2)) {
            console.log(`    n${i} -> n${k};`)
        }
    }
}

console.log("}")

function intersect(arr1, arr2) {
    for (const v of arr1) {
        if (arr2.indexOf(v) !== -1) return true
    }
    return false
}