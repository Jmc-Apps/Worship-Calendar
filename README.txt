The Worship Calendar v2.44

Fix:
- Replaced the active roster-generation functions, not only the helper functions.
- Date-range roster generation now keeps an in-memory list of rosters created during the same run.
- Remaining capacity calculations now include planned rosters created earlier in the same generation run.
- This prevents the first three Sundays from consuming both vocalists' 3-per-month limits and leaving the fourth Sunday empty.
- Single roster generation also uses the same v2.44 generator.
- Preserves hard-coded admin exclusion, No Roster markers, and draft roster delete button.
- ZIP cleanup: only this README.txt is included.
