class FindDuplicate287 {
    // Method to find the duplicate number in an array
    findDuplicate(nums: number[]): number {
        // Initialize two pointers
        let i: number = 0;
        let j: number = 1;

        // Sort the array
        nums.sort((a, b) => a - b);

        // Iterate through the sorted array
        while (j < nums.length) {
            // If the current element is equal to the next element, return it as duplicate
            if (nums[i] == nums[j]) {
                return nums[i];
            }
            // Move both pointers forward
            else {
                i++;
                j++;
            }
        }

        // If no duplicate is found, return -1 (though the problem states there's always one duplicate)
        return -1;
    }
}

// Example use case
const nums = [1, 3, 4, 2, 2];
const duplicateFinder = new FindDuplicate287();
const duplicate = duplicateFinder.findDuplicate(nums);
console.log("The duplicate number is:", duplicate);
