# This file holds local configuration settings that should not be stored in
# the repository. This file will not be included in the repository, but rather,
# a template file is provided at private/config.py that shows
# what settings should be included. The types of settings that are
# appropriate to include are those that expose personal information,
# or that differ between development and production systems, such as a
# database connection string.

# Container for configuration settings.
config = Storage()

# Email server
# Linux or Unix systems can run a local email server. These settings are
# appropriate for Linux or Unix. Uncomment these if running on Linux or Unix.

# These settings are appropriate for Windows. They use an external Gmail
# account as an email server. Uncomment these if running on Windows and edit
# mail_sender and mail_login to point to an appropriate email account.
config.mail_server = "smtp.gmail.com:587"
config.mail_sender = "you@gmail.com"
config.mail_login = "username:password"
config.mail_tls = True