The Worship Calendar v2.43

Fix:
- Corrected multi-person role balancing so remaining capacity is spread across remaining services.
- This fixes the issue where two vocalists with a maximum of 3 services each could both be assigned to the first three Sundays, leaving the fourth Sunday blank.
- Target per service is now calculated from:
  remaining member capacity for the role divided by remaining services in the month.
- If capacity is below the monthly minimum requirement, the shortage is spread across remaining services instead of filling early weeks first.
- Template maximum remains a ceiling.
- Preserves hard-coded admin exclusion, No Roster markers, and draft roster delete button.
- ZIP cleanup: only this README.txt is included.
