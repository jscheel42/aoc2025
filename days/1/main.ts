import { readFileSync } from "fs";
import { join } from "path";

function part1(input: string): number {
  const lines = input.trim().split("\n");
  
  let zero_hit_count: number = 0;
  let current_dial_num: number = 50;

  for (const line of lines) {
    let direction: string = line[0];
    let move_num: number = parseInt(line.slice(1), 10);

    if (direction == "R") {
      current_dial_num += move_num
      while (current_dial_num > 99) {
        current_dial_num -= 100
      }
    } else if (direction == "L") {
      current_dial_num -= move_num
      while (current_dial_num < 0) {
        current_dial_num += 100
      }
    }

    if (current_dial_num == 0) {
      zero_hit_count++
    }

  }
  return zero_hit_count;
}

function part2(input: string): number {
  const lines = input.trim().split("\n");
  
  let zero_hit_count: number = 0;
  let current_dial_num: number = 50;

  for (const line of lines) {
    let direction: string = line[0];
    let move_num: number = parseInt(line.slice(1), 10);
    let previous_dial_num = current_dial_num;

    if (direction == "R") {
      current_dial_num += move_num
    } else if (direction == "L") {
      current_dial_num -= move_num
    }

    // console.log(current_dial_num)


    if (current_dial_num == 0) {
      zero_hit_count++
    } else if (current_dial_num > 99) {
      while (current_dial_num > 99) {
        current_dial_num -= 100
        zero_hit_count++
      }
    } else if (current_dial_num < 0) {
      // I'm double counting when I go from 0 to negative num?
      // This ugly code supports L101 or more starting from 0 by subtracting 1 from the count but allowing multiple to be added...
      if (previous_dial_num == 0) {
        zero_hit_count--
      }
      while (current_dial_num < 0) {
        current_dial_num += 100
          zero_hit_count++
      }
    }
  }

  return zero_hit_count;
}

// Read input file
// const input = readFileSync(join(import.meta.dir, "sample.txt"), "utf-8");
const input = readFileSync(join(import.meta.dir, "input.txt"), "utf-8");

// Solve and print result
// const result_1 = part1(input);
// console.log("Part 1:", result_1);
const result_2 = part2(input);
console.log("Part 2:", result_2);

export { part1 };
