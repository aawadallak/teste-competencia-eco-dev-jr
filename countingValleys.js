function countingValleys(steps, path) {
    let valleys = 0;
    let elevation = 0;
    for (let i = 0; i < steps; i++) {

        if (path[i] == "D") {
            elevation--;
        }
        else {
            if (elevation == -1) {
                valleys++;
            }
            elevation++;
        }
    }
    return valleys;
}


