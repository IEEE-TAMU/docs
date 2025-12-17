# Discord

[Discord](https://discord.com) is the primary communication platform for IEEE TAMU members and officers.

- **Server Invite:** [link.ieeetamu.org/discord](https://link.ieeetamu.org/discord)

## Usage

### Member Communication
Discord serves as the main hub for:
- Event announcements
- General discussion channels
- Technical help and project collaboration
- Officer-to-member communication

### Integration with IEEE TAMU Services

Discord is deeply integrated with our internal services:

- **[Discord Bot](../internal-services/apps/discord-bot.md)**: Custom bot for automation
  - Syncs events from the [Member Portal](../internal-services/apps/member-portal.md) calendar
  - Bridges messages to/from [GroupMe](./groupme.md)
  - Provides API for role management

- **Member Role Assignment**: When a member pays dues, the [Marketplace Handler](../internal-services/workers/marketplace-handler.md) updates the Portal, which then calls the Discord Bot API to assign the "Member" role.

## Bot Permissions

Our Discord Bot requires the following permissions:
- Manage Roles (for member role assignment)
- Manage Events (for calendar sync)
- Send Messages (for GroupMe bridge)
- Read Message History

## Administration

Server moderation and channel management is handled by officers. Bot administration is documented in the [Discord Bot](../internal-services/apps/discord-bot.md) page.
