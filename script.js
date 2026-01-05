const data = {
  "Arrays": [
    "Two Sum","Best Time to Buy and Sell Stock","Maximum Subarray",
    "Merge Intervals","Product of Array Except Self","3Sum",
    "Container With Most Water","Set Matrix Zeroes",
    "Rotate Array","Missing Number"
  ],
  "Strings": [
    "Longest Substring Without Repeating Characters","Valid Anagram",
    "Group Anagrams","Longest Palindromic Substring","String to Integer (atoi)",
    "Reverse Words in a String","Valid Parentheses","Implement strStr()",
    "Decode Ways","Count and Say"
  ],
  "Linked List": [
    "Reverse Linked List","Merge Two Sorted Lists","Linked List Cycle",
    "Remove Nth Node From End","Intersection of Two Linked Lists",
    "Add Two Numbers","Palindrome Linked List","Copy List with Random Pointer",
    "Reorder List","Flatten Multilevel Doubly Linked List"
  ],
  "Stack & Queue": [
    "Valid Parentheses","Min Stack","Next Greater Element I",
    "Daily Temperatures","Evaluate Reverse Polish Notation",
    "Implement Queue using Stacks","Simplify Path","Basic Calculator",
    "Largest Rectangle in Histogram","Sliding Window Maximum"
  ],
  "Binary Tree": [
    "Binary Tree Inorder Traversal","Maximum Depth of Binary Tree",
    "Invert Binary Tree","Diameter of Binary Tree","Balanced Binary Tree",
    "Path Sum","Lowest Common Ancestor",
    "Serialize and Deserialize Binary Tree",
    "Construct Binary Tree from Preorder and Inorder","Symmetric Tree"
  ],
  "BST": [
    "Validate BST","Insert into BST","Delete Node in BST",
    "LCA of BST","Kth Smallest Element","BST Iterator",
    "Convert Sorted Array to BST","Range Sum of BST",
    "Trim BST","Recover BST"
  ],
  "Recursion & Backtracking": [
    "Subsets","Permutations","Combination Sum","Combination Sum II",
    "Letter Combinations of Phone Number","N-Queens","Word Search",
    "Palindrome Partitioning","Generate Parentheses","Sudoku Solver"
  ],
  "Dynamic Programming": [
    "Climbing Stairs","House Robber","Coin Change",
    "Longest Increasing Subsequence","Unique Paths","Edit Distance",
    "Maximum Product Subarray","Word Break","Decode Ways",
    "Partition Equal Subset Sum"
  ],
  "Graphs": [
    "Number of Islands","Clone Graph","Course Schedule",
    "Pacific Atlantic Water Flow","Rotting Oranges","Word Ladder",
    "Graph Valid Tree","Network Delay Time",
    "Find Eventual Safe States","Number of Connected Components"
  ],
  "Heap / Priority Queue": [
    "Kth Largest Element","Top K Frequent Elements","Merge K Sorted Lists",
    "Find Median from Data Stream","Task Scheduler","Reorganize String",
    "K Closest Points","Smallest Range from K Lists",
    "Sliding Window Median","Ugly Number II"
  ]
};

const tracker = document.getElementById("tracker");
const progressText = document.getElementById("progress-text");
const circle = document.querySelector(".progress");


let progress = JSON.parse(localStorage.getItem("dsa-progress")) || {};

function render() {
  tracker.innerHTML = "";
  let total = 0, done = 0;

  for (let section in data) {
    const div = document.createElement("div");
    div.className = "section";
    div.innerHTML = `<h2>${section}</h2>`;
    const ul = document.createElement("ul");

    data[section].forEach(q => {
      total++;
      const key = section + "::" + q;

      if (!progress[key]) {
        progress[key] = { solved: false, approach: "", learnings: "" };
      }

      if (progress[key].solved) done++;

      const li = document.createElement("li");
      li.innerHTML = `
        <div class="question-row">
          <input type="checkbox"
            ${progress[key].solved ? "checked" : ""}
            onchange="toggleSolved('${key}', this)">
          <span>${q}</span>
          <button class="note-btn" onclick="toggleNotes(this)">📝</button>
        </div>

        <div class="notes hidden">
          <textarea placeholder="Approach..."
            oninput="saveNote('${key}', 'approach', this.value)">${progress[key].approach}</textarea>

          <textarea placeholder="What I learned..."
            oninput="saveNote('${key}', 'learnings', this.value)">${progress[key].learnings}</textarea>
        </div>
      `;
      ul.appendChild(li);
    });

    div.appendChild(ul);
    tracker.appendChild(div);
  }

  localStorage.setItem("dsa-progress", JSON.stringify(progress));
  updateProgress(done, total);
}

function toggleSolved(key, el) {
  progress[key].solved = el.checked;
  localStorage.setItem("dsa-progress", JSON.stringify(progress));
  render();
}

function saveNote(key, field, value) {
  progress[key][field] = value;
  localStorage.setItem("dsa-progress", JSON.stringify(progress));
}

function toggleNotes(btn) {
  const notes = btn.closest("li").querySelector(".notes");
  notes.classList.toggle("hidden");
}


function toggle(key, el) {
  progress[key] = el.checked;
  localStorage.setItem("dsa-progress", JSON.stringify(progress));
  render();
}

function updateProgress(done, total) {
  const percent = Math.round((done / total) * 100);
  const offset = 314 - (314 * percent) / 100;

  circle.style.strokeDashoffset = offset;
  progressText.innerText = percent + "%";
}

function filterTasks(type) {
  document.querySelectorAll("li").forEach(li => {
    const checked = li.querySelector("input").checked;
    li.classList.toggle("hidden",
      type === "solved" ? !checked :
      type === "unsolved" ? checked : false
    );
  });
}

function toggleTheme() {
  document.body.classList.toggle("light");
}

function exportProgress() {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "dsa-progress.json";
  a.click();
}

render();
