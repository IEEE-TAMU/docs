---
sidebar_position: 0
---

# Internal Services Overview

This section documents the custom applications and serverless functions built and maintained by IEEE TAMU for members, officers, and the public.

## Applications

Self-hosted applications deployed on our [Kubernetes cluster](../infrastructure/kubernetes/cluster-setup.md):

- **[Member Portal](./apps/member-portal.md)**: Central hub for member management, event scheduling, and administration.
- **[Discord Bot](./apps/discord-bot.md)**: Custom bot for calendar sync, GroupMe bridge, and role management.
- **[Homepage](./apps/homepage.md)**: Main public website at ieeetamu.org.
- **[Shlink](./apps/shlink.md)**: Link shortener service at link.ieeetamu.org.
- **[Vaultwarden](./apps/vaultwarden.md)**: Password manager for officer accounts.

## Cloudflare Workers

Serverless functions for automation and integrations:

- **[Email Routing](./workers/email-routing.md)**: Routes incoming emails to officer personal inboxes.
- **[Marketplace Handler](./workers/marketplace-handler.md)**: Processes payment notifications from Flywire.

## Related Sections

- **[Infrastructure](../infrastructure/intro.md)**: The hardware and platforms these services run on.
- **[External Services](../external-services/intro.md)**: Third-party services we integrate with.
- **[Example Flows](../flows/intro.md)**: End-to-end documentation of how services interact.
