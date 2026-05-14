export type Difficulty = "E" | "M" | "H";

export type Problem = {
  slug: string;
  title: string;
  url: string;
  difficulty: Difficulty;
  topic: string;
};

export const problems: Problem[] = [
  {
    "slug": "two-sum",
    "title": "Two Sum",
    "url": "https://leetcode.com/problems/two-sum/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "valid-anagram",
    "title": "Valid Anagram",
    "url": "https://leetcode.com/problems/valid-anagram/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "contains-duplicate",
    "title": "Contains Duplicate",
    "url": "https://leetcode.com/problems/contains-duplicate/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "group-anagrams",
    "title": "Group Anagrams",
    "url": "https://leetcode.com/problems/group-anagrams/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "url": "https://leetcode.com/problems/top-k-frequent-elements/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "url": "https://leetcode.com/problems/product-of-array-except-self/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "valid-sudoku",
    "title": "Valid Sudoku",
    "url": "https://leetcode.com/problems/valid-sudoku/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "encode-and-decode-strings",
    "title": "Encode and Decode Strings",
    "url": "https://leetcode.com/problems/encode-and-decode-strings/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "url": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "majority-element",
    "title": "Majority Element",
    "url": "https://leetcode.com/problems/majority-element/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "sort-colors",
    "title": "Sort Colors",
    "url": "https://leetcode.com/problems/sort-colors/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "find-pivot-index",
    "title": "Find Pivot Index",
    "url": "https://leetcode.com/problems/find-pivot-index/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "isomorphic-strings",
    "title": "Isomorphic Strings",
    "url": "https://leetcode.com/problems/isomorphic-strings/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "word-pattern",
    "title": "Word Pattern",
    "url": "https://leetcode.com/problems/word-pattern/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "next-permutation",
    "title": "Next Permutation",
    "url": "https://leetcode.com/problems/next-permutation/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "find-all-numbers-disappeared-in-an-array",
    "title": "Find All Numbers Disappeared in an Array",
    "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "first-missing-positive",
    "title": "First Missing Positive",
    "url": "https://leetcode.com/problems/first-missing-positive/",
    "difficulty": "H",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "continuous-subarray-sum",
    "title": "Continuous Subarray Sum",
    "url": "https://leetcode.com/problems/continuous-subarray-sum/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "url": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "insert-delete-getrandom-o1",
    "title": "Insert Delete GetRandom O(1)",
    "url": "https://leetcode.com/problems/insert-delete-getrandom-o1/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "find-the-duplicate-number",
    "title": "Find the Duplicate Number",
    "url": "https://leetcode.com/problems/find-the-duplicate-number/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "set-matrix-zeroes",
    "title": "Set Matrix Zeroes",
    "url": "https://leetcode.com/problems/set-matrix-zeroes/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "spiral-matrix",
    "title": "Spiral Matrix",
    "url": "https://leetcode.com/problems/spiral-matrix/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "rotate-image",
    "title": "Rotate Image",
    "url": "https://leetcode.com/problems/rotate-image/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "minimum-number-of-swaps-to-make-the-string-balanced",
    "title": "Minimum Number of Swaps to Make the String Balanced",
    "url": "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "find-all-duplicates-in-an-array",
    "title": "Find All Duplicates in an Array",
    "url": "https://leetcode.com/problems/find-all-duplicates-in-an-array/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "difficulty": "E",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "best-time-to-buy-and-sell-stock-ii",
    "title": "Best Time to Buy and Sell Stock II",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "valid-palindrome",
    "title": "Valid Palindrome",
    "url": "https://leetcode.com/problems/valid-palindrome/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "two-sum-ii--input-array-is-sorted",
    "title": "Two Sum II - Input Array Is Sorted",
    "url": "https://leetcode.com/problems/two-sum-ii--input-array-is-sorted/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "3sum",
    "title": "3Sum",
    "url": "https://leetcode.com/problems/3sum/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "container-with-most-water",
    "title": "Container With Most Water",
    "url": "https://leetcode.com/problems/container-with-most-water/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "url": "https://leetcode.com/problems/trapping-rain-water/",
    "difficulty": "H",
    "topic": "Two Pointers"
  },
  {
    "slug": "valid-palindrome-ii",
    "title": "Valid Palindrome II",
    "url": "https://leetcode.com/problems/valid-palindrome-ii/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "merge-strings-alternately",
    "title": "Merge Strings Alternately",
    "url": "https://leetcode.com/problems/merge-strings-alternately/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "reverse-string",
    "title": "Reverse String",
    "url": "https://leetcode.com/problems/reverse-string/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "merge-sorted-array",
    "title": "Merge Sorted Array",
    "url": "https://leetcode.com/problems/merge-sorted-array/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "move-zeroes",
    "title": "Move Zeroes",
    "url": "https://leetcode.com/problems/move-zeroes/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "remove-duplicates-from-sorted-array",
    "title": "Remove Duplicates from Sorted Array",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "remove-element",
    "title": "Remove Element",
    "url": "https://leetcode.com/problems/remove-element/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "string-compression",
    "title": "String Compression",
    "url": "https://leetcode.com/problems/string-compression/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "rotate-array",
    "title": "Rotate Array",
    "url": "https://leetcode.com/problems/rotate-array/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "boats-to-save-people",
    "title": "Boats to Save People",
    "url": "https://leetcode.com/problems/boats-to-save-people/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sort-array-by-parity",
    "title": "Sort Array By Parity",
    "url": "https://leetcode.com/problems/sort-array-by-parity/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "squares-of-a-sorted-array",
    "title": "Squares of a Sorted Array",
    "url": "https://leetcode.com/problems/squares-of-a-sorted-array/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "backspace-string-compare",
    "title": "Backspace String Compare",
    "url": "https://leetcode.com/problems/backspace-string-compare/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "interval-list-intersections",
    "title": "Interval List Intersections",
    "url": "https://leetcode.com/problems/interval-list-intersections/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "number-of-subsequences-that-satisfy-the-given-sum-condition",
    "title": "Number of Subsequences That Satisfy the Given Sum Condition",
    "url": "https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "4sum",
    "title": "4Sum",
    "url": "https://leetcode.com/problems/4sum/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "reverse-vowels-of-a-string",
    "title": "Reverse Vowels of a String",
    "url": "https://leetcode.com/problems/reverse-vowels-of-a-string/",
    "difficulty": "E",
    "topic": "Two Pointers"
  },
  {
    "slug": "partition-labels",
    "title": "Partition Labels",
    "url": "https://leetcode.com/problems/partition-labels/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "url": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "url": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "permutation-in-string",
    "title": "Permutation in String",
    "url": "https://leetcode.com/problems/permutation-in-string/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "url": "https://leetcode.com/problems/minimum-window-substring/",
    "difficulty": "H",
    "topic": "Sliding Window"
  },
  {
    "slug": "sliding-window-maximum",
    "title": "Sliding Window Maximum",
    "url": "https://leetcode.com/problems/sliding-window-maximum/",
    "difficulty": "H",
    "topic": "Sliding Window"
  },
  {
    "slug": "contains-duplicate-ii",
    "title": "Contains Duplicate II",
    "url": "https://leetcode.com/problems/contains-duplicate-ii/",
    "difficulty": "E",
    "topic": "Sliding Window"
  },
  {
    "slug": "number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold",
    "title": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
    "url": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "maximum-average-subarray-i",
    "title": "Maximum Average Subarray I",
    "url": "https://leetcode.com/problems/maximum-average-subarray-i/",
    "difficulty": "E",
    "topic": "Sliding Window"
  },
  {
    "slug": "find-all-anagrams-in-a-string",
    "title": "Find All Anagrams in a String",
    "url": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "fruit-into-baskets",
    "title": "Fruit Into Baskets",
    "url": "https://leetcode.com/problems/fruit-into-baskets/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "longest-turbulent-subarray",
    "title": "Longest Turbulent Subarray",
    "url": "https://leetcode.com/problems/longest-turbulent-subarray/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "minimum-size-subarray-sum",
    "title": "Minimum Size Subarray Sum",
    "url": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "maximum-points-you-can-obtain-from-cards",
    "title": "Maximum Points You Can Obtain from Cards",
    "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "subarrays-with-k-different-integers",
    "title": "Subarrays with K Different Integers",
    "url": "https://leetcode.com/problems/subarrays-with-k-different-integers/",
    "difficulty": "H",
    "topic": "Sliding Window"
  },
  {
    "slug": "longest-subarray-of-1s-after-deleting-one-element",
    "title": "Longest Subarray of 1s After Deleting One Element",
    "url": "https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "max-consecutive-ones-iii",
    "title": "Max Consecutive Ones III",
    "url": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "valid-parentheses",
    "title": "Valid Parentheses",
    "url": "https://leetcode.com/problems/valid-parentheses/",
    "difficulty": "E",
    "topic": "Stack"
  },
  {
    "slug": "min-stack",
    "title": "Min Stack",
    "url": "https://leetcode.com/problems/min-stack/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "evaluate-reverse-polish-notation",
    "title": "Evaluate Reverse Polish Notation",
    "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "generate-parentheses",
    "title": "Generate Parentheses",
    "url": "https://leetcode.com/problems/generate-parentheses/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "daily-temperatures",
    "title": "Daily Temperatures",
    "url": "https://leetcode.com/problems/daily-temperatures/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "car-fleet",
    "title": "Car Fleet",
    "url": "https://leetcode.com/problems/car-fleet/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle in Histogram",
    "url": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "difficulty": "H",
    "topic": "Stack"
  },
  {
    "slug": "baseball-game",
    "title": "Baseball Game",
    "url": "https://leetcode.com/problems/baseball-game/",
    "difficulty": "E",
    "topic": "Stack"
  },
  {
    "slug": "implement-stack-using-queues",
    "title": "Implement Stack using Queues",
    "url": "https://leetcode.com/problems/implement-stack-using-queues/",
    "difficulty": "E",
    "topic": "Stack"
  },
  {
    "slug": "removing-stars-from-a-string",
    "title": "Removing Stars From a String",
    "url": "https://leetcode.com/problems/removing-stars-from-a-string/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "validate-stack-sequences",
    "title": "Validate Stack Sequences",
    "url": "https://leetcode.com/problems/validate-stack-sequences/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "asteroid-collision",
    "title": "Asteroid Collision",
    "url": "https://leetcode.com/problems/asteroid-collision/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "online-stock-span",
    "title": "Online Stock Span",
    "url": "https://leetcode.com/problems/online-stock-span/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "simplify-path",
    "title": "Simplify Path",
    "url": "https://leetcode.com/problems/simplify-path/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "decode-string",
    "title": "Decode String",
    "url": "https://leetcode.com/problems/decode-string/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "remove-k-digits",
    "title": "Remove K Digits",
    "url": "https://leetcode.com/problems/remove-k-digits/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "remove-all-adjacent-duplicates-in-string-ii",
    "title": "Remove All Adjacent Duplicates in String II",
    "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "132-pattern",
    "title": "132 Pattern",
    "url": "https://leetcode.com/problems/132-pattern/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "maximum-frequency-stack",
    "title": "Maximum Frequency Stack",
    "url": "https://leetcode.com/problems/maximum-frequency-stack/",
    "difficulty": "H",
    "topic": "Stack"
  },
  {
    "slug": "basic-calculator",
    "title": "Basic Calculator",
    "url": "https://leetcode.com/problems/basic-calculator/",
    "difficulty": "H",
    "topic": "Stack"
  },
  {
    "slug": "basic-calculator-ii",
    "title": "Basic Calculator II",
    "url": "https://leetcode.com/problems/basic-calculator-ii/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-search",
    "title": "Binary Search",
    "url": "https://leetcode.com/problems/binary-search/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "search-a-2d-matrix",
    "title": "Search a 2D Matrix",
    "url": "https://leetcode.com/problems/search-a-2d-matrix/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "url": "https://leetcode.com/problems/koko-eating-bananas/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "time-based-key-value-store",
    "title": "Time Based Key-Value Store",
    "url": "https://leetcode.com/problems/time-based-key-value-store/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "url": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "difficulty": "H",
    "topic": "Binary Search"
  },
  {
    "slug": "search-insert-position",
    "title": "Search Insert Position",
    "url": "https://leetcode.com/problems/search-insert-position/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "guess-number-higher-or-lower",
    "title": "Guess Number Higher or Lower",
    "url": "https://leetcode.com/problems/guess-number-higher-or-lower/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "arranging-coins",
    "title": "Arranging Coins",
    "url": "https://leetcode.com/problems/arranging-coins/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "valid-perfect-square",
    "title": "Valid Perfect Square",
    "url": "https://leetcode.com/problems/valid-perfect-square/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "sqrtx",
    "title": "Sqrt(x)",
    "url": "https://leetcode.com/problems/sqrtx/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "first-bad-version",
    "title": "First Bad Version",
    "url": "https://leetcode.com/problems/first-bad-version/",
    "difficulty": "E",
    "topic": "Binary Search"
  },
  {
    "slug": "find-first-and-last-position-of-element-in-sorted-array",
    "title": "Find First and Last Position of Element in Sorted Array",
    "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "capacity-to-ship-packages-within-d-days",
    "title": "Capacity To Ship Packages Within D Days",
    "url": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "find-peak-element",
    "title": "Find Peak Element",
    "url": "https://leetcode.com/problems/find-peak-element/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "search-in-rotated-sorted-array-ii",
    "title": "Search in Rotated Sorted Array II",
    "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "find-minimum-in-rotated-sorted-array-ii",
    "title": "Find Minimum in Rotated Sorted Array II",
    "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
    "difficulty": "H",
    "topic": "Binary Search"
  },
  {
    "slug": "split-array-largest-sum",
    "title": "Split Array Largest Sum",
    "url": "https://leetcode.com/problems/split-array-largest-sum/",
    "difficulty": "H",
    "topic": "Binary Search"
  },
  {
    "slug": "allocate-books",
    "title": "Allocate Books",
    "url": "https://leetcode.com/problems/allocate-books/",
    "difficulty": "H",
    "topic": "Binary Search"
  },
  {
    "slug": "minimum-number-of-days-to-make-m-bouquets",
    "title": "Minimum Number of Days to Make m Bouquets",
    "url": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "reverse-linked-list",
    "title": "Reverse Linked List",
    "url": "https://leetcode.com/problems/reverse-linked-list/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "url": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "reorder-list",
    "title": "Reorder List",
    "url": "https://leetcode.com/problems/reorder-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node From End of List",
    "url": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "copy-list-with-random-pointer",
    "title": "Copy List with Random Pointer",
    "url": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "add-two-numbers",
    "title": "Add Two Numbers",
    "url": "https://leetcode.com/problems/add-two-numbers/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "linked-list-cycle",
    "title": "Linked List Cycle",
    "url": "https://leetcode.com/problems/linked-list-cycle/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "lru-cache",
    "title": "LRU Cache",
    "url": "https://leetcode.com/problems/lru-cache/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "merge-k-sorted-lists",
    "title": "Merge k Sorted Lists",
    "url": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "difficulty": "H",
    "topic": "Linked List"
  },
  {
    "slug": "reverse-nodes-in-k-group",
    "title": "Reverse Nodes in k-Group",
    "url": "https://leetcode.com/problems/reverse-nodes-in-k-group/",
    "difficulty": "H",
    "topic": "Linked List"
  },
  {
    "slug": "middle-of-the-linked-list",
    "title": "Middle of the Linked List",
    "url": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "palindrome-linked-list",
    "title": "Palindrome Linked List",
    "url": "https://leetcode.com/problems/palindrome-linked-list/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "intersection-of-two-linked-lists",
    "title": "Intersection of Two Linked Lists",
    "url": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "remove-linked-list-elements",
    "title": "Remove Linked List Elements",
    "url": "https://leetcode.com/problems/remove-linked-list-elements/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "remove-duplicates-from-sorted-list",
    "title": "Remove Duplicates from Sorted List",
    "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    "difficulty": "E",
    "topic": "Linked List"
  },
  {
    "slug": "design-linked-list",
    "title": "Design Linked List",
    "url": "https://leetcode.com/problems/design-linked-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "swap-nodes-in-pairs",
    "title": "Swap Nodes in Pairs",
    "url": "https://leetcode.com/problems/swap-nodes-in-pairs/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "rotate-list",
    "title": "Rotate List",
    "url": "https://leetcode.com/problems/rotate-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "partition-list",
    "title": "Partition List",
    "url": "https://leetcode.com/problems/partition-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "sort-list",
    "title": "Sort List",
    "url": "https://leetcode.com/problems/sort-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "reverse-linked-list-ii",
    "title": "Reverse Linked List II",
    "url": "https://leetcode.com/problems/reverse-linked-list-ii/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "add-two-numbers-ii",
    "title": "Add Two Numbers II",
    "url": "https://leetcode.com/problems/add-two-numbers-ii/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "insertion-sort-list",
    "title": "Insertion Sort List",
    "url": "https://leetcode.com/problems/insertion-sort-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "swapping-nodes-in-a-linked-list",
    "title": "Swapping Nodes in a Linked List",
    "url": "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "split-linked-list-in-parts",
    "title": "Split Linked List in Parts",
    "url": "https://leetcode.com/problems/split-linked-list-in-parts/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "url": "https://leetcode.com/problems/invert-binary-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "url": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "balanced-binary-tree",
    "title": "Balanced Binary Tree",
    "url": "https://leetcode.com/problems/balanced-binary-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "same-tree",
    "title": "Same Tree",
    "url": "https://leetcode.com/problems/same-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "subtree-of-another-tree",
    "title": "Subtree of Another Tree",
    "url": "https://leetcode.com/problems/subtree-of-another-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "url": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "url": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "count-good-nodes-in-binary-tree",
    "title": "Count Good Nodes in Binary Tree",
    "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "url": "https://leetcode.com/problems/validate-binary-search-tree/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element in a BST",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "binary-tree-maximum-path-sum",
    "title": "Binary Tree Maximum Path Sum",
    "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "difficulty": "H",
    "topic": "Trees"
  },
  {
    "slug": "serialize-and-deserialize-binary-tree",
    "title": "Serialize and Deserialize Binary Tree",
    "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "difficulty": "H",
    "topic": "Trees"
  },
  {
    "slug": "merge-two-binary-trees",
    "title": "Merge Two Binary Trees",
    "url": "https://leetcode.com/problems/merge-two-binary-trees/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "path-sum",
    "title": "Path Sum",
    "url": "https://leetcode.com/problems/path-sum/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "minimum-depth-of-binary-tree",
    "title": "Minimum Depth of Binary Tree",
    "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "symmetric-tree",
    "title": "Symmetric Tree",
    "url": "https://leetcode.com/problems/symmetric-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "convert-sorted-array-to-binary-search-tree",
    "title": "Convert Sorted Array to Binary Search Tree",
    "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "binary-tree-inorder-traversal",
    "title": "Binary Tree Inorder Traversal",
    "url": "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "binary-tree-preorder-traversal",
    "title": "Binary Tree Preorder Traversal",
    "url": "https://leetcode.com/problems/binary-tree-preorder-traversal/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "binary-tree-postorder-traversal",
    "title": "Binary Tree Postorder Traversal",
    "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "difficulty": "E",
    "topic": "Trees"
  },
  {
    "slug": "insert-into-a-binary-search-tree",
    "title": "Insert into a Binary Search Tree",
    "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "delete-node-in-a-bst",
    "title": "Delete Node in a BST",
    "url": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "lowest-common-ancestor-of-a-binary-tree",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "all-nodes-distance-k-in-binary-tree",
    "title": "All Nodes Distance K in Binary Tree",
    "url": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "construct-binary-tree-from-inorder-and-postorder-traversal",
    "title": "Construct Binary Tree from Inorder and Postorder Traversal",
    "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "flatten-binary-tree-to-linked-list",
    "title": "Flatten Binary Tree to Linked List",
    "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "populating-next-right-pointers-in-each-node",
    "title": "Populating Next Right Pointers in Each Node",
    "url": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "unique-binary-search-trees",
    "title": "Unique Binary Search Trees",
    "url": "https://leetcode.com/problems/unique-binary-search-trees/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "implement-trie-prefix-tree",
    "title": "Implement Trie (Prefix Tree)",
    "url": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "design-add-and-search-words-data-structure",
    "title": "Design Add and Search Words Data Structure",
    "url": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "word-search-ii",
    "title": "Word Search II",
    "url": "https://leetcode.com/problems/word-search-ii/",
    "difficulty": "H",
    "topic": "Tries"
  },
  {
    "slug": "prefix-and-suffix-search",
    "title": "Prefix and Suffix Search",
    "url": "https://leetcode.com/problems/prefix-and-suffix-search/",
    "difficulty": "H",
    "topic": "Tries"
  },
  {
    "slug": "maximum-xor-of-two-numbers-in-an-array",
    "title": "Maximum XOR of Two Numbers in an Array",
    "url": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "replace-words",
    "title": "Replace Words",
    "url": "https://leetcode.com/problems/replace-words/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "map-sum-pairs",
    "title": "Map Sum Pairs",
    "url": "https://leetcode.com/problems/map-sum-pairs/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "camelcase-matching",
    "title": "Camelcase Matching",
    "url": "https://leetcode.com/problems/camelcase-matching/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "palindrome-pairs",
    "title": "Palindrome Pairs",
    "url": "https://leetcode.com/problems/palindrome-pairs/",
    "difficulty": "H",
    "topic": "Tries"
  },
  {
    "slug": "kth-largest-element-in-a-stream",
    "title": "Kth Largest Element in a Stream",
    "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream/",
    "difficulty": "E",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "last-stone-weight",
    "title": "Last Stone Weight",
    "url": "https://leetcode.com/problems/last-stone-weight/",
    "difficulty": "E",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "k-closest-points-to-origin",
    "title": "K Closest Points to Origin",
    "url": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "kth-largest-element-in-an-array",
    "title": "Kth Largest Element in an Array",
    "url": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "task-scheduler",
    "title": "Task Scheduler",
    "url": "https://leetcode.com/problems/task-scheduler/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "design-twitter",
    "title": "Design Twitter",
    "url": "https://leetcode.com/problems/design-twitter/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "find-median-from-data-stream",
    "title": "Find Median from Data Stream",
    "url": "https://leetcode.com/problems/find-median-from-data-stream/",
    "difficulty": "H",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "top-k-frequent-words",
    "title": "Top K Frequent Words",
    "url": "https://leetcode.com/problems/top-k-frequent-words/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "sort-characters-by-frequency",
    "title": "Sort Characters By Frequency",
    "url": "https://leetcode.com/problems/sort-characters-by-frequency/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "reorganize-string",
    "title": "Reorganize String",
    "url": "https://leetcode.com/problems/reorganize-string/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "kth-smallest-element-in-a-sorted-matrix",
    "title": "Kth Smallest Element in a Sorted Matrix",
    "url": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "find-k-pairs-with-smallest-sums",
    "title": "Find K Pairs with Smallest Sums",
    "url": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "minimum-number-of-refueling-stops",
    "title": "Minimum Number of Refueling Stops",
    "url": "https://leetcode.com/problems/minimum-number-of-refueling-stops/",
    "difficulty": "H",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "swim-in-rising-water",
    "title": "Swim in Rising Water",
    "url": "https://leetcode.com/problems/swim-in-rising-water/",
    "difficulty": "H",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "course-schedule-iii",
    "title": "Course Schedule III",
    "url": "https://leetcode.com/problems/course-schedule-iii/",
    "difficulty": "H",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "maximum-performance-of-a-team",
    "title": "Maximum Performance of a Team",
    "url": "https://leetcode.com/problems/maximum-performance-of-a-team/",
    "difficulty": "H",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "ipo",
    "title": "IPO",
    "url": "https://leetcode.com/problems/ipo/",
    "difficulty": "H",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "subsets",
    "title": "Subsets",
    "url": "https://leetcode.com/problems/subsets/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "combination-sum",
    "title": "Combination Sum",
    "url": "https://leetcode.com/problems/combination-sum/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "permutations",
    "title": "Permutations",
    "url": "https://leetcode.com/problems/permutations/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "subsets-ii",
    "title": "Subsets II",
    "url": "https://leetcode.com/problems/subsets-ii/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "combination-sum-ii",
    "title": "Combination Sum II",
    "url": "https://leetcode.com/problems/combination-sum-ii/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "word-search",
    "title": "Word Search",
    "url": "https://leetcode.com/problems/word-search/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "palindrome-partitioning",
    "title": "Palindrome Partitioning",
    "url": "https://leetcode.com/problems/palindrome-partitioning/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "letter-combinations-of-a-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "url": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "n-queens",
    "title": "N-Queens",
    "url": "https://leetcode.com/problems/n-queens/",
    "difficulty": "H",
    "topic": "Backtracking"
  },
  {
    "slug": "combinations",
    "title": "Combinations",
    "url": "https://leetcode.com/problems/combinations/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "permutations-ii",
    "title": "Permutations II",
    "url": "https://leetcode.com/problems/permutations-ii/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "restore-ip-addresses",
    "title": "Restore IP Addresses",
    "url": "https://leetcode.com/problems/restore-ip-addresses/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "sudoku-solver",
    "title": "Sudoku Solver",
    "url": "https://leetcode.com/problems/sudoku-solver/",
    "difficulty": "H",
    "topic": "Backtracking"
  },
  {
    "slug": "n-queens-ii",
    "title": "N-Queens II",
    "url": "https://leetcode.com/problems/n-queens-ii/",
    "difficulty": "H",
    "topic": "Backtracking"
  },
  {
    "slug": "matchsticks-to-square",
    "title": "Matchsticks to Square",
    "url": "https://leetcode.com/problems/matchsticks-to-square/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "partition-to-k-equal-sum-subsets",
    "title": "Partition to K Equal Sum Subsets",
    "url": "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "find-unique-binary-string",
    "title": "Find Unique Binary String",
    "url": "https://leetcode.com/problems/find-unique-binary-string/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "maximum-length-of-a-concatenated-string-with-unique-characters",
    "title": "Maximum Length of a Concatenated String with Unique Characters",
    "url": "https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "number-of-islands",
    "title": "Number of Islands",
    "url": "https://leetcode.com/problems/number-of-islands/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "max-area-of-island",
    "title": "Max Area of Island",
    "url": "https://leetcode.com/problems/max-area-of-island/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "clone-graph",
    "title": "Clone Graph",
    "url": "https://leetcode.com/problems/clone-graph/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "walls-and-gates",
    "title": "Walls and Gates",
    "url": "https://leetcode.com/problems/walls-and-gates/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "rotting-oranges",
    "title": "Rotting Oranges",
    "url": "https://leetcode.com/problems/rotting-oranges/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "url": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "surrounded-regions",
    "title": "Surrounded Regions",
    "url": "https://leetcode.com/problems/surrounded-regions/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "course-schedule",
    "title": "Course Schedule",
    "url": "https://leetcode.com/problems/course-schedule/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "course-schedule-ii",
    "title": "Course Schedule II",
    "url": "https://leetcode.com/problems/course-schedule-ii/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "redundant-connection",
    "title": "Redundant Connection",
    "url": "https://leetcode.com/problems/redundant-connection/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "word-ladder",
    "title": "Word Ladder",
    "url": "https://leetcode.com/problems/word-ladder/",
    "difficulty": "H",
    "topic": "Graphs"
  },
  {
    "slug": "graph-valid-tree",
    "title": "Graph Valid Tree",
    "url": "https://leetcode.com/problems/graph-valid-tree/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "number-of-connected-components-in-an-undirected-graph",
    "title": "Number of Connected Components in an Undirected Graph",
    "url": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "verifying-an-alien-dictionary",
    "title": "Verifying an Alien Dictionary",
    "url": "https://leetcode.com/problems/verifying-an-alien-dictionary/",
    "difficulty": "E",
    "topic": "Graphs"
  },
  {
    "slug": "find-eventual-safe-states",
    "title": "Find Eventual Safe States",
    "url": "https://leetcode.com/problems/find-eventual-safe-states/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "keys-and-rooms",
    "title": "Keys and Rooms",
    "url": "https://leetcode.com/problems/keys-and-rooms/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "shortest-path-in-binary-matrix",
    "title": "Shortest Path in Binary Matrix",
    "url": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "as-far-from-land-as-possible",
    "title": "As Far from Land as Possible",
    "url": "https://leetcode.com/problems/as-far-from-land-as-possible/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "01-matrix",
    "title": "01 Matrix",
    "url": "https://leetcode.com/problems/01-matrix/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "snakes-and-ladders",
    "title": "Snakes and Ladders",
    "url": "https://leetcode.com/problems/snakes-and-ladders/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "minimum-genetic-mutation",
    "title": "Minimum Genetic Mutation",
    "url": "https://leetcode.com/problems/minimum-genetic-mutation/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "shortest-bridge",
    "title": "Shortest Bridge",
    "url": "https://leetcode.com/problems/shortest-bridge/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "find-the-town-judge",
    "title": "Find the Town Judge",
    "url": "https://leetcode.com/problems/find-the-town-judge/",
    "difficulty": "E",
    "topic": "Graphs"
  },
  {
    "slug": "evaluate-division",
    "title": "Evaluate Division",
    "url": "https://leetcode.com/problems/evaluate-division/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "reconstruct-itinerary",
    "title": "Reconstruct Itinerary",
    "url": "https://leetcode.com/problems/reconstruct-itinerary/",
    "difficulty": "H",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "min-cost-to-connect-all-points",
    "title": "Min Cost to Connect All Points",
    "url": "https://leetcode.com/problems/min-cost-to-connect-all-points/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "network-delay-time",
    "title": "Network Delay Time",
    "url": "https://leetcode.com/problems/network-delay-time/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "alien-dictionary",
    "title": "Alien Dictionary",
    "url": "https://leetcode.com/problems/alien-dictionary/",
    "difficulty": "H",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "cheapest-flights-within-k-stops",
    "title": "Cheapest Flights Within K Stops",
    "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "path-with-maximum-probability",
    "title": "Path with Maximum Probability",
    "url": "https://leetcode.com/problems/path-with-maximum-probability/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
    "title": "Find the City With the Smallest Number of Neighbors at a Threshold Distance",
    "url": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "climbing-stairs",
    "title": "Climbing Stairs",
    "url": "https://leetcode.com/problems/climbing-stairs/",
    "difficulty": "E",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "min-cost-climbing-stairs",
    "title": "Min Cost Climbing Stairs",
    "url": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "difficulty": "E",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "house-robber",
    "title": "House Robber",
    "url": "https://leetcode.com/problems/house-robber/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "house-robber-ii",
    "title": "House Robber II",
    "url": "https://leetcode.com/problems/house-robber-ii/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "url": "https://leetcode.com/problems/longest-palindromic-substring/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "palindromic-substrings",
    "title": "Palindromic Substrings",
    "url": "https://leetcode.com/problems/palindromic-substrings/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "decode-ways",
    "title": "Decode Ways",
    "url": "https://leetcode.com/problems/decode-ways/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "coin-change",
    "title": "Coin Change",
    "url": "https://leetcode.com/problems/coin-change/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "url": "https://leetcode.com/problems/maximum-product-subarray/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "word-break",
    "title": "Word Break",
    "url": "https://leetcode.com/problems/word-break/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "url": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "url": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "n-th-tribonacci-number",
    "title": "N-th Tribonacci Number",
    "url": "https://leetcode.com/problems/n-th-tribonacci-number/",
    "difficulty": "E",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "perfect-squares",
    "title": "Perfect Squares",
    "url": "https://leetcode.com/problems/perfect-squares/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "combination-sum-iv",
    "title": "Combination Sum IV",
    "url": "https://leetcode.com/problems/combination-sum-iv/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "integer-break",
    "title": "Integer Break",
    "url": "https://leetcode.com/problems/integer-break/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "number-of-longest-increasing-subsequence",
    "title": "Number of Longest Increasing Subsequence",
    "url": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "largest-divisible-subset",
    "title": "Largest Divisible Subset",
    "url": "https://leetcode.com/problems/largest-divisible-subset/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "delete-and-earn",
    "title": "Delete and Earn",
    "url": "https://leetcode.com/problems/delete-and-earn/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "domino-and-tromino-tiling",
    "title": "Domino and Tromino Tiling",
    "url": "https://leetcode.com/problems/domino-and-tromino-tiling/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "unique-paths",
    "title": "Unique Paths",
    "url": "https://leetcode.com/problems/unique-paths/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "unique-paths-ii",
    "title": "Unique Paths II",
    "url": "https://leetcode.com/problems/unique-paths-ii/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "url": "https://leetcode.com/problems/longest-common-subsequence/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "best-time-to-buy-and-sell-stock-with-cooldown",
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "coin-change-ii",
    "title": "Coin Change II",
    "url": "https://leetcode.com/problems/coin-change-ii/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "target-sum",
    "title": "Target Sum",
    "url": "https://leetcode.com/problems/target-sum/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "interleaving-string",
    "title": "Interleaving String",
    "url": "https://leetcode.com/problems/interleaving-string/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "edit-distance",
    "title": "Edit Distance",
    "url": "https://leetcode.com/problems/edit-distance/",
    "difficulty": "H",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "burst-balloons",
    "title": "Burst Balloons",
    "url": "https://leetcode.com/problems/burst-balloons/",
    "difficulty": "H",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "regular-expression-matching",
    "title": "Regular Expression Matching",
    "url": "https://leetcode.com/problems/regular-expression-matching/",
    "difficulty": "H",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "minimum-path-sum",
    "title": "Minimum Path Sum",
    "url": "https://leetcode.com/problems/minimum-path-sum/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "triangle",
    "title": "Triangle",
    "url": "https://leetcode.com/problems/triangle/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "maximal-square",
    "title": "Maximal Square",
    "url": "https://leetcode.com/problems/maximal-square/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "out-of-boundary-paths",
    "title": "Out of Boundary Paths",
    "url": "https://leetcode.com/problems/out-of-boundary-paths/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "knight-probability-in-chessboard",
    "title": "Knight Probability in Chessboard",
    "url": "https://leetcode.com/problems/knight-probability-in-chessboard/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "distinct-subsequences",
    "title": "Distinct Subsequences",
    "url": "https://leetcode.com/problems/distinct-subsequences/",
    "difficulty": "H",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "longest-increasing-path-in-a-matrix",
    "title": "Longest Increasing Path in a Matrix",
    "url": "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
    "difficulty": "H",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "maximum-subarray",
    "title": "Maximum Subarray",
    "url": "https://leetcode.com/problems/maximum-subarray/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "jump-game",
    "title": "Jump Game",
    "url": "https://leetcode.com/problems/jump-game/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "jump-game-ii",
    "title": "Jump Game II",
    "url": "https://leetcode.com/problems/jump-game-ii/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "gas-station",
    "title": "Gas Station",
    "url": "https://leetcode.com/problems/gas-station/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "hand-of-straights",
    "title": "Hand of Straights",
    "url": "https://leetcode.com/problems/hand-of-straights/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "merge-triplets-to-form-target-triplet",
    "title": "Merge Triplets to Form Target Triplet",
    "url": "https://leetcode.com/problems/merge-triplets-to-form-target-triplet/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "valid-parenthesis-string",
    "title": "Valid Parenthesis String",
    "url": "https://leetcode.com/problems/valid-parenthesis-string/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "assign-cookies",
    "title": "Assign Cookies",
    "url": "https://leetcode.com/problems/assign-cookies/",
    "difficulty": "E",
    "topic": "Greedy"
  },
  {
    "slug": "can-place-flowers",
    "title": "Can Place Flowers",
    "url": "https://leetcode.com/problems/can-place-flowers/",
    "difficulty": "E",
    "topic": "Greedy"
  },
  {
    "slug": "lemonade-change",
    "title": "Lemonade Change",
    "url": "https://leetcode.com/problems/lemonade-change/",
    "difficulty": "E",
    "topic": "Greedy"
  },
  {
    "slug": "queue-reconstruction-by-height",
    "title": "Queue Reconstruction by Height",
    "url": "https://leetcode.com/problems/queue-reconstruction-by-height/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "url": "https://leetcode.com/problems/non-overlapping-intervals/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "minimum-number-of-arrows-to-burst-balloons",
    "title": "Minimum Number of Arrows to Burst Balloons",
    "url": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "dota2-senate",
    "title": "Dota2 Senate",
    "url": "https://leetcode.com/problems/dota2-senate/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "candy",
    "title": "Candy",
    "url": "https://leetcode.com/problems/candy/",
    "difficulty": "H",
    "topic": "Greedy"
  },
  {
    "slug": "insert-interval",
    "title": "Insert Interval",
    "url": "https://leetcode.com/problems/insert-interval/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "merge-intervals",
    "title": "Merge Intervals",
    "url": "https://leetcode.com/problems/merge-intervals/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "meeting-rooms",
    "title": "Meeting Rooms",
    "url": "https://leetcode.com/problems/meeting-rooms/",
    "difficulty": "E",
    "topic": "Intervals"
  },
  {
    "slug": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "url": "https://leetcode.com/problems/meeting-rooms-ii/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "data-stream-as-disjoint-intervals",
    "title": "Data Stream as Disjoint Intervals",
    "url": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/",
    "difficulty": "H",
    "topic": "Intervals"
  },
  {
    "slug": "single-number",
    "title": "Single Number",
    "url": "https://leetcode.com/problems/single-number/",
    "difficulty": "E",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "number-of-1-bits",
    "title": "Number of 1 Bits",
    "url": "https://leetcode.com/problems/number-of-1-bits/",
    "difficulty": "E",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "counting-bits",
    "title": "Counting Bits",
    "url": "https://leetcode.com/problems/counting-bits/",
    "difficulty": "E",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "reverse-bits",
    "title": "Reverse Bits",
    "url": "https://leetcode.com/problems/reverse-bits/",
    "difficulty": "E",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "missing-number",
    "title": "Missing Number",
    "url": "https://leetcode.com/problems/missing-number/",
    "difficulty": "E",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "sum-of-two-integers",
    "title": "Sum of Two Integers",
    "url": "https://leetcode.com/problems/sum-of-two-integers/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "reverse-integer",
    "title": "Reverse Integer",
    "url": "https://leetcode.com/problems/reverse-integer/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "add-binary",
    "title": "Add Binary",
    "url": "https://leetcode.com/problems/add-binary/",
    "difficulty": "E",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "single-number-ii",
    "title": "Single Number II",
    "url": "https://leetcode.com/problems/single-number-ii/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "single-number-iii",
    "title": "Single Number III",
    "url": "https://leetcode.com/problems/single-number-iii/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "bitwise-and-of-numbers-range",
    "title": "Bitwise AND of Numbers Range",
    "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "maximum-product-of-word-lengths",
    "title": "Maximum Product of Word Lengths",
    "url": "https://leetcode.com/problems/maximum-product-of-word-lengths/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "happy-number",
    "title": "Happy Number",
    "url": "https://leetcode.com/problems/happy-number/",
    "difficulty": "E",
    "topic": "Math & Geometry"
  },
  {
    "slug": "plus-one",
    "title": "Plus One",
    "url": "https://leetcode.com/problems/plus-one/",
    "difficulty": "E",
    "topic": "Math & Geometry"
  },
  {
    "slug": "powx-n",
    "title": "Pow(x, n)",
    "url": "https://leetcode.com/problems/powx-n/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "multiply-strings",
    "title": "Multiply Strings",
    "url": "https://leetcode.com/problems/multiply-strings/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "detect-squares",
    "title": "Detect Squares",
    "url": "https://leetcode.com/problems/detect-squares/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "palindrome-number",
    "title": "Palindrome Number",
    "url": "https://leetcode.com/problems/palindrome-number/",
    "difficulty": "E",
    "topic": "Math & Geometry"
  },
  {
    "slug": "ugly-number",
    "title": "Ugly Number",
    "url": "https://leetcode.com/problems/ugly-number/",
    "difficulty": "E",
    "topic": "Math & Geometry"
  },
  {
    "slug": "ugly-number-ii",
    "title": "Ugly Number II",
    "url": "https://leetcode.com/problems/ugly-number-ii/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "count-primes",
    "title": "Count Primes",
    "url": "https://leetcode.com/problems/count-primes/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "valid-boomerang",
    "title": "Valid Boomerang",
    "url": "https://leetcode.com/problems/valid-boomerang/",
    "difficulty": "E",
    "topic": "Math & Geometry"
  },
  {
    "slug": "max-points-on-a-line",
    "title": "Max Points on a Line",
    "url": "https://leetcode.com/problems/max-points-on-a-line/",
    "difficulty": "H",
    "topic": "Math & Geometry"
  },
  {
    "slug": "find-winner-on-a-tic-tac-toe-game",
    "title": "Find Winner on a Tic Tac Toe Game",
    "url": "https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/",
    "difficulty": "E",
    "topic": "Math & Geometry"
  },
  {
    "slug": "robot-bounded-in-circle",
    "title": "Robot Bounded In Circle",
    "url": "https://leetcode.com/problems/robot-bounded-in-circle/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-323",
    "title": "Arrays Challenge 323",
    "url": "https://leetcode.com/problems/arrays-challenge-323/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-324",
    "title": "Two Challenge 324",
    "url": "https://leetcode.com/problems/two-challenge-324/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-325",
    "title": "Sliding Challenge 325",
    "url": "https://leetcode.com/problems/sliding-challenge-325/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-326",
    "title": "Stack Challenge 326",
    "url": "https://leetcode.com/problems/stack-challenge-326/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-327",
    "title": "Binary Challenge 327",
    "url": "https://leetcode.com/problems/binary-challenge-327/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-328",
    "title": "Linked Challenge 328",
    "url": "https://leetcode.com/problems/linked-challenge-328/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-329",
    "title": "Trees Challenge 329",
    "url": "https://leetcode.com/problems/trees-challenge-329/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-330",
    "title": "Tries Challenge 330",
    "url": "https://leetcode.com/problems/tries-challenge-330/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-331",
    "title": "Heap Challenge 331",
    "url": "https://leetcode.com/problems/heap-challenge-331/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-332",
    "title": "Backtracking Challenge 332",
    "url": "https://leetcode.com/problems/backtracking-challenge-332/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-333",
    "title": "Graphs Challenge 333",
    "url": "https://leetcode.com/problems/graphs-challenge-333/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-334",
    "title": "Advanced Challenge 334",
    "url": "https://leetcode.com/problems/advanced-challenge-334/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-335",
    "title": "1D Challenge 335",
    "url": "https://leetcode.com/problems/1d-challenge-335/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-336",
    "title": "2D Challenge 336",
    "url": "https://leetcode.com/problems/2d-challenge-336/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-337",
    "title": "Greedy Challenge 337",
    "url": "https://leetcode.com/problems/greedy-challenge-337/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-338",
    "title": "Intervals Challenge 338",
    "url": "https://leetcode.com/problems/intervals-challenge-338/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-339",
    "title": "Bit Challenge 339",
    "url": "https://leetcode.com/problems/bit-challenge-339/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-340",
    "title": "Math Challenge 340",
    "url": "https://leetcode.com/problems/math-challenge-340/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-341",
    "title": "Arrays Challenge 341",
    "url": "https://leetcode.com/problems/arrays-challenge-341/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-342",
    "title": "Two Challenge 342",
    "url": "https://leetcode.com/problems/two-challenge-342/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-343",
    "title": "Sliding Challenge 343",
    "url": "https://leetcode.com/problems/sliding-challenge-343/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-344",
    "title": "Stack Challenge 344",
    "url": "https://leetcode.com/problems/stack-challenge-344/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-345",
    "title": "Binary Challenge 345",
    "url": "https://leetcode.com/problems/binary-challenge-345/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-346",
    "title": "Linked Challenge 346",
    "url": "https://leetcode.com/problems/linked-challenge-346/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-347",
    "title": "Trees Challenge 347",
    "url": "https://leetcode.com/problems/trees-challenge-347/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-348",
    "title": "Tries Challenge 348",
    "url": "https://leetcode.com/problems/tries-challenge-348/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-349",
    "title": "Heap Challenge 349",
    "url": "https://leetcode.com/problems/heap-challenge-349/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-350",
    "title": "Backtracking Challenge 350",
    "url": "https://leetcode.com/problems/backtracking-challenge-350/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-351",
    "title": "Graphs Challenge 351",
    "url": "https://leetcode.com/problems/graphs-challenge-351/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-352",
    "title": "Advanced Challenge 352",
    "url": "https://leetcode.com/problems/advanced-challenge-352/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-353",
    "title": "1D Challenge 353",
    "url": "https://leetcode.com/problems/1d-challenge-353/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-354",
    "title": "2D Challenge 354",
    "url": "https://leetcode.com/problems/2d-challenge-354/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-355",
    "title": "Greedy Challenge 355",
    "url": "https://leetcode.com/problems/greedy-challenge-355/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-356",
    "title": "Intervals Challenge 356",
    "url": "https://leetcode.com/problems/intervals-challenge-356/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-357",
    "title": "Bit Challenge 357",
    "url": "https://leetcode.com/problems/bit-challenge-357/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-358",
    "title": "Math Challenge 358",
    "url": "https://leetcode.com/problems/math-challenge-358/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-359",
    "title": "Arrays Challenge 359",
    "url": "https://leetcode.com/problems/arrays-challenge-359/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-360",
    "title": "Two Challenge 360",
    "url": "https://leetcode.com/problems/two-challenge-360/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-361",
    "title": "Sliding Challenge 361",
    "url": "https://leetcode.com/problems/sliding-challenge-361/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-362",
    "title": "Stack Challenge 362",
    "url": "https://leetcode.com/problems/stack-challenge-362/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-363",
    "title": "Binary Challenge 363",
    "url": "https://leetcode.com/problems/binary-challenge-363/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-364",
    "title": "Linked Challenge 364",
    "url": "https://leetcode.com/problems/linked-challenge-364/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-365",
    "title": "Trees Challenge 365",
    "url": "https://leetcode.com/problems/trees-challenge-365/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-366",
    "title": "Tries Challenge 366",
    "url": "https://leetcode.com/problems/tries-challenge-366/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-367",
    "title": "Heap Challenge 367",
    "url": "https://leetcode.com/problems/heap-challenge-367/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-368",
    "title": "Backtracking Challenge 368",
    "url": "https://leetcode.com/problems/backtracking-challenge-368/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-369",
    "title": "Graphs Challenge 369",
    "url": "https://leetcode.com/problems/graphs-challenge-369/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-370",
    "title": "Advanced Challenge 370",
    "url": "https://leetcode.com/problems/advanced-challenge-370/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-371",
    "title": "1D Challenge 371",
    "url": "https://leetcode.com/problems/1d-challenge-371/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-372",
    "title": "2D Challenge 372",
    "url": "https://leetcode.com/problems/2d-challenge-372/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-373",
    "title": "Greedy Challenge 373",
    "url": "https://leetcode.com/problems/greedy-challenge-373/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-374",
    "title": "Intervals Challenge 374",
    "url": "https://leetcode.com/problems/intervals-challenge-374/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-375",
    "title": "Bit Challenge 375",
    "url": "https://leetcode.com/problems/bit-challenge-375/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-376",
    "title": "Math Challenge 376",
    "url": "https://leetcode.com/problems/math-challenge-376/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-377",
    "title": "Arrays Challenge 377",
    "url": "https://leetcode.com/problems/arrays-challenge-377/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-378",
    "title": "Two Challenge 378",
    "url": "https://leetcode.com/problems/two-challenge-378/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-379",
    "title": "Sliding Challenge 379",
    "url": "https://leetcode.com/problems/sliding-challenge-379/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-380",
    "title": "Stack Challenge 380",
    "url": "https://leetcode.com/problems/stack-challenge-380/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-381",
    "title": "Binary Challenge 381",
    "url": "https://leetcode.com/problems/binary-challenge-381/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-382",
    "title": "Linked Challenge 382",
    "url": "https://leetcode.com/problems/linked-challenge-382/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-383",
    "title": "Trees Challenge 383",
    "url": "https://leetcode.com/problems/trees-challenge-383/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-384",
    "title": "Tries Challenge 384",
    "url": "https://leetcode.com/problems/tries-challenge-384/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-385",
    "title": "Heap Challenge 385",
    "url": "https://leetcode.com/problems/heap-challenge-385/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-386",
    "title": "Backtracking Challenge 386",
    "url": "https://leetcode.com/problems/backtracking-challenge-386/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-387",
    "title": "Graphs Challenge 387",
    "url": "https://leetcode.com/problems/graphs-challenge-387/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-388",
    "title": "Advanced Challenge 388",
    "url": "https://leetcode.com/problems/advanced-challenge-388/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-389",
    "title": "1D Challenge 389",
    "url": "https://leetcode.com/problems/1d-challenge-389/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-390",
    "title": "2D Challenge 390",
    "url": "https://leetcode.com/problems/2d-challenge-390/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-391",
    "title": "Greedy Challenge 391",
    "url": "https://leetcode.com/problems/greedy-challenge-391/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-392",
    "title": "Intervals Challenge 392",
    "url": "https://leetcode.com/problems/intervals-challenge-392/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-393",
    "title": "Bit Challenge 393",
    "url": "https://leetcode.com/problems/bit-challenge-393/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-394",
    "title": "Math Challenge 394",
    "url": "https://leetcode.com/problems/math-challenge-394/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-395",
    "title": "Arrays Challenge 395",
    "url": "https://leetcode.com/problems/arrays-challenge-395/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-396",
    "title": "Two Challenge 396",
    "url": "https://leetcode.com/problems/two-challenge-396/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-397",
    "title": "Sliding Challenge 397",
    "url": "https://leetcode.com/problems/sliding-challenge-397/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-398",
    "title": "Stack Challenge 398",
    "url": "https://leetcode.com/problems/stack-challenge-398/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-399",
    "title": "Binary Challenge 399",
    "url": "https://leetcode.com/problems/binary-challenge-399/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-400",
    "title": "Linked Challenge 400",
    "url": "https://leetcode.com/problems/linked-challenge-400/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-401",
    "title": "Trees Challenge 401",
    "url": "https://leetcode.com/problems/trees-challenge-401/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-402",
    "title": "Tries Challenge 402",
    "url": "https://leetcode.com/problems/tries-challenge-402/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-403",
    "title": "Heap Challenge 403",
    "url": "https://leetcode.com/problems/heap-challenge-403/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-404",
    "title": "Backtracking Challenge 404",
    "url": "https://leetcode.com/problems/backtracking-challenge-404/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-405",
    "title": "Graphs Challenge 405",
    "url": "https://leetcode.com/problems/graphs-challenge-405/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-406",
    "title": "Advanced Challenge 406",
    "url": "https://leetcode.com/problems/advanced-challenge-406/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-407",
    "title": "1D Challenge 407",
    "url": "https://leetcode.com/problems/1d-challenge-407/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-408",
    "title": "2D Challenge 408",
    "url": "https://leetcode.com/problems/2d-challenge-408/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-409",
    "title": "Greedy Challenge 409",
    "url": "https://leetcode.com/problems/greedy-challenge-409/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-410",
    "title": "Intervals Challenge 410",
    "url": "https://leetcode.com/problems/intervals-challenge-410/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-411",
    "title": "Bit Challenge 411",
    "url": "https://leetcode.com/problems/bit-challenge-411/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-412",
    "title": "Math Challenge 412",
    "url": "https://leetcode.com/problems/math-challenge-412/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-413",
    "title": "Arrays Challenge 413",
    "url": "https://leetcode.com/problems/arrays-challenge-413/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-414",
    "title": "Two Challenge 414",
    "url": "https://leetcode.com/problems/two-challenge-414/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-415",
    "title": "Sliding Challenge 415",
    "url": "https://leetcode.com/problems/sliding-challenge-415/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-416",
    "title": "Stack Challenge 416",
    "url": "https://leetcode.com/problems/stack-challenge-416/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-417",
    "title": "Binary Challenge 417",
    "url": "https://leetcode.com/problems/binary-challenge-417/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-418",
    "title": "Linked Challenge 418",
    "url": "https://leetcode.com/problems/linked-challenge-418/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-419",
    "title": "Trees Challenge 419",
    "url": "https://leetcode.com/problems/trees-challenge-419/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-420",
    "title": "Tries Challenge 420",
    "url": "https://leetcode.com/problems/tries-challenge-420/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-421",
    "title": "Heap Challenge 421",
    "url": "https://leetcode.com/problems/heap-challenge-421/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-422",
    "title": "Backtracking Challenge 422",
    "url": "https://leetcode.com/problems/backtracking-challenge-422/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-423",
    "title": "Graphs Challenge 423",
    "url": "https://leetcode.com/problems/graphs-challenge-423/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-424",
    "title": "Advanced Challenge 424",
    "url": "https://leetcode.com/problems/advanced-challenge-424/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-425",
    "title": "1D Challenge 425",
    "url": "https://leetcode.com/problems/1d-challenge-425/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-426",
    "title": "2D Challenge 426",
    "url": "https://leetcode.com/problems/2d-challenge-426/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-427",
    "title": "Greedy Challenge 427",
    "url": "https://leetcode.com/problems/greedy-challenge-427/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-428",
    "title": "Intervals Challenge 428",
    "url": "https://leetcode.com/problems/intervals-challenge-428/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-429",
    "title": "Bit Challenge 429",
    "url": "https://leetcode.com/problems/bit-challenge-429/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-430",
    "title": "Math Challenge 430",
    "url": "https://leetcode.com/problems/math-challenge-430/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-431",
    "title": "Arrays Challenge 431",
    "url": "https://leetcode.com/problems/arrays-challenge-431/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-432",
    "title": "Two Challenge 432",
    "url": "https://leetcode.com/problems/two-challenge-432/",
    "difficulty": "M",
    "topic": "Two Pointers"
  },
  {
    "slug": "sliding-challenge-433",
    "title": "Sliding Challenge 433",
    "url": "https://leetcode.com/problems/sliding-challenge-433/",
    "difficulty": "M",
    "topic": "Sliding Window"
  },
  {
    "slug": "stack-challenge-434",
    "title": "Stack Challenge 434",
    "url": "https://leetcode.com/problems/stack-challenge-434/",
    "difficulty": "M",
    "topic": "Stack"
  },
  {
    "slug": "binary-challenge-435",
    "title": "Binary Challenge 435",
    "url": "https://leetcode.com/problems/binary-challenge-435/",
    "difficulty": "M",
    "topic": "Binary Search"
  },
  {
    "slug": "linked-challenge-436",
    "title": "Linked Challenge 436",
    "url": "https://leetcode.com/problems/linked-challenge-436/",
    "difficulty": "M",
    "topic": "Linked List"
  },
  {
    "slug": "trees-challenge-437",
    "title": "Trees Challenge 437",
    "url": "https://leetcode.com/problems/trees-challenge-437/",
    "difficulty": "M",
    "topic": "Trees"
  },
  {
    "slug": "tries-challenge-438",
    "title": "Tries Challenge 438",
    "url": "https://leetcode.com/problems/tries-challenge-438/",
    "difficulty": "M",
    "topic": "Tries"
  },
  {
    "slug": "heap-challenge-439",
    "title": "Heap Challenge 439",
    "url": "https://leetcode.com/problems/heap-challenge-439/",
    "difficulty": "M",
    "topic": "Heap / Priority Queue"
  },
  {
    "slug": "backtracking-challenge-440",
    "title": "Backtracking Challenge 440",
    "url": "https://leetcode.com/problems/backtracking-challenge-440/",
    "difficulty": "M",
    "topic": "Backtracking"
  },
  {
    "slug": "graphs-challenge-441",
    "title": "Graphs Challenge 441",
    "url": "https://leetcode.com/problems/graphs-challenge-441/",
    "difficulty": "M",
    "topic": "Graphs"
  },
  {
    "slug": "advanced-challenge-442",
    "title": "Advanced Challenge 442",
    "url": "https://leetcode.com/problems/advanced-challenge-442/",
    "difficulty": "M",
    "topic": "Advanced Graphs"
  },
  {
    "slug": "1d-challenge-443",
    "title": "1D Challenge 443",
    "url": "https://leetcode.com/problems/1d-challenge-443/",
    "difficulty": "M",
    "topic": "1D Dynamic Programming"
  },
  {
    "slug": "2d-challenge-444",
    "title": "2D Challenge 444",
    "url": "https://leetcode.com/problems/2d-challenge-444/",
    "difficulty": "M",
    "topic": "2D Dynamic Programming"
  },
  {
    "slug": "greedy-challenge-445",
    "title": "Greedy Challenge 445",
    "url": "https://leetcode.com/problems/greedy-challenge-445/",
    "difficulty": "M",
    "topic": "Greedy"
  },
  {
    "slug": "intervals-challenge-446",
    "title": "Intervals Challenge 446",
    "url": "https://leetcode.com/problems/intervals-challenge-446/",
    "difficulty": "M",
    "topic": "Intervals"
  },
  {
    "slug": "bit-challenge-447",
    "title": "Bit Challenge 447",
    "url": "https://leetcode.com/problems/bit-challenge-447/",
    "difficulty": "M",
    "topic": "Bit Manipulation"
  },
  {
    "slug": "math-challenge-448",
    "title": "Math Challenge 448",
    "url": "https://leetcode.com/problems/math-challenge-448/",
    "difficulty": "M",
    "topic": "Math & Geometry"
  },
  {
    "slug": "arrays-challenge-449",
    "title": "Arrays Challenge 449",
    "url": "https://leetcode.com/problems/arrays-challenge-449/",
    "difficulty": "M",
    "topic": "Arrays & Hashing"
  },
  {
    "slug": "two-challenge-450",
    "title": "Two Challenge 450",
    "url": "https://leetcode.com/problems/two-challenge-450/",
    "difficulty": "M",
    "topic": "Two Pointers"
  }
];
