The Worship Calendar v2.90.2

Fix:
- Fixed PDF export not using colours selected in the PDF row colour picker.
- The picker and PDF export now use the same colour source.
- Colour selections are saved both on the role record and in the legacy data.roleColors map.
- Existing role colours are synced into data.roleColors on startup.
- PDF export row backgrounds now read the selected role PDF colour first.
- Preserved white palette swatch from v2.90.1.

Preserved:
- v2.90 non-button colour swatches.
- v2.86 compact Delete Services checklist.
- v2.82 deletion-aware merge protection.
- v2.81 API setup persistence and GitHub 409 retry.
- Previous login, Gmail, roster filtering, linked-member and merge-save features.
- Removed icon.svg from package/cache references.
- Main JavaScript syntax check passed.
- ZIP cleanup: only this README.txt is included.
