# Discord Calendar Sync Flow

This document describes the technical flow of how events sync from the Member Portal to Discord Scheduled Events.

## Overview

```mermaid
flowchart LR
    Portal[Member Portal] -->|iCal Feed| Bot[Discord Bot]
    Bot -->|Create/Update/Delete| Discord[Discord API]
    Discord -->|Scheduled Events| Members[Members]
```

## Sync Process

### 1. Fetch Calendar

Every 10 minutes (configurable), the [Discord Bot](../internal-services/apps/discord-bot.md) fetches the iCal feed from the Member Portal:

```
GET https://portal.ieeetamu.org/calendar.ics
```

**Services involved:**
- [Discord Bot](../internal-services/apps/discord-bot.md) (internal)
- [Member Portal](../internal-services/apps/member-portal.md) (internal)

### 2. Parse Events

The bot parses the iCal data and extracts:
- Event UID (unique identifier)
- Title
- Description
- Start/end time
- Location

### 3. Compare with Discord

The bot fetches current Discord Scheduled Events and compares:

| Scenario | Action |
|----------|--------|
| Event in calendar, not in Discord | Create new Scheduled Event |
| Event in both, details match | No action |
| Event in both, details differ | Update Scheduled Event |
| Event in Discord, not in calendar | Delete Scheduled Event |

### 4. Event Tracking

The bot embeds a hidden tracking ID in the Discord event description to match events across syncs:

```
<!-- PORTAL_UID: abc123-def456 -->
```

This allows the bot to identify which Discord events correspond to which Portal events, even if titles change.

### 5. Apply Changes

The bot uses the Discord API to:
- `POST /guilds/{id}/scheduled-events` - Create events
- `PATCH /guilds/{id}/scheduled-events/{id}` - Update events
- `DELETE /guilds/{id}/scheduled-events/{id}` - Delete events

**Services involved:**
- [Discord Bot](../internal-services/apps/discord-bot.md) (internal)
- [Discord](../external-services/discord.md) (external)

## Configuration

Environment variables controlling sync behavior:

| Variable | Description | Default |
|----------|-------------|---------|
| `CALENDAR_ICS_URL` | URL of the iCal feed | Required |
| `SYNC_INTERVAL_MS` | Time between syncs in milliseconds | 600000 (10 min) |
| `GUILD_ID` | Discord server ID | Required |

## Manual Sync

Trigger an immediate sync via API:

```bash
curl -X POST http://discord-bot:3000/calendar/sync
```

## Error Handling

| Error | Behavior |
|-------|----------|
| iCal fetch fails | Log error, retry next interval |
| Discord API rate limit | Back off and retry |
| Invalid event data | Skip event, log warning |
| Bot lacks permissions | Log error, notify admin |

## Related Documentation

- [Discord Bot](../internal-services/apps/discord-bot.md)
- [Member Portal](../internal-services/apps/member-portal.md)
- [Event Creation Flow](./event-creation.md)
- [Google Calendar](../external-services/google-calendar.md)
