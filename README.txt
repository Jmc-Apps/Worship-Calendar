The Worship Calendar v2.54

Changes:
- Multiple services on the same date are treated as one rostering block during generation.
- A person rostered in one service on a date cannot be rostered in another service on that same date unless the roles are compatible.
- Published rosters on that date are treated as fixed priority assignments and are considered before assigning new draft rosters.
- Single-service generation now generates the whole unrostered block for that date.
- Date-range generation applies the same same-date block rules.
- Preserves v2.53 template role order controls and v2.45 month-aware batch planner.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.
