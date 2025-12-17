# Discord Bot

Our custom Discord bot for the IEEE TAMU server.

- **Bot Repository:** [https://github.com/IEEE-TAMU/discord](https://github.com/IEEE-TAMU/discord)
- **Deployment Repository:** [https://github.com/IEEE-TAMU/cluster-infra/tree/master/apps/discord-bot](https://github.com/IEEE-TAMU/cluster-infra/tree/master/apps/discord-bot)

## Features

The bot performs three main functions:

1.  **GroupMe Bridge**: Bridges a specific Discord channel with a GroupMe chat.
2.  **Calendar Sync**: Syncs events from an external iCal feed to Discord Scheduled Events.
3.  **Role Management API**: Provides an HTTP API for external services (like the Member Portal) to manage user roles.

## GroupMe Bridge

The bot monitors a specific Discord channel (configured via `MONITOR_CHANNEL_ID`) and a GroupMe chat.
*   Messages sent in the Discord channel are reposted to GroupMe.
*   Messages sent in the GroupMe chat are reposted to the Discord channel.

This allows for seamless communication between officers who prefer different platforms.

## Calendar Sync

The bot periodically fetches events from a public iCal feed (e.g., Google Calendar) and mirrors them as **Guild Scheduled Events** in Discord.

*   **Sync Interval**: Configurable (default 10 minutes).
*   **Logic**:
    *   Creates new events found in the calendar.
    *   Updates existing events if details (time, location, description) change.
    *   Deletes events if they are removed from the calendar.
*   **Tracking**: Uses a hidden ID in the event description to track synchronization status.

## Role Management API

The bot exposes an HTTP API (default port 3000) that allows other internal services to manage Discord roles. This is primarily used by the **Member Portal** to automatically assign the "Member" role when a student pays their dues.

### Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Health check. Returns bot status. |
| `POST` | `/calendar/sync` | Manually triggers a calendar sync. |
| `GET` | `/roles` | Get roles for a user. Query param: `userId`. |
| `POST` | `/roles/manage` | Add a role. Body: `{ "userId": "...", "roleName": "..." }` |
| `DELETE` | `/roles/manage` | Remove a role. Body: `{ "userId": "...", "roleName": "..." }` |

## Deployment

The bot is deployed as a standard Kubernetes Deployment.

*   **Image**: `ghcr.io/ieee-tamu/discord-bot`
*   **Replicas**: 1
*   **Service**: ClusterIP service exposing port 3000 (for the API).

## Configuration

The bot is configured via environment variables:

*   `DISCORD_TOKEN`: Bot token.
*   `GUILD_ID`: The ID of the Discord server.
*   `MONITOR_CHANNEL_ID`: Channel ID for the GroupMe bridge.
*   `GROUPME_BOT_ID` / `GROUPME_TOKEN`: Credentials for GroupMe.
*   `CALENDAR_ICS_URL`: URL of the iCal feed to sync.
