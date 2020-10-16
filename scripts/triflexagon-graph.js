const flexagons = []

for (let i = 0; i < 18; i++) {
    if (i % 2 === 0) {
        flexagons.push([
            i,
            (i + 7) % 18, (i + 6) % 18,
            (i + 13) % 18, (i + 12) % 18, (i + 11) % 18
        ])
    } else {
        flexagons.push([
            i,
            (i + 11) % 18, (i + 12) % 18,
            (i + 5) % 18, (i + 6) % 18, (i + 7) % 18
        ])
    }
}


console.log("digraph Flexagon {")
console.log("    node [fontsize=10];")
console.log("    edge [fontsize=8];")
for (let i = 0; i < flexagons.length; i++) {
    const flexagon = flexagons[i]
    const [a, b, c, d, e, f] = flexagon
    const color = i % 2 === 0 ? "lightpink" : "lightcyan"
    console.log(`    n${i}[label="${a}\\n${b},${c}\\n${d},${e},${f}",shape=box,style=filled,color="${color}"];`)
}
for (let i = 0; i < flexagons.length; i++) {
    const flexagon1 = flexagons[i]
    for (let k = i + 1; k < flexagons.length; k++) {
        const flexagon2 = flexagons[k]
        if (!intersect(flexagon1, flexagon2)) {
            console.log(`    n${i} -> n${k} [label="${k - i} / ${18 - k + i}"];`)
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