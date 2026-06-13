The Worship Calendar v2.45

Fix:
- Replaced formula-only balancing with a month-aware batch planner for date-range generation.
- The planner groups all services in the selected range by month and role.
- It calculates total remaining capacity for each role, then distributes target headcounts evenly across all services before choosing members.
- If capacity is lower than required minimums, the shortage is spread across the month instead of leaving the last week blank.
- Example with 2 vocalists, max 3 each, 4 Sundays: target distribution becomes 2, 2, 1, 1 rather than 2, 2, 2, 0 or 2, 1, 1, 0.
- Preserves hard-coded admin exclusion, No Roster markers, and draft roster delete button.
- ZIP cleanup: only this README.txt is included.
