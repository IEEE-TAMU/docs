# GroupMe

[GroupMe](https://groupme.com) is a secondary messaging platform used by some IEEE TAMU officers for quick communication.

## Usage

GroupMe is bridged to Discord via our [Discord Bot](../internal-services/apps/discord-bot.md), allowing officers who prefer GroupMe to stay connected with the main Discord server.

## Bridge Functionality

- Messages sent in the designated Discord channel are automatically reposted to the GroupMe chat
- Messages sent in GroupMe are automatically reposted to the Discord channel
- This enables seamless cross-platform communication

## Configuration

The GroupMe bridge requires:
- A GroupMe Bot token (created in GroupMe developer settings)
- The GroupMe group ID
- A designated Discord channel for bridging

See the [Discord Bot documentation](../internal-services/apps/discord-bot.md#groupme-bridge) for configuration details.
