The Worship Calendar v2.42

Recommended balancing fixes:
- Removed duplicate v2.41 balancing functions.
- Added a single clean v2.42 fair-balancing helper set.
- Multi-person role target is now based on monthly capacity divided by the number of services in that month.
- Template maximum is used as a ceiling, not the default target.
- Catch-up logic now counts only rosters for services before the current service, so future or later-month rosters cannot distort the current target.
- Example: 6 singers with max 2 services each in a 4-service month creates a normal target of 3 singers per service.
- If one earlier week is short, a later week may increase up to the template maximum.
- Preserves hard-coded admin exclusion, No Roster markers, and draft roster delete button.
- ZIP cleanup: only this README.txt is included.
