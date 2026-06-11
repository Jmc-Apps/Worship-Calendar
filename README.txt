The Worship Calendar v2.08
Plan • Schedule • Serve

Built from v2.07.

Fixed:
- New members created from the register/login screen now save to data.members and local storage.
- New members created from Admin > Members now save to data.members and local storage.
- Member save validates name, email, password, and unique email.
- Removed old cleanup calls that could wipe newly added members after render.
- Submit Changes Online now fetches the latest GitHub SHA before saving.
- GitHub 409 SHA conflict automatically retries once with the latest SHA.
- ZIP filename and root folder both use TheWorshipCalendar_v2.08.
- JavaScript syntax checked before packaging.
