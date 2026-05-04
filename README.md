# Expense Tracker CLI

Sample solution for the [github-user-activity](https://roadmap.sh/projects/expense-tracker) challenge from [roadmap.sh](https://roadmap.sh/)


A command-line application to manage your personal expenses. Add, update, delete, and view expenses with monthly summaries.

---

## Installation

```bash
git clone https://github.com/your-username/expense-tracker-cli.git
cd expense-tracker-cli
npm install
npm link
```

---

## Usage

### Add an expense
```bash
expense-tracker add --description "Lunch" --amount 20
# Expense added successfully (ID: 1)
```

### Update an expense
```bash
expense-tracker update --id 1 --description "Brunch" --amount 25
# Expense updated successfully
```

### Delete an expense
```bash
expense-tracker delete --id 1
# Expense deleted successfully
```

### List all expenses
```bash
expense-tracker list
# ID  Date        Description  Amount
# 1   2024-08-06  Lunch        $20
# 2   2024-08-06  Dinner       $10
```

### Summary of all expenses
```bash
expense-tracker summary
# Total expenses: $30
```

### Summary by month
```bash
expense-tracker summary --month 8
# Total expenses for August: $30
```

---

## Project Structure

```
expense-tracker-cli/
├── src/
│   ├── commands/
│   │   ├── add.js
│   │   ├── update.js
│   │   ├── delete.js
│   │   ├── list.js
│   │   └── summary.js
│   ├── utils/
│   │   └── validators.js
│   ├── storage.js
│   └── index.js
├── data/
│   └── expenses.json
├── package.json
└── README.md
```

---

## Tech Stack

- **Runtime:** Node.js
- **CLI Parsing:** Commander.js
- **Storage:** JSON file
