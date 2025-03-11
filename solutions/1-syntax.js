// BEGIN (write your solution here)
export const getWeekends = (param = "long") => {
    if (param === "long") {
        return ["saturday", "sunday"]
    }
    if (param === "short") {
        return ["sat", "sun"]
    }
}
// END
