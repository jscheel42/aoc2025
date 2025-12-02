import { readFileSync } from "fs";
import { join } from "path";

function part1(input: string): number {
    const lines = input.trim().split("\n");

    // Example: Sum all numbers in the input
    let sum = 0;
    for (const line of lines) {
        const num = parseInt(line, 10);
        if (!isNaN(num)) {
            sum += num;
        }
    }

    return sum;
}

// Read input file
const input = readFileSync(join(import.meta.dir, "input.txt"), "utf-8");

// Solve and print result
const result = part1(input);
console.log("Part 1:", result);

export { part1 };
