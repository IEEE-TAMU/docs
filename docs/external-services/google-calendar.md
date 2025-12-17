# Google Calendar

[Google Calendar](https://calendar.google.com/) is used as the source for IEEE TAMU event data.

## Usage

### Event Management Workflow

1. Officers create events in the [Member Portal](../internal-services/apps/member-portal.md)
2. The Portal exposes events via a public iCal feed
3. This feed can be subscribed to in Google Calendar for personal viewing
4. The [Discord Bot](../internal-services/apps/discord-bot.md) syncs from this feed to create Discord Scheduled Events

### iCal Feed

The Member Portal provides a public iCal (.ics) feed that can be added to any calendar application:
- Google Calendar
- Apple Calendar
- Outlook
- Any iCal-compatible app

## Integration Points

| Consumer | Purpose |
|----------|---------|
| [Discord Bot](../internal-services/apps/discord-bot.md) | Creates/updates Discord Scheduled Events |
| [Homepage](../internal-services/apps/homepage.md) | Displays upcoming events on the website |
| Personal calendars | Members can subscribe to stay updated |

## Note

While we reference "Google Calendar" as a common use case, the Member Portal is the **authoritative source** for events. The iCal feed works with any calendar service that supports the iCal standard.
